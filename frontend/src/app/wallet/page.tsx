'use client';

import { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  EyeIcon,
  EyeSlashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DocumentDuplicateIcon,
  QrCodeIcon
} from '@heroicons/react/24/outline';

export default function Wallet() {
  const [hideBalance, setHideBalance] = useState(false);
  const [activeTab, setActiveTab] = useState('tokens');

  const walletAddress = '0x1234...5678';
  const balance = {
    ozone: { amount: '2,500.00', value: '$2,000.00' },
    bnb: { amount: '0.85', value: '$350.25' },
    usdt: { amount: '1,200.00', value: '$1,200.00' },
  };

  const transactions = [
    {
      id: '1',
      type: 'receive',
      token: 'OZONE',
      amount: '+500.00',
      value: '$400.00',
      from: '0xabcd...efgh',
      timestamp: '2024-01-15 14:30',
      status: 'completed',
      hash: '0x123...abc',
    },
    {
      id: '2',
      type: 'send',
      token: 'BNB',
      amount: '-0.1',
      value: '$35.50',
      from: '0xijkl...mnop',
      timestamp: '2024-01-15 12:15',
      status: 'completed',
      hash: '0x456...def',
    },
    {
      id: '3',
      type: 'stake',
      token: 'OZONE',
      amount: '-1,000.00',
      value: '$800.00',
      from: 'Staking Pool',
      timestamp: '2024-01-14 16:45',
      status: 'completed',
      hash: '0x789...ghi',
    },
    {
      id: '4',
      type: 'reward',
      token: 'OZONE',
      amount: '+25.50',
      value: '$20.40',
      from: 'Staking Rewards',
      timestamp: '2024-01-14 09:00',
      status: 'completed',
      hash: '0xabc...123',
    },
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'receive':
      case 'reward':
        return <ArrowDownIcon className="w-5 h-5 text-green-600" />;
      case 'send':
      case 'stake':
        return <ArrowUpIcon className="w-5 h-5 text-red-600" />;
      default:
        return <ArrowUpIcon className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'receive':
      case 'reward':
        return 'text-green-600';
      case 'send':
      case 'stake':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <MobileLayout>
      <div className="px-6 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-sm text-gray-600">{walletAddress}</p>
              <button
                onClick={() => copyToClipboard('0x1234567890abcdef')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <DocumentDuplicateIcon className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setHideBalance(!hideBalance)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {hideBalance ? (
                <EyeIcon className="w-5 h-5 text-gray-600" />
              ) : (
                <EyeSlashIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <QrCodeIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Total Balance */}
        <Card className="bg-gradient-primary text-white mb-6">
          <div className="text-center py-4">
            <p className="text-sm opacity-90 mb-2">Total Portfolio Value</p>
            <h2 className="text-3xl font-bold mb-4">
              {hideBalance ? '****' : '$3,550.25'}
            </h2>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" size="sm" className="flex items-center">
                <ArrowDownIcon className="w-4 h-4 mr-1" />
                Receive
              </Button>
              <Button variant="secondary" size="sm" className="flex items-center">
                <ArrowUpIcon className="w-4 h-4 mr-1" />
                Send
              </Button>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-button p-1">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`flex-1 py-2 px-4 rounded-button text-sm font-medium transition-all ${
              activeTab === 'tokens'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Tokens
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 px-4 rounded-button text-sm font-medium transition-all ${
              activeTab === 'history'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            History
          </button>
        </div>

        {/* Tokens Tab */}
        {activeTab === 'tokens' && (
          <div className="space-y-3">
            <Card>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">OZ</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">OZONE</h3>
                    <p className="text-sm text-gray-600">OzoneX Token</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    {hideBalance ? '****' : balance.ozone.amount}
                  </p>
                  <p className="text-sm text-gray-600">
                    {hideBalance ? '****' : balance.ozone.value}
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">BNB</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">BNB</h3>
                    <p className="text-sm text-gray-600">Binance Coin</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    {hideBalance ? '****' : balance.bnb.amount}
                  </p>
                  <p className="text-sm text-gray-600">
                    {hideBalance ? '****' : balance.bnb.value}
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">USDT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">USDT</h3>
                    <p className="text-sm text-gray-600">Tether USD</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    {hideBalance ? '****' : balance.usdt.amount}
                  </p>
                  <p className="text-sm text-gray-600">
                    {hideBalance ? '****' : balance.usdt.value}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            {transactions.map((tx) => (
              <Card key={tx.id} className="hover:shadow-card-hover transition-all">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      {getTransactionIcon(tx.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 capitalize">
                        {tx.type} {tx.token}
                      </h3>
                      <p className="text-sm text-gray-600">{tx.timestamp}</p>
                      <p className="text-xs text-gray-500">{tx.from}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${getTransactionColor(tx.type)}`}>
                      {tx.amount} {tx.token}
                    </p>
                    <p className="text-sm text-gray-600">{tx.value}</p>
                    <div className="flex items-center justify-end mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      <span className="text-xs text-gray-500 capitalize">{tx.status}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MobileLayout>
  );
}