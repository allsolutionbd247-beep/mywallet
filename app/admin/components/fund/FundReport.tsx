"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BarChart3,
  CalendarDays,
} from "lucide-react";


export default function FundReport() {

  const [open, setOpen] = useState(false);

  const quickFilters = [
    "Today",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Last Month",
    "This Year",
  ];


  const [filter, setFilter] = useState("Today");


  return (

    <div className="
      bg-white
      border
      rounded-xl
      shadow-sm
      overflow-hidden
    ">


      {/* Main Header */}

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          px-4
          py-3
          bg-gradient-to-r
          from-indigo-100
          to-purple-100
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
            bg-white
            flex
            items-center
            justify-center
          ">

            <BarChart3
              size={18}
              className="text-indigo-600"
            />

          </div>


          <span className="
            text-base
            font-bold
          ">
            Fund Reports & Analysis
          </span>


        </div>


        {
          open
          ?
          <ChevronUp size={18}/>
          :
          <ChevronDown size={18}/>
        }


      </button>





      {
        open && (

          <div className="
            p-3
            space-y-3
          ">


            {/* Report Range */}

            <div className="
              border
              rounded-lg
              bg-slate-50
              p-3
            ">


              <h3 className="
                text-sm
                font-semibold
                flex
                items-center
                gap-2
                mb-3
              ">

                <CalendarDays size={15}/>

                Report Range

              </h3>





              {/* Quick Filter */}

              <div className="mb-3">

                <label className="
                  text-xs
                  font-medium
                  block
                  mb-1
                ">
                  Quick Filter
                </label>


                <select
                  value={filter}
                  onChange={(e)=>
                    setFilter(e.target.value)
                  }
                  className="
                    w-full
                    text-xs
                    border
                    rounded-lg
                    px-3
                    py-2
                    bg-white
                  "
                >

                  {
                    quickFilters.map((item)=>(

                      <option
                        key={item}
                      >
                        {item}
                      </option>

                    ))
                  }

                </select>


              </div>





              {/* Custom Date */}

              <div className="
                border-t
                pt-3
              ">


                <label className="
                  text-xs
                  font-medium
                  block
                  mb-2
                ">
                  Custom Date Range
                </label>


                <div className="
                  grid
                  grid-cols-2
                  gap-2
                ">


                  <input
                    type="date"
                    className="
                      text-xs
                      border
                      rounded-lg
                      px-2
                      py-2
                    "
                  />
<input
                    type="date"
                    className="
                      text-xs
                      border
                      rounded-lg
                      px-2
                      py-2
                    "
                  />


                </div>




                <button
                  className="
                    mt-3
                    bg-indigo-600
                    text-white
                    text-xs
                    px-4
                    py-2
                    rounded-lg
                    font-semibold
                  "
                >

                  Apply

                </button>


              </div>



            </div>



            {/* Fund Summary */}

<div className="
  border
  rounded-lg
  p-3
  bg-white
">


  <h3 className="
    text-sm
    font-semibold
    mb-3
  ">
    Fund Summary
  </h3>



  <div className="
    grid
    grid-cols-2
    md:grid-cols-4
    gap-2
  ">


    {/* Added Fund */}

    <div className="
      rounded-lg
      border
      bg-emerald-50
      border-emerald-200
      p-2
    ">

      <p className="
        text-[11px]
        text-emerald-700
        font-medium
      ">
        Added Fund
      </p>

      <h4 className="
        text-base
        font-bold
        text-emerald-800
      ">
        $0.00
      </h4>

    </div>




    {/* Reduced Fund */}

    <div className="
      rounded-lg
      border
      bg-red-50
      border-red-200
      p-2
    ">

      <p className="
        text-[11px]
        text-red-700
        font-medium
      ">
        Reduced Fund
      </p>

      <h4 className="
        text-base
        font-bold
        text-red-800
      ">
        $0.00
      </h4>

    </div>





    {/* Net Change */}

    <div className="
      rounded-lg
      border
      bg-blue-50
      border-blue-200
      p-2
    ">

      <p className="
        text-[11px]
        text-blue-700
        font-medium
      ">
        Net Change
      </p>

      <h4 className="
        text-base
        font-bold
        text-blue-800
      ">
        $0.00
      </h4>

    </div>





    {/* Commission */}

    <div className="
      rounded-lg
      border
      bg-yellow-50
      border-yellow-200
      p-2
    ">

      <p className="
        text-[11px]
        text-yellow-700
        font-medium
      ">
        Commission
      </p>

      <h4 className="
        text-base
        font-bold
        text-yellow-800
      ">
        $0.00
      </h4>

    </div>



  </div>


</div>







{/* Analysis Chart */}

<div className="
  border
  rounded-lg
  p-3
  bg-slate-50
">


  <div className="
    flex
    justify-between
    items-center
    mb-2
  ">


    <h3 className="
      text-sm
      font-semibold
    ">
      Fund Analysis Chart
    </h3>



    <span className="
      text-[10px]
      px-2
      py-1
      rounded-full
      bg-indigo-100
      text-indigo-700
    ">
      {filter}
    </span>


  </div>




  <div className="
    h-40
    rounded-lg
    bg-gradient-to-br
    from-indigo-50
    to-purple-50
    flex
    items-center
    justify-center
    text-xs
    text-gray-400
  ">

    Chart Preview

  </div>


</div>

{/* Export Section */}

<div className="
  border
  rounded-lg
  p-3
  bg-white
">


  <h3 className="
    text-sm
    font-semibold
    mb-3
  ">
    Export Report
  </h3>



  <div className="
    grid
    grid-cols-3
    gap-2
  ">


    {/* PDF */}

    <button
      className="
        text-xs
        font-semibold
        py-2
        rounded-lg
        border
        bg-red-50
        border-red-200
        text-red-700
        hover:bg-red-100
      "
    >

      PDF

    </button>





    {/* Excel */}

    <button
      className="
        text-xs
        font-semibold
        py-2
        rounded-lg
        border
        bg-green-50
        border-green-200
        text-green-700
        hover:bg-green-100
      "
    >

      Excel

    </button>






    {/* Print */}

    <button
      className="
        text-xs
        font-semibold
        py-2
        rounded-lg
        border
        bg-blue-50
        border-blue-200
        text-blue-700
        hover:bg-blue-100
      "
    >

      Print

    </button>



  </div>



</div>


          </div>

        )
      }


    </div>

  );

}