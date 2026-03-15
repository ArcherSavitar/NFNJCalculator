import React from 'react';
import { AppProvider } from './src/context/AppContext';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <AppProvider>
      <HomeScreen />
    </AppProvider>
  );
}
