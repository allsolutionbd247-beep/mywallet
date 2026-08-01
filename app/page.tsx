"use client";

import { useState } from "react";
import Header from "@/components/Header";
import WalletCard from "@/components/WalletCard";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Link from "next/link";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06152f] text-white">

      <Header />

      <Hero />

      <Stats />

     {/* Features */}
      <section className="px-6 py-16 md:px-12 bg-[#064e3b]">
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

      {/* Security Section */}
      <section className="px-6 py-16 md:px-12 bg-[#064e3b]">
        <h2 className="text-center text-3xl font-bold">
          Swift Bank Level Security
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
      <section className="px-6 py-16 md:px-12 bg-[#064e3b]">
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

      <Footer />

      <CookieConsent />

    </main>
  );
}