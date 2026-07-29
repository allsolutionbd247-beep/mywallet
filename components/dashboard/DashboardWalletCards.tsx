"use client";
import SendMoney from "./SendMoney";

import { useState, useEffect } from "react";
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
  currency: string;
  isPrimary: boolean;
}
const formatCurrency = (amount: number, currency: string) => {
  const symbols: Record<string, string> = {
    BDT: "৳",
    USD: "$",
    EUR: "€",
    INR: "₹",
    NPR: "रु",
    THB: "฿",
    PKR: "₨",
    LKR: "Rs",
    MMK: "K",
  };

  return `${symbols[currency] || currency}${Number(amount).toLocaleString()}`;
};

export default function DashboardWalletCards() {
  const [showBalance, setShowBalance] = useState(true);
  const [openWallet, setOpenWallet] = useState<string | null>(null);
  const [flippedWallet, setFlippedWallet] = useState<string | null>(null);
  const [showMoreActivity, setShowMoreActivity] = useState(false);
  const [openSettings, setOpenSettings] = useState<string | null>(null);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [showAddWallet, setShowAddWallet] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [showSendMoney, setShowSendMoney] = useState(false);
  const [receiverMethod, setReceiverMethod] = useState("");
  const [rememberReceiverMethod, setRememberReceiverMethod] = useState(false);
  const [savedReceiverMethod, setSavedReceiverMethod] = useState("");
  const [copiedWalletId, setCopiedWalletId] = useState<string | null>(null);
  const remainingWallets =
  2 - wallets.filter((w) => !w.isPrimary).length;
  const allCurrencies = [
  "BDT",
  "USD",
  "EUR",
  "INR",
  "NPR",
  "THB",
  "PKR",
  "LKR",
  "MMK",
];

const usedCurrencies = wallets.map(
  (wallet) => wallet.currency
);

const availableCurrencies = allCurrencies.filter(
  (currency) => !usedCurrencies.includes(currency)
);


  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const userId = localStorage.getItem("userId");

        const response = await fetch(
          `/api/wallet?userId=${userId}`
        );

        const data = await response.json();

        if (data.wallets) {
          setWallets(
            data.wallets.map((wallet: any) => ({
              id: wallet.walletId,
              name: `${wallet.currency} Wallet`,
              balance: wallet.balance.toString(),
              currency: wallet.currency,
              isPrimary: wallet.isPrimary,
            }))
          );
        }

      } catch (error) {
        console.error("Wallet fetch error:", error);
      }
    };

    fetchWallet();
  }, []);


  const handleAddWallet = () => {
    const additionalWallets = wallets.filter((w) => !w.isPrimary).length;

    if (additionalWallets >= 2) {
      alert("You can only add up to 2 additional wallets (Total 3)!");
      return;
    }

    setShowAddWallet(true);
  };
const handleCreateWallet = async () => {
  if (!selectedCurrency) {
    alert("Please select currency");
    return;
  }

  try {
    const userId = localStorage.getItem("userId");

    const response = await fetch("/api/wallet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        currency: selectedCurrency,
      }),
    });

    const data = await response.json();

    if (data.wallet) {
      setWallets((prev) => [
        ...prev,
        {
          id: data.wallet.walletId,
          name: `${data.wallet.currency} Wallet`,
          balance: data.wallet.balance.toString(),
          currency: data.wallet.currency,
          isPrimary: data.wallet.isPrimary,
        },
      ]);

      setShowAddWallet(false);
      setSelectedCurrency("");
    }
  } catch (error) {
    console.error("Create wallet error:", error);
  }
};

  const handleDeleteWallet = async (wallet: Wallet) => {
  if (wallet.isPrimary) {
    alert("Primary wallet cannot be deleted.");
    return;
  }

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this wallet?"
  );

  if (confirmDelete) {
    try {
      const response = await fetch(
        `/api/wallet?walletId=${wallet.id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        setWallets(
          wallets.filter((w) => w.id !== wallet.id)
        );
        setFlippedWallet(null);
      }
    } catch (error) {
      console.error("Delete wallet error:", error);
    }
  }
};
const handleCopyWalletId = async (id: string) => {
  try {
    await navigator.clipboard.writeText(id);

    setCopiedWalletId(id);

    setTimeout(() => {
      setCopiedWalletId(null);
    }, 2000);

  } catch (error) {
    console.error("Copy error:", error);
  }
};
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-5 mt-8 py-8 rounded-3xl bg-gradient-to-br from-green-50 via-white to-emerald-100 shadow-inner">
      {wallets.map((wallet) => {
        const isFlipped = flippedWallet === wallet.id;

        return (
          <div
            key={wallet.id}
           className="w-[90%] max-w-[560px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500"
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
                        <button className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          Primary
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
  <span>
    Wallet ID: {wallet.id}
  </span>

  <button
    onClick={() => handleCopyWalletId(wallet.id)}
    className="text-gray-500 hover:text-green-600 transition cursor-pointer"
    title="Copy Wallet ID"
  >
  <>
  ⧉
  {copiedWalletId === wallet.id && (
  <span className="text-xs text-gray-600 ml-1">
    Copied
  </span>
)}
</>
  </button>
</div>

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
    <div className="flex items-baseline gap-2">
     <span className="text-3xl font-bold text-gray-900">
  {showBalance
    ? formatCurrency(0, wallet.currency)
        .replace("0", "")
    : "•"}
</span>
<span className="text-2xl font-bold text-gray-900">
  {showBalance
    ? Number(wallet.balance).toFixed(2)
    : "••••••"}
</span>
    </div>

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
<button
  onClick={() => setShowSendMoney(true)}
  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-sm text-sm"
>
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
  {openSettings === wallet.id
    ? "Wallet Activity"
    : `${wallet.name} Management`}
</h3>

  {openSettings === wallet.id ? (
    <button
      onClick={() => setOpenSettings(null)}
      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium hover:bg-green-200 transition cursor-pointer"
    >
      🔄 Back
    </button>
 ) : (
  wallet.isPrimary && (
    <button
      onClick={() =>
        setOpenSettings(
          openSettings === wallet.id ? null : wallet.id
        )
      }
      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium hover:bg-green-200 transition cursor-pointer"
    >
      Settings
    </button>
  )
)}


</div>
{wallet.isPrimary && openSettings === wallet.id && (
  <div className="mt-3 rounded-xl bg-gray-100 p-3 max-h-[150px] overflow-y-auto">

    <p className="text-sm font-semibold text-gray-800">
      Wallet Activity
    </p>

    <div className="mt-3 space-y-2">

      <div className="rounded-lg bg-white p-3 shadow-sm">
        <p className="text-sm font-semibold text-gray-800">
          USD Wallet Created
        </p>
        <p className="text-xs text-gray-500">
          27 July 2026 • 10:30 PM
        </p>
      </div>

    </div>
<button
  onClick={() => setShowMoreActivity(!showMoreActivity)}
  className="mt-3 text-xs font-medium text-green-700 hover:text-green-800 transition"
>
  {showMoreActivity ? "Show Less" : "Show More"}
</button>
  </div>
)}
                  <div className="py-4 flex flex-col items-center justify-center gap-3">

      <button
       className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition text-sm shadow-sm"
   >
      History
   </button>

   {wallet.isPrimary ? (
                      <button
                        onClick={handleAddWallet}
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition text-sm shadow-sm"
                      >
                        <PlusCircle size={18} />
                        {remainingWallets > 0
                ? `Add New Wallet (Max ${remainingWallets})`
                   : "Maximum Wallet Reached"}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDeleteWallet(wallet)}
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


      
      {showAddWallet && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-5 w-[85%] max-w-md shadow-xl">

      <h2 className="text-lg font-semibold mb-4">
        Add New Wallet
      </h2>

      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        className="w-full border rounded-xl p-2 text-sm"
      >
        <option value="">
          Select Currency
        </option>

        {availableCurrencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}

      </select>

      <div className="flex gap-2 mt-4">

        <button
          onClick={handleCreateWallet}
          className="flex-1 bg-emerald-600 text-white py-2 rounded-xl text-sm font-medium"
        >
          Create Wallet
        </button>

        <button
          onClick={() => setShowAddWallet(false)}
          className="flex-1 bg-gray-200 py-2 rounded-xl text-sm font-medium text-gray-700"
        >
          Cancel
        </button>

      </div>

    </div>
  </div>
)}


{showSendMoney && (
  <SendMoney
    onClose={() => setShowSendMoney(false)}
  />
)}

</div>
);
}