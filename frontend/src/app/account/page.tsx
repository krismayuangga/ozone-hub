'use client';

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';

export default function AccountSummaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="px-4 py-3">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-900 mb-3">Account Summary</h1>
          
          {/* User Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-900 font-medium">0x9a30....6044</span>
                  <Image 
                    src="/images/icons/copy.svg" 
                    alt="Copy" 
                    width={16} 
                    height={16}
                    className="cursor-pointer"
                  />
                </div>
                <span className="text-gray-500 text-sm">BNB Network</span>
              </div>
            </div>
            <span className="text-gray-900 font-medium">ID #9900231</span>
          </div>
        </div>

        {/* Staking Summary */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold text-teal-600 mb-3">Staking Summary</h2>
          
          {/* Account Value */}
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Account Value</span>
            <div className="text-3xl font-bold text-green-600 mt-1">$ 12,375.00</div>
          </div>

          {/* Token Staked and USDT Earned */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-gray-600 text-sm">Token Staked</span>
              <div className="flex items-center space-x-2 mt-1">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Ozone Token" 
                  width={24} 
                  height={24}
                />
                <span className="text-xl font-bold text-gray-900">12,375.00</span>
              </div>
            </div>
            <div>
              <span className="text-gray-600 text-sm">USDT Earned</span>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-xl font-bold text-gray-900">206.25</span>
              </div>
            </div>
          </div>

          {/* Max Profit */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm flex items-center space-x-2">
                <span className="text-green-600 text-lg">$</span>
                <span>Max Profit</span>
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-sm text-gray-600">206.25 / 37,125 USDT</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '0.55%' }}></div>
            </div>
          </div>

          {/* Earnings */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly USDT Earning</span>
              <span className="font-medium text-gray-900">1,237.50 USDT</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Daily USDT Earning</span>
              <span className="font-medium text-gray-900">41.25 USDT</span>
            </div>
          </div>
        </div>

        {/* Staking History */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold text-teal-600 mb-3">Staking History</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-teal-600 text-sm">Start Date</span>
              <div className="text-gray-900 font-medium mt-1">02 Sept 2025</div>
            </div>
            <div>
              <span className="text-gray-600 text-sm">Estimated Last Date</span>
              <div className="text-gray-900 font-medium mt-1">19 Feb 2028</div>
            </div>
          </div>

          {/* USDT Earned Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-center mb-3">
              <span className="text-gray-600 text-lg">USDT Earned</span>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="text-3xl font-bold text-gray-900">206.25</span>
              </div>
            </div>
            
            <button className="w-full bg-gray-400 text-white py-2.5 px-6 rounded-lg font-medium">
              Claim
            </button>
            
            <p className="text-center text-gray-500 text-xs mt-2">
              Min. 618.75 USDT to Claim
            </p>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}