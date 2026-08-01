"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  History,
  Search,
} from "lucide-react";

export default function FundHistory() {

  const [open, setOpen] = useState(false);


  const historyData = [
    {
      id: 1,
      action: "Increase Balance",
      user: "Rahim Ahmed",
      walletId: "PW-10025",
      walletType: "Primary Wallet",
      currency: "USD",
      amount: "+$500",
      status: "Completed",
      admin: "Super Admin",
      date: "Today",
    },
    {
      id: 2,
      action: "Reduce Balance",
      user: "Karim Hasan",
      walletId: "PW-10030",
      walletType: "Secondary Wallet",
      currency: "USD",
      amount: "-$100",
      status: "Completed",
      admin: "Admin John",
      date: "Today",
    },
    {
      id: 3,
      action: "Hold Balance",
      user: "John Smith",
      walletId: "PW-10040",
      walletType: "Primary Wallet",
      currency: "EUR",
      amount: "$300",
      status: "Hold",
      admin: "Super Admin",
      date: "Today",
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
          from-purple-100
          to-blue-100
        "
      >

        <div className="flex items-center gap-3">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-white
            flex
            items-center
            justify-center
          ">

            <History
              size={22}
              className="text-purple-600"
            />

          </div>


          <span className="font-bold text-lg">
            Fund History
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

          <div className="p-5">


            {/* Search */}

            <div className="
              flex
              items-center
              gap-2
              border
              rounded-xl
              px-4
              py-2
              bg-gray-50
              mb-5
            ">

              <Search size={18}/>

              <input
                placeholder="Search User / Wallet ID"
                className="
                  bg-transparent
                  outline-none
                  w-full
                  text-sm
                "
              />

            </div>



            {/* Table */}

            <div className="
              overflow-x-auto
            ">

              <table className="
                w-full
                text-sm
              ">


                <thead>

                  <tr className="
                    bg-gray-100
                    text-gray-600
                  ">

                    <th className="p-3 text-left">
                      Action
                    </th>

                    <th className="p-3 text-left">
                      User
                    </th>

                    <th className="p-3 text-left">
                      Wallet ID
                    </th>

                    <th className="p-3 text-left">
                      Wallet Type
                    </th>

                    <th className="p-3 text-left">
                      Amount
                    </th>

                    <th className="p-3 text-left">
                      Status
                    </th>

                    <th className="p-3 text-left">
                      Admin
                    </th>

                    <th className="p-3 text-left">
                      Date
                    </th>

                  </tr>

                </thead>



                <tbody>


                  {
                    historyData.map((item)=>(

<tr
                        key={item.id}
                        className="
                          border-b
                          hover:bg-gray-50
                        "
                      >

                        <td className="p-3 font-semibold">
                          {item.action}
                        </td>


                        <td className="p-3">
                          {item.user}
                        </td>


                        <td className="p-3">
                          {item.walletId}
                        </td>


                        <td className="p-3">
                          {item.walletType}
                        </td>


                        <td className="
                          p-3
                          font-bold
                          text-emerald-600
                        ">
                          {item.amount}
                        </td>


                        <td className="
                          p-3
                        ">
                          <span className="
                            px-2
                            py-1
                            rounded-full
                            text-xs
                            bg-green-100
                            text-green-700
                          ">
                            {item.status}
                          </span>
                        </td>


                        <td className="p-3">
                          {item.admin}
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

        )
      }


    </div>
  );
}
