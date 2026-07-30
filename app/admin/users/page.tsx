"use client";

import { useState } from "react";
import { Search, CircleDollarSign, Copy } from "lucide-react";
import UserFeatureControl from "../components/UserFeatureControl";
import UserDetailsCard from "../components/UserDetailsCard";
import UserWalletCards from "../components/UserWalletCards";
import UserLoginHistory from "../components/UserLoginHistory";
import UserTransactionLedger from "../components/UserTransactionLedger";
import UserActivityOverview from "../components/UserActivityOverview";
import UserSecurityControl from "../components/UserSecurityControl";
import UserProfileManagement from "../components/UserProfileManagement";




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
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mt-6">

    {/* Header */}
    <div className="flex justify-between items-center mb-5">
      <div>
        <h3 className="text-lg font-bold text-indigo-700">
          User Overview
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Account information & wallet overview
        </p>
      </div>

      <button
        onClick={() => setShowDetails(false)}
        className="text-xs font-semibold text-red-500 hover:text-red-700 transition"
      >
        Close
      </button>
    </div>

    {/* User Information */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3">
        <p className="text-[11px] text-indigo-600">
          Account Name
        </p>
        <p className="text-sm font-semibold text-gray-800 mt-1">
          Rahim Ahmed
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
        <p className="text-[11px] text-blue-600">
          Email
        </p>
        <p className="text-sm font-semibold text-gray-800 mt-1">
          rahim@email.com
        </p>
      </div>

      <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
        <p className="text-[11px] text-purple-600">
          Primary Wallet ID
        </p>
        <p className="text-sm font-semibold text-gray-800 mt-1">
          WAL-100245
        </p>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
        <p className="text-[11px] text-emerald-600">
          Status
        </p>
        <p className="text-sm font-semibold text-emerald-700 mt-1">
          Active
        </p>
      </div>

    </div>

    {/* Wallet Asset Overview */}

    <div className="mt-5">

      <h4 className="text-sm font-bold text-blue-700 mb-2">
        Wallet Asset Overview
      </h4>

      <div className="grid grid-cols-3 gap-3">

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
          <p className="text-[11px] text-blue-600">
            BDT Wallet
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-1">
            ৳25,000
          </h3>
        </div>

        <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
          <p className="text-[11px] text-purple-600">
            USD Wallet
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-1">
            $200
          </h3>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
          <p className="text-[11px] text-orange-600">
            Total Transaction
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-1">
            124
          </h3>
        </div>

      </div>

    </div>
    {/* Transaction Summary */}
<div className="mt-5">
  <h4 className="text-sm font-bold text-purple-700 mb-2">
    Transaction Summary
  </h4>

  <div className="grid grid-cols-4 gap-3">

    <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
      <p className="text-[11px] text-emerald-600">
        Deposit
      </p>
      <h3 className="text-lg font-bold text-gray-800 mt-1">
        ৳80K
      </h3>
    </div>

    <div className="bg-red-50 border border-red-100 rounded-lg p-3">
      <p className="text-[11px] text-red-600">
        Withdraw
      </p>
      <h3 className="text-lg font-bold text-gray-800 mt-1">
        ৳25K
      </h3>
    </div>

    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
      <p className="text-[11px] text-blue-600">
        Transfer
      </p>
      <h3 className="text-lg font-bold text-gray-800 mt-1">
        ৳45K
      </h3>
    </div>

    <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
      <p className="text-[11px] text-purple-600">
        Count
      </p>
      <h3 className="text-lg font-bold text-gray-800 mt-1">
        124
      </h3>
    </div>

  </div>
</div>

{/* User Detail Sections */}
<UserDetailsCard />
<UserWalletCards />
<UserFeatureControl />
<UserProfileManagement />
<UserSecurityControl />
<UserLoginHistory />
<UserTransactionLedger />
<UserActivityOverview />

</div>
)}
</div>
);
}
