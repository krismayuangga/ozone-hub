'use client';

import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import Image from 'next/image';

export default function CommunityClassPage() {
  const membershipLevels = [
    {
      id: 'bronze',
      name: 'Bronze Member',
      minStaked: 'Min 50,000 Tokens Staked',
      monthlyYield: '0.10%',
      image: '/images/logos/bronze.png'
    },
    {
      id: 'silver',
      name: 'Silver Member',
      minStaked: 'Min 200,000 Tokens Staked',
      monthlyYield: '0.30%',
      image: '/images/logos/silver.png'
    },
    {
      id: 'gold',
      name: 'Gold Member',
      minStaked: 'Min 500,000 Tokens Staked',
      monthlyYield: '0.50%',
      image: '/images/logos/gold.png'
    },
    {
      id: 'diamond',
      name: 'Diamond Member',
      minStaked: 'Min 1,000,000 Tokens Staked',
      monthlyYield: '0.70%',
      image: '/images/logos/diamond.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-4 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-900">Community Class</h1>
          <div className="text-right">
            <div className="text-sm text-gray-600">Monthly</div>
            <div className="text-sm text-gray-600">Yield</div>
          </div>
        </div>

        {/* Membership Levels */}
        <div className="space-y-4">
          {membershipLevels.map((level) => (
            <div key={level.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 mr-4">
                    <Image
                      src={level.image}
                      alt={level.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{level.name}</div>
                    <div className="text-gray-600 text-sm">{level.minStaked}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-gray-900">{level.monthlyYield}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}