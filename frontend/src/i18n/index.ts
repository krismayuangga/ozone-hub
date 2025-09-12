"use client";
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en.json';
import id from '@/locales/id.json';
import zh from '@/locales/zh.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';
import vi from '@/locales/vi.json';

// Supported language codes
export type LangCode = 'en' | 'id' | 'zh' | 'ja' | 'ko' | 'vi';

// Shape of a dictionary (flat key -> value)
export type Dictionary = Record<string, string>;

// Strictly typed dictionaries record
const dictionaries: Record<LangCode, Dictionary> = { en, id, zh, ja, ko, vi };

export function translate(lang: LangCode | string, key: string): string {
  const dict = (dictionaries as Record<string, Dictionary>)[lang] || dictionaries.en;
  return dict[key] || key;
}

export function useTranslation() {
  const { language } = useLanguage();
  function t(key: string): string {
    return translate(language as LangCode, key);
  }
  return { t, lang: language };
}
