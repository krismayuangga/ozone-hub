"use client";

import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function WithdrawPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('');

  return (
    <div className="min-h-screen bg-white pb-24">
      <Header />
      <div className="max-w-md mx-auto">
        <section className="px-6 pt-6 pb-5 border-b border-gray-300">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Withdraw</h1>
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

          {/* Withdraw Amount */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-gray-900">Withdraw Amount</div>
              <div className="px-3 h-8 flex items-center rounded-md bg-gray-100 text-[13px] font-medium text-gray-800 tracking-wide">Balance: <span className="ml-1 font-semibold">1,000.00 USDT</span></div>
            </div>
            <div className="h-14 rounded-xl bg-gray-100 flex items-center px-4">
              <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
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

          {/* Network */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Network</div>
            <div className="h-14 rounded-xl bg-gray-100 flex items-center px-4 text-gray-800 font-medium">
              BEP20
            </div>
          </div>

          {/* Receiving Address */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Receiving Address</div>
            <div className="h-20 rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-700 leading-tight break-all font-medium">
              0x21aC7CaD6089906887f15229DDfbd6FD0c08Bc66
            </div>
          </div>

          {/* Summary */}
          <div className="mb-7 space-y-1 text-sm font-medium">
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Withdraw Amount</span>
              <span className="text-teal-700 font-semibold">0.00 USDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Handling Fee</span>
              <span className="text-teal-700 font-semibold">1.00 USDT</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-gray-800">Total Withdraw Amount</span>
              <span className="text-teal-700 font-semibold">0.00 USDT</span>
            </div>
          </div>

          <div className="pb-1">
            <button className="w-full h-14 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-base tracking-wide shadow-sm active:scale-[0.98] transition-transform">
              WITHDRAW
            </button>
          </div>
        </section>
      </div>
      <BottomNavigation />
    </div>
  );
}
