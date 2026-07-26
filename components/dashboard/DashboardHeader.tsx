"use client";

import { useState } from "react";
import { Bell, UserCircle, AlertTriangle, X } from "lucide-react";

export default function DashboardHeader() {

  const [showNotice, setShowNotice] = useState(true);

  return (
    <>

      {/* Header */}

      <header
        className="
          h-20
          bg-green-50
          border-b
          flex
          items-center
          justify-end
          px-6
          gap-4
          shadow-sm
        "
      >

        {/* Profile */}

        <div
          className="
            flex
            items-center
            gap-3
            bg-white
            px-3
            py-2
            rounded-full
            shadow-sm
          "
        >

          <UserCircle
            size={38}
            className="text-green-600"
          />

          <span
            className="
              font-semibold
              text-gray-800
            "
          >
            Rohim
          </span>

        </div>



        {/* Notification */}

        <button
          className="
            w-11
            h-11
            rounded-full
            bg-white
            flex
            items-center
            justify-center
            shadow-sm
            hover:bg-green-100
            transition
          "
        >

          <Bell
            size={23}
            className="text-green-700"
          />

        </button>



        {/* Logout */}

        <button
        onClick={() => {
  window.location.href = "/login";
}}
          className="
            px-5
            py-2.5
            rounded-lg
            bg-green-600
            text-white
            font-medium
            shadow-sm
            hover:bg-green-700
            transition
          "
        >

          Logout

        </button>


      </header>




      {/* Notice Box */}

      {showNotice && (

        <div
          className="
            mx-5
            mt-4
            h-14
            px-5
            bg-yellow-50
            border
            border-yellow-300
            rounded-lg
            flex
            items-center
            justify-between
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                w-8
                h-8
                rounded-md
                bg-yellow-400
                flex
                items-center
                justify-center
              "
            >

              <AlertTriangle
                size={20}
                className="text-white"
              />

            </div>


            <span
              className="
                text-gray-700
              "
            >
              System notice message here
            </span>


          </div>


          <button
            onClick={() => setShowNotice(false)}
          >

            <X
              size={22}
              className="text-gray-500 hover:text-red-500"
            />

          </button>


        </div>

      )}

    </>
  );
}
