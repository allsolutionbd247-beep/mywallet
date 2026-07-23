"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12">

      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        💳 My Wallet
      </div>


      {/* Desktop Menu */}
      <nav className="hidden items-center gap-8 text-sm text-gray-200 md:flex">

        <a href="/" className="hover:text-white">
          Home
        </a>

        <a href="/" className="hover:text-white">
          Wallet
        </a>

        <a href="/" className="hover:text-white">
          Payments
        </a>

        <a href="/" className="hover:text-white">
          Security
        </a>

      </nav>


      {/* Right Buttons */}
      <div className="hidden items-center gap-1 md:flex">

        <button className="rounded-full border border-white/30 px-3 py-1 text-sm text-white">
          🌐 English
        </button>

        <button className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white">
          Login
        </button>

      </div>

<div className="flex items-center gap-1 md:hidden">

  <button className="rounded-full border border-white/30 px-3 py-1 text-sm text-white">
    🌐 EN
  </button>

  <button
    onClick={() => setOpen(!open)}
className="relative z-[110] text-3xl text-white"
  >
    ☰
  </button>

</div>

{/* Mobile Menu */}
{open && (
  <div className="absolute right-6 top-20 z-[100] w-64 rounded-2xl border border-white/20 bg-black/80 p-6 backdrop-blur md:hidden">
    <div className="flex flex-col gap-5 text-gray-200">
      <a href="/">Home</a>
      <a href="/">Wallet</a>
      <a href="/">Payments</a>
      <a href="/">Security</a>

      <button className="rounded-full bg-blue-600 px-5 py-2">
        Login
      </button>
    </div>
  </div>
)}

</header>
);
}
