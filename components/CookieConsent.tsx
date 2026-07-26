"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "all");
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Text description */}
        <div className="text-sm text-slate-300 leading-relaxed flex items-center gap-3">
          <span className="text-xl">🍪</span>
          <p>
            We use cookies to improve your experience and security. By clicking <span className="text-white font-semibold">Accept all</span>, you agree to this, as outlined in our <Link href="#" className="text-emerald-400 underline hover:text-emerald-300">Cookie Notice</Link>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto justify-end">
          <button
            onClick={handleRejectAll}
            className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-sm font-semibold text-slate-300 hover:text-white transition w-full sm:w-auto text-center"
          >
            Settings
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-bold transition shadow-lg shadow-emerald-500/20 w-full sm:w-auto text-center font-bold"
          >
            Accept all
          </button>
        </div>

      </div>
    </div>
  );
}