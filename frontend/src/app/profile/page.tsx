'use client';

import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  UserIcon,
  TrophyIcon,
  UsersIcon,
  GiftIcon,
  ChevronRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function Profile() {
  const userStats = {
    totalStaked: '$8,500.00',
    totalRewards: '$1,245.32',
    stakingDays: 145,
    referrals: 12,
    tier: 'Gold',
    nextTier: 'Diamond',
  };

  const achievements = [
    { name: 'First Stake', description: 'Complete your first staking', earned: true },
    { name: 'Long Term Holder', description: 'Stake for 90+ days', earned: true },
    { name: 'High Roller', description: 'Stake over $10,000', earned: false },
    { name: 'Referral Master', description: 'Refer 20+ users', earned: false },
  ];

  const referralStats = {
    totalReferred: 12,
    activeReferrals: 8,
    referralRewards: '$234.50',
    referralCode: 'OZONE_USER123',
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Bronze': return 'text-orange-600 bg-orange-100';
      case 'Silver': return 'text-gray-600 bg-gray-100';
      case 'Gold': return 'text-yellow-600 bg-yellow-100';
      case 'Diamond': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <MobileLayout>
      <div className="px-6 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
            <UserIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">OzoneX User</h1>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTierColor(userStats.tier)}`}>
              {userStats.tier} Tier
            </span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-4 h-4 ${
                    star <= (userStats.tier === 'Bronze' ? 1 : userStats.tier === 'Silver' ? 2 : userStats.tier === 'Gold' ? 4 : 5)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Progress to {userStats.nextTier}: 75%
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="text-center">
            <div className="py-4">
              <TrophyIcon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{userStats.totalStaked}</p>
              <p className="text-sm text-gray-600">Total Staked</p>
            </div>
          </Card>
          <Card className="text-center">
            <div className="py-4">
              <GiftIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{userStats.totalRewards}</p>
              <p className="text-sm text-gray-600">Total Rewards</p>
            </div>
          </Card>
          <Card className="text-center">
            <div className="py-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold text-sm">{userStats.stakingDays}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{userStats.stakingDays}</p>
              <p className="text-sm text-gray-600">Staking Days</p>
            </div>
          </Card>
          <Card className="text-center">
            <div className="py-4">
              <UsersIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{userStats.referrals}</p>
              <p className="text-sm text-gray-600">Referrals</p>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mb-6">
          <CardHeader>
            <h3 className="font-semibold text-gray-900">Achievements</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      <TrophyIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{achievement.name}</p>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  {achievement.earned && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Referral Program */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">Referral Program</h3>
              <Button variant="ghost" size="sm">Share</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-button p-4 mb-4">
              <p className="text-sm text-gray-600 mb-2">Your Referral Code</p>
              <div className="flex items-center justify-between">
                <p className="font-mono font-bold text-primary-600">{referralStats.referralCode}</p>
                <Button variant="outline" size="sm">Copy</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-gray-900">{referralStats.totalReferred}</p>
                <p className="text-xs text-gray-600">Total Referred</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">{referralStats.activeReferrals}</p>
                <p className="text-xs text-gray-600">Active</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-600">{referralStats.referralRewards}</p>
                <p className="text-xs text-gray-600">Rewards</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <div className="space-y-2 mb-6">
          {[
            { title: 'Edit Profile', icon: UserIcon },
            { title: 'Notification Settings', icon: UserIcon },
            { title: 'Security', icon: UserIcon },
            { title: 'Help & Support', icon: UserIcon },
            { title: 'Terms of Service', icon: UserIcon },
            { title: 'Privacy Policy', icon: UserIcon },
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-card-hover transition-all cursor-pointer">
              <div className="flex items-center justify-between py-3 px-4">
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-gray-500" />
                  <span className="font-medium text-gray-900">{item.title}</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>

        {/* Logout Button */}
        <Button variant="outline" fullWidth className="text-red-600 border-red-200 hover:bg-red-50">
          Disconnect Wallet
        </Button>
      </div>
    </MobileLayout>
  );
}