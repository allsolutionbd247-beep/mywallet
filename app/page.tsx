"use client";

import { useState } from "react";
import Header from "@/components/Header";
import WalletCard from "@/components/WalletCard";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Link from "next/link";


export default function Home() {
  const [showCookie, setShowCookie] = useState(true);

  return (
    <main className="min-h-screen bg-[#06152f] text-white">

      <Header />

      <Hero />

      <Stats />


      {/* Features */}
      <section className="px-6 py-16 md:px-12">

        <h2 className="text-center text-3xl font-bold">
          Why Choose My Wallet
        </h2>


        <div className="mt-10 grid gap-6 md:grid-cols-4">

          {[
            "Global Payment",
            "Fast Transfer",
            "Swiff Bank Level Security",
            "24/7 Support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur"
            >
              <h3 className="font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

{/* Cookie */}
      <div className="fixed bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/70 p-5 backdrop-blur md:left-auto md:w-[420px]">

        <p className="text-sm text-gray-200">
          🍪 We use cookies to improve your experience and security.
        </p>

        <div className="mt-4 flex gap-3">
          <button className="rounded-full bg-blue-600 px-5 py-2">
            Accept All
          </button>

          <button className="rounded-full border border-white/30 px-5 py-2">
            Settings
          </button>
        </div>

      </div>
{/* Security Section */}
<section className="px-6 py-16 md:px-12">
  <h2 className="text-center text-3xl font-bold">
    Bank Level Security
  </h2>

  <div className="mt-10 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
      🔒
      <h3 className="mt-3 text-xl font-semibold">
        Secure Protection
      </h3>
      <p className="mt-2 text-gray-300">
        Your wallet and transactions stay protected.
      </p>
    </div>

    <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
      🌍
      <h3 className="mt-3 text-xl font-semibold">
        Global Payment
      </h3>
      <p className="mt-2 text-gray-300">
        Fast and reliable digital payments worldwide.
      </p>
    </div>

    <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
      ⚡
      <h3 className="mt-3 text-xl font-semibold">
        Fast Transfer
      </h3>
      <p className="mt-2 text-gray-300">
        Send and receive money quickly.
      </p>
    </div>

  </div>
</section>


{/* How It Works */}
<section className="px-6 py-16 md:px-12">

  <h2 className="text-center text-3xl font-bold">
    How My Wallet Works
  </h2>

  <div className="mt-10 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl bg-white/10 p-6 text-center">
      <h3 className="text-xl font-bold">01</h3>
      <p>Create Your Account</p>
    </div>

    <div className="rounded-2xl bg-white/10 p-6 text-center">
      <h3 className="text-xl font-bold">02</h3>
      <p>Add Balance & Manage Wallet</p>
    </div>

    <div className="rounded-2xl bg-white/10 p-6 text-center">
      <h3 className="text-xl font-bold">03</h3>
      <p>Make Secure Payments</p>
    </div>

  </div>

</section>


{/* Footer */}
<footer className="border-t border-white/20 px-6 py-10 text-center">

  <h2 className="text-2xl font-bold">
    💳 My Wallet
  </h2>

  <p className="mt-3 text-gray-300">
    Secure Digital Wallet Platform
  </p>

  <div className="mt-5 flex justify-center gap-6 text-sm">
    <span>Privacy Policy</span>
    <span>Terms</span>
    <span>Support</span>
  </div>

</footer>
    </main>
  );
}


    