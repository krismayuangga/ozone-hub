'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import Image from 'next/image';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function Swap() {
  const [purchaseAmount, setPurchaseAmount] = useState('12,500.00');
  const [totalPurchase] = useState(10000.00);
  const [tax] = useState(100.00);
  const [amountToReceive] = useState(12375.00);
  const [balance] = useState(10000.00);


  const handleMaxClick = () => {
    setPurchaseAmount('12,500.00');
  };

  const handleSwap = () => {
    // Handle swap/purchase logic
    console.log('Swap initiated');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="px-6 py-6 pb-28">
        {/* Left Side - Purchase OZONE Token */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">Purchase OZONE Token</h1>
            <div className="flex items-center space-x-2 text-gray-600">
              <ClockIcon className="w-5 h-5" />
              <span className="text-sm">History</span>
            </div>
          </div>

          {/* Presale Mining Scene Circle */}
          <div className="flex justify-center mb-6">
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-teal-500">
              {/* Mining Scene Background */}
              <Image
                src="/images/illustrations/mining-scene.png"
                alt="Mining Scene"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
              
              {/* Animated Ethereum Diamonds */}
              <div className="absolute top-16 right-16">
                <Image
                  src="/images/illustrations/ethereum-diamond.png"
                  alt="Ethereum Diamond"
                  width={24}
                  height={24}
                  className="animate-pulse opacity-90"
                  style={{ 
                    animationDuration: '2s',
                    filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.8))'
                  }}
                />
              </div>
              
              <div className="absolute bottom-20 right-20">
                <Image
                  src="/images/illustrations/ethereum-diamond.png"
                  alt="Ethereum Diamond"
                  width={20}
                  height={20}
                  className="animate-pulse opacity-80"
                  style={{ 
                    animationDelay: '0.7s',
                    animationDuration: '2.3s',
                    filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.7))'
                  }}
                />
              </div>
              
              <div className="absolute top-24 right-28">
                <Image
                  src="/images/illustrations/ethereum-diamond.png"
                  alt="Ethereum Diamond"
                  width={18}
                  height={18}
                  className="animate-bounce opacity-75"
                  style={{ 
                    animationDelay: '1.2s',
                    animationDuration: '3s',
                    filter: 'drop-shadow(0 0 3px rgba(34, 197, 94, 0.6))'
                  }}
                />
              </div>
              
              <div className="absolute bottom-24 right-12">
                <Image
                  src="/images/illustrations/ethereum-diamond.png"
                  alt="Ethereum Diamond"
                  width={16}
                  height={16}
                  className="animate-ping opacity-70"
                  style={{ 
                    animationDelay: '1.8s',
                    animationDuration: '2.5s',
                    filter: 'drop-shadow(0 0 2px rgba(34, 197, 94, 0.5))'
                  }}
                />
              </div>
              
              {/* Presale Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-center z-10">
                  <p className="text-lg font-bold mb-2 text-white drop-shadow-lg">PRESALE</p>
                  <p className="text-base font-semibold mb-2 text-white drop-shadow-lg">STAGE 1</p>
                  <p className="text-3xl font-bold mb-1 text-white drop-shadow-lg">MAX</p>
                  <p className="text-lg font-semibold text-white drop-shadow-lg">2,000,000 Tokens</p>
                </div>
              </div>
            </div>
          </div>

          {/* Token Supply Info */}
          <div className="text-center mb-8">
            <p className="text-teal-600 font-semibold mb-2">OZONE Token Total Supply</p>
            <p className="text-3xl font-bold text-gray-900 mb-1">1,000,000,000</p>
            <p className="text-gray-600">OZONE Token Price $0.80</p>
          </div>
        </div>

        {/* Right Side - Purchase Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">

          {/* Balance */}
          <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
            <span className="text-gray-700 font-medium">Balance</span>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/tokens/usdt-token.png"
                alt="USDT"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-bold text-gray-900">{balance.toLocaleString('en-US')} USDT</span>
            </div>
          </div>

          {/* Purchase Amount */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">Purchase Amount</span>
              <button
                onClick={handleMaxClick}
                className="text-orange-500 font-semibold text-sm hover:text-orange-600"
              >
                MAX
              </button>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <Image
                src="/images/tokens/ozone-token.png"
                alt="OZONE Token"
                width={32}
                height={32}
                className="rounded-lg flex-shrink-0"
              />
              <input
                type="text"
                value={purchaseAmount}
                onChange={(e) => setPurchaseAmount(e.target.value)}
                className="flex-1 text-xl font-bold text-gray-900 bg-transparent outline-none min-w-0"
                placeholder="0.00"
              />
              <span className="text-gray-700 font-medium flex-shrink-0">Token</span>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 flex-shrink-0">Total Purchase</span>
              <span className="font-semibold text-gray-900 text-right">{totalPurchase.toLocaleString('en-US')} USDT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 flex-shrink-0">Tax (1%)</span>
              <span className="font-semibold text-gray-900 text-right">{tax.toLocaleString('en-US')} USDT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 flex-shrink-0">Amount to Receive</span>
              <span className="font-semibold text-gray-900 text-right">{amountToReceive.toLocaleString('en-US')} OZONE</span>
            </div>
          </div>

          {/* Purchase/Swap Button */}
          <button
            onClick={handleSwap}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Purchase/Swap
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}