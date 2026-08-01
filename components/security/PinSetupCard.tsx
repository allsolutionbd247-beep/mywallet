"use client";

import { useRef, useState } from "react";

interface Props {
  onSuccess?: () => void;
}

export default function PinSetupCard({ onSuccess }: Props) {

  const [pin, setPin] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [confirmPin, setConfirmPin] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);


  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);
  const confirmRefs = useRef<(HTMLInputElement | null)[]>([]);



  const handleChange = (
    value: string,
    index: number,
    type: "pin" | "confirm"
  ) => {


    if (!/^[0-9]?$/.test(value)) return;


    if (type === "pin") {

      const data = [...pin];
      data[index] = value;
      setPin(data);


      if (value && index < 5) {
        pinRefs.current[index + 1]?.focus();
      }


    } else {

      const data = [...confirmPin];
      data[index] = value;
      setConfirmPin(data);


      if (value && index < 5) {
        confirmRefs.current[index + 1]?.focus();
      }

    }

  };




  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    type: "pin" | "confirm"
  ) => {


    if (e.key === "Backspace") {


      if (type === "pin") {

        if (!pin[index] && index > 0) {
          pinRefs.current[index - 1]?.focus();
        }

      } else {

        if (!confirmPin[index] && index > 0) {
          confirmRefs.current[index - 1]?.focus();
        }

      }

    }

  };





  const createPin = async () => {

  const newPin = pin.join("");
  const confirm = confirmPin.join("");


  if (newPin.length !== 6 || confirm.length !== 6) {

    setError("Please enter six digit PIN");
    return;

  }


  if (newPin !== confirm) {

    setError("Does not match");
    return;

  }


  setError("");


  try {


    const response = await fetch(
      "/api/security/create-pin",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },


    body: JSON.stringify({
  pin: newPin,
})

      }
    );



    const data = await response.json();



    if (!data.success) {

      setError(data.message);

      return;

    }



    setSuccess(true);



    setTimeout(() => {

      onSuccess?.();

    },1500);



  } catch(error) {


    console.error(
      "PIN CREATE ERROR:",
      error
    );


    setError(
      "Something went wrong"
    );


  }

};




  return (

    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/20
      backdrop-blur-md
      "
    >


      <div
        className="
        w-full
        max-w-3xl
        bg-white
        rounded-3xl
        shadow-2xl
        border
        border-gray-200
        px-10
        py-8
        "
      >



        <div className="text-center mb-6">


          <h2
            className="
            text-2xl
            font-bold
            text-gray-800
            "
          >
            Create Your Security PIN
          </h2>


          <p
            className="
            text-sm
            text-gray-500
            mt-2
            "
          >
            Please create your six digit PIN
          </p>


        </div>





        <div
          className="
          flex
          justify-center
          items-center
          gap-8
          "
        >




          <div className="flex flex-col items-center">

  <p
    className="
    text-sm
    font-semibold
    text-gray-700
    mb-3
    text-center
    "
  >
    Security PIN
  </p>

  <div className="flex gap-2 justify-center">


              {pin.map((item,index)=>(


                <input

                  key={index}

                  ref={(el)=>{
                    pinRefs.current[index]=el;
                  }}

                  value={item}

                  maxLength={1}

                  type="password"


                  onChange={(e)=>
                    handleChange(
                      e.target.value,
                      index,
                      "pin"
                    )
                  }


                  onKeyDown={(e)=>
                    handleKeyDown(
                      e,
                      index,
                      "pin"
                    )
                  }
                  className="
                  w-11
                  h-11
                  rounded-xl
                  border
                  text-center
                  text-lg
                  font-bold
                  outline-none
                  focus:ring-2
                  focus:ring-emerald-500
                  "

                />


              ))}



            </div>


          </div>






         <div className="flex flex-col items-center">

<p
 className="
 text-sm
 font-semibold
 text-gray-700
 mb-3
 text-center
 "
>
 Confirm PIN
</p>

<div className="flex gap-2 justify-center">


              {confirmPin.map((item,index)=>(


                <input

                  key={index}

                  ref={(el)=>{
                    confirmRefs.current[index]=el;
                  }}


                  value={item}

                  maxLength={1}

                  type="password"


                  onChange={(e)=>
                    handleChange(
                      e.target.value,
                      index,
                      "confirm"
                    )
                  }


                  onKeyDown={(e)=>
                    handleKeyDown(
                      e,
                      index,
                      "confirm"
                    )
                  }



                  className="
                  w-11
                  h-11
                  rounded-xl
                  border
                  text-center
                  text-lg
                  font-bold
                  outline-none
                  focus:ring-2
                  focus:ring-emerald-500
                  "

                />


              ))}



            </div>


          </div>



        </div>





        {error && (

          <p className="
          text-center
          text-red-500
          text-sm
          mt-5
          "
          >
            {error}
          </p>

        )}




        {success && (

          <p
          className="
          text-center
          text-emerald-600
          font-semibold
          mt-5
          "
          >
            Your PIN is created successful
          </p>

        )}





        <button

          onClick={createPin}

          className="
          mt-8
          w-full
          py-3
          rounded-xl
          bg-emerald-600
          text-white
          font-semibold
          hover:bg-emerald-700
          transition
          "
        >

          Create PIN

        </button>



      </div>


    </div>

  );
}