"use client";

import { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await res.json();

if (res.ok) {
  localStorage.setItem("userId", data.user.id);
  window.location.href = "/dashboard";
} else {
  alert(data.error);
}
};

  return (
    <div className="min-h-screen bg-[#007a43] flex flex-col justify-between p-6">
      {/* Top Navigation / Home Button */}
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto">
        <Link 
          href="/"
          className="flex items-center gap-1.5 text-xs bg-black/20 hover:bg-black/30 px-3 py-1.5 rounded-lg transition text-white border border-white/20 shrink-0 cursor-pointer"
        >
          <Home size={14} /> Home
        </Link>
      </div>

      {/* Main Login Card Container (Navy Blue Box on Dark Green Background) */}
      <div className="flex flex-col items-center justify-center my-auto py-8">
        <div className="bg-[#1e293b] text-white w-full max-w-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Log in to your My Wallet account
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mb-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-amber-400 hover:underline font-medium">
              Register
            </Link>
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                required
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pr-12 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs cursor-pointer focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-sm rounded-xl transition duration-200 cursor-pointer shadow-lg mt-2"
            >
              Log in
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-xs text-amber-400 hover:underline">
              Forgot your password?
            </Link>
          </div>
<div className="mt-2 text-center">
  <Link
    href="/reset-security-pin"
    className="text-sm text-emerald-400 hover:underline"
  >
    Reset Security PIN
  </Link>
</div>

        </div>
      </div>




{/* Footer / Privacy & Compliance Notice */}
      <footer className="w-full max-w-4xl mx-auto text-center text-[11px] text-white/80 space-y-2 py-4 border-t border-white/15">
        <div className="flex flex-wrap justify-center gap-4 text-white/90 font-medium">
          <Link href="/privacy" className="hover:underline">Privacy Notice</Link>
          <span>•</span>
          <Link href="/cookies" className="hover:underline">Cookies Notice</Link>
          <span>•</span>
          <Link href="/settings" className="hover:underline">Cookies Settings</Link>
          <span>•</span>
          <Link href="/requests" className="hover:underline">Personal Data Requests</Link>
        </div>
        <p className="leading-relaxed">
          Copyright 2026 Paysafe Holdings UK Limited. All rights reserved. My Wallet® and Net+® are registered trademarks of Paysafe Holdings UK Limited. Paysafe Financial Services Limited is registered in England and Wales.
        </p>
      </footer>
    </div>
  );
}