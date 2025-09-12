"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

export type LanguageCode = 'en' | 'zh' | 'ja' | 'ko' | 'vi' | 'id';

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lng: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('ozx_lang') : null;
    if (stored && ['en','zh','ja','ko','vi','id'].includes(stored)) {
      setLanguageState(stored as LanguageCode);
    }
  }, []);

  const setLanguage = (lng: LanguageCode) => {
    setLanguageState(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ozx_lang', lng);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
