"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function RegisterPage() {
  const [showPasswordHint, setShowPasswordHint] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value: string) => {
    let errors = [];

    if (value.length < 10) {
      errors.push("Minimum 10 characters");
    }

    if (!/[A-Z]/.test(value)) {
      errors.push("One uppercase letter required");
    }

    if (!/[a-z]/.test(value)) {
      errors.push("One lowercase letter required");
    }

    if (!/[0-9]/.test(value)) {
      errors.push("One number required");
    }

    if (!/[!@#$%^&*]/.test(value)) {
      errors.push("One special symbol required");
    }

    setPasswordError(errors.join(", "));
  };

  const validateConfirmPassword = (value: string) => {
    if (value !== password) {
      setConfirmError("Password does not match");
    } else {
      setConfirmError("");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      return;
    }
if (!captchaToken) {
  setEmailError("Please complete the CAPTCHA");
  return;
}
    if (
      emailError ||
      passwordError ||
      confirmError ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
       email,
       password,
       captchaToken,
      }),
      
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setSuccessMessage(data.message);

    } catch (error: any) {
      setEmailError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-12 text-white">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-3 text-sm text-gray-300">
            Create your secure My Wallet account
          </p>
        </div>


        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none"
            />

            {emailError && (
              <p className="mt-2 text-sm text-red-500">
                ❌ {emailError}
              </p>
            )}
          </div>


          {/* Password */}
          <div>

            <label className="text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              onFocus={() => setShowPasswordHint(true)}
              onBlur={() => setShowPasswordHint(false)}
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none"
            />


            {showPasswordHint && (
              <div className="mt-3 rounded-xl border border-white/10 bg-black/40 p-3 text-xs text-gray-300">

                <p className="mb-2 text-white">
                  Password Requirements:
                </p>

                <ul className="space-y-1">

                  <li className={password.length >= 10 ? "text-green-400" : "text-red-400"}>
                    {password.length >= 10 ? "✓" : "✗"} Minimum 10 characters
                  </li>

                  <li className={/[A-Z]/.test(password) ? "text-green-400" : "text-red-400"}>
                    {/[A-Z]/.test(password) ? "✓" : "✗"} Uppercase letter
                  </li>

                  <li className={/[a-z]/.test(password) ? "text-green-400" : "text-red-400"}>
                    {/[a-z]/.test(password) ? "✓" : "✗"} Lowercase letter
                  </li>

                  <li className={/[0-9]/.test(password) ? "text-green-400" : "text-red-400"}>
                    {/[0-9]/.test(password) ? "✓" : "✗"} Number
                  </li>

                  <li className={/[!@#$%^&*]/.test(password) ? "text-green-400" : "text-red-400"}>
                    {/[!@#$%^&*]/.test(password) ? "✓" : "✗"} Special symbol
                  </li>

                </ul>
              </div>
            )}


            {passwordError && (
              <p className="mt-2 text-sm text-red-500">
                ❌ {passwordError}
              </p>
            )}

          </div>


          {/* Confirm Password */}
          <div>

            <label className="text-sm text-gray-300">
              Confirm Password
            </label>
<input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validateConfirmPassword(e.target.value);
              }}
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none"
            />

            {confirmError && (
              <p className="mt-2 text-sm text-red-500">
                ❌ {confirmError}
              </p>
            )}

          </div>
          <ReCAPTCHA
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
  onChange={(token) => {
    setCaptchaToken(token || "");
  }}
/>
{/* Terms & Conditions */}

          <div className="flex items-start gap-3 text-sm text-gray-300">

            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1 h-4 w-4"
            />

            <p>
              I agree to My Wallet Terms & Conditions
            </p>

          </div>


          {/* Create Account Button */}

          <button
            type="submit"
            disabled={!termsAccepted}
            className={
              termsAccepted
                ? "w-full rounded-full bg-blue-600 py-3 font-semibold hover:bg-blue-700"
                : "w-full rounded-full bg-gray-600 py-3 font-semibold opacity-50 cursor-not-allowed"
            }
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>


        </form>


        {successMessage && (
          <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/20 p-3 text-center text-sm text-green-300">
            ✅ {successMessage}
          </div>
        )}


        <div className="mt-6 rounded-xl border border-green-400/20 bg-green-400/10 p-3 text-center text-xs text-gray-200">

          ✉️ Your account will be activated after email verification

        </div>


        <p className="mt-6 text-center text-sm text-gray-400">

          Already have an account?

          <span className="ml-1 text-blue-400">
            Login
          </span>

        </p>


      </div>

    </main>
  );
}

