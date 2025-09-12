"use client";
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en.json';
import id from '@/locales/id.json';
import zh from '@/locales/zh.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';
import vi from '@/locales/vi.json';

const dictionaries: Record<string, Record<string,string>> = { en, id, zh, ja, ko, vi } as any;

export function translate(lang: string, key: string): string {
  const dict = dictionaries[lang] || dictionaries['en'];
  return dict[key] || key;
}

export function useTranslation() {
  const { language } = useLanguage();
  function t(key: string) {
    return translate(language, key);
  }
  return { t, lang: language };
}
