"use client";

import {
  DollarSign,
  Clock,
  Lock,
  CheckCircle
} from "lucide-react";


export default function FundSummaryCard() {


  const cards = [
    {
      title: "Total Fund Added",
      amount: "$25,000",
      icon: DollarSign,
      color: "bg-blue-600",
    },

    {
      title: "Pending Fund",
      amount: "$1,200",
      icon: Clock,
      color: "bg-yellow-500",
    },

    {
      title: "Hold Balance",
      amount: "$200",
      icon: Lock,
      color: "bg-red-500",
    },

    {
      title: "Released Hold",
      amount: "$3,500",
      icon: CheckCircle,
      color: "bg-emerald-600",
    },
  ];



  return (

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-4
    ">


      {cards.map((card, index) => {

        const Icon = card.icon;


        return (

          <div
            key={index}
            className="
              bg-white
              border
              border-gray-200
              rounded-xl
              p-5
              shadow-sm
              hover:shadow-md
              transition
            "
          >


            <div className="
              flex
              items-center
              justify-between
            ">


              <div
                className={`
                  ${card.color}
                  text-white
                  p-3
                  rounded-lg
                `}
              >

                <Icon size={22}/>

              </div>


            </div>



            <h3 className="
              text-sm
              text-gray-500
              mt-4
            ">

              {card.title}

            </h3>


            <p className="
              text-2xl
              font-bold
              text-gray-800
              mt-1
            ">

              {card.amount}

            </p>


          </div>

        );

      })}


    </div>

  );

}
