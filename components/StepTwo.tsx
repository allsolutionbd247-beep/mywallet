"use client";

import { useState } from "react";

interface StepTwoProps {
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  confirmPassword: string;
  setConfirmPassword: (val: string) => void;
  agreedTerms: boolean;
  setAgreedTerms: (val: boolean) => void;
  onNext: (e: React.FormEvent) => void;
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
  onNext,
  onBack,
}: StepTwoProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordHint, setShowPasswordHint] = useState(false);
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasSpecialChar;
  
  // Captcha states
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [currentCaptchaCode, setCurrentCaptchaCode] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  // Function to generate a random 4-digit code
  const generateRandomCaptcha = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setCurrentCaptchaCode(randomCode);
    setCaptchaInput("");
    setCaptchaError(false);
  };

  const handleInitialNext = (e: React.FormEvent) => {
    e.preventDefault();
    generateRandomCaptcha(); // Generate new random code when Next is clicked
    setShowCaptcha(true);
  };

  const handleCaptchaVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput !== currentCaptchaCode) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    onNext(e);
  };

  return (
    <form onSubmit={handleInitialNext} className="flex flex-col justify-between h-full space-y-4 bg-[#1e293b] p-6 rounded-3xl border border-white/10 shadow-xl backdrop-blur-xl">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white">Register details</h3>
          <button 
            type="button" 
            onClick={onBack}
            className="flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition text-white border border-white/20 shrink-0 cursor-pointer"
          >
            <span>←</span> Back
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Password Field with Show/Hide & Browser Hints */}
          <div>
            <label className="block text-xs text-gray-400 mb-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                required
                name="password"
                autoComplete="current-password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-10 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs cursor-pointer focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
{/* Confirm Password Field with Show/Hide & Browser Hints */}
          <div>
            <label className="block text-xs text-gray-400 mb-1">Confirm Password</label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                required
                name="confirmPassword"
                autoComplete="new-password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 pr-10 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs cursor-pointer focus:outline-none"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input 
              type="checkbox" 
              id="terms" 
              checked={agreedTerms} 
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="w-4 h-4 rounded accent-amber-400 cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs sm:text-sm text-white/80 cursor-pointer">
              I agree to the terms and privacy policy
            </label>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button 
          type="submit"
          disabled={!agreedTerms}
          className={`w-full py-3.5 font-bold text-sm rounded-xl transition shadow-lg mt-2 ${
            agreedTerms 
              ? "bg-amber-500 hover:bg-amber-600 text-gray-950 cursor-pointer" 
              : "bg-amber-500/20 text-white/40 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      {/* Captcha Modal with Random Code */}
      {showCaptcha && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 rounded-2xl">
          <div className="bg-gray-900 border border-white/10 p-6 rounded-2xl w-full max-w-sm space-y-4 shadow-2xl">
            <h4 className="text-white font-bold text-base text-center">Security Verification</h4>
            <p className="text-xs text-gray-400 text-center">Please enter the code shown below to continue.</p>
            
            <div className="flex items-center justify-between bg-white/10 border border-white/20 px-4 py-3 rounded-lg">
              <span className="tracking-widest text-amber-400 font-mono font-bold text-xl select-none">
                {currentCaptchaCode}
              </span>
              <button 
                type="button" 
                onClick={generateRandomCaptcha}
                className="text-xs text-gray-300 hover:text-white underline cursor-pointer"
              >
                Refresh
              </button>
            </div>

            <input 
              type="text"
              required
              maxLength={4}
              placeholder="Enter 4-digit code"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white text-center text-lg tracking-widest placeholder-gray-500 focus:outline-none focus:border-amber-400"
            />

            {captchaError && (
              <p className="text-xs text-red-400 text-center">Invalid verification code! Try again.</p>
            )}
<div className="flex gap-2 pt-2">
              <button 
                type="button"
                onClick={() => setShowCaptcha(false)}
                className="w-1/2 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition cursor-pointer"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={handleCaptchaVerify}
                className="w-1/2 py-2.5 bg-amber-500 hover:bg-amber-600 text-gray-950 text-xs font-bold rounded-lg transition cursor-pointer"
              >
                Verify & Next
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
