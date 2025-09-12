'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from '@/i18n';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  const router = useRouter();
  const { t } = useTranslation();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header with Close Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
  <h1 className="text-xl font-bold text-gray-900">Menu</h1>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-50 transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4">
        {/* User Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-900">0x9a30....6044</span>
                <button className="p-1">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">BNB Network</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-900">ID #9900231</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 mb-6">
          <button className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/menu-icons/home.png"
                alt="Home"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-gray-900 text-lg">{t('menu.home')}</span>
          </button>

          <button 
            onClick={() => window.location.href = '/referral'}
            className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900 text-lg">{t('menu.referral')}</span>
          </button>

          <button 
            onClick={() => router.push('/community')}
            className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/menu-icons/community.png"
                alt="Community Summary"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-gray-900 text-lg">{t('menu.community')}</span>
          </button>

          <button 
            onClick={() => { router.push('/language'); onClose(); }}
            className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/menu-icons/setting.svg"
                alt="Setting Language"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-gray-900 text-lg">{t('menu.settingLanguage')}</span>
          </button>
        </div>

        {/* Referral Program Card */}
        <button 
          onClick={() => window.location.href = '/referral'}
          className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-3 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 text-left">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-bold text-gray-900">{t('menu.referral')}</h3>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">{t('card.referral.subtitle')}</p>
            </div>
            <div className="ml-4">
              <Image
                src="/images/menu-icons/referral-program.png"
                alt="Referral Network"
                width={60}
                height={48}
              />
            </div>
          </div>
        </button>

        {/* Account Summary Card */}
        <div 
          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push('/account')}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-bold text-gray-900">{t('menu.accountSummary')}</h3>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">{t('card.account.subtitle')}</p>
            </div>
            <div className="ml-4">
              <Image
                src="/images/menu-icons/account-summary.png"
                alt="Account Summary"
                width={60}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}