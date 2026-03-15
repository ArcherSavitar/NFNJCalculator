// TypeScript type definitions for the app

export interface Season {
  id: number;
  value: number;
  createdAt: string;
  endedAt: string | null;
}

export interface AppState {
  currentSeason: number;
  currentValue: number;
  seasons: Season[];
  lastQuoteDate: string | null;
}

export interface Quote {
  id: number;
  content: string;
  author: string;
}

export interface AppContextType {
  state: AppState;
  incrementValue: () => void;
  setValue: (value: number) => void;
  addNewSeason: () => void;
  resetValue: () => void;
}
