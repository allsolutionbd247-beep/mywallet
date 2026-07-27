"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface StepTwoProps {
  email: string;
  setEmail: (val: string) => void;

  password: string;
  setPassword: (val: string) => void;

  confirmPassword: string;
  setConfirmPassword: (val: string) => void;

  agreedTerms: boolean;
  setAgreedTerms: (val: boolean) => void;

  successMessage: string;

  onNext: () => void;
  onBack: () => void;
}

export default function StepTwo({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  agreedTerms,
  setAgreedTerms,
  successMessage,
  onNext,
  onBack,
}: StepTwoProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const captchaRef = useRef<ReCAPTCHA>(null);


  // Email Validation
  const emailValid =
  /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/i.test(email);




  // Password Rules

  const hasLength =
    password.length >= 8 && password.length <= 12;

  const hasUpperCase =
    /[A-Z]/.test(password);

  const hasLowerCase =
    /[a-z]/.test(password);

  const hasNumber =
    /\d/.test(password);

  const hasSpecialChar =
    /[!@#$%^&*(),.?":{}|<>]/.test(password);


  const passwordValid =
    hasLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar;



  // Confirm Password

  const passwordMatch =
    password.length > 0 &&
    password === confirmPassword;



  // Google reCAPTCHA Success

 const handleCaptchaSuccess = (token: string | null) => {
  if (token) {
    setCaptchaVerified(true);
    onNext();
  }
};


  // Next Button Submit

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if(
      !emailValid ||
      !passwordValid ||
      !passwordMatch ||
      !agreedTerms
    ){
      return;
    }

   setShowCaptcha(true);
  };
  return (
  <form
    onSubmit={handleSubmit}
    className="flex flex-col justify-between h-full bg-[#007a43] p-6 rounded-3xl border border-white/10 shadow-xl backdrop-blur-xl"
  >

    <div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <h3 className="text-xl font-bold text-white">
          Register Details
        </h3>


        <button
          type="button"
          onClick={onBack}
          className="text-xs px-3 py-1.5 rounded-lg 
          bg-white/10 hover:bg-white/20 
          text-white border border-white/20 transition"
        >
          ← Back
        </button>

      </div>



      <div className="space-y-4">



        {/* Email */}

        <div>

          <label className="text-xs text-gray-300">
            Email Address
          </label>


          <div className="relative">

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
              w-full h-11 px-4 pr-10
              bg-black/20
              border border-white/30
              rounded-lg
              text-white text-sm
              outline-none
              focus:border-green-400
              "
            />


            {email.length > 0 && (

              <span className="absolute right-3 top-3">

                {emailValid ? 
                "✓" : "✗"}

              </span>

            )}

          </div>


          {email.length > 0 && !emailValid && (

            <p className="text-xs text-red-400 mt-1">
              Invalid email address
            </p>

          )}

        </div>





        {/* Password */}

        <div
          onMouseEnter={()=>setShowPasswordHint(true)}
          onMouseLeave={()=>setShowPasswordHint(false)}
        >

          <label className="text-xs text-gray-300">
            Password
          </label>


          <div className="relative">


            <input
              type={showPassword ? "text":"password"}
              value={password}
              onFocus={()=>setShowPasswordHint(true)}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter password"
              className="
              w-full h-11 px-4 pr-16
              bg-black/20
              border border-white/30
              rounded-lg
              text-white text-sm
              outline-none
              focus:border-green-400
              "
            />


            <button
              type="button"
              onClick={()=>setShowPassword(!showPassword)}
              className="
              absolute right-3 top-3
              text-xs text-gray-300
              "
            >
              {showPassword ? "Hide":"Show"}
            </button>


          </div>



          {/* Password Hint */}

          {showPasswordHint && (

            <div className="
            mt-2 p-3 rounded-lg
            bg-black/40
            border border-white/10
            text-xs space-y-1
            ">


              <p className={hasLength ? "text-green-400" : "text-red-400"}>
  {hasLength ? "✓" : "✗"} 8-12 characters
</p>

<p className={hasUpperCase ? "text-green-400" : "text-red-400"}>
  {hasUpperCase ? "✓" : "✗"} Uppercase letter
</p>

<p className={hasLowerCase ? "text-green-400" : "text-red-400"}>
  {hasLowerCase ? "✓" : "✗"} Lowercase letter
</p>

<p className={hasNumber ? "text-green-400" : "text-red-400"}>
  {hasNumber ? "✓" : "✗"} Number
</p>

<p className={hasSpecialChar ? "text-green-400" : "text-red-400"}>
  {hasSpecialChar ? "✓" : "✗"} Special character
</p>



            </div>

          )}

        </div>






        {/* Confirm Password */}

        <div>


          <label className="text-xs text-gray-300">
            Confirm Password
          </label>


          <div className="relative">
<input
              type={showConfirmPassword ? "text":"password"}
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="
              w-full h-11 px-4 pr-16
              bg-black/20
              border border-white/30
              rounded-lg
              text-white text-sm
              outline-none
              focus:border-green-400
              "
            />


            <button
              type="button"
              onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
              className="
              absolute right-3 top-3
              text-xs text-gray-300
              "
            >
              {showConfirmPassword ? "Hide":"Show"}
            </button>


          </div>



          {confirmPassword.length > 0 && (

            <p className={`text-xs mt-1 ${
              passwordMatch 
              ? "text-green-400"
              : "text-red-400"
            }`}>

              {passwordMatch
              ? "✓ Passwords match"
              : "✗ Passwords do not match"}

            </p>

          )}

        </div>






        {/* Terms */}

        <div className="flex items-center gap-2">


          <input
            type="checkbox"
            checked={agreedTerms}
            onChange={(e)=>setAgreedTerms(e.target.checked)}
            className="accent-green-400 w-4 h-4"
          />


          <span className="text-xs text-white/80">
            I agree to the Terms & Privacy Policy
          </span>


        </div>



      </div>

    </div>






    {/* Google Recaptcha */}

   {showCaptcha && (
  <div className="mt-5">
    <ReCAPTCHA
  ref={captchaRef}
  sitekey="6LcDH2ItAAAAAN4zPwGi74xV6TwciIhG2RuK1PQP"
 onChange={handleCaptchaSuccess}
  
/>

  </div>
)}



{/* Buttons */}
<div className="mt-5">

  <button
    type="submit"
    disabled={
      !agreedTerms ||
      !emailValid ||
      !passwordValid ||
      !passwordMatch 
    }
    className={`
    w-full h-11 rounded-xl
    font-bold text-sm transition
    ${
      agreedTerms &&
      emailValid &&
      passwordValid &&
      passwordMatch 
      
      ?
      "bg-amber-400 hover:bg-amber-500 text-gray-950"
      :
      "bg-white/10 text-white/40 cursor-not-allowed"
    }
    `}
  >
    Next
  </button>

</div>
    

  </form>
);
}
