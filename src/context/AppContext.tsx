import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AppState, AppContextType } from '../types';
import { localStorage } from '../storage/localStorage';
import { quoteService } from '../services/quoteService';

// Action types
type Action =
  | { type: 'INCREMENT' }
  | { type: 'SET_VALUE'; payload: number }
  | { type: 'ADD_NEW_SEASON' }
  | { type: 'LOAD_STATE'; payload: AppState };

// Initial state
const initialState: AppState = {
  currentSeason: 1,
  currentValue: 0,
  seasons: [],
  lastQuoteDate: null,
};

// Reducer function
function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        currentValue: state.currentValue + 1,
      };
    case 'SET_VALUE':
      return {
        ...state,
        currentValue: action.payload,
      };
    case 'ADD_NEW_SEASON': {
      // Save current season to history
      const newSeason = localStorage.createSeason(state.currentSeason, state.currentValue);
      return {
        ...state,
        currentSeason: state.currentSeason + 1,
        currentValue: 0,
        seasons: [...state.seasons, newSeason],
      };
    }
    case 'LOAD_STATE':
      return action.payload;
    default:
      return state;
  }
}

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load state from local storage on mount
  useEffect(() => {
    const loadState = async () => {
      const savedState = await localStorage.loadState();
      dispatch({ type: 'LOAD_STATE', payload: savedState });
    };
    loadState();
  }, []);

  // Save state to local storage on change
  useEffect(() => {
    localStorage.saveState(state);
  }, [state]);

  // Actions
  const incrementValue = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const setValue = (value: number) => {
    dispatch({ type: 'SET_VALUE', payload: value });
  };

  const addNewSeason = () => {
    dispatch({ type: 'ADD_NEW_SEASON' });
  };

  const resetValue = () => {
    dispatch({ type: 'SET_VALUE', payload: 0 });
  };

  const contextValue: AppContextType = {
    state,
    incrementValue,
    setValue,
    addNewSeason,
    resetValue,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
