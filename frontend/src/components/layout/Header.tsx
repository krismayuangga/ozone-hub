'use client';

import React from 'react';

interface HeaderProps {
  showMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showMenu = true }) => {
  return (
    <header className="bg-white border-b border-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">Oz</span>
          </div>
          <span className="text-xl font-bold text-gray-900">OzoneX</span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
            EN
          </div>
          
          {/* Menu Button */}
          {showMenu && (
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
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
    </header>
  );
};