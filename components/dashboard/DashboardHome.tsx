"use client";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardWalletCards from "./DashboardWalletCards";
import RecentTransactions from "./RecentTransactions";
import DashboardFooter from "./DashboardFooter";
import PinSetupCard from "../security/PinSetupCard";
import PinLoginCard from "../security/PinLoginCard";
import { useEffect, useState } from "react";



  export default function DashboardHome() {
  const [showPinSetup, setShowPinSetup] = useState(true);
  const [showPinLogin, setShowPinLogin] = useState(false);
  const [checkingPin, setCheckingPin] = useState(true);
  useEffect(() => {
  const checkPinStatus = async () => {
    try {
      const res = await fetch("/api/security/pin-status");
      const data = await res.json();

      if (data.success) {
        if (data.pinCreated) {
          setShowPinSetup(false);
          setShowPinLogin(true);
        } else {
          setShowPinSetup(true);
          setShowPinLogin(false);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCheckingPin(false);
    }
  };

  checkPinStatus();
}, []);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Top Area */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <DashboardSidebar />


        {/* Home Page Area */}
        <div
          className="
          flex-1
          bg-gradient-to-br
          from-slate-100
          via-emerald-50
          to-green-200
          relative
          overflow-x-hidden
          "
        >

          {/* 3D Soft Light Effect */}
          <div
            className="
            absolute
            top-10
            right-20
            w-72
            h-72
            bg-green-300
            rounded-full
            blur-3xl
            opacity-40
            "
          ></div>


          <div
            className="
            absolute
            bottom-20
            left-10
            w-80
            h-80
            bg-emerald-300
            rounded-full
            blur-3xl
            opacity-40
            "
          ></div>


          {/* Dashboard Content */}
          <div className="relative z-10">

            {/* Header */}
            <DashboardHeader />
  
  {!checkingPin && showPinSetup && (
  <PinSetupCard
    onSuccess={() => {
      setShowPinSetup(false);
      setShowPinLogin(true);
    }}
  />
)}

{!checkingPin && showPinLogin && (
  <PinLoginCard
    onSuccess={() => {
      setShowPinLogin(false);
    }}
  />
)}

{showPinLogin && (
  <PinLoginCard
    onSuccess={() => {
      setShowPinLogin(false);
    }}
  />
)}


            {/* Wallet Cards */}
            <DashboardWalletCards />

            <RecentTransactions />

            {/* Future Sections */}
            <main className="p-6">

            </main>


          </div>

        </div>

      </div>


      {/* Full Width Footer */}
      <DashboardFooter />


    </div>
  );
}
