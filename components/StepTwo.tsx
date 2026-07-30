"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface StepTwoProps {
  fullName: string;
  setFullName: (val: string) => void;

  dateOfBirth: string;
  setDateOfBirth: (val: string) => void;

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
  onLogin: () => void;
}

export default function StepTwo({
  fullName,
  setFullName,

  dateOfBirth,
  setDateOfBirth,

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
  onLogin,

}: StepTwoProps) {


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const [showCaptcha, setShowCaptcha] = useState(false);

  const captchaRef = useRef<ReCAPTCHA>(null);



  // Email validation
  const emailValid =
    /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/i
    .test(email);



  // Password Rules (unchanged)

  const hasLength =
    password.length >= 8 &&
    password.length <= 12;


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



  const passwordMatch =
    password.length > 0 &&
    password === confirmPassword;



  const handleCaptchaSuccess = (token: string | null) => {

    if(token){
      onNext();
    }

  };



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();


    if(
      !fullName ||
      !dateOfBirth ||
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

      className="
      flex flex-col
      min-h-full
      bg-[#007a43]
      p-4 sm:p-6
      rounded-3xl
      border border-white/10
      shadow-xl
      "

    >


      {/* Top Navigation */}

      <div className="
      flex
      items-center
      justify-between
      mb-6
      ">


        <button

          type="button"

          onClick={onBack}

          className="
          text-xs
          px-3 py-2
          rounded-lg
          bg-white/10
          hover:bg-white/20
          text-white
          border border-white/20
          transition
          "

        >

          ← Back

        </button>



        <h3 className="
        text-xl
        font-bold
        text-white
        ">

          Register Details

        </h3>



        <button

          type="button"

          onClick={onLogin}

          className="
          text-xs
          px-3 py-2
          rounded-lg
          bg-white/10
          hover:bg-white/20
          text-white
          border border-white/20
          transition
          "

        >

          Login →

        </button>


      </div>

<div className="space-y-4">


        {/* Full Name */}

        <div>

          <label className="text-xs text-gray-300">
            Full Name
          </label>


          <input

            type="text"

            value={fullName}

            onChange={(e)=>setFullName(e.target.value)}

            placeholder="Enter your full name"


            className="
            w-full
            h-11
            px-4
            mt-2
            bg-black/40
            border border-white/30
            rounded-lg
            text-white
            placeholder:text-gray-400
            text-sm
            outline-none
            focus:border-green-400
            "

          />

        </div>




        {/* Date Of Birth */}

        <div>

          <label className="text-xs text-gray-300">
            Date Of Birth
          </label>


          <input

            type="date"

            value={dateOfBirth}

            onChange={(e)=>setDateOfBirth(e.target.value)}

            className="
            w-full
            h-11
            px-4
            mt-2
            bg-black/40
            border border-white/30
            rounded-lg
            text-white
            text-sm
            outline-none
            focus:border-green-400
            "

          />

        </div>





        {/* Email */}

        <div>

          <label className="text-xs text-gray-300">
            Email Address
          </label>


          <input

            type="email"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            placeholder="Enter your email"


            className="
            w-full
            h-11
            px-4
            mt-2
            bg-black/40
            border border-white/30
            rounded-lg
            text-white
            placeholder:text-gray-400
            text-sm
            outline-none
            focus:border-green-400
            "

          />

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

              onChange={(e)=>setPassword(e.target.value)}

              onFocus={()=>setShowPasswordHint(true)}

              placeholder="Enter password"


              className="
              w-full
              h-11
              px-4
              pr-16
              mt-2
              bg-black/40
              border border-white/30
              rounded-lg
              text-white
              placeholder:text-gray-400
              text-sm
              outline-none
              focus:border-green-400
              "

            />


            <button

              type="button"

              onClick={()=>setShowPassword(!showPassword)}

              className="
              absolute
              right-3
              top-5
              text-xs
              text-gray-300
              "

            >

              {showPassword ? "Hide":"Show"}

            </button>


          </div>





          {/* Password Hint - White Color Only */}

          {showPasswordHint && (

            <div

            className="
            mt-2
            p-3
            rounded-lg
            bg-black/40
            border border-white/10
            text-xs
            space-y-1
            "

            >


              <p className="text-white">
                {hasLength ? "✓":"✗"} 8-12 characters
              </p>


              <p className="text-white">
                {hasUpperCase ? "✓":"✗"} Uppercase letter
              </p>


              <p className="text-white">
                {hasLowerCase ? "✓":"✗"} Lowercase letter
              </p>
<p className="text-white">
                {hasNumber ? "✓":"✗"} Number
              </p>


              <p className="text-white">
                {hasSpecialChar ? "✓":"✗"} Special character
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

              type={showConfirmPassword ? "text" : "password"}

              value={confirmPassword}

              onChange={(e)=>setConfirmPassword(e.target.value)}

              placeholder="Confirm password"


              className="
              w-full
              h-11
              px-4
              pr-16
              mt-2
              bg-black/40
              border border-white/30
              rounded-lg
              text-white
              placeholder:text-gray-400
              text-sm
              outline-none
              focus:border-green-400
              "

            />


            <button

              type="button"

              onClick={()=>setShowConfirmPassword(!showConfirmPassword)}

              className="
              absolute
              right-3
              top-5
              text-xs
              text-gray-300
              "

            >

              {showConfirmPassword ? "Hide" : "Show"}

            </button>


          </div>



          {confirmPassword.length > 0 && (

            <p

            className={`
            text-xs mt-1
            ${passwordMatch ? "text-green-400" : "text-red-400"}
            `}

            >

              {passwordMatch
              ? "✓ Passwords match"
              : "✗ Passwords do not match"}

            </p>

          )}


        </div>





        {/* Terms */}

        <div className="
        flex
        items-center
        gap-2
        ">


          <input

            type="checkbox"

            checked={agreedTerms}

            onChange={(e)=>setAgreedTerms(e.target.checked)}

            className="
            accent-green-400
            w-4
            h-4
            "

          />


          <span className="text-xs text-white/80">

            I agree to the Terms & Privacy Policy

          </span>


        </div>


      </div>





      {/* CAPTCHA - Next Button এর পরে দেখাবে */}

      {showCaptcha && (

        <div className="mt-5">

          <ReCAPTCHA

            ref={captchaRef}

            sitekey="6LcDH2ItAAAAAN4zPwGi74xV6TwciIhG2RuK1PQP"

            onChange={handleCaptchaSuccess}

          />

        </div>

      )}






      {/* Next Button */}

      <div className="mt-6">


        <button

          type="submit"

          disabled={
            !fullName ||
            !dateOfBirth ||
            !agreedTerms ||
            !emailValid ||
            !passwordValid ||
            !passwordMatch
          }


          className={`

          w-full
          h-11
          rounded-xl
          font-bold
          text-sm
          transition


          ${
            fullName &&
            dateOfBirth &&
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
