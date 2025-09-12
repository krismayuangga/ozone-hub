import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'OzoneX Dashboard',
    template: '%s | OzoneX'
  },
  description: 'Dashboard aset, staking, dan komunitas ekosistem OzoneX.',
  applicationName: 'OzoneX',
  authors: [{ name: 'OzoneX Labs' }],
  keywords: ['OzoneX', 'crypto', 'staking', 'wallet', 'web3'],
  metadataBase: new URL('https://ozone-hub.vercel.app'),
  openGraph: {
    title: 'OzoneX Dashboard',
    description: 'Kelola aset, staking, dan komunitas Anda di ekosistem OzoneX.',
    url: 'https://ozone-hub.vercel.app',
    siteName: 'OzoneX',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    site: '@ozonex',
    title: 'OzoneX Dashboard',
    description: 'Kelola aset, staking, dan komunitas Anda di ekosistem OzoneX.'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
