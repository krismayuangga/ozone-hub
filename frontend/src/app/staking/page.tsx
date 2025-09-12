'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import Image from 'next/image';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function Staking() {
  const [ozoneBalance] = useState(12375.00);
  const [tokenStaked] = useState(12375.00);
  const [usdtEarned] = useState(206.25);

  const stakingPools = [
    {
      id: 'limox-a',
      name: 'LimoX - Pool A',
      minTokens: 100,
      maxTokens: 1000,
      apy: 6,
      background: '/images/illustrations/limo-background.jpg'
    },
    {
      id: 'limox-b',
      name: 'LimoX - Pool B',
      minTokens: 1001,
      maxTokens: 3000,
      apy: 7,
      background: '/images/illustrations/limo-background.jpg'
    },
    {
      id: 'limox-c',
      name: 'LimoX - Pool C',
      minTokens: 3001,
      maxTokens: 5000,
      apy: 8,
      background: '/images/illustrations/limo-background.jpg'
    },
    {
      id: 'saprox-a',
      name: 'SaproX - Pool A',
      minTokens: 5001,
      maxTokens: 10000,
      apy: 9,
      background: '/images/illustrations/sapro-background.jpg'
    },
    {
      id: 'saprox-b',
      name: 'SaproX - Pool B',
      minTokens: 10001,
      maxTokens: null,
      apy: 10,
      background: '/images/illustrations/sapro-background.jpg'
    }
  ];

  const handleStakeNow = (poolId: string) => {
    console.log('Stake now for pool:', poolId);
  };

  const handleBuySwap = () => {
    console.log('Navigate to swap page');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="px-6 py-6 pb-28">
        {/* OZONE Staking Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">OZONE Staking</h1>
            <div className="flex items-center space-x-2 text-gray-600">
              <ClockIcon className="w-5 h-5" />
              <span className="text-sm">History</span>
            </div>
          </div>

          {/* Stake Now Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-teal-600 mb-2">Stake Now</h3>
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">
                    <span>Min Yield</span>
                    <span className="ml-8">6% per mo.</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span>Max Yield</span>
                    <span className="ml-6">10% per mo.</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    style={{ 
                      marginTop: i % 2 === 0 ? '0px' : '12px'
                    }}
                  >
                    <Image
                      src="/images/illustrations/ethereum-diamond.png"
                      alt="Diamond"
                      width={20}
                      height={20}
                      className="animate-pulse"
                      style={{ 
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '2s',
                        filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ozone Token Balance */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-teal-600 mb-2">Ozone Token Balance</h3>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/tokens/ozone-token.png"
                    alt="OZONE Token"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <span className="text-2xl font-bold text-gray-900">
                    {ozoneBalance === 0 ? '0.00' : ozoneBalance.toLocaleString('en-US')}
                  </span>
                </div>
              </div>
              <button
                onClick={handleBuySwap}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Buy/Swap
              </button>
            </div>
          </div>

          {/* Staking Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
            <h3 className="text-lg font-bold text-teal-600 mb-4">Staking Summary</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 font-medium mb-2">Token Staked</p>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/tokens/ozone-token.png"
                    alt="OZONE Token"
                    width={24}
                    height={24}
                    className="rounded-lg"
                  />
                  <span className="text-xl font-bold text-gray-900">
                    {tokenStaked === 0 ? '0.00' : tokenStaked.toLocaleString('en-US')}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-2">USDT Earned</p>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/tokens/usdt-token.png"
                    alt="USDT Token"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-xl font-bold text-gray-900">
                    {usdtEarned === 0 ? '0.00' : usdtEarned.toLocaleString('en-US')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Staking History */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-lg font-bold text-teal-600 mb-4">Staking History</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Start Date</span>
                <span className="font-semibold text-gray-900">
                  {tokenStaked === 0 ? '-' : '02 Sept 2025'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Last Date</span>
                <span className="font-semibold text-gray-900">
                  {tokenStaked === 0 ? '-' : '19 Feb 2028'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Staking Pool Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Staking Pool</h2>
          
          <div className="space-y-4">
            {stakingPools.map((pool) => (
              <div
                key={pool.id}
                className="relative overflow-hidden rounded-2xl shadow-lg"
                style={{ height: '140px' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={pool.background}
                    alt={pool.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  {/* Hexagonal pattern overlay */}
                  <div className="absolute inset-0 opacity-20" 
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-8.66v17.32L30 30zm15-8.66L30 12.68 15 21.34 30 30l15-8.66z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                         backgroundSize: '60px 60px'
                       }}>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex items-center justify-between h-full">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{pool.name}</h3>
                    <div className="space-y-1 text-sm">
                      <p>Min {pool.minTokens.toLocaleString()} Tokens</p>
                      <p>
                        Max {pool.maxTokens ? `${pool.maxTokens.toLocaleString()} Tokens` : 'Unlimited'}
                      </p>
                    </div>
                    <p className="text-lg font-bold mt-2">
                      APY {pool.apy}% per month
                    </p>
                  </div>

                  {/* Stake Now Button */}
                  <button
                    onClick={() => handleStakeNow(pool.id)}
                    className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                      boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    STAKE<br/>NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}