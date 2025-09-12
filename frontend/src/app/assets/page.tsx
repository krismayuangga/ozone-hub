"use client";

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';

export default function AssetsPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <Header />

      <div className="max-w-md mx-auto">
        {/* Top bar border sections mimic design breaks */}
        <section className="px-6 pt-5 pb-6 border-b border-gray-300">
          <h1 className="text-lg font-semibold text-teal-600 mb-4">Total Assets</h1>
          <div className="flex items-end space-x-2">
            <span className="text-[42px] font-bold leading-none text-gray-900">233.00</span>
            <span className="text-sm font-semibold text-gray-800 mb-1">USDT</span>
          </div>
        </section>

        {/* Action Buttons Row */}
        <section className="px-6 py-5 border-b border-gray-300">
          <div className="grid grid-cols-4 text-center gap-2">
            {[
              { label: 'Deposit', icon: '/images/menu-icons/deposit.svg' },
              { label: 'Withdraw', icon: '/images/menu-icons/withdraw.svg' },
              { label: 'Transfer', icon: '/images/menu-icons/transfer.svg' },
              { label: 'History', icon: '/images/menu-icons/history.svg' },
            ].map(btn => (
              <button
                key={btn.label}
                className="group flex flex-col items-center focus:outline-none"
              >
                <div className="w-16 h-16 rounded-full border-2 border-gray-500 flex items-center justify-center mb-1.5 group-hover:border-teal-500 transition-colors">
                  <Image
                    src={btn.icon}
                    alt={btn.label}
                    width={30}
                    height={30}
                    className="opacity-90 group-hover:opacity-100"
                  />
                </div>
                <span className="text-[11px] font-medium text-gray-600 group-hover:text-gray-800 tracking-wide">{btn.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Assets List */}
        <section className="px-6 pt-6 pb-4">
          <h2 className="text-lg font-semibold text-teal-600 mb-4">My Assets</h2>
          <div className="flex items-center justify-between text-sm font-semibold text-gray-800 mb-2">
            <span>Assets</span>
            <span>Amount</span>
          </div>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {/* USDT Row */}
            <div className="py-4 flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shadow-sm">
                  <span className="text-white text-base font-bold">T</span>
                </div>
                <div className="leading-tight">
                  <div className="font-semibold text-gray-900">USDT</div>
                  <div className="text-xs text-gray-500">Tether</div>
                </div>
              </div>
              <div className="text-right leading-tight">
                <div className="font-semibold text-gray-900">0.00</div>
                <div className="text-xs text-gray-500">~ $0.00</div>
              </div>
            </div>
            {/* OZONE Row */}
            <div className="py-4 flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/tokens/ozone-token.png"
                  alt="OZONE"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="leading-tight">
                  <div className="font-semibold text-gray-900">OZONE</div>
                  <div className="text-xs text-gray-500">RWA Token</div>
                </div>
              </div>
              <div className="text-right leading-tight">
                <div className="font-semibold text-gray-900">233.00</div>
                <div className="text-xs text-gray-500">~ $233.00</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <BottomNavigation />
    </div>
  );
}