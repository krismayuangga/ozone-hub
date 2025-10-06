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
  maxPeriod: number; // in months
}

type EarningType = 'usdt' | 'ozone';
type StakingStep = 'input' | 'summary';

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
    maxPeriod: 30,
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
    maxPeriod: 30,
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
    maxPeriod: 30,
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
    maxPeriod: 30,
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
    maxPeriod: 30,
  },
];

export default function PoolDetail() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [balance] = useState(12375.00);
  const [stakeAmount, setStakeAmount] = useState('');
  const [currentStep, setCurrentStep] = useState<StakingStep>('input');
  const [selectedEarningType, setSelectedEarningType] = useState<EarningType>('usdt');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

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
  
  // Calculate earnings based on selected type (same rate for both USDT and OZONE)
  const monthlyEarning = monthlyUSDTEarning;
  const dailyEarning = dailyUSDTEarning;
  const maxReturns = monthlyEarning * pool.maxPeriod;
  
  const quotaPercentage = (pool.currentStaked / pool.maxQuota) * 100;

  const handleMaxClick = () => {
    setStakeAmount(balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  };

  const handleStakeNow = () => {
    if (currentStep === 'input') {
      setCurrentStep('summary');
    } else {
      console.log('Final stake:', stakeAmount, 'in pool:', pool.name, 'earning type:', selectedEarningType);
      // Add final staking logic here
    }
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

        {/* Step 1: Input Amount & Earning Type Selection */}
        {currentStep === 'input' && (
          <div>
            {/* Combined Pool Details Panel */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-6">
              {/* Max Quota Section */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm font-medium">Max Quota</span>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/images/illustrations/ethereum-diamond.png"
                      alt="Token"
                      width={16}
                      height={16}
                      className="rounded-lg"
                    />
                    <span className="font-semibold text-gray-900 text-sm">
                      {pool.currentStaked.toLocaleString('en-US')} / {pool.maxQuota.toLocaleString('en-US')} Token
                    </span>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(quotaPercentage, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-3"></div>

              {/* Balance Section */}
              <div className="mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-medium">Balance</span>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/images/tokens/ozone-token.png"
                      alt="OZONE Token"
                      width={20}
                      height={20}
                      className="rounded-lg"
                    />
                    <span className="font-semibold text-gray-900 text-sm">
                      {balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Token
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-3"></div>

              {/* Amount to Stake Section */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm font-medium">Amount Stake</span>
                  <button
                    onClick={handleMaxClick}
                    className="text-orange-500 font-semibold text-xs hover:text-orange-600"
                  >
                    MAX
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/tokens/ozone-token.png"
                    alt="OZONE Token"
                    width={24}
                    height={24}
                    className="rounded-lg flex-shrink-0"
                  />
                  <input
                    type="text"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="flex-1 text-lg font-bold text-gray-900 bg-transparent outline-none min-w-0"
                    placeholder="0.00"
                  />
                  <span className="text-gray-600 text-sm font-medium flex-shrink-0">Token</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-3"></div>

              {/* Earning Type Selection */}
              <div className="mb-3">
                <span className="text-gray-600 text-sm font-medium mb-3 block">Choose Earning Type</span>
                <div className="grid grid-cols-2 gap-3">
                  {/* USDT Option */}
                  <button
                    onClick={() => setSelectedEarningType('usdt')}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      selectedEarningType === 'usdt'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Image
                        src="/images/tokens/usdt-token.png"
                        alt="USDT"
                        width={24}
                        height={24}
                        className="rounded-lg"
                      />
                      <span className="font-semibold text-gray-900">USDT</span>
                    </div>
                    <div className="text-xs text-gray-600">Standard Earning</div>
                  </button>

                  {/* OZONE Option */}
                  <button
                    onClick={() => setSelectedEarningType('ozone')}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      selectedEarningType === 'ozone'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Image
                        src="/images/tokens/ozone-token.png"
                        alt="OZONE"
                        width={24}
                        height={24}
                        className="rounded-lg"
                      />
                      <span className="font-semibold text-gray-900">OZONE</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-3"></div>

              {/* Preview Earnings */}
              <div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Monthly Yield</span>
                    <span className="font-semibold text-gray-900 text-sm">{monthlyYield}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Monthly {selectedEarningType.toUpperCase()} Earning</span>
                    <span className="font-semibold text-gray-900 text-sm">
                      {monthlyEarning.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {selectedEarningType.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Daily {selectedEarningType.toUpperCase()} Earning</span>
                    <span className="font-semibold text-gray-900 text-sm">
                      {dailyEarning.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {selectedEarningType.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleStakeNow}
              disabled={!stakeAmount || stakeAmountNum < pool.minTokens || (pool.maxTokens ? stakeAmountNum > pool.maxTokens : false)}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Next
            </button>

            {/* Requirements Info */}
            <div className="mt-4 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800">
                <strong>Requirements:</strong> Min {pool.minTokens.toLocaleString('en-US')} Token
                {pool.maxTokens && ` - Max ${pool.maxTokens.toLocaleString('en-US')} Token`}
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Staking Summary */}
        {currentStep === 'summary' && (
          <div>
            {/* Staking Summary Panel */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{pool.name}</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount Stake</span>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/images/tokens/ozone-token.png"
                      alt="OZONE Token"
                      width={20}
                      height={20}
                      className="rounded-lg"
                    />
                    <span className="font-semibold text-gray-900">{stakeAmount} Token</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Yield</span>
                  <span className="font-semibold text-gray-900">{monthlyYield}%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Max Period</span>
                  <span className="font-semibold text-gray-900">{pool.maxPeriod} months</span>
                </div>
                
                <div className="border-t border-gray-100 my-3"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Earning Type</span>
                  <span className="font-semibold text-teal-600 uppercase">{selectedEarningType}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Max Returns</span>
                  <span className="font-semibold text-teal-600">
                    {maxReturns.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {selectedEarningType.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly {selectedEarningType.toUpperCase()} Earning</span>
                  <span className="font-semibold text-gray-900">
                    {monthlyEarning.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {selectedEarningType.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Daily {selectedEarningType.toUpperCase()} Earning</span>
                  <span className="font-semibold text-gray-900">
                    {dailyEarning.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {selectedEarningType.toUpperCase()}
                  </span>
                </div>
              </div>
              
              {/* Terms & Conditions */}
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Terms & Conditions:</h4>
                <ul className="text-sm text-orange-800 space-y-1 mb-3">
                  <li>• Please note that Staking through OzoneHub Web3 will be locked for the predefined <strong>Max Period</strong> above</li>
                  <li>• Upon achieving <strong>Max Returns</strong>, the system will automatically unlock the Staking and burn the tokens immediately</li>
                </ul>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="agree-terms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <label htmlFor="agree-terms" className="text-sm text-gray-600">
                    I agree with T&C mentioned above
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Back Button */}
              <button
                onClick={() => setCurrentStep('input')}
                className="w-full bg-gray-100 text-gray-700 font-bold py-4 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
              >
                Back to Edit
              </button>
              
              {/* Final Stake Now Button */}
              <button
                onClick={handleStakeNow}
                disabled={!agreeToTerms}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Stake Now
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}