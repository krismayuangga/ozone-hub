'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import { useRouter } from 'next/navigation';
import { Menu } from './Menu';

interface HeaderProps {
  showMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showMenu = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslation();
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-white border-b border-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">Oz</span>
          </div>
          <span className="text-xl font-bold text-gray-900">{t('app.name')}</span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <button
            onClick={() => router.push('/language')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-md active:scale-[0.96] transition"
            aria-label="Change Language"
          >
            {language.toUpperCase()}
          </button>
          
          {/* Menu Button */}
          {showMenu && (
            <button 
              onClick={handleMenuToggle}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
                <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
                <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
              </div>
            </button>
          )}
        </div>
      </div>
      {/* Elegant gradient border */}
      <div className="h-px bg-gradient-to-r from-blue-200 via-cyan-300 to-teal-200"></div>

      {/* Menu Component */}
      <Menu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </header>
  );
};