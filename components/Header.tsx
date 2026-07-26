"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-slate-900 border-b border-slate-200 shadow-sm">
      {/* w-full এবং px-6 দিয়ে পুরো ডিসপ্লে জুড়ে সুন্দর প্যাডিং দেওয়া হয়েছে */}
      <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Left: Logo / Brand Name (একদম বাম কোণায়) */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center font-black text-white text-xl shadow-md shadow-emerald-600/20">
              M
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">My Wallet</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer transition">
              Payments <ChevronDown size={14} className="text-slate-400" />
            </div>
            <div className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer transition">
              Crypto <ChevronDown size={14} className="text-slate-400" />
            </div>
            <div className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer transition">
              Loyalty <ChevronDown size={14} className="text-slate-400" />
            </div>
            <div className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer transition">
              Support <ChevronDown size={14} className="text-slate-400" />
            </div>
            <Link href="#business" className="hover:text-emerald-600 transition">Our Business Experience</Link>
            <Link href="#offers" className="hover:text-emerald-600 transition">Exclusive offers</Link>
          </nav>
        </div>

        {/* Right: Sign in & Join now buttons (একদম ডান কোণায়) */}
        <div className="hidden md:flex items-center gap-5">
          <Link 
            href="/login" 
            className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition px-3 py-2"
          >
            Sign in
          </Link>
          <Link 
            href="/register" 
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl transition shadow-lg shadow-emerald-600/20"
          >
            Join now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-slate-700 hover:text-slate-950 p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 text-sm font-medium text-slate-700">
          <div className="hover:text-emerald-600 cursor-pointer py-1">Payments</div>
          <div className="hover:text-emerald-600 cursor-pointer py-1">Crypto</div>
          <div className="hover:text-emerald-600 cursor-pointer py-1">Loyalty</div>
          <div className="hover:text-emerald-600 cursor-pointer py-1">Support</div>
          <Link href="#business" className="block hover:text-emerald-600 py-1">Our Business Experience</Link>
          <Link href="#offers" className="block hover:text-emerald-600 py-1">Exclusive offers</Link>
<div className="pt-4 border-t border-slate-200 flex items-center gap-4">
            <Link href="/login" className="flex-1 text-center py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold">
              Sign in
            </Link>
            <Link href="/register" className="flex-1 text-center py-2.5 rounded-xl bg-emerald-600 text-white font-bold">
              Join now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
