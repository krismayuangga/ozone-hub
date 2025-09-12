'use client';


import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import Image from 'next/image';

export default function Home() {

  const router = useRouter();

  const handleConnect = async () => {
    router.push('/wallet-connect');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-16">
        {/* Large Ethereum Diamond Icon */}
        <div className="mb-16">
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            <Image
              src="/images/illustrations/ethereum-diamond.png"
              alt="Ethereum Diamond"
              width={192}
              height={192}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Please connect wallet
        </h1>

        {/* Connect Button */}
        <button
          onClick={handleConnect}
          className="w-full max-w-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Connect Wallet
        </button>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>OzoneX Labs © 2025 | All Rights Reserved</p>
          <p className="mt-1">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
