"use client";

import { useState } from "react";
import { ChevronDown, Settings } from "lucide-react";

export default function FundCommissionSettings() {
  const [open, setOpen] = useState(false);

  const [dailyLimit, setDailyLimit] = useState("1");
  const [approvalMode, setApprovalMode] = useState("manual");

  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">

      {/* Main Card */}

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          px-3
          py-2.5
          bg-slate-50
        "
      >

        <div className="flex items-center gap-2">

          <div className="
            w-8
            h-8
            rounded-lg
            bg-indigo-50
            flex
            items-center
            justify-center
          ">
            <Settings
              size={16}
              className="text-indigo-600"
            />
          </div>


          <span className="
            text-sm
            font-semibold
          ">
            Fund & Commission Settings
          </span>

        </div>


        <ChevronDown
          size={16}
          className={open ? "rotate-180" : ""}
        />

      </button>





      {/* Settings Body */}

      {open && (

        <div className="
          p-3
          space-y-3
        ">


          {/* Manager Request */}

          <div className="
            border
            rounded-lg
            p-3
          ">

            <h3 className="
              text-xs
              font-semibold
              mb-2
            ">
              Manager Request Settings
            </h3>


            <div className="
              grid
              grid-cols-2
              gap-2
            ">

              <input
                type="number"
                placeholder="Minimum Amount"
                className="
                  text-xs
                  border
                  rounded-lg
                  px-3
                  py-2
                "
              />


              <input
                type="number"
                placeholder="Maximum Amount"
                className="
                  text-xs
                  border
                  rounded-lg
                  px-3
                  py-2
                "
              />

            </div>



            <select
              value={dailyLimit}
              onChange={(e)=>
                setDailyLimit(e.target.value)
              }
              className="
                mt-2
                w-full
                text-xs
                border
                rounded-lg
                px-3
                py-2
              "
            >

              <option value="1">
                1 Time Per Day
              </option>

              <option value="2">
                2 Times Per Day
              </option>

              <option value="3">
                3 Times Per Day
              </option>

            </select>


          </div>







          {/* Approval */}

          <div className="
            border
            rounded-lg
            p-3
          ">

            <h3 className="
              text-xs
              font-semibold
              mb-2
            ">
              Fund Approval Settings
            </h3>


            <select
              value={approvalMode}
              onChange={(e)=>
                setApprovalMode(e.target.value)
              }
              className="
                w-full
                text-xs
                border
                rounded-lg
                px-3
                py-2
              "
            >

              <option value="manual">
                Manual Approval
              </option>

              <option value="auto">
                Auto Approval
              </option>

            </select>


          </div>







          {/* Commission */}
 <div className="
            border
            rounded-lg
            p-3
          ">


            <h3 className="
              text-xs
              font-semibold
              mb-2
            ">
              Commission Settings
            </h3>



            <div className="
              grid
              grid-cols-2
              gap-2
            ">


              <div className="
                border
                rounded-lg
                p-2
                bg-emerald-50
              ">

                <p className="text-[11px]">
                  Verified Sender
                </p>


                <p className="
                  text-sm
                  font-bold
                  text-emerald-700
                ">
                  0.25%
                </p>


              </div>





              <div className="
                border
                rounded-lg
                p-2
                bg-red-50
              ">

                <p className="text-[11px]">
                  Unverified Sender
                </p>


                <p className="
                  text-sm
                  font-bold
                  text-red-700
                ">
                  1%
                </p>


              </div>


            </div>


          </div>






          {/* Save */}

          <button
            className="
              w-full
              text-xs
              font-semibold
              py-2
              rounded-lg
              bg-indigo-600
              text-white
            "
          >
            Save Changes
          </button>



        </div>

      )}

    </div>
  );
}