"use client";

import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DepositPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white pb-24">
      <Header />
      <div className="max-w-md mx-auto">
        <section className="px-6 pt-6 pb-4 border-b border-gray-300">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Deposit</h1>
            <button
              onClick={() => router.push('/assets/history')}
              className="flex items-center space-x-1 text-sm font-medium text-gray-800 hover:text-teal-700"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f1b33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8"></circle>
                <path d="M12 8v4l3 2"></path>
              </svg>
              <span>History</span>
            </button>
          </div>

          {/* Token */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Token</div>
            <div className="h-14 rounded-xl bg-gray-100 flex items-center px-4 space-x-3">
              <Image
                src="/images/icons/usdt-token.png"
                alt="USDT"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="font-semibold text-gray-900">USDT</span>
            </div>
          </div>

            {/* Network */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Network</div>
            <div className="h-14 rounded-xl bg-gray-100 flex items-center px-4 text-gray-800 font-medium">
              BEP20
            </div>
          </div>

          {/* Deposit Amount */}
          <div className="mb-7">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-gray-900">Deposit Amount</div>
              <div className="px-3 h-8 flex items-center rounded-md bg-gray-100 text-[13px] font-medium text-gray-800 tracking-wide">Balance: <span className="ml-1 font-semibold">10,000.00 USDT</span></div>
            </div>
            <div className="h-14 rounded-xl bg-gray-100 flex items-center px-4 text-gray-800 font-medium">
              <input
                type="number"
                placeholder="Enter Amount Here"
                className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm"
              />
              <button className="text-[11px] font-semibold text-orange-500 mr-3">MAX</button>
              <Image
                src="/images/icons/usdt-token.png"
                alt="USDT"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="ml-2 text-sm font-semibold text-gray-900">USDT</span>
            </div>
          </div>

          <div className="pb-2">
            <button className="w-full h-14 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-base tracking-wide shadow-sm active:scale-[0.98] transition-transform">
              DEPOSIT
            </button>
          </div>
        </section>
      </div>
      <BottomNavigation />
    </div>
  );
}
