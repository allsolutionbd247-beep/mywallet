"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronDown,
  Send,
  ArrowDownLeft,
  Coins,
  PlusCircle,
  Trash2,
  RotateCw,
} from "lucide-react";

interface Wallet {
  id: string;
  name: string;
  balance: string;
  isPrimary: boolean;
}

export default function DashboardWalletCards() {
  const [showBalance, setShowBalance] = useState(true);
  const [openWallet, setOpenWallet] = useState<string | null>(null);
  const [flippedWallet, setFlippedWallet] = useState<string | null>(null);

  const [wallets, setWallets] = useState<Wallet[]>([
    {
      id: "BDT577654",
      name: "BDT Wallet",
      balance: "৳ 0.00",
      isPrimary: true,
    },
    {
      id: "U98726653",
      name: "USD Wallet",
      balance: "$ 0.00",
      isPrimary: false,
    },
    {
      id: "E65544675",
      name: "EUR Wallet",
      balance: "€ 0.00",
      isPrimary: false,
    },
  ]);

  const handleAddWallet = () => {
  const additionalWallets = wallets.filter((w) => !w.isPrimary).length;

  if (additionalWallets >= 2) {
    alert("You can only add up to 2 additional wallets (Total 3)!");
    return;
  }
  alert("Open Add Wallet Modal");
};

  const handleDeleteWallet = (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this wallet?"
    );
    if (confirmDelete) {
      setWallets(wallets.filter((w) => w.id !== id));
      setFlippedWallet(null);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-5 mt-8 py-8 rounded-3xl bg-gradient-to-br from-green-50 via-white to-emerald-100 shadow-inner">
      {wallets.map((wallet) => {
        const isFlipped = flippedWallet === wallet.id;

        return (
          <div
            key={wallet.id}
            className="w-[90%] max-w-[560px] bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all duration-500"
          >
            {/* FRONT SIDE */}
            {!isFlipped ? (
              <div>
                {/* Wallet Header */}
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {wallet.name}
                      </h2>
                      {wallet.isPrimary && (
                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          Primary
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      Wallet ID: {wallet.id}
                    </p>
                  </div>

                  {/* Top Right Toggle Arrow */}
                  <button
                    onClick={() =>
                      setOpenWallet(
                        openWallet === wallet.id ? null : wallet.id
                      )
                    }
                    className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 transition"
                  >
                    {openWallet === wallet.id ? (
                      <ChevronDown size={26} />
                    ) : (
                      <ChevronLeft size={26} />
                    )}
                  </button>
                </div>

                {/* Balance Section */}
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-500">Balance</p>

                  <div className="flex items-center gap-3 mt-1">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {showBalance ? wallet.balance : "••••••"}
                    </h1>

                    <button onClick={() => setShowBalance(!showBalance)}>
                      {showBalance ? <Eye size={21} /> : <EyeOff size={21} />}
                    </button>
                  </div>
                </div>
{/* Expand Menu */}
                <div
                  className={`transition-all duration-300 overflow-hidden px-5 ${
                    openWallet === wallet.id
                      ? "max-h-80 opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-2.5 pt-2 border-t border-gray-100">
                    {/* 1. Send Money */}
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-sm text-sm">
                      <Send size={18} />
                      Send Money
                    </button>

                    {/* 2. Request Money */}
                    <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition text-sm">
                      <ArrowDownLeft size={18} />
                      Request Money
                    </button>

                    {/* 3. Token Received */}
                    <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition text-sm">
                      <Coins size={18} />
                      Token Received
                    </button>

                    {/* Bottom Arrow (Flip to Back) */}
                    <div className="flex justify-center pt-2">
                      <button
                        onClick={() => setFlippedWallet(wallet.id)}
                        className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 transition shadow-sm"
                        title="More Options"
                      >
                        <ChevronDown size={22} className="animate-bounce" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* BACK SIDE */
              <div className="p-5 flex flex-col justify-between min-h-[240px]">
                <div>
                  <div className="flex justify-between items-center mb-3 border-b pb-2">
                    <h3 className="font-semibold text-gray-800">
                      {wallet.name} Management
                    </h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      Settings
                    </span>
                  </div>

                  <div className="py-4 flex flex-col items-center justify-center gap-3">
                    {wallet.isPrimary ? (
                      <button
                        onClick={handleAddWallet}
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition text-sm shadow-sm"
                      >
                        <PlusCircle size={18} />
                        Add New Wallet (Max 2)
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDeleteWallet(wallet.id)}
                        className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-xl border border-red-200 flex items-center justify-center gap-2 transition text-sm"
                      >
                        <Trash2 size={18} />
                        Delete This Wallet
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex justify-center pt-2 border-t border-gray-100">
<button
                    onClick={() => setFlippedWallet(null)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl text-xs font-medium hover:bg-gray-900 transition"
                  >
                    <RotateCw size={14} /> Back to Front
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}