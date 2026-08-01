 "use client";

import { useState } from "react";
import { ClipboardCheck, ChevronDown } from "lucide-react";

export default function ManagerRequestApproval() {

  const [open, setOpen] = useState(false);


  const requests = [
    {
      id: 1,
      name: "Rahim Ahmed",
      amount: "$500",
      date: "Today",
      status: "Pending",
    },
    {
      id: 2,
      name: "Karim Hasan",
      amount: "$300",
      date: "Today",
      status: "Pending",
    },
  ];


  return (

    <div className="
      rounded-xl
      border
      bg-white
      shadow-sm
      overflow-hidden
    ">


      {/* Compact Card */}

      <button

        onClick={() => setOpen(!open)}

        className="
          w-full
          flex
          items-center
          justify-between
          p-3
          hover:bg-gray-50
        "

      >

        <div className="
          flex
          items-center
          gap-2
        ">

          <div className="
            w-8
            h-8
            rounded-lg
            bg-indigo-50
            flex
            items-center
            justify-center
          ">

            <ClipboardCheck
              size={16}
              className="text-indigo-600"
            />

          </div>


          <div className="text-left">

            <p className="
              text-sm
              font-semibold
            ">
              Manager Request Approval
            </p>


            <p className="
              text-xs
              text-gray-500
            ">
              Pending Requests: {requests.length}
            </p>


          </div>


        </div>


        <ChevronDown

          size={16}

          className={open ? "rotate-180" : ""}

        />


      </button>






      {/* Inside Content */}

      {open && (

        <div className="
          border-t
          p-3
        ">


          <div className="
            overflow-x-auto
          ">


            <table className="
              w-full
              text-xs
            ">


              <thead>

                <tr className="
                  text-gray-500
                  border-b
                ">

                  <th className="text-left py-2">
                    Manager
                  </th>

                  <th className="text-left">
                    Amount
                  </th>

                  <th className="text-left">
                    Date
                  </th>

                  <th className="text-left">
                    Status
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>



              <tbody>

                {requests.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-b"
                  >

                    <td className="py-2">
                      {item.name}
                    </td>


                    <td>
                      {item.amount}
                    </td>


                    <td>
                      {item.date}
                    </td>


                    <td>

                      <span className="
                        px-2
                        py-1
                        rounded-full
                        bg-yellow-50
                        text-yellow-700
                      ">

                        {item.status}

                      </span>

                    </td>


                    <td>

                      <div className="
                        flex
                        gap-1
                      ">

                        <button className="
                          text-[11px]
                          px-2
                          py-1
                          rounded
                          bg-green-100
                          text-green-700
                        ">
                          Approve
                        </button>
                         <button className="
                          text-[11px]
                          px-2
                          py-1
                          rounded
                          bg-red-100
                          text-red-700
                        ">
                          Reject
                        </button>


                      </div>

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