'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import Image from 'next/image';
import { 
  ClipboardDocumentIcon, 
  ShareIcon
} from '@heroicons/react/24/outline';

export default function ReferralProgram() {
  const [mounted, setMounted] = useState(false);
  const [referralCode] = useState('ozx99021a');
  const [copied, setCopied] = useState(false);

  // Mock data - replace with real API calls
  const [sponsorData] = useState({
    totalLevel1: 4,
    totalLevel2: 5,
    level1Staking: 100000.00,
    level1Yield: 0.80,
    level2Staking: 50000.00,
    level2Yield: 0.50,
    monthlyEarnings: 1050,
    dailyEarnings: 35,
    totalEarned: 350,
    maxEarnings: 37125
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleCopyReferralCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Join OzoneX - High Yield Staking',
      text: `Join me on OzoneX and earn up to 10% monthly yield! Use my referral code: ${referralCode}`,
      url: `https://ozonex.app/ref/${referralCode}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for desktop
        await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
        alert('Referral link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="px-4 py-2 pb-24">
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-900 mb-3">Referral Program</h1>

        {/* Referral Network Visualization */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200 mb-3">
          <div className="flex flex-col items-center mb-2">
            {/* Network Image */}
            <div className="mb-2">
              <Image
                src="/images/menu-icons/referral-program.png"
                alt="Referral Network"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                Grow Together with Your Community
              </h2>
              <p className="text-sm text-gray-700">
                Be more Prosperous and Successful
              </p>
            </div>
          </div>

          {/* Referral Code Section */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1 text-center">Referral Code</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg py-2 text-center mb-2">
              <span className="text-lg font-bold text-gray-900">{referralCode}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopyReferralCode}
                className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-1 hover:bg-green-600 transition-colors"
              >
                <ClipboardDocumentIcon className="w-4 h-4" />
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
              
              <button
                onClick={handleShare}
                className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-1 hover:bg-green-600 transition-colors"
              >
                <ShareIcon className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sponsor Bonus Section */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Sponsor Bonus</h2>
          
          {/* Sponsor Summary */}
          <div className="mb-4 pb-3 border-b border-gray-200">
            <h3 className="text-lg font-bold text-teal-600 mb-2">Sponsor Summary</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Level 1</span>
                <span className="font-semibold text-right">{sponsorData.totalLevel1}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Level 2</span>
                <span className="font-semibold text-right">{sponsorData.totalLevel2}</span>
              </div>
            </div>
          </div>

          {/* Level 1 Total Staking */}
          <div className="mb-3 pb-3 border-b border-gray-200">
            <div className="text-teal-600 font-medium mb-2">Level 1 Total Staking</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Ozone Token" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-xl font-bold text-gray-900">100,000.00</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Yield</div>
                <div className="font-semibold text-gray-900">0.80%</div>
              </div>
            </div>
          </div>

          {/* Level 2 Total Staking */}
          <div className="mb-4 pb-3 border-b border-gray-200">
            <div className="text-teal-600 font-medium mb-2">Level 2 Total Staking</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Ozone Token" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-xl font-bold text-gray-900">50,000.00</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Yield</div>
                <div className="font-semibold text-gray-900">0.50%</div>
              </div>
            </div>
          </div>

          {/* Earnings Summary */}
          <div className="space-y-2">
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-700">Monthly Token Earnings</span>
              <span className="font-semibold text-gray-900">
                {sponsorData.monthlyEarnings.toLocaleString()} Tokens
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-700">Daily Token Earnings</span>
              <span className="font-semibold text-gray-900">
                {sponsorData.dailyEarnings} Tokens
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-teal-600 font-medium">Total Token Earned</span>
              <span className="font-semibold text-teal-600">
                {sponsorData.totalEarned} Tokens
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-red-500 font-medium">Max Token Earnings</span>
              <span className="font-semibold text-red-500">
                {sponsorData.maxEarnings.toLocaleString()} Tokens
              </span>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}