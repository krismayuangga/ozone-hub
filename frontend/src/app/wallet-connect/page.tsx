'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import Image from 'next/image';

const walletOptions = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: '/images/icons/metamask.png',
    description: 'Connect using MetaMask wallet',
    popular: true,
  },
  {
    id: 'trust',
    name: 'Trust Wallet',
    icon: '/images/icons/trust-wallet.png',
    description: 'Connect using Trust Wallet',
    popular: true,
  },
  {
    id: 'binance',
    name: 'Binance Wallet',
    icon: '/images/icons/binance-wallet.png',
    description: 'Connect using Binance Chain Wallet',
    popular: false,
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: '/images/icons/walletconnect.png',
    description: 'Connect using WalletConnect protocol',
    popular: false,
  },
  {
    id: 'tokenpocket',
    name: 'TokenPocket',
    icon: '/images/icons/tokenpocket.png',
    description: 'Connect using TokenPocket wallet',
    popular: false,
  },
];

export default function WalletConnect() {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const router = useRouter();

  const handleWalletSelect = (walletId: string) => {
    setSelectedWallet(walletId);
  };

  const handleConnect = async () => {
    if (!selectedWallet) return;

    setIsConnecting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsConnecting(false);
    
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="px-6 py-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Connect Your Wallet
          </h1>
          <p className="text-gray-600 text-base">
            Choose your preferred wallet to connect to OzoneX
          </p>
        </div>

        {/* Wallet Options */}
        <div className="space-y-3 mb-8">
          {walletOptions.map((wallet) => (
            <div
              key={wallet.id}
              className={`bg-white rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${
                selectedWallet === wallet.id
                  ? 'border-green-500 ring-2 ring-green-200 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleWalletSelect(wallet.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-gray-200">
                    <Image
                      src={wallet.icon}
                      alt={wallet.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">
                        {wallet.name}
                      </h3>
                      {wallet.popular && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {wallet.description}
                    </p>
                  </div>
                </div>
                {selectedWallet === wallet.id && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Connect Button */}
        <button
          onClick={handleConnect}
          disabled={!selectedWallet || isConnecting}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
            selectedWallet && !isConnecting
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
          By connecting your wallet, you agree to our{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}