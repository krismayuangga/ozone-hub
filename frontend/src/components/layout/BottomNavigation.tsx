'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  HomeIcon, 
  ChartBarIcon, 
  WalletIcon, 
  UserIcon,
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  WalletIcon as WalletIconSolid,
  UserIcon as UserIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid
} from '@heroicons/react/24/solid';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconActive: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    iconActive: HomeIconSolid,
  },
  {
    name: 'Staking',
    href: '/staking',
    icon: ChartBarIcon,
    iconActive: ChartBarIconSolid,
  },
  {
    name: 'Wallet',
    href: '/wallet',
    icon: WalletIcon,
    iconActive: WalletIconSolid,
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: UserIcon,
    iconActive: UserIconSolid,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Cog6ToothIcon,
    iconActive: Cog6ToothIconSolid,
  },
];

export const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = isActive ? item.iconActive : item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200',
                  'min-w-[60px] hover:bg-gray-50',
                  isActive && 'text-primary-500'
                )}
              >
                <Icon className="h-6 w-6 mb-1" />
                <span
                  className={cn(
                    'text-xs font-medium',
                    isActive ? 'text-primary-500' : 'text-gray-600'
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