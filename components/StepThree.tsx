import React, { useEffect, useState } from "react";

interface StepThreeProps {
  email: string;
  otpCode: string;
  setOtpCode: (value: string) => void;
  successMessage: string | null;
  onVerify: (e: React.FormEvent) => void;
  onBack: () => void;
}
function formatTime(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
export default function StepThree({
  email,
  otpCode,
  setOtpCode,
  successMessage,
  onVerify,
  onBack,
}: StepThreeProps) {
  const [timeLeft, setTimeLeft] = useState(600);

useEffect(() => {
  if (timeLeft <= 0) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft]);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl relative">
      
      {/* Top Back Button */}
      <button 
        type="button" 
        onClick={onBack}
        className="absolute top-6 right-6 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg transition"
      >
        ← Back
      </button>

      <h2 className="text-xl font-bold text-white mb-1">Verify your email</h2>
      <p className="text-xs text-white/60 mb-6">
        Please enter the 6-digit code sent to <br />
        <span className="font-medium text-amber-400">{email}</span>
      </p>

      {/* Success Message */}
      {successMessage && (
        <p className="text-sm text-green-400 bg-green-500/10 p-3 rounded-lg mb-4 text-center">
          {successMessage}
        </p>
      )}

      <form onSubmit={onVerify} className="space-y-6">
        
        {/* === OTP Input Field (Styled to be Black like Step Two) === */}
        <div className="relative">
          <label className="block text-xs sm:text-sm text-white/80 mb-1">Enter Verification Code</label>
          <input 
            type="text" 
            value={otpCode} 
            onChange={(e) => setOtpCode(e.target.value)}
            placeholder="123456"
            maxLength={6}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white text-sm tracking-widest font-mono text-center"
          />
        </div>
        {/* ============================================================ */}

        {/* Verify Button */}
        <button 
          type="submit"
          className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-sm rounded-xl transition shadow-lg cursor-pointer"
        >
          Verify Email
        </button>

        <div className="text-center text-xs text-white/60 pt-2">
          Didn't receive the code?{" "}
          <button type="button" className="text-amber-400 hover:underline">
            Resend
          </button>
        </div>

      </form>
    </div>
  );
}