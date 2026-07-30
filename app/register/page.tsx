"use client";

import LanguageSection from "@/components/LanguageSection";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";



export default function RegisterPage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);

  const [country, setCountry] = useState("Bangladesh");
  const [currency, setCurrency] = useState("BDT");
  const [inviteCode, setInviteCode] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [agreedTerms, setAgreedTerms] = useState(false);

  const [otpCode, setOtpCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
const [fullName, setFullName] = useState("");
const [dateOfBirth, setDateOfBirth] = useState("");

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };


  // STEP 2 -> CREATE ACCOUNT + SEND OTP
const handleNextStep2 = async () => {


    if (password !== confirmPassword) {
      setSuccessMessage("Passwords do not match!");
      return;
    }


    try {
      console.log("SEND REGISTER DATA:", {
  email,
  password,
  captchaToken: "test",
});

      const res = await fetch("/api/register", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

       body: JSON.stringify({
  email,
  password,
  currency,
  country,
  captchaToken: "test",
})
      });


      const data = await res.json();


      if (res.ok) {

        setSuccessMessage(data.message);

        setCurrentStep(3);

      } 
      else {
  setSuccessMessage(
    data.error || "This email is already registered"
  );
}


    } catch (error) {

      setSuccessMessage("Something went wrong");

    }

  };


  const handlePrevStep = () => {
    setCurrentStep(1);
  };


  const handlePrevStep2 = () => {
    setCurrentStep(2);
  };



  // VERIFY OTP
  const handleVerify = async (e: React.FormEvent) => {

    e.preventDefault();


    try {

      const res = await fetch("/api/verify-code", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          code: otpCode,
        }),

      });


      const data = await res.json();


      if (res.ok) {
  setSuccessMessage("Email verification successful");

  setTimeout(() => {
    router.push("/login");
  }, 1000);

} else {
  setSuccessMessage(data.error);
}


    } catch {

      setSuccessMessage("Verification failed");

    }

  };



  return (

    <>

      <LanguageSection />


      <main className="min-h-screen bg-[#006a3b] flex items-center justify-center p-3 sm:p-6 text-white perspective-1000">

<div className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl overflow-hidden">

  <div className="w-full grid grid-cols-1 md:grid-cols-12 border border-white/20">
  </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 border border-white/20">


            <div className="md:col-span-5 bg-[#005a31] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/25">


              <div>


                <div className="flex items-center gap-2 mb-6 sm:mb-12">

                  <span className="text-xl sm:text-2xl font-black tracking-wider text-white">

                    <span className="text-amber-300">
                      M
                    </span>

                    y Wallet

                  </span>

                </div>



                <div className="flex items-center gap-3 sm:gap-4 mb-6">

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg bg-white text-[#006a3b] shadow-lg border border-white/40">

                    {currentStep}

                  </div>

                </div>
<h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">

                  {currentStep === 1
                    ? "Account setup"
                    : currentStep === 2
                    ? "Login details"
                    : "Email verification"}

                </h2>



                <p className="text-white/80 text-xs sm:text-sm">

                  {currentStep === 1
                    ? "My Wallet terms and services depend on your country of residence."
                    : "Your email will be verified with a secure verification code."}

                </p>


              </div>



              <div className="hidden md:block text-xs text-white/60 mt-8">

                Secure Encrypted System v2.6

              </div>


            </div>





            <div className="md:col-span-7 p-6 sm:p-8 md:p-12 bg-[#007a43]">


              {currentStep === 1 && (

                <StepOne

                  country={country}
                  setCountry={setCountry}

                  currency={currency}
                  setCurrency={setCurrency}

                  inviteCode={inviteCode}
                  setInviteCode={setInviteCode}

                  onNext={handleNextStep1}

                />

              )}





              {currentStep === 2 && (

                <StepTwo
                
                  fullName={fullName}
                  setFullName={setFullName}

                  dateOfBirth={dateOfBirth}
                  setDateOfBirth={setDateOfBirth}

                  email={email}
                  setEmail={setEmail}

                  password={password}
                  setPassword={setPassword}

                  confirmPassword={confirmPassword}
                  setConfirmPassword={setConfirmPassword}

                  agreedTerms={agreedTerms}
                  setAgreedTerms={setAgreedTerms}

                  successMessage={successMessage}

                  onNext={handleNextStep2}

                  onBack={handlePrevStep}

                  onLogin={() => router.push("/login")}
 
                />

              )}





              {currentStep === 3 && (

                <StepThree

                  email={email}

                  otpCode={otpCode}
                  setOtpCode={setOtpCode}

                  successMessage={successMessage}

                  onVerify={handleVerify}

                  onBack={handlePrevStep2}

                />

              )}



            </div>


          </div>


        </div>

      </main>


    </>

  );

}