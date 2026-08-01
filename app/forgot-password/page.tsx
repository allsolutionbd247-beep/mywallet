"use client";

import { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleForgotPassword = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required.");
      return;
    }

    setLoading(true);


    try {
      const res = await fetch(
        "/api/security/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
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
        "Reset link has been sent to your email."
      );


    } catch (error) {
      setError(
        "Server error. Please try again."
      );
    }


    setLoading(false);
  };


  return (
    <div className="min-h-screen bg-[#007a43] flex flex-col justify-between p-6">


      {/* Home Button */}
      <div className="w-full max-w-4xl mx-auto">
        <Link
          href="/"
          className="
          flex items-center gap-1.5
          text-xs
          bg-black/20
          hover:bg-black/30
          px-3 py-1.5
          rounded-lg
          text-white
          border border-white/20
          w-fit
          "
        >
          <Home size={14} />
          Home
        </Link>
      </div>



      {/* Card */}
      <div className="
        flex
        items-center
        justify-center
        my-auto
        py-8
      ">

        <div className="
          bg-[#1e293b]
          text-white
          w-full
          max-w-md
          p-8
          sm:p-10
          rounded-3xl
          shadow-2xl
          border
          border-white/10
        ">


          <h1 className="
            text-xl
            sm:text-2xl
            font-bold
            text-center
          ">
            Forgot Password
          </h1>


          <p className="
            text-sm
            text-gray-300
            text-center
            mt-3
          ">
            Enter your registered email.
            We will send you a password reset link.
          </p>



          <form
            onSubmit={handleForgotPassword}
            className="
            space-y-5
            mt-8
            "
          >


            <div>

              <label className="
                block
                text-xs
                text-gray-400
                mb-1
              ">
                Email
              </label>


              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="
                w-full
                p-3
                bg-white/5
                border
                border-white/10
                rounded-lg
                text-sm
                text-white
                placeholder-gray-500
                outline-none
                focus:border-amber-400
                "
              />

            </div>



            {error && (
              <p className="
                text-red-400
                text-sm
                text-center
              ">
                {error}
              </p>
            )}



            {message && (
              <p className="
                text-green-400
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
              py-3.5
              bg-amber-500
              hover:bg-amber-600
              text-gray-950
              font-bold
              rounded-xl
              transition
              "
            >
              {loading
                ? "Sending..."
                : "Send Reset Link"}
            </button>


          </form>



          <div className="
            text-center
            mt-6
          ">

            <Link
              href="/login"
              className="
              text-amber-400
              text-sm
              hover:underline
              "
            >
              Back to Login
            </Link>

          </div>


        </div>

      </div>


    </div>
  );
}