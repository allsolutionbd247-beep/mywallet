"use client";

import { useState } from "react";
import {
  Copy,
  ChevronDown,
} from "lucide-react";


export default function UserTransactionLedger() {


  const [ledgerOpen, setLedgerOpen] = useState(false);

  const [copiedToken, setCopiedToken] = useState("");



  const transactions = [
    {
      date: "30-07-2026 10:30 AM",
      type: "Deposit",
      from: "Bank",
      to: "USD Wallet",
      amount: "+$500",
      token: "TXN-100001",
      status: "Completed",
    },

    {
      date: "29-07-2026 06:45 PM",
      type: "Transfer",
      from: "USD Wallet",
      to: "BDT Wallet",
      amount: "$120",
      token: "TXN-100002",
      status: "Completed",
    },

    {
      date: "28-07-2026 03:10 PM",
      type: "Withdraw",
      from: "USD Wallet",
      to: "Bank",
      amount: "$80",
      token: "TXN-100003",
      status: "Pending",
    },
  ];



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

        onClick={() => setLedgerOpen(!ledgerOpen)}

        className="
        w-full
        flex
        items-center
        justify-between
        p-5
        bg-blue-50
        hover:bg-blue-100
        transition
        "

      >

        <div className="text-left">

          <h4 className="font-bold text-gray-800">
            Transaction Ledger
          </h4>


          <p className="text-sm text-gray-500 mt-1">
            Complete user transaction history and balance movement
          </p>

        </div>



        <ChevronDown
          size={20}
          className={`
          text-blue-600
          transition
          ${ledgerOpen ? "rotate-180" : ""}
          `}
        />


      </button>






      {ledgerOpen && (

        <div>


          {/* Filters */}

          <div className="p-5 border-b">


            <div className="
            mt-2
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
            ">


              <input

                type="text"

                placeholder="Search Token ID, Wallet ID..."

                className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

              />




              <select
                className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                "
              >

                <option>
                  All Transaction Type
                </option>

                <option>
                  Deposit
                </option>

                <option>
                  Transfer
                </option>

                <option>
                  Withdraw
                </option>


              </select>






              <select

                className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                "

              >

                <option>
                  All Status
                </option>

                <option>
                  Completed
                </option>

                <option>
                  Pending
                </option>

                <option>
                  Failed
                </option>


              </select>



            </div>


          </div>







          {/* Table */}


          <div className="overflow-x-auto p-5">


            <table className="w-full text-sm">


              <thead className="bg-gray-50 text-gray-500">


                <tr>


                  <th className="p-4 text-left">
                    Date & Time
                  </th>

<th className="p-4 text-left">
                    Type
                  </th>


                  <th className="p-4 text-left">
                    From
                  </th>


                  <th className="p-4 text-left">
                    To
                  </th>


                  <th className="p-4 text-left">
                    Amount
                  </th>


                  <th className="p-4 text-left">
                    Token ID
                  </th>


                  <th className="p-4 text-left">
                    Status
                  </th>


                </tr>


              </thead>






              <tbody>


                {transactions.map((transaction,index)=>(


                  <tr
                    key={index}
                    className="border-t"
                  >



                    <td className="p-4">
                      {transaction.date}
                    </td>





                    <td className="p-4">


                      <span
                        className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold

                        ${
                          transaction.type === "Deposit"
                          ?
                          "bg-emerald-100 text-emerald-700"
                          :
                          transaction.type === "Transfer"
                          ?
                          "bg-blue-100 text-blue-700"
                          :
                          "bg-red-100 text-red-700"
                        }

                        `}
                      >

                        {transaction.type}

                      </span>


                    </td>






                    <td className="p-4">
                      {transaction.from}
                    </td>



                    <td className="p-4">
                      {transaction.to}
                    </td>





                    <td className="p-4 font-bold">
                      {transaction.amount}
                    </td>







                    <td className="p-4">


                      <div className="
                      flex
                      items-center
                      gap-2
                      ">


                        <span>
                          {transaction.token}
                        </span>



                        <button

                          onClick={() => {

                            navigator.clipboard.writeText(
                              transaction.token
                            );

                            setCopiedToken(
                              transaction.token
                            );


                            setTimeout(() => {

                              setCopiedToken("");

                            },1500);


                          }}

                          className="
                          text-blue-600
                          hover:text-blue-800
                          "

                        >

                          <Copy size={16}/>


                        </button>





                        {copiedToken === transaction.token && (

                          <span className="
                          text-xs
                          text-emerald-600
                          font-semibold
                          ">

                            Copied

                          </span>

                        )}


                      </div>


                    </td>








                    <td className="p-4">


                      <span
                        className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs

${
                          transaction.status === "Completed"
                          ?
                          "bg-emerald-100 text-emerald-700"
                          :
                          "bg-yellow-100 text-yellow-700"
                        }

                        `}
                      >

                        {transaction.status}

                      </span>


                    </td>



                  </tr>


                ))}


              </tbody>


            </table>


          </div>



        </div>

      )}




    </div>

  );

}
