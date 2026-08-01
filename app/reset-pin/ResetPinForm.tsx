"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPinForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleResetPin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");
    setMessage("");


    if (!token) {
      setError("Invalid reset link.");
      return;
    }


    if (!pin || !confirmPin) {
      setError("PIN is required.");
      return;
    }


    if (pin !== confirmPin) {
      setError("PINs do not match.");
      return;
    }


    if (!/^\d{4,6}$/.test(pin)) {
      setError(
        "PIN must be 4 to 6 digits."
      );
      return;
    }


    setLoading(true);


    try {
      const res = await fetch(
        "/api/security/reset-pin",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            token,
            pin,
          }),
        }
      );


      const data = await res.json();


      if (!res.ok) {
        setError(
          data.error ||
          "Something went wrong."
        );

        setLoading(false);
        return;
      }


      setMessage(
        "Your security PIN changed successfully. Please login again."
      );


      setTimeout(() => {
        router.push("/login");
      }, 2500);


    } catch {

      setError(
        "Server error."
      );

    }


    setLoading(false);
  };


  return (
    <div className="
      min-h-screen
      bg-[#007a43]
      flex
      items-center
      justify-center
      p-6
    ">

      <div className="
        bg-white
        rounded-3xl
        shadow-2xl
        w-full
        max-w-md
        p-8
      ">

        <h1 className="
          text-2xl
          font-bold
          text-center
          text-gray-900
        ">
          Reset Security PIN
        </h1>


        <p className="
          text-sm
          text-gray-500
          text-center
          mt-2
        ">
          Create your new security PIN.
        </p>


        <form
          onSubmit={handleResetPin}
          className="
            space-y-5
            mt-8
          "
        >

          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            placeholder="New PIN"
            value={pin}
            onChange={(e) =>
              setPin(e.target.value)
            }
            className="
              w-full
              border
              rounded-xl
              p-3
              outline-none
              focus:border-green-600
            "
          />


          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            placeholder="Confirm PIN"
            value={confirmPin}
            onChange={(e) =>
              setConfirmPin(
                e.target.value
              )
            }
            className="
              w-full
              border
              rounded-xl
              p-3
              outline-none
              focus:border-green-600
            "
          />


          {error && (
            <p className="
              text-red-500
              text-sm
              text-center
            ">
              {error}
            </p>
          )}


          {message && (
            <p className="
              text-green-600
              text-sm
              text-center
            ">
              {message}
            </p>
          )}
          <button
            disabled={loading}
            className="
              w-full
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              py-3
              rounded-xl
              font-semibold
            "
          >
            {loading
              ? "Updating..."
              : "Reset PIN"}
          </button>

        </form>

      </div>

    </div>
  );
}