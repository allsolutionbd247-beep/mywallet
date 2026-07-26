"use client";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardWalletCards from "./DashboardWalletCards";
import RecentTransactions from "./RecentTransactions";
import DashboardFooter from "./DashboardFooter";

export default function DashboardHome() {
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
