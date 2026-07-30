"use client";

import { useState } from "react";
import {
  ChevronDown,
  Plus,
  Minus,
  Lock,
  Unlock
} from "lucide-react";


export default function AddFundControl() {

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("add");


  const actions = [
    {
      name: "Increase Balance",
      value: "add",
      icon: Plus,
    },
    {
      name: "Reduce Balance",
      value: "reduce",
      icon: Minus,
    },
    {
      name: "Hold Balance",
      value: "hold",
      icon: Lock,
    },
    {
      name: "Release Hold",
      value: "release",
      icon: Unlock,
    },
  ];


  return (

    <div className="
      bg-white
      border
      rounded-xl
      shadow-sm
    ">


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
    rounded-xl
    bg-gradient-to-r
    from-emerald-100
    to-blue-100
    text-gray-800
    border
    border-emerald-200
    shadow-sm
    hover:shadow-md
    transition-all
  "
>

  <div className="
    flex
    items-center
    gap-3
  ">

    <div className="
      w-10
      h-10
      rounded-lg
      bg-emerald-200
      flex
      items-center
      justify-center
      text-emerald-700
    ">
      <Plus
        size={22}
      />
    </div>


    <span className="
      text-lg
      font-bold
    ">
      Add Fund Control
    </span>

  </div>


  <ChevronDown
    className={`
      text-gray-600
      transition-transform
      duration-300
      ${open ? "rotate-180" : ""}
    `}
  />

</button>




      {
        open && (

          <div className="
            border-t
            p-5
          ">


            {/* Action */}

            <h3 className="
              font-semibold
              mb-3
            ">
              Balance Action
            </h3>


            <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-3
            ">


              {
                actions.map((item)=>{

                  const Icon = item.icon;


                  return (

                    <button

                      key={item.value}

                      onClick={() =>
                        setAction(item.value)
                      }

                      className={`
                        border
                        rounded-lg
                        p-3
                        text-sm
                        ${
                          action === item.value
                          ?
                          "bg-blue-600 text-white"
                          :
                          "bg-gray-50"
                        }
                      `}

                    >

                      <Icon
                        size={18}
                        className="mx-auto mb-1"
                      />

                      {item.name}

                    </button>

                  )

                })
              }


            </div>


            {/* Search User */}

            <div className="mt-5">


              <label className="text-sm font-medium">
                Wallet ID / Email
              </label>


              <input

                placeholder="Enter wallet ID or email"

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




            {/* Auto User Info */}

            <div className="
              mt-4
              bg-slate-50
              rounded-lg
              p-4
            ">


              <p>
                User Name: Auto Loading
              </p>

              <p>
                Wallet ID: Auto Loading
              </p>

              <p>
                Primary Wallet: Auto Loading
              </p>

              <p>
                Currency: Auto Loading
              </p>


            </div>





            {/* Amount */}

            <input

              placeholder="Amount"

              type="number"

              className="
                mt-4
                w-full
                border
                rounded-lg
                px-3
                py-2
              "

            />





            {/* Note */}

            <textarea

              placeholder="Admin Note"
className="
                mt-4
                w-full
                border
                rounded-lg
                px-3
                py-2
                h-24
              "

            />






            <button

              className="
                mt-4
                bg-emerald-600
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
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
