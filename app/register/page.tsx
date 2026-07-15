"use client";

import { useState } from "react";

export default function RegisterPage() {
const [fullName, setFullName] = useState("");

const [country, setCountry] = useState("");

const [countryCode, setCountryCode] = useState("");

const [phone, setPhone] = useState("");

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [confirmPassword, setConfirmPassword] = useState("");

const [message, setMessage] = useState("");

const [showPasswordHint, setShowPasswordHint] = useState(false);

const [errors, setErrors] = useState({
  fullName: "",
  country: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
});
  function validateForm() {

    let newErrors = {
      fullName: "",
      country: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    };


    if (!fullName) {
      newErrors.fullName = "Full name is required";
    }


    if (!country) {
      newErrors.country = "Please select country";
    }


    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]+$/.test(phone)) {
      newErrors.phone = "Phone number must contain only numbers";
    }


    if (!email) {
      newErrors.email = "Email is required";
    }


    if (!password) {
      newErrors.password = "Password is required";
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      newErrors.password =
        "Password must have 8 characters with uppercase, lowercase and number";
    }


    if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Password does not match";
    }


    setErrors(newErrors);


    return !Object.values(newErrors).some(
      (error) => error !== ""
    );
  }
  async function handleRegister(e: React.FormEvent) {

    e.preventDefault();


    if (!validateForm()) {
      return;
    }
console.log("Sign Up button clicked");

    try {

      const response = await fetch("/api/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          fullName,
          country,
          countryCode,
          phone,
          email,
          password,
        }),
      });


      const data = await response.json();


      if (response.ok) {

        setMessage(
          "Account created successfully"
        );

      } else {

        setMessage(data.message);

      }


    } catch (error) {

      setMessage(
        "Something went wrong"
      );

    }

  }


  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 py-10">

      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-4">
          Create Account
        </h1>


       <form
  onSubmit={handleRegister}
  className="space-y-3"
>
          <div>
            <label className="block mb-1">
              Full Name
            </label>

            <input
              type="text"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              className="w-full border rounded-lg p-2"
              placeholder="Enter your name"
            />

            {errors.fullName && (
              <p className="text-red-500 text-sm">
                {errors.fullName}
              </p>
            )}

          </div>


          <div>
            <label className="block mb-1">
              Country
            </label>

            <select
              value={country}
              onChange={(e) => {

                setCountry(e.target.value);

                if (e.target.value === "Bangladesh") {
                  setCountryCode("+880");
                } 
                else if (e.target.value === "India") {
                  setCountryCode("+91");
                } 
                else if (e.target.value === "USA") {
                  setCountryCode("+1");
                }

              }}
              className="w-full border rounded-lg p-2"
            >

              <option value="">
                Select Country
              </option>

              <option value="Bangladesh">
                Bangladesh
              </option>

              <option value="India">
                India
              </option>

              <option value="USA">
                USA
              </option>

            </select>


            {errors.country && (
              <p className="text-red-500 text-sm">
                {errors.country}
              </p>
            )}

          </div>
<div>
            <label className="block mb-1">
              Phone Number
            </label>

            <div className="flex gap-2">

              <input
                type="text"
                value={countryCode}
                readOnly
                className="w-24 border rounded-lg p-2 bg-gray-100"
              />


              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="Enter phone number"
                className="flex-1 border rounded-lg p-2"
              />

            </div>


            {errors.phone && (
              <p className="text-red-500 text-sm">
                {errors.phone}
              </p>
            )}

          </div>


          <div>
            <label className="block mb-1">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-lg p-2"
              placeholder="Enter email"
            />


            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email}
              </p>
            )}

          </div>
<div>
  <label className="block mb-1">
    Password
  </label>

  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    onFocus={() => setShowPasswordHint(true)}
    onBlur={() => setShowPasswordHint(false)}
    className="w-full border rounded-lg p-2"
    placeholder="Create password"
  />

  {showPasswordHint && (
    <div className="text-gray-500 text-sm mt-2">
      Password must contain:
      <br />
      ✓ Minimum 8 characters
      <br />
      ✓ At least one uppercase letter (A-Z)
      <br />
      ✓ At least one lowercase letter (a-z)
      <br />
      ✓ At least one number (0-9)
    </div>
  )}

  {errors.password && (
    <p className="text-red-500 text-sm mt-1">
      {errors.password}
    </p>
  )}
</div>

          <div>
            <label className="block mb-1">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full border rounded-lg p-2"
              placeholder="Confirm password"
            />


            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword}
              </p>
            )}

          </div>
<button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold"
          >
            Sign Up
          </button>

        </form>


        {message && (
          <p className="text-center mt-4">
            {message}
          </p>
        )}
        <p className="text-center mt-5">
          Already have an account?{" "}

          <a
            href="/login"
            className="text-blue-600"
          >
            Login
          </a>

        </p>

      </div>

    </div>
  );
}