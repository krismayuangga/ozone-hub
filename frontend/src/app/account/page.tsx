'use client';

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';

export default function AccountSummaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="px-4 py-3 pb-24">
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
          <h2 className="text-lg font-semibold text-teal-600 mb-2">Staking Summary</h2>
          
          {/* Account Value */}
          <div className="mb-3">
            <span className="text-gray-600 text-sm">Account Value</span>
            <div className="text-3xl font-bold text-green-600 mt-0.5 leading-none">$ 12,375.00</div>
          </div>

          {/* Token Staked and USDT Earned */}
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <span className="text-gray-600 text-sm">Token Staked</span>
              <div className="flex items-center space-x-2 mt-0.5 leading-none">
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
              <div className="flex items-center space-x-2 mt-0.5 leading-none">
                <Image 
                  src="/images/tokens/usdt-token.png" 
                  alt="USDT Token" 
                  width={24} 
                  height={24}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-gray-900">206.25</span>
              </div>
            </div>
          </div>

          {/* Max Profit */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm flex items-center space-x-2">
                <span className="text-green-600 text-lg">$</span>
                <span>Max Profit</span>
              </span>
              <div className="flex items-center space-x-2">
                <Image 
                  src="/images/tokens/usdt-token.png" 
                  alt="USDT Token" 
                  width={24} 
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-600">206.25 / 37,125 USDT</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '0.55%' }}></div>
            </div>
          </div>

          {/* Earnings (stacked rows, aligned values) */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between leading-tight">
              <span className="text-gray-600 text-sm">Monthly USDT Earning</span>
              <span className="font-medium text-gray-900 text-sm">1,237.50 USDT</span>
            </div>
            <div className="flex items-center justify-between leading-tight">
              <span className="text-gray-600 text-sm">Daily USDT Earning</span>
              <span className="font-medium text-gray-900 text-sm">41.25 USDT</span>
            </div>
          </div>

          {/* Staking History */}
          <div className="mt-4 pt-3 border-t border-gray-200">
            <h3 className="text-md font-medium text-teal-600 mb-2">Staking History</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-teal-600 text-xs">Start Date</span>
                <div className="text-gray-900 text-sm font-medium mt-1">02 Sept 2025</div>
              </div>
              <div>
                <span className="text-gray-600 text-xs">Estimated Last Date</span>
                <div className="text-gray-900 text-sm font-medium mt-1">19 Feb 2028</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor Summary */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold text-teal-600 mb-3">Sponsor Summary</h2>
          
          {/* Level 1 & 2 Total Staking */}
          <div className="mb-3">
            <div className="text-teal-600 text-sm font-medium mb-2">Level 1 Total Staking</div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Ozone Token" 
                  width={24} 
                  height={24}
                />
                <span className="text-xl font-bold text-gray-900">1,200,000.00</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Yield</div>
                <div className="font-semibold text-gray-900">0.80%</div>
              </div>
            </div>
            
            <div className="text-teal-600 text-sm font-medium mb-2">Level 2 Total Staking</div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Ozone Token" 
                  width={24} 
                  height={24}
                />
                <span className="text-xl font-bold text-gray-900">0.00</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Yield</div>
                <div className="font-semibold text-gray-900">0.50%</div>
              </div>
            </div>
          </div>

          {/* Sponsor Earnings */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Monthly USDT Earnings</span>
              <span className="font-medium text-gray-900 text-sm">9,600 USDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Daily USDT Earnings</span>
              <span className="font-medium text-gray-900 text-sm">320 USDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-teal-600 text-sm font-medium">Total USDT Earned</span>
              <span className="font-medium text-teal-600 text-sm">586 USDT</span>
            </div>
          </div>
        </div>

        {/* Community Summary */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold text-teal-600 mb-3">Community Summary</h2>
          
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Community Tokens Staked</span>
              <span className="font-medium text-gray-900 text-sm">1,000,000 Tokens</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Monthly USDT Earnings</span>
              <span className="font-medium text-gray-900 text-sm">7,000 USDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Daily USDT Earnings</span>
              <span className="font-medium text-gray-900 text-sm">233 USDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-teal-600 text-sm font-medium">Total USDT Earned</span>
              <span className="font-medium text-teal-600 text-sm">233 USDT</span>
            </div>
          </div>
        </div>



        {/* Claim Sections */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-teal-600 mb-3">Claim Center</h2>
          
          <div className="grid grid-cols-1 gap-3">
            {/* Staking USDT Earned */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-gray-600 text-sm font-medium">Staking USDT</span>
                  <div className="flex items-center space-x-1 mt-1">
                    <Image 
                      src="/images/tokens/usdt-token.png" 
                      alt="USDT Token" 
                      width={20} 
                      height={20}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-gray-900">206.25</span>
                  </div>
                </div>
                <button className="bg-gray-400 text-white py-2 px-4 rounded-lg text-sm font-medium">
                  Claim
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                Min. 618.75 USDT to Claim
              </p>
            </div>

            {/* Sponsor Bonus USDT Earned */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-gray-600 text-sm font-medium">Sponsor Bonus USDT</span>
                  <div className="flex items-center space-x-1 mt-1">
                    <Image 
                      src="/images/tokens/usdt-token.png" 
                      alt="USDT Token" 
                      width={20} 
                      height={20}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-gray-900">586.00</span>
                  </div>
                </div>
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                  Claim
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                Min. 500.00 USDT to Claim
              </p>
            </div>

            {/* Community Bonus USDT Earned */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-gray-600 text-sm font-medium">Community Bonus USDT</span>
                  <div className="flex items-center space-x-1 mt-1">
                    <Image 
                      src="/images/tokens/usdt-token.png" 
                      alt="USDT Token" 
                      width={20} 
                      height={20}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-gray-900">233.00</span>
                  </div>
                </div>
                <button className="bg-gray-400 text-white py-2 px-4 rounded-lg text-sm font-medium">
                  Claim
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                Min. 500.00 USDT to Claim
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}