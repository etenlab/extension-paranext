import React, { createContext } from 'react';

import {  loadPersistedStore } from '@/reducers/index';

// export const AppContext = createContext<ContextType | undefined>(undefined);
export const AppContext = createContext<{ someKey: string } | undefined>(undefined);

const initialState = loadPersistedStore();

interface AppProviderProps {
  children?: React.ReactNode;
}

export function AppContextProvider({ children }: AppProviderProps) {
  
  return <AppContext.Provider value={{someKey:'test from context'}}>{children}</AppContext.Provider>;
  
}
