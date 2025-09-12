'use client';

import React from 'react';
import { BottomNavigation } from './BottomNavigation';

interface MobileLayoutProps {
  children: React.ReactNode;
  showBottomNav?: boolean;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  showBottomNav = true,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main 
        className={`max-w-md mx-auto bg-white min-h-screen ${
          showBottomNav ? 'pb-20' : ''
        }`}
      >
        {children}
      </main>

      {/* Bottom Navigation */}
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};