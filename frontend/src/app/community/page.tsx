'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';

export default function CommunityPage() {
  const router = useRouter();

  const handleViewClass = () => {
    router.push('/community/class');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-4 pb-20">
        {/* Header with Title and VIEW CLASS Button */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">Community Summary</h1>
          <button 
            onClick={handleViewClass}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            VIEW CLASS
          </button>
        </div>

        {/* Header Card */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-4 mb-4 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3 border-4 border-red-500">
                D
              </div>
              <div>
                <div className="text-xl font-bold">ID #9900231</div>
                <div className="text-sm opacity-90">0x9a30....6044</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Yield</div>
              <div className="text-2xl font-bold">0.70%</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Account Tokens Staked</span>
              <span className="font-bold text-gray-900">12,375 Tokens</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Community Tokens Staked</span>
              <span className="font-bold text-gray-900">1,000,000 Tokens</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Monthly Token Earnings</span>
              <span className="font-bold text-gray-900">7,000 Tokens</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Daily Token Earnings</span>
              <span className="font-bold text-gray-900">233 Tokens</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-teal-600 font-medium">Total Token Earned</span>
              <span className="font-bold text-teal-600">233 Tokens</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-red-500 font-medium">Max Token Earnings</span>
              <span className="font-bold text-red-500">37,125 Tokens</span>
            </div>
          </div>
        </div>

        {/* Referral Tree */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-lg font-bold text-gray-900 mb-4">#9900231</div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <div className="w-4 h-px bg-gray-400"></div>
                <div className="w-px h-4 bg-gray-400 absolute"></div>
                <span className="text-gray-400 text-xs ml-2">▶</span>
              </div>
              <div className="flex items-center">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Token" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                <span className="font-medium text-gray-900">#9900257</span>
              </div>
              <div className="ml-auto font-bold text-gray-900">250,000 Tokens</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <div className="w-4 h-px bg-gray-400"></div>
                <div className="w-px h-4 bg-gray-400 absolute"></div>
                <span className="text-gray-400 text-xs ml-2">▶</span>
              </div>
              <div className="flex items-center">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Token" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                <span className="font-medium text-gray-900">#9900268</span>
              </div>
              <div className="ml-auto font-bold text-gray-900">250,000 Tokens</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <div className="w-4 h-px bg-gray-400"></div>
                <div className="w-px h-4 bg-gray-400 absolute"></div>
                <span className="text-gray-400 text-xs ml-2">▶</span>
              </div>
              <div className="flex items-center">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Token" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                <span className="font-medium text-gray-900">#9900299</span>
              </div>
              <div className="ml-auto font-bold text-gray-900">250,000 Tokens</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <div className="w-4 h-px bg-gray-400"></div>
                <div className="w-px h-4 bg-gray-400 absolute"></div>
                <span className="text-gray-400 text-xs ml-2">▶</span>
              </div>
              <div className="flex items-center">
                <Image 
                  src="/images/tokens/ozone-token.png" 
                  alt="Token" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                <span className="font-medium text-gray-900">#9900301</span>
              </div>
              <div className="ml-auto font-bold text-gray-900">250,000 Tokens</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}