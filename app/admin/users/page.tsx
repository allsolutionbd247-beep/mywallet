"use client";

import { useState } from "react";
import { Search, CircleDollarSign, Copy } from "lucide-react";

export default function UserManagementPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [copiedToken, setCopiedToken] = useState("");
  const [ipBlocked, setIpBlocked] = useState(false);

  const transactions = [
    {
      date: "30-07-2026 10:30",
      type: "Deposit",
      from: "Merchant A",
      to: "Rahim Wallet",
      amount: "৳ 5,000",
      token: "TXN-10001",
      status: "Completed",
    },
    {
      date: "30-07-2026 11:20",
      type: "Transfer",
      from: "Rahim Wallet",
      to: "Karim Wallet",
      amount: "৳ 1,000",
      token: "TXN-10002",
      status: "Completed",
    },
    {
      date: "30-07-2026 12:10",
      type: "Withdraw",
      from: "Rahim Wallet",
      to: "Bank Account",
      amount: "৳ 2,000",
      token: "TXN-10003",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          User Management & Ledger
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage users, wallets and ledger information.
        </p>
      </div>


      {/* Search Box */}
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Wallet ID, Email, Account Name"
            className="w-full border border-gray-200 rounded-xl px-11 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />


          {/* Design Icon Only */}
          <CircleDollarSign
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600"
          />

        </div>

      </div>



      {/* User Table */}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">


        <div className="p-5 border-b">

          <h3 className="font-bold text-gray-800">
            User List
          </h3>

        </div>



        <div className="overflow-x-auto">

          <table className="w-full text-sm">


            <thead className="bg-gray-50 text-gray-500">

              <tr>

                <th className="p-4 text-left">
                  Account Name
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Wallet ID
                </th>

                <th className="p-4 text-left">
                  Date of Birth
                </th>

                <th className="p-4 text-left">
                  Balance
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Action
                </th>

              </tr>

            </thead>



            <tbody>


              <tr className="border-t">


                <td className="p-4 font-medium">
                  Rahim Ahmed
                </td>


                <td className="p-4">
                  rahim@email.com
                </td>


                <td className="p-4">
                  WAL-100245
                </td>


                <td className="p-4">
                  12-05-1998
                </td>


                <td className="p-4 font-bold">
                  ৳ 25,000
                </td>


                <td className="p-4">

                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs">
                    Active
                  </span>

                </td>


                <td className="p-4">

                  <button
                    onClick={() => setShowDetails(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs transition"
                  >
                    View
                  </button>

                </td>


              </tr>


            </tbody>


          </table>


        </div>


      </div>
      {/* User Overview Dashboard */}

      {showDetails && (

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">


          <div className="flex justify-between items-center mb-6">


            <div>

              <h3 className="text-xl font-bold text-gray-800">
                User Overview
              </h3>

              <p className="text-sm text-gray-500">
                Account information and wallet asset overview
              </p>

            </div>



            <button
              onClick={() => setShowDetails(false)}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Close
            </button>


          </div>




          {/* User Information */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


            <div className="bg-gray-50 p-4 rounded-xl">

              <p className="text-xs text-gray-500">
                Account Name
              </p>

              <p className="font-bold mt-1">
                Rahim Ahmed
              </p>

            </div>



            <div className="bg-gray-50 p-4 rounded-xl">

              <p className="text-xs text-gray-500">
                Email
              </p>

              <p className="font-bold mt-1">
                rahim@email.com
              </p>

            </div>



            <div className="bg-gray-50 p-4 rounded-xl">

              <p className="text-xs text-gray-500">
                Wallet ID
              </p>

              <p className="font-bold mt-1">
                WAL-100245
              </p>

            </div>



            <div className="bg-emerald-50 p-4 rounded-xl">

              <p className="text-xs text-emerald-600">
                Status
              </p>

              <p className="font-bold text-emerald-700 mt-1">
                Active
              </p>

            </div>


          </div>


        {/* Wallet Asset Overview */}

<div className="mt-6">

  <h4 className="font-bold text-gray-800 mb-3">
    Wallet Asset Overview
  </h4>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


    <div className="bg-blue-50 p-5 rounded-xl">

      <p className="text-xs text-blue-600">
        BDT Wallet
      </p>

      <h3 className="text-2xl font-bold mt-2">
        ৳ 25,000
      </h3>

    </div>



    <div className="bg-purple-50 p-5 rounded-xl">

      <p className="text-xs text-purple-600">
        USD Wallet
      </p>

      <h3 className="text-2xl font-bold mt-2">
        $200
      </h3>

    </div>



    <div className="bg-orange-50 p-5 rounded-xl">

      <p className="text-xs text-orange-600">
        Total Transaction
      </p>

      <h3 className="text-2xl font-bold mt-2">
        124
      </h3>

    </div>


  </div>


</div>

{/* Transaction Summary */}

<div className="mt-6">

  <h4 className="font-bold text-gray-800 mb-3">
    Transaction Summary
  </h4>


  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


    <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">

      <p className="text-xs text-emerald-600">
        Total Deposit
      </p>

      <h3 className="text-2xl font-bold mt-2 text-gray-800">
        ৳ 80,000
      </h3>

    </div>



    <div className="bg-red-50 p-5 rounded-xl border border-red-100">

      <p className="text-xs text-red-600">
        Total Withdraw
      </p>

      <h3 className="text-2xl font-bold mt-2 text-gray-800">
        ৳ 25,000
      </h3>

    </div>



    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">

      <p className="text-xs text-blue-600">
        Total Transfer
      </p>

      <h3 className="text-2xl font-bold mt-2 text-gray-800">
        ৳ 45,000
      </h3>

    </div>



    <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">

      <p className="text-xs text-purple-600">
        Transaction Count
      </p>

      <h3 className="text-2xl font-bold mt-2 text-gray-800">
        124
      </h3>

    </div>


  </div>

</div>

{/* Login History Timeline */}
<div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm p-6">

  <h4 className="font-bold text-gray-800 mb-4">
    Login History
  </h4>

  <div className="space-y-4">

    <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-lg">

      <h5 className="font-semibold text-gray-800">
        🟢 30-07-2026 10:30 AM
      </h5>

      <p className="text-sm text-gray-600 mt-1">
        🇧🇩 Bangladesh - Dhaka
      </p>

      <p className="text-sm text-gray-600">
        IP: 192.168.1.105
      </p>

      <p className="text-sm text-gray-600">
        Device: Android Chrome
      </p>

    </div>


    <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg">

      <h5 className="font-semibold text-gray-800">
        🟢 29-07-2026 08:15 PM
      </h5>

      <p className="text-sm text-gray-600 mt-1">
        🇮🇳 India - Delhi
      </p>

      <p className="text-sm text-gray-600">
        IP: 103.45.xxx.xxx
      </p>

      <p className="text-sm text-gray-600">
        Device: Windows Chrome
      </p>

    </div>

  </div>

</div>


{/* User Transaction Ledger */}
<div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

  <div className="p-5 border-b">

    <h4 className="font-bold text-gray-800">
      Transaction Ledger
    </h4>

    <p className="text-sm text-gray-500 mt-1">
      Complete user transaction history and balance movement
    </p>


    {/* Transaction Filter */}

    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">

      <input
        type="text"
        placeholder="Search Token ID, Wallet ID..."
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />


      <select
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>
          All Transaction Type
        </option>

        <option>
          Deposit
        </option>

        <option>
          Transfer
        </option>

        <option>
          Withdraw
        </option>

      </select>


      <select
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      >

        <option>
          All Status
        </option>

        <option>
          Completed
        </option>

        <option>
          Pending
        </option>

        <option>
          Failed
        </option>

      </select>

    </div>

  </div>


  {/* Transaction Table */}
<div className="overflow-x-auto mt-6">
  <table className="w-full text-sm">
    <thead className="bg-gray-50 text-gray-500">
      <tr>
        <th className="p-4 text-left">Date & Time</th>
        <th className="p-4 text-left">Type</th>
        <th className="p-4 text-left">From</th>
        <th className="p-4 text-left">To</th>
        <th className="p-4 text-left">Amount</th>
        <th className="p-4 text-left">Token ID</th>
        <th className="p-4 text-left">Status</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map((transaction, index) => (
        <tr key={index} className="border-t">

          {/* Date & Time */}
          <td className="p-4">
            {transaction.date}
          </td>

          {/* Type */}
          <td className="p-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                transaction.type === "Deposit"
                  ? "bg-emerald-100 text-emerald-700"
                  : transaction.type === "Transfer"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {transaction.type}
            </span>
          </td>

          {/* From */}
          <td className="p-4">
            {transaction.from}
          </td>

          {/* To */}
          <td className="p-4">
            {transaction.to}
          </td>

          {/* Amount */}
          <td className="p-4 font-bold">
            {transaction.amount}
          </td>

          {/* Token ID + Copy */}
          <td className="p-4">
            <div className="flex items-center gap-2">

              <span>
                {transaction.token}
              </span>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(transaction.token);
                  setCopiedToken(transaction.token);

                  setTimeout(() => {
                    setCopiedToken("");
                  }, 1500);
                }}
                className="text-blue-600 hover:text-blue-800 transition"
                title="Copy Token ID"
              >
                <Copy size={16} />
              </button>

              {copiedToken === transaction.token && (
                <span className="text-xs text-emerald-600 font-semibold">
                  Copied
                </span>
              )}

            </div>
          </td>

          {/* Status */}
          <td className="p-4">
            <span
              className={`px-3 py-1 rounded-full text-xs ${
                transaction.status === "Completed"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {transaction.status}
            </span>
          </td>

        </tr>
      ))}
    </tbody>
  </table>
</div>
{/* User Activity Overview */}
<div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm p-6">

  <h4 className="font-bold text-gray-800 mb-4">
    User Activity Overview
  </h4>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="bg-cyan-50 rounded-xl p-5">
  <p className="text-xs text-cyan-600">
    Last Login Location
  </p>

  <h3 className="font-bold text-gray-800 mt-2">
    🇧🇩 Bangladesh
  </h3>

  <p className="text-sm text-gray-600 mt-2">
    Dhaka, Bangladesh
  </p>

  <p className="text-xs text-gray-500 mt-1">
    IP: 192.168.1.105
  </p>
</div>

<button
  onClick={() => setIpBlocked(!ipBlocked)}
  className={`mt-4 px-4 py-2 rounded-lg text-sm font-semibold ${
    ipBlocked
      ? "bg-emerald-100 text-emerald-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {ipBlocked ? "Unblock IP" : "Block IP"}
</button>

    <div className="bg-blue-50 rounded-xl p-5">
      <p className="text-xs text-blue-600">
        Last Login
      </p>
      <h3 className="font-bold text-gray-800 mt-2">
        30-07-2026 09:45 AM
      </h3>
    </div>


    <div className="bg-purple-50 rounded-xl p-5">
      <p className="text-xs text-purple-600">
        Device
      </p>
      <h3 className="font-bold text-gray-800 mt-2">
        Android Chrome
      </h3>
    </div>


    <div className="bg-emerald-50 rounded-xl p-5">
      <p className="text-xs text-emerald-600">
        Account Status
      </p>
      <h3 className="font-bold text-gray-800 mt-2">
        Verified
      </h3>
    </div>


    <div className="bg-orange-50 rounded-xl p-5">
      <p className="text-xs text-orange-600">
        Login Count
      </p>
      <h3 className="font-bold text-gray-800 mt-2">
        58 Times
      </h3>
    </div>


    <div className="bg-gray-50 rounded-xl p-5">
      <p className="text-xs text-gray-600">
        Account Created
      </p>
      <h3 className="font-bold text-gray-800 mt-2">
        15-06-2026
      </h3>
    </div>


    <div className="bg-red-50 rounded-xl p-5">
      <p className="text-xs text-red-600">
        Risk Level
      </p>
      <h3 className="font-bold text-gray-800 mt-2">
        Low
      </h3>
    </div>

  </div>

</div>

</div>

</div>

)}

</div>
);
}