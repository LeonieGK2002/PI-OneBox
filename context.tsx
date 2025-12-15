import { createContext, useContext } from 'react';
import { Language, User, Translation, Page } from './types';

export interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  t: Translation;
  page: Page;
  navigate: (page: Page) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
