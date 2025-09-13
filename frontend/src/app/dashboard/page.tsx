'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import Image from 'next/image';

export default function Dashboard() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 20,
    minutes: 23,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="px-6 py-6 pb-20">
        {/* Excavator Mining Scene */}
        <div className="rounded-2xl mb-6 relative overflow-hidden">
          <video
            src="/images/illustrations/exavator.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl"
            style={{ 
              height: 'auto',
              minHeight: '200px',
              maxHeight: '400px',
              objectFit: 'contain'
            }}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6">
          {/* OZONE Token Staked */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/tokens/ozone-token.png"
                    alt="OZONE Token"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">OZONE Token Staked</p>
                  <p className="text-2xl font-bold text-gray-900">12,375.00</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Staked Duration</p>
                <p className="text-sm font-mono text-gray-800">
                  {String(timeLeft.days).padStart(2, '0')}D:{String(timeLeft.hours).padStart(2, '0')}H:{String(timeLeft.minutes).padStart(2, '0')}M:{String(timeLeft.seconds).padStart(2, '0')}S
                </p>
              </div>
            </div>
          </div>

          {/* USDT Earned */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/tokens/usdt-token.png"
                    alt="USDT Token"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">USDT Earned</p>
                  <p className="text-2xl font-bold text-gray-900">206.25 USDT</p>
                </div>
              </div>
              <div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium px-6 py-2 rounded-lg">
                  Claim
                </button>
                <p className="text-xs text-gray-500 mt-1 text-center">Min. 618.75 USDT to Claim</p>
              </div>
            </div>
          </div>

          {/* Max Profit */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/tokens/dollar-icon.png"
                    alt="Dollar Icon"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Max Profit</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/tokens/usdt-token.png"
                  alt="USDT"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="font-bold text-gray-900">206.25 / 37,125 USDT</span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full" 
                style={{ width: `${(206.25 / 37125) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
