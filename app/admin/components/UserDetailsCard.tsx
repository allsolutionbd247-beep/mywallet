"use client";

import { useState } from "react";
import {
  UserRound,
  WalletCards,
  Trash2,
  ChevronDown,
} from "lucide-react";


export default function UserDetailCard() {

  const [open, setOpen] = useState(false);


  const userDetails = {
    fullName: "Md farhan",
    primaryWalletId: "EUR-WAL-10001",
    totalWalletCards: 5,
    deletedWalletCards: 2,
  };


  return (

    <div className="mt-5 bg-white rounded-xl border border-gray-100 shadow-sm">


      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
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

          <UserRound
            size={18}
            className="text-blue-600"
          />


          <div className="text-left">

            <h4 className="text-sm font-bold text-gray-800">
              User Details
            </h4>


            <p className="text-[11px] text-gray-500">
              User wallet summary
            </p>

          </div>


        </div>


        <ChevronDown
          size={18}
          className={`
          text-blue-600
          transition
          ${open ? "rotate-180" : ""}
          `}
        />


      </button>





      {/* Details */}

      {open && (

        <div className="p-4 space-y-2">


          <div className="
          flex
          justify-between
          bg-gray-50
          rounded-lg
          px-3
          py-2
          ">

            <span className="text-xs text-gray-500">
              Full Name
            </span>

            <span className="text-xs font-semibold text-gray-800">
              {userDetails.fullName}
            </span>

          </div>




          <div className="
          flex
          justify-between
          bg-gray-50
          rounded-lg
          px-3
          py-2
          ">

            <span className="text-xs text-gray-500 flex gap-1 items-center">
              <WalletCards size={12}/>
              Primary Wallet ID
            </span>

            <span className="text-xs font-semibold text-gray-800">
              {userDetails.primaryWalletId}
            </span>

          </div>





          <div className="
          flex
          justify-between
          bg-gray-50
          rounded-lg
          px-3
          py-2
          ">

            <span className="text-xs text-gray-500">
              Total Wallet Cards
            </span>

            <span className="text-xs font-semibold text-blue-600">
              {userDetails.totalWalletCards}
            </span>

          </div>





          <div className="
          flex
          justify-between
          bg-gray-50
          rounded-lg
          px-3
          py-2
          ">

            <span className="text-xs text-gray-500 flex gap-1 items-center">
              <Trash2 size={12}/>
              Deleted Wallet Cards
            </span>

            <span className="text-xs font-semibold text-red-600">
              {userDetails.deletedWalletCards}
            </span>

          </div>



        </div>

      )}


    </div>

  );
}