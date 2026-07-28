'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MerchantDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Dashboard');

  // আপনার দেওয়া ১০টি মেনু অপশন
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Payments', icon: '💳' },
    { name: 'Invoices', icon: '📄' },
    { name: 'Transactions', icon: '🔄' },
    { name: 'Business Wallet', icon: '💰' },
    { name: 'Settlements', icon: '🏦' },
    { name: 'Reports', icon: '📈' },
    { name: 'API Integration', icon: '⚡' },
    { name: 'Team', icon: '👥' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      
      {/* বাঁ পাশের সাইডবার */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between">
        <div>
          {/* লোগো সেকশন */}
          <div className="h-16 flex items-center px-6 border-b border-gray-200 space-x-3">
            <div className="w-8 h-8 bg-[#006633] text-white flex items-center justify-center font-bold rounded shadow-sm">
              MW
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">My Wallet</span>
          </div>

          {/* মেনু লিস্ট */}
          <nav className="p-4 space-y-1.5">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  activeTab === item.name
                    ? 'bg-[#006633] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* সাইডবারের নিচে ইউজার প্রొফাইল বা লগআউট */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => router.push('/merchant/login')}
            className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* মূল কন্টেন্ট এরিয়া */}
      <div className="flex-grow flex flex-col min-w-0">
        
        {/* টপ হেডার */}
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-800">{activeTab}</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">Aifa Mart BD</span>
            <div className="w-10 h-10 rounded-full bg-[#006633] text-white flex items-center justify-center font-bold shadow-inner">
              AM
            </div>
          </div>
        </header>

        {/* পেজ বডি বা ড্যাশবোর্ড ওভারভিউ */}
        <main className="flex-grow p-6 lg:p-10 space-y-6">
          
          {/* ওয়েলকাম ব্যানার */}
          <div className="bg-gradient-to-r from-[#006633] to-[#044e26] rounded-2xl p-6 sm:p-8 text-white shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Welcome back, Merchant!</h2>
              <p className="text-gray-200 text-sm mt-1">Here is what's happening with your business today.</p>
            </div>
            <button className="px-5 py-2.5 bg-white text-[#006633] font-semibold rounded-lg text-sm shadow hover:bg-gray-50 transition">
              + New Payment
            </button>
          </div>
{/* স্ট্যাটিস্টিকস কার্ড */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase">Total Balance</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">฿ 145,250.00</h3>
              <span className="text-xs text-green-600 font-medium mt-1 inline-block">↑ +12% from last month</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase">Today's Transactions</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">1,240</h3>
              <span className="text-xs text-green-600 font-medium mt-1 inline-block">↑ +8% today</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase">Successful Payments</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">98.4%</h3>
              <span className="text-xs text-gray-500 font-medium mt-1 inline-block">Stable performance</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase">Pending Settlements</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">฿ 12,400.00</h3>
              <span className="text-xs text-orange-600 font-medium mt-1 inline-block">Processing</span>
            </div>
          </div>

          {/* ডায়নামিক কন্টেন্ট এরিয়া (যে অপশনে ক্লিক করবেন সেটির নাম দেখাবে) */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{activeTab} Overview</h3>
            <div className="h-64 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Displaying content for <span className="font-semibold text-[#006633] ml-1">"{activeTab}"</span> section.
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}
