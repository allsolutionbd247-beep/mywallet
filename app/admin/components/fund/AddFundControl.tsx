"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Lock,
  Unlock,
  Snowflake,
  RefreshCcw,
  DollarSign,
  Building2,
  Wallet,
} from "lucide-react";

export default function AddFundControl() {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("increase");

  const [walletId, setWalletId] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const actions = [
    {
      name: "Increase Balance",
      value: "increase",
      icon: Plus,
      color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    },
    {
      name: "Reduce Balance",
      value: "reduce",
      icon: Minus,
      color: "bg-red-50 border-red-200 text-red-700",
    },
    {
      name: "Hold Balance",
      value: "hold",
      icon: Lock,
      color: "bg-amber-50 border-amber-200 text-amber-700",
    },
    {
      name: "Release Hold",
      value: "release",
      icon: Unlock,
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      name: "ManagerFundRequest",
      value: "Request Fund",
      icon: Snowflake,
      color: "bg-cyan-50 border-cyan-200 text-cyan-700",
    },
    {
      name: "Refresh Balance",
      value: "refresh",
      icon: RefreshCcw,
      color: "bg-slate-50 border-slate-200 text-slate-700",
    },
    {
      name: "Commission Collected",
      value: "commission",
      icon: DollarSign,
      color: "bg-purple-50 border-purple-200 text-purple-700",
    },
    {
      name: "Reserve Transaction",
      value: "reserve",
      icon: Building2,
      color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    },
  ];

  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          justify-between
          items-center
          px-5
          py-4
          bg-gradient-to-r
          from-emerald-100
          to-blue-100
          hover:shadow-md
          transition-all
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-white
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <Wallet
              size={24}
              className="text-emerald-600"
            />
          </div>


          <span className="text-lg font-bold text-gray-800">
            Add Fund Control
          </span>

        </div>


        {
          open
          ?
          <ChevronUp size={22}/>
          :
          <ChevronDown size={22}/>
        }

      </button>



      {
        open && (

          <div className="p-5 border-t">


            {/* Balance Action */}

            <h3 className="font-bold text-gray-800 mb-4">
              Balance Action
            </h3>


            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-3
              "
            >

              {
                actions.map((item)=>{

                  const Icon = item.icon;

                  return (

                    <button
                      key={item.value}
                      onClick={() =>
                        setSelectedAction(item.value)
                      }
                      className={`
                        border
                        rounded-xl
                        p-4
                        text-sm
                        font-semibold
                        transition-all

                        ${
                          selectedAction === item.value
                          ?
                          "ring-2 ring-emerald-400 shadow-md"
                          :
                          ""
                        }
${item.color}
                      `}
                    >

                      <Icon
                        size={22}
                        className="mx-auto mb-2"
                      />


                      {item.name}


                    </button>

                  );

                })
              }


            </div>

{/* Search User */}

            <div className="mt-8">

              <h3 className="font-bold text-gray-800 mb-3">
                Search User
              </h3>

              <input
                value={walletId}
                onChange={(e)=>setWalletId(e.target.value)}
                placeholder="Enter Wallet ID or Email"
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-emerald-400
                "
              />

            </div>



            {/* User Information */}

            <div
              className="
                mt-6
                rounded-2xl
                border
                bg-slate-50
                p-5
              "
            >

              <h3 className="font-bold mb-4 text-gray-800">
                User Information
              </h3>


              <div className="grid md:grid-cols-2 gap-4">

                <div>

                  <p className="text-xs text-gray-500">
                    User Name
                  </p>

                  <p className="font-semibold">
                    Auto Loading...
                  </p>

                </div>


                <div>

                  <p className="text-xs text-gray-500">
                    Wallet ID
                  </p>

                  <p className="font-semibold">
                    Auto Loading...
                  </p>

                </div>


                <div>

                  <p className="text-xs text-gray-500">
                    Wallet Type
                  </p>

                  <p className="font-semibold text-blue-600">
                    Primary Wallet
                  </p>

                </div>


                <div>

                  <p className="text-xs text-gray-500">
                    Currency
                  </p>

                  <p className="font-semibold">
                    USD
                  </p>

                </div>


                <div>

                  <p className="text-xs text-gray-500">
                    Previous Balance
                  </p>

                  <p className="font-semibold">
                    $0.00
                  </p>

                </div>


                <div>

                  <p className="text-xs text-gray-500">
                    Available Balance
                  </p>

                  <p className="font-bold text-emerald-600">
                    $0.00
                  </p>

                </div>

              </div>

            </div>



            {/* Amount */}

            <div className="mt-6">

              <label className="font-semibold text-gray-700">
                Amount
              </label>

              <input
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                type="number"
                placeholder="Enter Amount"
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-emerald-400
                "
              />

            </div>



            {/* Admin Note */}

            <div className="mt-6">

              <label className="font-semibold text-gray-700">
                Admin Note
              </label>

              <textarea
                value={note}
                onChange={(e)=>setNote(e.target.value)}
                placeholder="Write Admin Note..."

className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  h-28
                  resize-none
                  outline-none
                  focus:ring-2
                  focus:ring-emerald-400
                "
              />
</div>


            {/* Confirm Action */}

            <button
              className="
                mt-6
                w-full
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                font-bold
                py-3
                rounded-xl
                transition-all
                shadow-md
              "
            >
              Confirm Action
            </button>


          </div>

        )

      }


    </div>
  );
}
