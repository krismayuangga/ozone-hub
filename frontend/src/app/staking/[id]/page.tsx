'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface PoolData {
  id: string;
  name: string;
  minTokens: number;
  maxTokens: number | null;
  apy: number;
  background: string;
  maxQuota: number;
  currentStaked: number;
}

const poolsData: PoolData[] = [
  {
    id: 'limox-a',
    name: 'LimoX - Pool A',
    minTokens: 100,
    maxTokens: 1000,
    apy: 6,
    background: '/images/illustrations/limo-background.jpg',
    maxQuota: 10000000,
    currentStaked: 12000,
  },
  {
    id: 'limox-b',
    name: 'LimoX - Pool B',
    minTokens: 1001,
    maxTokens: 3000,
    apy: 7,
    background: '/images/illustrations/limo-background.jpg',
    maxQuota: 10000000,
    currentStaked: 45000,
  },
  {
    id: 'limox-c',
    name: 'LimoX - Pool C',
    minTokens: 3001,
    maxTokens: 5000,
    apy: 8,
    background: '/images/illustrations/limo-background.jpg',
    maxQuota: 10000000,
    currentStaked: 89000,
  },
  {
    id: 'saprox-a',
    name: 'SaproX - Pool A',
    minTokens: 5001,
    maxTokens: 10000,
    apy: 9,
    background: '/images/illustrations/sapro-background.jpg',
    maxQuota: 10000000,
    currentStaked: 125000,
  },
  {
    id: 'saprox-b',
    name: 'SaproX - Pool B',
    minTokens: 10001,
    maxTokens: null,
    apy: 10,
    background: '/images/illustrations/sapro-background.jpg',
    maxQuota: 10000000,
    currentStaked: 208000,
  },
];

export default function PoolDetail() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [balance] = useState(12375.00);
  const [stakeAmount, setStakeAmount] = useState('12375.00');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const poolId = params?.id as string;
  const pool = poolsData.find(p => p.id === poolId);

  if (!pool) {
    return <div>Pool not found</div>;
  }

  const stakeAmountNum = parseFloat(stakeAmount.replace(/,/g, '')) || 0;
  const monthlyYield = pool.apy;
  const monthlyUSDTEarning = (stakeAmountNum * monthlyYield) / 100;
  const dailyUSDTEarning = monthlyUSDTEarning / 30;
  const quotaPercentage = (pool.currentStaked / pool.maxQuota) * 100;

  const handleMaxClick = () => {
    setStakeAmount(balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  };

  const handleStakeNow = () => {
    console.log('Stake now:', stakeAmount, 'in pool:', pool.name);
    // Add staking logic here
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="px-6 py-6 pb-28">
        {/* Back Button and Title */}
        <div className="flex items-center mb-6">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">{pool.name}</h1>
        </div>

        {/* Max Quota Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 font-medium">Max Quota</span>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/illustrations/ethereum-diamond.png"
                alt="Token"
                width={20}
                height={20}
                className="rounded-lg"
              />
              <span className="font-bold text-gray-900">
                {pool.currentStaked.toLocaleString('en-US')} / {pool.maxQuota.toLocaleString('en-US')} Token
              </span>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(quotaPercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Balance */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">Balance</span>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/tokens/ozone-token.png"
                alt="OZONE Token"
                width={24}
                height={24}
                className="rounded-lg"
              />
              <span className="font-bold text-gray-900">
                {balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Token
              </span>
            </div>
          </div>
        </div>

        {/* Amount to Stake */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 font-medium">Amount Stake</span>
            <button
              onClick={handleMaxClick}
              className="text-orange-500 font-semibold text-sm hover:text-orange-600"
            >
              MAX
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <Image
              src="/images/tokens/ozone-token.png"
              alt="OZONE Token"
              width={32}
              height={32}
              className="rounded-lg flex-shrink-0"
            />
            <input
              type="text"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              className="flex-1 text-xl font-bold text-gray-900 bg-transparent outline-none min-w-0"
              placeholder="0.00"
            />
            <span className="text-gray-700 font-medium flex-shrink-0">Token</span>
          </div>
        </div>

        {/* Yield Information */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly Yield</span>
              <span className="font-bold text-gray-900">{monthlyYield}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly USDT Earning</span>
              <span className="font-bold text-gray-900">
                {monthlyUSDTEarning.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Daily USDT Earning</span>
              <span className="font-bold text-gray-900">
                {dailyUSDTEarning.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT
              </span>
            </div>
          </div>
        </div>

        {/* Stake Now Button */}
        <button
          onClick={handleStakeNow}
          disabled={stakeAmountNum < pool.minTokens || (pool.maxTokens ? stakeAmountNum > pool.maxTokens : false)}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          Stake Now
        </button>

        {/* Requirements Info */}
        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-800">
            <strong>Requirements:</strong> Min {pool.minTokens.toLocaleString('en-US')} Token
            {pool.maxTokens && ` - Max ${pool.maxTokens.toLocaleString('en-US')} Token`}
          </p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}