"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");



  const handleReset = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");
    setMessage("");


    if (!token) {
      setError("Invalid reset link.");
      return;
    }


    if (password.length < 8) {
      setError(
        "Password must be at least 8 characters."
      );
      return;
    }


    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );
      return;
    }


    setLoading(true);


    try {
      const res = await fetch(
        "/api/security/reset-password",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            token,
            password,
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
        "Password changed successfully. Please login."
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
      flex
      items-center
      justify-center
      bg-slate-100
      p-6
    ">

      <div className="
        bg-white
        shadow-2xl
        rounded-3xl
        p-8
        w-full
        max-w-md
      ">


        <h1 className="
          text-2xl
          font-bold
          text-center
        ">
          Reset Password
        </h1>


        <p className="
          text-sm
          text-gray-500
          text-center
          mt-2
        ">
          Create your new password.
        </p>



        <form
          onSubmit={handleReset}
          className="
            space-y-5
            mt-8
          "
        >

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              border
              rounded-xl
              p-3
            "
          />


          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="
              w-full
              border
              rounded-xl
              p-3
            "
          />



          {error && (
            <p className="
              text-red-500
              text-sm
            ">
              {error}
            </p>
          )}



          {message && (
            <p className="
              text-green-600
              text-sm
            ">
              {message}
            </p>
          )}



          <button
            disabled={loading}
            className="
              w-full
              bg-emerald-600
              text-white
              rounded-xl
              py-3
              font-semibold
            "
          >
            {loading
              ? "Updating..."
              : "Reset Password"}
          </button>


        </form>


      </div>

    </div>
  );
}