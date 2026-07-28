'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // এখানে আপনার লগইন লজিক বা এপিআই কল করতে পারেন
    console.log("Login Attempt:", { email, password });
    alert("Login successful!");
    router.push('/merchant/register1'); // সফল হলে যেখানে পাঠাতে চান
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between bg-gradient-to-br from-[#0a4d2c] via-[#006633] to-[#022c16] text-white font-sans px-6 md:px-16 py-6">
      
      {/* টপ হেডার (লোগো এবং হেল্প) */}
      <header className="flex justify-between items-center z-10">
        <div className="flex items-center space-x-3">
          {/* লোগো আইকন */}
          <div className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
            <div className="w-5 h-5 bg-white rotate-45 flex items-center justify-center rounded-sm"></div>
            <div className="w-5 h-5 bg-[#34a853] -ml-2.5 rotate-45 flex items-center justify-center rounded-sm opacity-80"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider">My Wallet</span>
            <span className="text-[10px] text-gray-300 tracking-widest uppercase">A My Wallet Experience</span>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm font-medium">
          <button className="hover:text-gray-200 transition">HELP</button>
          <button className="hover:text-gray-200 transition">API DOCS</button>
        </div>
      </header>

      {/* মেইন কন্টেন্ট (বাঁ পাশে টেক্সট এবং মাঝখানে লগইন ফর্ম) */}
      <main className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 max-w-7xl mx-auto w-full py-10">
        
        {/* বাঁ পাশের টেক্সট */}
        <div className="lg:col-span-7 space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Welcome to your <br />
            <span className="text-white">My Wallet Business</span> <br />
            Experience
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl font-light tracking-wide">
            Login to access all the ways your customers pay
          </p>
        </div>

        {/* মাঝখানে / ডান পাশের সুন্দর লগইন বক্স (আপনার চাহিদা অনুযায়ী সেন্টারে ফোকাস করা) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white text-gray-900 rounded-2xl shadow-2xl p-8 border border-white/20 backdrop-blur-lg">
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Login to My Wallet account
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter username/email address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#006633] focus:bg-white outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#006633] focus:bg-white outline-none transition"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#34a853] hover:bg-[#2e9248] text-white font-semibold rounded-lg shadow-md transition duration-200 text-sm tracking-wide"
                >
                  Login
                </button>
              </div>

              <div className="text-center pt-2">
                <a href="#" className="text-xs text-[#006633] hover:underline font-medium">
                  Forgot your password?
                </a>
              </div>
            </form>

            <div className="mt-8 pt-4 border-t border-gray-100 text-center">
              <p className="text-[11px] text-gray-500 leading-relaxed">
                We recently launched our new single sign-on entry point to enhance account security for our merchants.{' '}
                <a href="#" className="text-[#006633] font-semibold hover:underline">Take me there now</a>
              </p>
            </div>

          </div>
        </div>

      </main>

      {/* ফুটার */}
      <footer className="z-10 text-xs text-gray-300 flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-white/10 pt-4">
        <p>© 2026 My Wallet Financial Services Limited. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>
      </footer>

    </div>
  );
}
