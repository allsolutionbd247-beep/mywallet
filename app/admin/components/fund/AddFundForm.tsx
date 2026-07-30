"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

export default function AddFund() {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border">

      {/* Add Fund Header */}

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          px-5
          py-4
          rounded-xl
          bg-gradient-to-r
          from-blue-100
          to-cyan-100
          border
          border-blue-200
          hover:shadow-md
          transition
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-lg
              bg-blue-200
              flex
              items-center
              justify-center
              text-blue-700
            "
          >
            <Plus size={22}/>
          </div>


          <span className="font-bold text-gray-800 text-lg">
            Add Fund
          </span>

        </div>


        <ChevronDown
          className={`
            text-gray-600
            transition
            ${open ? "rotate-180" : ""}
          `}
        />

      </button>



      {/* Form */}

      {open && (

        <div className="p-5 border-t space-y-4">


          <div>

            <label className="text-sm font-medium">
              Wallet ID / Email
            </label>

            <input
              placeholder="Search wallet ID or email"
              className="
                mt-2
                w-full
                border
                rounded-lg
                px-3
                py-2
              "
            />

          </div>



          {/* Auto User Information */}

          <div
            className="
              bg-gray-50
              rounded-lg
              p-4
              text-sm
              space-y-1
            "
          >

            <p>
              User Name: Auto Loading
            </p>

            <p>
              Wallet Type: Auto Loading
            </p>

            <p>
              Currency: Auto Loading
            </p>

            <p>
              Current Balance: Auto Loading
            </p>

          </div>




          <div>

            <label className="text-sm font-medium">
              Amount
            </label>

            <input
              type="number"
              placeholder="Enter amount"
              className="
                mt-2
                w-full
                border
                rounded-lg
                px-3
                py-2
              "
            />

          </div>




          <div>

            <label className="text-sm font-medium">
              Note (Optional)
            </label>

            <textarea
              placeholder="Admin note (optional)"
              className="
                mt-2
                w-full
                border
                rounded-lg
                px-3
                py-2
                h-24
              "
            />

          </div>




          <button
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-lg
              font-semibold
            "
          >

            Add Fund

          </button>


        </div>

      )}

    </div>
  );
}
