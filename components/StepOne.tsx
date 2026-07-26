"use client";

import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

interface StepOneProps {
  country: string;
  setCountry: (val: string) => void;
  currency: string;
  setCurrency: (val: string) => void;
  inviteCode: string;
  setInviteCode: (val: string) => void;
  onNext: (e: React.FormEvent) => void;
}

export default function StepOne({
  country,
  setCountry,
  currency,
  setCurrency,
  inviteCode,
  setInviteCode,
  onNext,
}: StepOneProps) {
  return (
    <div className="flex flex-col justify-between h-full">
      <form onSubmit={onNext} className="flex flex-col justify-between space-y-4">
        <div>
          {/* Home Button and Header Section */}
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/"
              className="flex items-center gap-1.5 text-xs bg-black/20 hover:bg-black/30 px-3 py-1.5 rounded-lg transition text-white border border-white/20 shrink-0 cursor-pointer"
            >
              <Home size={14} /> Home
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white">Set up your My Wallet account</h3>
            <span className="text-xs sm:text-sm text-white/80">
              Already have an account?{" "}
              <Link href="/login" className="text-amber-300 font-medium hover:underline">
                Log in
              </Link>
            </span>
          </div>

          <p className="text-xs text-white/80 mb-4 sm:mb-6">
            Regulations require that we collect some information before you can claim your money.
          </p>

          {/* Country selection */}
          <div className="mb-4">
            <label className="block text-xs text-white/80 mb-1">Country of residence</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 bg-black/20 border border-white/30 rounded-lg text-sm text-white focus:outline-none focus:border-amber-300"
            >
              <option className="bg-[#007a43]" value="Bangladesh">Bangladesh</option>
              <option className="bg-[#007a43]" value="India">India</option>
              <option className="bg-[#007a43]" value="Thailand">Thailand</option>
              <option className="bg-[#007a43]" value="Nepal">Nepal</option>
              <option className="bg-[#007a43]" value="Pakistan">Pakistan</option>
              <option className="bg-[#007a43]" value="Bhutan">Bhutan</option>
              <option className="bg-[#007a43]" value="Sri Lanka">Sri Lanka</option>
              <option className="bg-[#007a43]" value="Myanmar">Myanmar</option>
              <option className="bg-[#007a43]" value="Maldives">Maldives</option>
              <option className="bg-[#007a43]" value="Malaysia">Malaysia</option>
            </select>
          </div>

          {/* Currency selection */}
          <div className="mb-4">
            <label className="block text-xs text-white/80 mb-1">Primary account currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-3 bg-black/20 border border-white/30 rounded-lg text-sm text-white focus:outline-none focus:border-amber-300"
            >
              <option className="bg-[#007a43]" value="BDT">BDT (Bangladeshi Taka)</option>
              <option className="bg-[#007a43]" value="INR">INR (Indian Rupee)</option>
              <option className="bg-[#007a43]" value="EUR">EUR (Euro)</option>
              <option className="bg-[#007a43]" value="USD">USD (US Dollar)</option>
<option className="bg-[#007a43]" value="NPR">NPR (Nepalese Rupee)</option>
              <option className="bg-[#007a43]" value="THB">THB (Thai Baht)</option>
              <option className="bg-[#007a43]" value="PKR">PKR (Pakistani Rupee)</option>
              <option className="bg-[#007a43]" value="LKR">LKR (Sri Lankan Rupee)</option>
              <option className="bg-[#007a43]" value="MMK">MMK (Myanmar Kyat)</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Invitation code (optional)"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              className="w-full p-3 bg-black/25 border border-white/30 rounded-lg text-sm text-white placeholder-white/60 focus:outline-none focus:border-amber-300"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-xs text-white/80 mb-4">
            We'll encrypt your data and store it securely in compliance with the law.
          </p>
          <button
            type="submit"
            className="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-sm rounded-lg transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            Next <ArrowRight size={18} />
          </button>
        </div>
      </form>

      {/* Step One Footer / Legal Notice Section */}
      <footer className="w-full text-center text-[10px] text-white/70 space-y-2 pt-6 mt-6 border-t border-white/15">
        <div className="flex flex-wrap justify-center gap-3 text-white/90 font-medium">
          <Link href="/privacy" className="hover:underline">Privacy Notice</Link>
          <span>•</span>
          <Link href="/cookies" className="hover:underline">Cookies Notice</Link>
          <span>•</span>
          <Link href="/settings" className="hover:underline">Cookies Settings</Link>
          <span>•</span>
          <Link href="/requests" className="hover:underline">Personal Data Requests</Link>
        </div>
        <p className="leading-relaxed">
          Copyright 2026 My Wallet VIP & Affiliates. All rights reserved. My Wallet® and My Wallet VIP® are registered trademarks of My Wallet Holdings Limited. My Wallet Financial Services Limited is registered and regulated for electronic money and digital payment instruments.
        </p>
      </footer>
    </div>
  );
}
