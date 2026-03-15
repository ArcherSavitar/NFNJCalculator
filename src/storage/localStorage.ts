import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, Season } from '../types';

const STORAGE_KEY = '@NFNJCalculator:appState';

const defaultState: AppState = {
  currentSeason: 1,
  currentValue: 0,
  seasons: [],
  lastQuoteDate: null,
};

export const localStorage = {
  // Save app state to local storage
  async saveState(state: AppState): Promise<void> {
    try {
      const jsonValue = JSON.stringify(state);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.error('Error saving state:', e);
    }
  },

  // Load app state from local storage
  async loadState(): Promise<AppState> {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        return JSON.parse(jsonValue) as AppState;
      }
      return defaultState;
    } catch (e) {
      console.error('Error loading state:', e);
      return defaultState;
    }
  },

  // Clear app state
  async clearState(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing state:', e);
    }
  },

  // Create a new season from current data
  createSeason(currentSeason: number, currentValue: number): Season {
    return {
      id: currentSeason,
      value: currentValue,
      createdAt: new Date().toISOString(),
      endedAt: new Date().toISOString(),
    };
  },
};
