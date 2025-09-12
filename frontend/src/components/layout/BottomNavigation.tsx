'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
  icon: string;
  isCenter?: boolean;
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: '/images/menu-icons/home.png',
  },
  {
    name: 'Swap',
    href: '/swap',
    icon: '/images/menu-icons/swap.svg',
  },
  {
    name: '',
    href: '/dashboard',
    icon: '/images/menu-icons/center-ozone-button.png',
    isCenter: true,
  },
  {
    name: 'Staking',
    href: '/staking',
    icon: '/images/menu-icons/staking.png',
  },
  {
    name: 'Assets',
    href: '/assets',
    icon: '/images/menu-icons/assets.png',
  },
];

export const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white z-50 shadow-lg">
      {/* Elegant gradient border top */}
      <div className="h-px bg-gradient-to-r from-indigo-200 via-blue-300 to-purple-200"></div>
      <div className="max-w-md mx-auto px-4 relative">
        {/* Center OZONE button positioned absolutely */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-10">
          <Link
            href="/dashboard"
            className="flex flex-col items-center justify-center"
          >
            {/* Gradient circular background */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-200">
              {/* Inner circle with OZONE logo */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center">
                <Image
                  src="/images/illustrations/ethereum-diamond.png"
                  alt="OZONE"
                  width={48}
                  height={48}
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-between py-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            // Skip center button as it's now positioned absolutely
            if (item.isCenter) {
              return <div key={`center-${index}`} className="w-16"></div>; // Placeholder to maintain spacing
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200',
                  'min-w-[60px] hover:bg-gray-50'
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className={cn(
                    'mb-1 object-contain',
                    isActive ? 'opacity-100' : 'opacity-60'
                  )}
                />
                <span
                  className={cn(
                    'text-xs font-medium',
                    isActive ? 'text-blue-500' : 'text-gray-600'
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};