'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register1Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ইমেইল লোকাল স্টোরেজে সেভ করে দ্বিতীয় পেজে রিডাইরেক্ট করা হচ্ছে
    localStorage.setItem('merchantEmail', email);
    router.push('/merchant/register2');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* টপ গ্রিন বার */}
      <div className="bg-[#006633] text-white py-3 px-6 flex justify-between items-center text-sm shadow-sm">
        <span className="font-medium tracking-wide">My Wallet Business Experience</span>
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-200 transition">English</button>
          <button className="hover:text-gray-200 transition">Help</button>
        </div>
      </div>

      {/* হেডার (লোগো এবং নাম) */}
      <div className="bg-white border-b border-gray-200 py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#006633] text-white flex items-center justify-center font-bold rounded">
            MW
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">My Wallet</span>
        </div>
        <span className="text-gray-600 font-medium text-sm md:text-base">Business registration</span>
      </div>

      {/* মেইন কন্টেন্ট */}
      <main className="flex-grow flex justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-10">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Get Started</h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Accept payments via cards and direct debit over phone or email quickly and easily.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ইমেইল এড্রেস */}
            <div className="bg-gray-50/60 p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  Your Email Address
                </label>
                <span className="text-xs text-red-500 font-medium">* required</span>
              </div>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address *"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] focus:border-[#006633] outline-none transition text-sm text-gray-800"
              />
            </div>

            {/* রিকোয়ারমেন্টস */}
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-3">To open a business account you need:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-200 bg-white p-4 rounded-lg flex items-center space-x-3 shadow-sm hover:border-[#006633] transition">
                  <span className="text-sm font-medium text-gray-800">1. Registered Business</span>
                </div>
                <div className="border border-gray-200 bg-white p-4 rounded-lg flex items-center space-x-3 shadow-sm hover:border-[#006633] transition">
                  <span className="text-sm font-medium text-gray-800">2. Functional Website</span>
                </div>
              </div>
            </div>
{/* সাবমিট বাটন */}
            <div className="border-t border-gray-200 pt-6 flex flex-col items-center">
              <p className="text-xs text-gray-500 text-center mb-4">
                If you are already a My Wallet merchant, please contact your Account Manager or email Merchant Services.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#006633] text-white font-medium rounded-md shadow hover:bg-[#00552b] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006633]"
              >
                Next Step →
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
