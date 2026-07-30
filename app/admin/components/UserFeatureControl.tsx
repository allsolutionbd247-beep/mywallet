"use client";

import { useState } from "react";
import {
  ToggleLeft,
  ToggleRight,
  ChevronDown,
  Settings,
} from "lucide-react";


export default function UserFeatureControl() {

  const [open, setOpen] = useState(false);


  const [features, setFeatures] = useState({
    addMoney: true,
    transfer: true,
    moneyOut: true,
    exchange: true,
  });


  const toggleFeature = (key: keyof typeof features) => {
    setFeatures((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  const featureList = [
    {
      key: "addMoney",
      title: "Add Money",
      description: "User can add money to wallet",
    },
    {
      key: "transfer",
      title: "Transfer (Send Money)",
      description: "Controls transfer and send money actions",
    },
    {
      key: "moneyOut",
      title: "Money Out",
      description: "User cash out permission",
    },
    {
      key: "exchange",
      title: "Exchange",
      description: "Currency exchange permission",
    },
  ];


  return (

    <div className="mt-5 bg-white rounded-xl border border-gray-100 shadow-sm">


      {/* Header */}

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

          <Settings
            size={18}
            className="text-blue-600"
          />


          <div className="text-left">

            <h4 className="text-sm font-bold text-gray-800">
              User Feature Control
            </h4>

            <p className="text-[11px] text-gray-500">
              Manage wallet permissions
            </p>

          </div>

        </div>


        <ChevronDown
          size={18}
          className={`
          text-blue-600 transition
          ${open ? "rotate-180" : ""}
          `}
        />

      </button>





      {/* Options */}

      {open && (

        <div className="p-4 space-y-3">


          {featureList.map((feature) => (

            <div
              key={feature.key}
              className="
              flex
              items-center
              justify-between
              border
              rounded-xl
              p-3
              bg-gray-50
              "
            >


              <div>

                <h5 className="text-sm font-semibold text-gray-800">
                  {feature.title}
                </h5>


                <p className="text-xs text-gray-500">
                  {feature.description}
                </p>

              </div>





              <button
                onClick={() =>
                  toggleFeature(
                    feature.key as keyof typeof features
                  )
                }
                className="relative group"
              >

                {features[feature.key as keyof typeof features] ? (

                  <>

                    <ToggleRight
                      size={38}
                      className="text-emerald-500"
                    />


                    <span
                      className="
                      absolute
                      -top-7
                      left-1/2
                      -translate-x-1/2
                      hidden
                      group-hover:block
                      bg-emerald-600
                      text-white
                      text-xs
                      px-2
                      py-1
                      rounded-md
                      "
                    >
                      ON
                    </span>

                  </>

                ) : (

                  <>

                    <ToggleLeft
                      size={38}
                      className="text-gray-400"
                    />

<span
                      className="
                      absolute
                      -top-7
                      left-1/2
                      -translate-x-1/2
                      hidden
                      group-hover:block
                      bg-gray-700
                      text-white
                      text-xs
                      px-2
                      py-1
                      rounded-md
                      "
                    >
                      OFF
                    </span>

                  </>

                )}

              </button>


            </div>

          ))}


        </div>

      )}


    </div>

  );
}
