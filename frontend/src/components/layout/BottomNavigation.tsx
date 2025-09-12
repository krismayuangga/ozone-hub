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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            // Center OZONE button
            if (item.isCenter) {
              return (
                <Link
                  key={`center-${index}`}
                  href={item.href}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={item.icon}
                    alt="OZONE Center"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </Link>
              );
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