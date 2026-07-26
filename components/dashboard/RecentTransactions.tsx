"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronDown,
  History,
} from "lucide-react";

interface Transaction {
  id: string;
  title: string;
  type: "send" | "receive";
  amount: string;
  date: string;
  status: "Completed" | "Pending" | "Failed";
}

export default function RecentTransactions() {
  const allTransactions: Transaction[] = [
    {
      id: "TXN982345",
      title: "Received from BDT Wallet",
      type: "receive",
      amount: "+ ৳ 1,500.00",
      date: "25 Jul 2026, 02:15 PM",
      status: "Completed",
    },
    {
      id: "TXN982344",
      title: "Send to USD Wallet",
      type: "send",
      amount: "- $ 25.00",
      date: "24 Jul 2026, 08:45 PM",
      status: "Completed",
    },
    {
      id: "TXN982343",
      title: "Payment Transfer",
      type: "send",
      amount: "- ৳ 500.00",
      date: "23 Jul 2026, 11:10 AM",
      status: "Pending",
    },
    {
      id: "TXN982342",
      title: "Merchant Cash Out",
      type: "send",
      amount: "- ৳ 2,000.00",
      date: "22 Jul 2026, 04:30 PM",
      status: "Completed",
    },
    {
      id: "TXN982341",
      title: "Received Bonus",
      type: "receive",
      amount: "+ ৳ 100.00",
      date: "21 Jul 2026, 10:00 AM",
      status: "Completed",
    },
    {
      id: "TXN982340",
      title: "Received from EUR Wallet",
      type: "receive",
      amount: "+ € 50.00",
      date: "20 Jul 2026, 06:12 PM",
      status: "Completed",
    },
    {
      id: "TXN982339",
      title: "Utility Bill Payment",
      type: "send",
      amount: "- ৳ 1,200.00",
      date: "19 Jul 2026, 01:20 PM",
      status: "Failed",
    },
    {
      id: "TXN982338",
      title: "Send to Bank Account",
      type: "send",
      amount: "- ৳ 5,000.00",
      date: "18 Jul 2026, 09:40 AM",
      status: "Completed",
    },
    {
      id: "TXN982337",
      title: "Add Money via Card",
      type: "receive",
      amount: "+ ৳ 3,000.00",
      date: "17 Jul 2026, 11:05 PM",
      status: "Completed",
    },
    {
      id: "TXN982336",
      title: "Refund Processed",
      type: "receive",
      amount: "+ ৳ 450.00",
      date: "16 Jul 2026, 03:50 PM",
      status: "Completed",
    },
  ];

  const [visibleCount, setVisibleCount] = useState<number>(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="w-[90%] max-w-[560px] mx-auto mt-6 mb-10 bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h3 className="text-base font-semibold text-gray-800">
          Recent Transactions
        </h3>

        <button
          onClick={() => alert("Redirecting to Transaction History page...")}
          className="text-xs font-medium text-emerald-600 hover:text-emerald-700 transition flex items-center gap-1"
        >
          <History size={14} /> Full History
        </button>
      </div>

      {/* Transaction List */}
      <div className="flex flex-col gap-3 mt-4">
        {allTransactions.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition border border-gray-100/70"
          >
            {/* Left: Icon and Details */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                  item.type === "receive"
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-rose-100 text-rose-600"
                }`}
              >
                {item.type === "receive" ? (
                  <ArrowDownLeft size={20} />
                ) : (
                  <ArrowUpRight size={20} />
                )}
              </div>
<div>
                <h4 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>ID: {item.id}</span>
                </div>
              </div>
            </div>

            {/* Right: Amount and Status */}
            <div className="text-right">
              <p
                className={`text-sm font-bold ${
                  item.type === "receive" ? "text-emerald-600" : "text-gray-900"
                }`}
              >
                {item.amount}
              </p>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                {item.status === "Completed" && (
                  <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-0.5">
                    <CheckCircle2 size={11} /> Completed
                  </span>
                )}
                {item.status === "Pending" && (
                  <span className="text-[10px] text-amber-500 font-medium flex items-center gap-0.5">
                    <Clock size={11} /> Pending
                  </span>
                )}
                {item.status === "Failed" && (
                  <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5">
                    <XCircle size={11} /> Failed
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allTransactions.length && (
        <div className="mt-5 text-center border-t border-gray-100 pt-3">
          <button
            onClick={handleLoadMore}
            className="w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition border border-gray-200"
          >
            Load More Transactions <ChevronDown size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
