'use client';

import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  showMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showMenu = true }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">Oz</span>
        </div>
        <span className="text-xl font-bold text-gray-900">OzoneX</span>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-3">
        {/* Language Selector */}
        <div className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          EN
        </div>
        
        {/* Menu Button */}
        {showMenu && (
          <button className="p-2">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        )}
      </div>
    </header>
  );
};