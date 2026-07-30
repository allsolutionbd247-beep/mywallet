"use client";

import { useState } from "react";
import {
  Copy,
  ChevronDown,
  MapPin,
  Smartphone,
  ShieldCheck,
  Globe,
  Lock,
  Unlock,
  Clock,
  MonitorSmartphone,
} from "lucide-react";

export default function UserActivityOverview() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const [ipLocked, setIpLocked] = useState(false);

  const activityData = {
    ip: "103.45.78.120",
    location: "Dhaka, Bangladesh",
    address: "Gulshan Road 12",
    device: "Samsung Galaxy S24",
    system: "Android 16",
    browser: "Chrome Mobile",
    risk: "Low",
    loginCount: 25,
    lastLogin: "30-07-2026 10:30 AM",

    loginHistory: [
      {
        date: "30-07-2026 10:30 AM",
        status: "Success",
      },
      {
        date: "29-07-2026 08:15 PM",
        status: "Success",
      },
      {
        date: "28-07-2026 09:20 AM",
        status: "Failed",
      },
    ],

    sessions: [
      {
        device: "Samsung Galaxy S24",
        location: "Dhaka",
        time: "Active Now",
      },
      {
        device: "Chrome Browser",
        location: "Dhaka",
        time: "2 hours ago",
      },
    ],
  };


  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(text);

      setTimeout(() => {
        setCopied("");
      }, 1500);

    } catch (error) {
      console.log(error);
    }
  };


  const riskStyle = (risk: string) => {

    if (risk === "Low") {
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    }

    if (risk === "Medium") {
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    }

    return "bg-red-100 text-red-700 border-red-200";

  };


  return (
    <div className="
      mt-6
      bg-white
      rounded-xl
      border
      border-gray-100
      shadow-sm
      overflow-hidden
    ">

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          justify-between
          items-center
          p-5
          bg-blue-50
          hover:bg-blue-100
          transition
        "
      >

        <div>

          <h4 className="
            font-bold
            text-gray-800
          ">
            User Activity Overview
          </h4>


          <p className="
            text-xs
            text-gray-500
            mt-1
          ">
            Security and login activity details
          </p>

        </div>


        <ChevronDown
          size={20}
          className={`
            text-blue-600
            transition
            ${open ? "rotate-180" : ""}
          `}
        />

      </button>
      {open && (

  <div className="p-5 space-y-4">

    {/* IP Address */}

    <div className="
      flex
      justify-between
      items-center
      bg-gray-50
      border
      border-gray-100
      rounded-xl
      p-4
    ">

      <div>

        <p className="
          text-xs
          text-gray-500
          flex
          items-center
          gap-1
        ">
          <Globe size={14} />
          IP Address
        </p>


        <p className="
          font-semibold
          text-gray-800
          mt-1
        ">
          {activityData.ip}
        </p>

      </div>


      <div className="
        flex
        items-center
        gap-3
      ">

        {/* Copy */}

        <button
          onClick={() => copyText(activityData.ip)}
          className="
            text-blue-600
            hover:text-blue-800
          "
        >
          <Copy size={17}/>
        </button>


        {/* Lock Unlock */}

        <button
          onClick={() => setIpLocked(!ipLocked)}
          className={`
            flex
            items-center
            gap-1
            text-xs
            font-semibold
            px-3
            py-1
            rounded-full
            ${
              ipLocked
              ? "bg-red-100 text-red-700"
              : "bg-emerald-100 text-emerald-700"
            }
          `}
        >

          {
            ipLocked
            ?
            <>
              <Unlock size={14}/>
              Unlock
            </>
            :
            <>
              <Lock size={14}/>
              Lock
            </>
          }

        </button>


        {
          copied === activityData.ip && (

            <span className="
              text-xs
              text-emerald-600
              font-semibold
            ">
              Copied
            </span>

          )
        }


      </div>


    </div>



    {/* Geo Location */}

    <div className="
      flex
      justify-between
      items-center
      bg-gray-50
      border
      border-gray-100
      rounded-xl
      p-4
    ">


      <div>

        <p className="
          text-xs
          text-gray-500
          flex
          items-center
          gap-1
        ">
          <MapPin size={14}/>
          Geo Location
        </p>


        <p className="
          font-semibold
          text-gray-800
          mt-1
        ">
          {activityData.location}
        </p>


        <p className="
          text-xs
          text-gray-500
        ">
          {activityData.address}
        </p>

      </div>



      <button
        onClick={() =>
          copyText(
            `${activityData.location}, ${activityData.address}`
          )
        }
        className="
          text-blue-600
          hover:text-blue-800
        "
      >

        <Copy size={17}/>

      </button>


    </div>



    {/* Device Information */}

    <div className="
      flex
      justify-between
      items-center
      bg-gray-50
      border
      border-gray-100
      rounded-xl
      p-4
    ">


      <div>

        <p className="
          text-xs
          text-gray-500
          flex
          items-center
          gap-1
        ">
          <Smartphone size={14}/>
          Device
        </p>


        <p className="
          font-semibold
          text-gray-800
        ">
          {activityData.device}
        </p>


        <p className="
          text-xs
          text-gray-500
        ">
          {activityData.system} • {activityData.browser}
        </p>


      </div>



      <button
        onClick={() =>
          copyText(
            `${activityData.device}, ${activityData.system}, ${activityData.browser}`
          )
        }
        className="
          text-blue-600
          hover:text-blue-800
        "
      >

        <Copy size={17}/>

      </button>


    </div>




    {/* Risk Level */}

    <div className="
      flex
      justify-between
      items-center
      bg-gray-50
      border
      border-gray-100
      rounded-xl
      p-4
    ">
<p className="
        text-xs
        text-gray-500
        flex
        items-center
        gap-1
      ">
        <ShieldCheck size={14}/>
        Risk Level
      </p>


      <span className={`
        px-4
        py-1
        rounded-full
        border
        text-xs
        font-bold
        ${riskStyle(activityData.risk)}
      `}>

        {activityData.risk}

      </span>


    </div>
{/* Login Count + Last Login */}

    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-4
    ">

      <div className="
        bg-gray-50
        border
        border-gray-100
        rounded-xl
        p-4
      ">

        <p className="
          text-xs
          text-gray-500
        ">
          Login Count
        </p>

        <p className="
          text-lg
          font-bold
          text-gray-800
          mt-1
        ">
          {activityData.loginCount} Times
        </p>

      </div>



      <div className="
        bg-gray-50
        border
        border-gray-100
        rounded-xl
        p-4
      ">

        <p className="
          text-xs
          text-gray-500
        ">
          Last Login
        </p>

        <p className="
          text-sm
          font-bold
          text-gray-800
          mt-1
        ">
          {activityData.lastLogin}
        </p>

      </div>

    </div>



    {/* Login History */}

    <div className="
      bg-indigo-50
      border
      border-indigo-100
      rounded-xl
      p-4
    ">

      <p className="
        text-xs
        font-bold
        text-indigo-700
      ">
        Login History
      </p>


      <div className="
        mt-3
        space-y-2
      ">

        {
          activityData.loginHistory.map((item, index) => (

            <div
              key={index}
              className="
                flex
                justify-between
                items-center
                bg-white
                rounded-lg
                px-3
                py-2
              "
            >

              <span className="
                text-xs
                text-gray-600
              ">
                {item.date}
              </span>


              <span
                className={`
                  text-xs
                  font-semibold
                  ${
                    item.status === "Success"
                    ? "text-emerald-600"
                    : "text-red-600"
                  }
                `}
              >
                {item.status}
              </span>


            </div>

          ))
        }

      </div>

    </div>




    {/* Session Activity */}

    <div className="
      bg-purple-50
      border
      border-purple-100
      rounded-xl
      p-4
    ">


      <p className="
        text-xs
        font-bold
        text-purple-700
      ">
        Session Activity
      </p>



      <div className="
        mt-3
        space-y-2
      ">


        {
          activityData.sessions.map((session, index)=>(

            <div
              key={index}
              className="
                bg-white
                rounded-lg
                p-3
              "
            >

              <div className="
                flex
                justify-between
              ">

                <p className="
                  text-xs
                  font-semibold
                  text-gray-800
                ">
                  {session.device}
                </p>


                <span className="
                  text-[11px]
                  text-emerald-600
                ">
                  {session.time}
                </span>

              </div>


              <p className="
                text-xs
                text-gray-500
                mt-1
              ">
                {session.location}
              </p>


            </div>


          ))
        }


      </div>


    </div>



  </div>
)}

</div>
  );
}