"use client";

import { Header } from '@/components/layout/Header';
import { BottomNavigation } from '@/components/layout/BottomNavigation';

interface TxItem {
  id: string;
  type: string;
  amount: string;
  token: string;
  date: string;
  status: 'Success' | 'Pending';
}

const mockTx: TxItem[] = [
  { id: '1', type: 'Deposit', amount: '10,000', token: 'USDT', date: '02-09-2025 - 4:05PM', status: 'Success' },
  { id: '2', type: 'Swap', amount: '12,375', token: 'OZONE', date: '02-09-2025 - 6:25PM', status: 'Success' },
  { id: '3', type: 'Staking', amount: '12,375', token: 'OZONE', date: '02-09-2025 - 6:55PM', status: 'Success' },
  { id: '4', type: 'Transfer', amount: '233', token: 'OZONE', date: '03-09-2025 - 8:51AM', status: 'Pending' },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <Header />
      <div className="max-w-md mx-auto">
        <section className="px-6 pt-6 pb-4 border-b border-gray-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">History</h1>
          <div className="space-y-4">
            {mockTx.map(tx => (
              <div key={tx.id} className="rounded-2xl bg-gray-100 px-5 py-4 flex items-start justify-between">
                <div className="pr-4">
                  <div className="text-base font-semibold text-gray-900 mb-0.5">{tx.type}</div>
                  <div className="text-[11px] font-medium text-gray-600 tracking-wide">{tx.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold text-gray-900 mb-2">{tx.amount} {tx.token}</div>
                  <div className={"inline-flex px-3 h-7 items-center rounded-md text-[12px] font-semibold tracking-wide " + (tx.status === 'Success' ? 'bg-green-200 text-green-800' : 'bg-orange-200 text-orange-700')}>{tx.status}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <BottomNavigation />
    </div>
  );
}
