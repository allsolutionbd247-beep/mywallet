"use client";

import { useRef, useState } from "react";

interface Props {
  onSuccess?: () => void;
}

export default function PinLoginCard({ onSuccess }: Props) {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const data = [...pin];
    data[index] = value;
    setPin(data);

    if (value && index < 5) {
      pinRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      pinRefs.current[index - 1]?.focus();
    }
  };

  const verifyPin = async () => {
    const userPin = pin.join("");

    if (userPin.length !== 6) {
      setError("Please enter six digit PIN");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/security/verify-pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      
body: JSON.stringify({
  userId: "YOUR_USER_ID",
  pin: userPin,
}),

      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message || "Wrong PIN");
        setLoading(false);
        return;
      }

      onSuccess?.();

    } catch (error) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-8 py-10">

        <h2 className="text-center text-2xl font-bold text-gray-800">
          Enter Security PIN
        </h2>

        <p className="text-center text-sm text-gray-500 mt-2">
          Please enter your six digit PIN
        </p>


        <div className="flex justify-center gap-2 mt-8">

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
                handleChange(e.target.value,index)
              }
              onKeyDown={(e)=>
                handleKeyDown(e,index)
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


        {error && (
          <p className="text-center text-red-500 text-sm mt-5">
            {error}
          </p>
        )}


        <button
          onClick={verifyPin}
          disabled={loading}
          className="
          mt-8
          w-full
          py-3
          rounded-xl
          bg-emerald-600
          text-white
          font-semibold
          hover:bg-emerald-700
          "
        >
          {loading ? "Checking..." : "Verify PIN"}
        </button>


      </div>

    </div>
  );
}