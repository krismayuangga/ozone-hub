'use client';

import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';

export default function Assets() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="px-6 py-6 pb-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Assets</h1>
          <p className="text-gray-600">Your asset portfolio will be displayed here.</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}