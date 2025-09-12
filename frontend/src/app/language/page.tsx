"use client";

import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'id', label: 'Bahasa Indonesia' },
];

export default function LanguagePage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [selected, setSelected] = useState<typeof language>(language);
  const router = useRouter();

  useEffect(() => {
    setSelected(language);
  }, [language]);

  const handleConfirm = () => {
    setLanguage(selected);
    router.back();
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <Header showMenu={false} />
      <div className="max-w-md mx-auto">
        <section className="px-6 pt-8 pb-10">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">{t('language.title')}</h1>
          <p className="text-sm text-gray-700 mb-8">{t('language.subtitle')}</p>

          <div className="space-y-6 mb-10">
            {LANGS.map(l => {
              const active = selected === l.code;
              return (
                <label
                  key={l.code}
                  className="flex items-center space-x-3 cursor-pointer select-none"
                >
                  <span className="relative w-6 h-6 flex items-center justify-center">
                    <span className={`w-6 h-6 rounded-full border-2 ${active ? 'border-black' : 'border-gray-600'}`}></span>
                    {active && <span className="absolute w-3.5 h-3.5 rounded-full bg-black"></span>}
                  </span>
                  <input
                    type="radio"
                    name="language"
                    value={l.code}
                    checked={active}
                    onChange={() => setSelected(l.code as typeof language)}
                    className="hidden"
                  />
                  <span className="text-base font-medium text-gray-900">{l.label}</span>
                </label>
              );
            })}
          </div>

          <button
            onClick={handleConfirm}
            className="w-full h-12 rounded-md bg-green-600 hover:bg-green-700 active:scale-[0.98] transition text-white font-semibold tracking-wide"
          >
            {t('language.confirm')}
          </button>
        </section>
      </div>
      <BottomNavigation />
    </div>
  );
}
