'use client';

import { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  MoonIcon,
  SunIcon,
  CurrencyDollarIcon,
  ChevronRightIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    pushNotifications: true,
    emailNotifications: true,
    stakingRewards: true,
    priceAlerts: false,
    newsletter: true,
  });

  const [preferences, setPreferences] = useState({
    language: 'English',
    currency: 'USD',
    theme: 'light',
    autoCompound: true,
  });

  const toggleNotification = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const languages = ['English', 'Bahasa Indonesia', 'Español', 'Français', '中文'];
  const currencies = ['USD', 'EUR', 'IDR', 'BTC', 'ETH'];

  return (
    <MobileLayout>
      <div className="px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your app preferences</p>
        </div>

        {/* Notifications */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BellIcon className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Notifications</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </p>
                    <p className="text-sm text-gray-600">
                      {key === 'pushNotifications' && 'Receive push notifications on your device'}
                      {key === 'emailNotifications' && 'Get updates via email'}
                      {key === 'stakingRewards' && 'Notify when staking rewards are earned'}
                      {key === 'priceAlerts' && 'Alert when token prices change significantly'}
                      {key === 'newsletter' && 'Monthly newsletter and updates'}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleNotification(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? 'bg-primary-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Preferences</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Language */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Language</p>
                    <p className="text-sm text-gray-600">Choose your preferred language</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-900">{preferences.language}</span>
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Currency */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CurrencyDollarIcon className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Currency</p>
                    <p className="text-sm text-gray-600">Display currency for values</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-900">{preferences.currency}</span>
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Theme */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {preferences.theme === 'light' ? (
                    <SunIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <MoonIcon className="w-5 h-5 text-gray-500" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">Theme</p>
                    <p className="text-sm text-gray-600">Choose light or dark mode</p>
                  </div>
                </div>
                <div className="flex bg-gray-100 rounded-button p-1">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, theme: 'light' }))}
                    className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                      preferences.theme === 'light'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, theme: 'dark' }))}
                    className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                      preferences.theme === 'dark'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    Dark
                  </button>
                </div>
              </div>

              {/* Auto Compound */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Auto Compound</p>
                  <p className="text-sm text-gray-600">Automatically reinvest staking rewards</p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, autoCompound: !prev.autoCompound }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.autoCompound ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.autoCompound ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Security</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'Two-Factor Authentication', subtitle: 'Add an extra layer of security', enabled: true },
                { title: 'Biometric Login', subtitle: 'Use fingerprint or face recognition', enabled: false },
                { title: 'Session Timeout', subtitle: 'Auto-logout after inactivity', enabled: true },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${item.enabled ? 'text-green-600' : 'text-gray-500'}`}>
                      {item.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card className="mb-6">
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'About OzoneX', subtitle: 'Learn more about our platform' },
                { title: 'Terms of Service', subtitle: 'Read our terms and conditions' },
                { title: 'Privacy Policy', subtitle: 'How we protect your data' },
                { title: 'Contact Support', subtitle: 'Get help when you need it' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 rounded-lg px-2">
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* App Version */}
        <div className="text-center text-sm text-gray-500 mb-6">
          <p>OzoneX Mobile App</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </MobileLayout>
  );
}