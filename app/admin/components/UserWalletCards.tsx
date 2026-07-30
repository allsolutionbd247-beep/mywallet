"use client";

import { useState } from "react";
import {
  CreditCard,
  Trash2,
  ChevronDown,
} from "lucide-react";


export default function UserWalletCards() {

  const [walletOpen, setWalletOpen] = useState(false);

  const [openSection, setOpenSection] = useState<
    "active" | "deleted" | null
  >(null);


  const activeWallets = [
    {
      name: "USD Wallet",
      walletId: "WAL-10001",
      availableBalance: "$5,000",
      createdAt: "30-07-2026 10:30 AM",
    },

    {
      name: "BDT Wallet",
      walletId: "WAL-10002",
      availableBalance: "৳80,000",
      createdAt: "28-07-2026 02:15 PM",
    },
  ];



  const deletedWallets = [
    {
      name: "EUR Wallet",
      walletId: "WAL-10005",
      availableBalance: "€850",
      createdAt: "20-07-2026 09:15 AM",
      deletedAt: "29-07-2026 06:40 PM",
    },
  ];



  return (

    <div className="mt-5 bg-white rounded-xl border border-gray-100 shadow-sm">


      {/* Main Wallet Header */}

      <button
        onClick={() => setWalletOpen(!walletOpen)}
        className="
        w-full
        flex
        items-center
        justify-between
        p-4
        bg-blue-50
        hover:bg-blue-100
        rounded-xl
        transition
        "
      >

        <div className="flex items-center gap-2">

          <CreditCard
            size={18}
            className="text-blue-600"
          />

          <div className="text-left">

            <h4 className="text-sm font-bold text-gray-800">
              User Wallet Cards
            </h4>

            <p className="text-[11px] text-gray-500">
              Wallet card activity history
            </p>

          </div>

        </div>


        <ChevronDown
          size={18}
          className={`
          text-blue-600 transition
          ${walletOpen ? "rotate-180" : ""}
          `}
        />


      </button>




      {walletOpen && (

        <div className="p-4">


          {/* Buttons */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">


            <button
              onClick={() =>
                setOpenSection(
                  openSection === "active"
                  ? null
                  : "active"
                )
              }

              className="
              bg-blue-50
              border border-blue-100
              text-blue-700
              rounded-lg
              p-3
              text-sm
              font-semibold
              hover:bg-blue-100
              transition
              flex
              items-center
              justify-center
              gap-2
              "
            >

              <CreditCard size={16}/>
              Active Wallet Cards

            </button>




            <button
              onClick={() =>
                setOpenSection(
                  openSection === "deleted"
                  ? null
                  : "deleted"
                )
              }

              className="
              bg-blue-50
              border border-blue-100
              text-blue-700
              rounded-lg
              p-3
              text-sm
              font-semibold
              hover:bg-blue-100
              transition
              flex
              items-center
              justify-center
              gap-2
              "
            >

              <Trash2 size={16}/>
              Deleted Wallet Cards

            </button>


          </div>
          {/* Active Wallet Details */}

          {openSection === "active" && (

            <div className="mt-4 space-y-3">


              {activeWallets.map((wallet, index) => (

                <div
                  key={index}
                  className="
                  bg-blue-50
                  border border-blue-100
                  rounded-lg
                  p-3
                  text-sm
                  "
                >

                  <h5 className="font-semibold text-gray-800">
                    {wallet.name}
                  </h5>


                  <p className="text-xs text-gray-600 mt-1">
                    Wallet ID: {wallet.walletId}
                  </p>


                  <p className="text-xs text-gray-600">
                    Available Balance: {wallet.availableBalance}
                  </p>


                  <p className="text-xs text-gray-600">
                    Created: {wallet.createdAt}
                  </p>


                </div>

              ))}


            </div>

          )}






          {/* Deleted Wallet Details */}

          {openSection === "deleted" && (

            <div className="mt-4 space-y-3">


              {deletedWallets.map((wallet, index) => (

                <div
                  key={index}
                  className="
                  bg-blue-50
                  border border-blue-100
                  rounded-lg
                  p-3
                  text-sm
                  "
                >


                  <h5 className="font-semibold text-gray-800">
                    {wallet.name}
                  </h5>


                  <p className="text-xs text-gray-600 mt-1">
                    Wallet ID: {wallet.walletId}
                  </p>


                  <p className="text-xs text-gray-600">
                    Available Balance: {wallet.availableBalance}
                  </p>


                  <p className="text-xs text-gray-600">
                    Created: {wallet.createdAt}
                  </p>


                  <p className="text-xs text-gray-600">
                    Deleted: {wallet.deletedAt}
                  </p>


                </div>

              ))}


            </div>

          )}


        </div>

      )}


    </div>

  );

}