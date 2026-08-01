"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  UserCog,
  FileClock,
  LogIn,
  AlertTriangle,
} from "lucide-react";

export default function SecurityAudit() {

  const [open, setOpen] = useState(false);


  const adminActivity = [
    {
      admin: "Super Admin",
      action: "Increase Balance",
      user: "Rahim Ahmed",
      amount: "$500",
      date: "Today",
    },
    {
      admin: "Admin John",
      action: "Hold Balance",
      user: "Karim Hasan",
      amount: "$300",
      date: "Today",
    },
  ];


  const fundChanges = [
    {
      wallet: "PW-10025",
      old: "$1000",
      new: "$1500",
      change: "+$500",
      time: "Today",
    },
  ];


  const loginActivity = [
    {
      admin: "Super Admin",
      device: "Chrome Windows",
      ip: "192.168.1.1",
      time: "Today",
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
          from-orange-100
          to-red-100
        "
      >

        <div className="flex items-center gap-3">

          <div className="
            w-10
            h-10
            bg-white
            rounded-xl
            flex
            items-center
            justify-center
          ">

            <ShieldCheck
              size={22}
              className="text-orange-600"
            />

          </div>


          <span className="font-bold text-lg">
            Security & Audit
          </span>

        </div>


        {
          open
          ?
          <ChevronUp />
          :
          <ChevronDown />
        }


      </button>



      {
        open && (

          <div className="p-5 border-t space-y-6">



            {/* Admin Activity */}

            <div>

              <div className="flex items-center gap-2 mb-3">

                <UserCog size={18}/>

                <h3 className="font-bold">
                  Admin Activity Log
                </h3>

              </div>


              <div className="overflow-x-auto">

                <table className="w-full text-sm">

                  <thead>

                    <tr className="bg-gray-100">

                      <th className="p-3 text-left">
                        Admin
                      </th>

                      <th className="p-3 text-left">
                        Action
                      </th>

                      <th className="p-3 text-left">
                        User
                      </th>

                      <th className="p-3 text-left">
                        Amount
                      </th>

                      <th className="p-3 text-left">
                        Date
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                  {
                    adminActivity.map((item,index)=>(

                      <tr key={index} className="border-b">

                        <td className="p-3">
                          {item.admin}
                        </td>

                        <td className="p-3">
                          {item.action}
                        </td>

                        <td className="p-3">
                          {item.user}
                        </td>

                        <td className="p-3">
                          {item.amount}
                        </td>

                        <td className="p-3">
                          {item.date}
                        </td>

                      </tr>

                    ))
                  }

                  </tbody>

                </table>

              </div>

            </div>





            {/* Fund Change Log */}

            <div>

              <div className="flex items-center gap-2 mb-3">

<FileClock size={18}/>

                <h3 className="font-bold">
                  Fund Change Log
                </h3>

              </div>


              <div className="overflow-x-auto">

                <table className="w-full text-sm">

                  <thead>

                    <tr className="bg-gray-100">

                      <th className="p-3 text-left">
                        Wallet ID
                      </th>

                      <th className="p-3 text-left">
                        Previous
                      </th>

                      <th className="p-3 text-left">
                        New Balance
                      </th>

                      <th className="p-3 text-left">
                        Change
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                  {
                    fundChanges.map((item,index)=>(

                      <tr key={index} className="border-b">

                        <td className="p-3">
                          {item.wallet}
                        </td>

                        <td className="p-3">
                          {item.old}
                        </td>

                        <td className="p-3">
                          {item.new}
                        </td>

                        <td className="p-3 text-emerald-600">
                          {item.change}
                        </td>

                      </tr>

                    ))
                  }

                  </tbody>

                </table>

              </div>

            </div>





            {/* Login Activity */}

            <div>

              <div className="flex items-center gap-2 mb-3">

                <LogIn size={18}/>

                <h3 className="font-bold">
                  Login Activity
                </h3>

              </div>


              {
                loginActivity.map((item,index)=>(

                  <div
                    key={index}
                    className="
                      bg-gray-50
                      rounded-xl
                      p-3
                      text-sm
                    "
                  >

                    <p>
                      Admin: {item.admin}
                    </p>

                    <p>
                      Device: {item.device}
                    </p>

                    <p>
                      IP: {item.ip}
                    </p>

                    <p>
                      Time: {item.time}
                    </p>

                  </div>

                ))
              }

            </div>





            {/* Suspicious */}

            <div
              className="
                bg-red-50
                border
                border-red-200
                rounded-xl
                p-4
              "
            >

              <div className="flex items-center gap-2">

                <AlertTriangle
                  className="text-red-600"
                  size={20}
                />

                <h3 className="font-bold text-red-700">
                  Suspicious Activity
                </h3>

              </div>


              <p className="text-sm mt-2 text-gray-600">
                No suspicious activity found
              </p>


            </div>



          </div>

        )
      }



    </div>

  );
}
