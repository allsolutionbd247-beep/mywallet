"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";


export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!captchaToken) {
    setErrorMessage("Please complete CAPTCHA");
    return;
  }

  setErrorMessage("");
  setSuccessMessage("");

  if (!email) {
    setErrorMessage("Please enter your email address");
    return;
  }

  if (!password) {
    setErrorMessage("Please enter your password");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    setSuccessMessage(data.message);
    router.push("/dashboard");

  } catch (error: any) {
    setErrorMessage(error.message);
  } finally {
    setLoading(false);
  }
};



  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-12 text-white">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />


      <div
        className="
        relative
        z-10
        mt-4
        w-full
        max-w-md
        rounded-3xl
        border
        border-white/20
        bg-white/10
        p-6
        shadow-2xl
        backdrop-blur-xl
        "
      >
        <div className="text-center">

       <h1 className="text-3xl font-bold">
        💳 My Wallet
       </h1>

       <p className="mt-1 text-sm text-gray-300">
        Secure Digital Banking
       </p>

       </div>



        <div className="mt-2 text-center">

          <h2 className="text-2xl font-semibold">
            Welcome 👋
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Sign in to access your wallet securely
          </p>

        </div>


        <form 
        onSubmit={handleLogin}
        className="mt-6 space-y-5"
        >


          <div>

            <label className="text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="
              mt-2
              w-full
              rounded-xl
              border
              border-white/20
              bg-black/30
              px-4
              py-3
              text-white
              outline-none
              "
            />

          </div>



          <div>

            <label className="text-sm text-gray-300">
              Password
            </label>


            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="
                mt-2
                w-full
                rounded-xl
                border
                border-white/20
                bg-black/30
                px-4
                py-3
                pr-12
                text-white
                outline-none
                "
              />


              <button
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="
                absolute
                right-3
                top-5
                text-gray-300
                "
              >
                {showPassword ? "🙈" : "👁"}
              </button>


            </div>

          </div>

          <ReCAPTCHA
           sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
           onChange={(token) => {
           setCaptchaToken(token || "");
          }}
        />

       {/* Login Button */}

        <button
  type="submit"
  disabled={loading}
  className="
  mt-4
  w-full
  rounded-full
  bg-blue-600
  py-3
  font-semibold
  transition
  hover:bg-blue-700
  disabled:opacity-50
"
>
  {loading ? "Logging in..." : "Login"}
</button>

{errorMessage && (
  <p className="mt-3 text-center text-sm text-red-500">
    ❌ {errorMessage}
  </p>
)}

{successMessage && (
  <p className="mt-3 text-center text-sm text-green-400">
    ✅ {successMessage}
  </p>
)}

 </form>
        {/* Forgot Password */}

        <div className="mt-5 text-center">

          <button
            type="button"
            className="
            text-sm
            text-blue-400
            hover:text-blue-300
            "
          >
            Forgot Password?
          </button>

        </div>



        {/* Divider */}

        <div className="my-4 flex items-center gap-3">

          <div className="h-px flex-1 bg-white/20" />

          <span className="text-xs text-gray-400">
            OR
          </span>

          <div className="h-px flex-1 bg-white/20" />

        </div>



        {/* Google Login */}

        <button
          type="button"
          className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-white/20
          bg-white
          py-2
          text-sm
          font-semibold
          text-black
          transition
          hover:bg-gray-200
          "
        >

          <span>
            🌐
          </span>

          Continue with Google

        </button>




        {/* Create Account */}

        <p className="mt-6 text-center text-sm text-gray-400">

          Don't have an account?

          <a
            href="/register"
            className="
            ml-1
            text-blue-400
            hover:text-blue-300
            "
          >
            Create Account
          </a>

        </p>




        {/* Security Badge */}

        <div
          className="
          mt-4
          rounded-xl
          border
          border-green-400/20
          bg-green-400/10
          p-2
          text-center
          text-xs
          text-gray-200
          "
        >

          🔒 Bank-Level Security

          <br />

          Protected Wallet Access

        </div>


      </div>


    </main>
  );
}