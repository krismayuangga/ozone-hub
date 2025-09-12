'use client';

import { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

export default function Staking() {
  const [selectedPool, setSelectedPool] = useState<string | null>(null);
  const [stakeAmount, setStakeAmount] = useState('');

  const stakingPools = [
    {
      id: 'basic',
      name: 'OZONE Basic Pool',
      apy: '6.5%',
      tvl: '$2,500,000',
      minStake: '100',
      maxStake: '10,000',
      duration: '30 days',
      risk: 'Low',
      description: 'Perfect for beginners with flexible staking terms',
      features: ['Daily rewards', 'Early withdrawal (1% fee)', 'Auto-compound option'],
    },
    {
      id: 'premium',
      name: 'OZONE Premium Pool',
      apy: '8.2%',
      tvl: '$1,800,000',
      minStake: '500',
      maxStake: '50,000',
      duration: '90 days',
      risk: 'Medium',
      description: 'Higher rewards for committed stakers',
      features: ['Weekly bonus rewards', '10% unstaking fee', 'Priority support'],
    },
    {
      id: 'elite',
      name: 'OZONE Elite Pool',
      apy: '10.5%',
      tvl: '$950,000',
      minStake: '1,000',
      maxStake: '100,000',
      duration: '180 days',
      risk: 'High',
      description: 'Maximum rewards for long-term investors',
      features: ['Monthly bonus NFTs', '15% unstaking fee', 'VIP community access'],
    },
  ];

  const myStakes = [
    {
      pool: 'OZONE Basic Pool',
      amount: '500 OZONE',
      value: '$400.00',
      rewards: '12.5 OZONE',
      apy: '6.5%',
      daysLeft: 15,
      status: 'Active',
    },
    {
      pool: 'OZONE Premium Pool',
      amount: '1,000 OZONE',
      value: '$800.00',
      rewards: '45.2 OZONE',
      apy: '8.2%',
      daysLeft: 45,
      status: 'Active',
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'High': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <MobileLayout>
      <div className="px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Staking Pools</h1>
          <p className="text-gray-600">Stake your OZONE tokens and earn rewards</p>
        </div>

        {/* My Stakes */}
        {myStakes.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">My Stakes</h2>
            <div className="space-y-3">
              {myStakes.map((stake, index) => (
                <Card key={index} className="bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{stake.pool}</h3>
                      <p className="text-2xl font-bold text-primary-600">{stake.amount}</p>
                      <p className="text-sm text-gray-600">{stake.value}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        {stake.status}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{stake.daysLeft} days left</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Rewards Earned</p>
                      <p className="font-semibold text-gray-900">{stake.rewards}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Unstake</Button>
                      <Button size="sm" variant="primary">Claim</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Available Pools */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Available Pools</h2>
          <div className="space-y-4">
            {stakingPools.map((pool) => (
              <Card key={pool.id} className="hover:shadow-card-hover transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{pool.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(pool.risk)}`}>
                          {pool.risk} Risk
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{pool.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary-600">{pool.apy}</div>
                      <div className="text-xs text-gray-500">APY</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Pool Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <CurrencyDollarIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-500">TVL</p>
                      <p className="text-sm font-semibold">{pool.tvl}</p>
                    </div>
                    <div className="text-center">
                      <ClockIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-semibold">{pool.duration}</p>
                    </div>
                    <div className="text-center">
                      <ShieldCheckIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-500">Min Stake</p>
                      <p className="text-sm font-semibold">{pool.minStake} OZONE</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Features:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {pool.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stake Section */}
                  {selectedPool === pool.id ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Amount to Stake
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={stakeAmount}
                            onChange={(e) => setStakeAmount(e.target.value)}
                            placeholder={`Min ${pool.minStake} OZONE`}
                            className="w-full px-3 py-2 border border-gray-300 rounded-button focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                          <span className="absolute right-3 top-2 text-sm text-gray-500">OZONE</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Available: 2,500 OZONE
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          fullWidth 
                          onClick={() => setSelectedPool(null)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          variant="primary" 
                          size="sm"
                          fullWidth
                          disabled={!stakeAmount || Number(stakeAmount) < Number(pool.minStake)}
                        >
                          Stake Now
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      fullWidth
                      variant="primary"
                      onClick={() => setSelectedPool(pool.id)}
                      className="flex items-center justify-center"
                    >
                      <PlusIcon className="w-4 h-4 mr-2" />
                      Stake in this Pool
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent>
            <h3 className="font-semibold text-blue-900 mb-2">How Staking Works</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Lock your OZONE tokens for a specified period</li>
              <li>• Earn rewards based on APY and staking duration</li>
              <li>• Rewards are distributed according to each pool&apos;s schedule</li>
              <li>• Early withdrawal may incur fees depending on the pool</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
}