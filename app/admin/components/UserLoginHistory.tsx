"use client";

import { useState } from "react";
import {
  ShieldCheck,
  MapPin,
  Globe,
  Smartphone,
  Monitor,
  ChevronDown,
} from "lucide-react";


export default function UserLoginHistory() {

  const [open, setOpen] = useState(false);


  const loginHistory = [
    {
      date: "30-07-2026 10:30 AM",
      location: "🇧🇩 Bangladesh - Dhaka",
      ip: "192.168.1.105",
      device: "Samsung Galaxy S24",
      browser: "Android Chrome",
      status: "Success",
    },

    {
      date: "29-07-2026 08:15 PM",
      location: "🇮🇳 India - Delhi",
      ip: "103.45.xxx.xxx",
      device: "Windows PC",
      browser: "Chrome Browser",
      status: "Success",
    },
  ];


  return (
    <div className="mt-5 bg-white rounded-xl border border-gray-100 shadow-sm">


      {/* Header Click Area */}

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

          <ShieldCheck
            size={18}
            className="text-blue-600"
          />


          <div className="text-left">

            <h4 className="text-sm font-bold text-gray-800">
              Login History
            </h4>

            <p className="text-[11px] text-gray-500">
              Recent security activity
            </p>

          </div>

        </div>


        <ChevronDown
          size={18}
          className={`text-blue-600 transition ${
            open ? "rotate-180" : ""
          }`}
        />


      </button>





      {/* Details */}

      {open && (

        <div className="p-4 space-y-3">


          {loginHistory.map((login, index) => (

            <div
              key={index}
              className="
              bg-gray-50
              border
              border-gray-100
              rounded-lg
              p-3
              "
            >


              <div className="flex justify-between">

                <p className="text-xs font-semibold text-gray-800">
                  🕒 {login.date}
                </p>


                <span
                  className="
                  text-[10px]
                  bg-green-100
                  text-green-700
                  px-2
                  py-1
                  rounded-full
                  "
                >
                  {login.status}
                </span>


              </div>



              <div className="mt-2 space-y-1">


                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <MapPin size={12} className="text-blue-600"/>
                  {login.location}
                </p>


                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <Globe size={12} className="text-blue-600"/>
                  IP: {login.ip}
                </p>


                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <Smartphone size={12} className="text-blue-600"/>
                  {login.device}
                </p>


                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <Monitor size={12} className="text-blue-600"/>
                  {login.browser}
                </p>


              </div>


            </div>

          ))}


        </div>

      )}


    </div>
  );
}