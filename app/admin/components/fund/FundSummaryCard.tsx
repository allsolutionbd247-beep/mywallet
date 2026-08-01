"use client";

import {
  Building2,
  PlusCircle,
  Clock3,
  Lock,
  Unlock,
  DollarSign,
  MinusCircle,
  Send,
} from "lucide-react";


export default function FundSummaryCards() {


  const cards = [

    {
      title: "Company Reserve",
      amount: "$0.00",
      icon: Building2,
      color:
        "bg-emerald-50 border-emerald-200 text-emerald-700",
    },


    {
      title: "Total Fund Added",
      amount: "$0.00",
      icon: PlusCircle,
      color:
        "bg-yellow-50 border-yellow-200 text-yellow-700",
    },


    {
      title: "Pending Fund",
      amount: "$0.00",
      icon: Clock3,
      color:
        "bg-red-50 border-red-200 text-red-700",
    },


    {
      title: "Hold Fund",
      amount: "$0.00",
      icon: Lock,
      color:
        "bg-rose-50 border-rose-200 text-rose-700",
    },


    {
      title: "Released Fund",
      amount: "$0.00",
      icon: Unlock,
      color:
        "bg-green-50 border-green-200 text-green-700",
    },


    {
      title: "Commission Collected",
      amount: "$0.00",
      icon: DollarSign,
      color:
        "bg-emerald-100 border-emerald-300 text-emerald-800",
    },


    {
      title: "Reduced Fund",
      amount: "$0.00",
      icon: MinusCircle,
      color:
        "bg-red-50 border-red-200 text-red-700",
    },


    {
      title: "Manager Request Fund",
      amount: "$0.00",
      icon: Send,
      color:
        "bg-blue-50 border-blue-200 text-blue-700",
    },

  ];



  return (

    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-3
      "
    >


      {
        cards.map((card)=>{

          const Icon = card.icon;


          return (

            <div
              key={card.title}
              className={`
                rounded-xl
                border
                p-3
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
                hover:-translate-y-1
                ${card.color}
              `}
            >


              <div
                className="
                  w-8
                  h-8
                  rounded-lg
                  bg-white/70
                  flex
                  items-center
                  justify-center
                  mb-2
                "
              >

                <Icon
                  size={16}
                />

              </div>



              <p
                className="
                  text-xs
                  font-semibold
                  opacity-70
                "
              >
                {card.title}
              </p>



              <h3
                className="
                  mt-1
                  text-lg
                  font-bold
                "
              >
                {card.amount}
              </h3>


            </div>

          );

        })
      }


    </div>

  );

}