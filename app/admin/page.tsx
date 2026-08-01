"use client";

import { useEffect, useState } from "react";
import { 
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertTriangle,
  Wallet,
  TrendingUp,
  Users,
  Store,
} from "lucide-react";

export default function AdminDashboard() {

  const [openSection, setOpenSection] = useState<string | null>(null);
  const [companyReserveActivity, setCompanyReserveActivity] = useState<any[]>([]);
  const [commissionActivity, setCommissionActivity] = useState<any[]>([]);

  const [dashboardData, setDashboardData] = useState<any>(null);
  const formatNumber = (value: number | string | undefined) => {
  return Number(value || 0).toLocaleString();
};
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const res = await fetch("/api/admin/dashboard/overview");
      const data = await res.json();

      if (data.success) {
        setDashboardData(data.data);
      }

      const reserveRes = await fetch(
        "/api/admin/dashboard/activity/company-reserve"
      );

      const reserveData = await reserveRes.json();

      if (reserveData.success) {
        setCompanyReserveActivity(reserveData.data);
      }


      const commissionRes = await fetch(
        "/api/admin/dashboard/activity/commission"
      );

      const commissionData = await commissionRes.json();

      if (commissionData.success) {
        setCommissionActivity(commissionData.data);
      }

      setLoading(false);

    } catch (error) {
      console.error("Dashboard API Error:", error);
      setLoading(false);
    }
  };

  fetchDashboard();
}, []);


  const toggleSection = (name: string) => {
    setOpenSection(openSection === name ? null : name);
  };


  if (loading) {
    return (
      <div className="p-10 text-center font-bold">
        Loading Dashboard...
      </div>
    );
  }


  return (
    <div className="space-y-6">


      {/* Finance Overview */}
      <section>

        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Finance Overview
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">


          {/* Company Reserve */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border shadow-sm p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Wallet className="text-emerald-600 mb-3" />

            <p className="text-xs text-gray-500 font-semibold">
              Company Reserve
            </p>

            <h3 className="text-2xl font-bold mt-2">
  ${formatNumber(dashboardData?.companyReserve) || "0"}
</h3>

            <button
              onClick={() => toggleSection("reserve")}
              className="mt-4 text-sm text-emerald-600 font-semibold flex items-center gap-1"
            >
              View Details
              {openSection === "reserve"
                ? <ChevronUp size={16}/>
                : <ChevronDown size={16}/>
              }
            </button>

          </div>



          {/* Commission */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border shadow-sm p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

            <TrendingUp className="text-purple-600 mb-3"/>

            <p className="text-xs text-gray-500 font-semibold">
              Commission Balance
            </p>

            <h3 className="text-2xl font-bold mt-2">
  ${formatNumber(dashboardData?.commissionPool)}
</h3>

            <button
              onClick={() => toggleSection("commission")}
              className="mt-4 text-sm text-purple-600 font-semibold flex items-center gap-1"
            >
              View Details
              {openSection === "commission"
              ? <ChevronUp size={16}/>
              : <ChevronDown size={16}/>
              }
            </button>

          </div>




          {/* Client Reserve */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border shadow-sm p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

            <Users className="text-blue-600 mb-3"/>

            <p className="text-xs text-gray-500 font-semibold">
              Client Reserve
            </p>

           <h3 className="text-2xl font-bold mt-2">
  ${formatNumber(dashboardData?.clientReserve)}
</h3>

          </div>




          {/* Merchant Reserve */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border shadow-sm p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

            <Store className="text-orange-500 mb-3"/>

            <p className="text-xs text-gray-500 font-semibold">
              Merchant Reserve
            </p>

            <h3 className="text-2xl font-bold mt-2">
             {formatNumber(0)}
            </h3>

          </div>




          {/* Pending */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl border shadow-sm p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

            <AlertTriangle className="text-yellow-500 mb-3"/>

            <p className="text-xs text-gray-500 font-semibold">
              Pending Reserve
            </p>

           <h3 className="text-2xl font-bold mt-2">
  ${formatNumber(dashboardData?.pendingReserve)}
</h3>
          </div>


        </div>

      </section>





      {/* Expand Details */}

      {openSection === "reserve" && (

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">

          <h3 className="font-bold text-emerald-900">
            Company Reserve Activity
          </h3>


          <div className="mt-4 space-y-3 text-sm">

           {companyReserveActivity.length > 0 ? (
  companyReserveActivity.map((item: any) => (
    <p
      key={item.id}
      className={
        item.type === "money_out"
          ? "text-red-600"
          : "text-green-700"
      }
    >
      {item.type} - ${item.amount}
    </p>
  ))
) : (
  <p className="text-gray-500">
    No reserve activity
  </p>
)}

          </div>

        </div>

      )}

{openSection === "commission" && (

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">

          <h3 className="font-bold text-purple-900">
            Commission Activity
          </h3>


          <div className="mt-4 space-y-3 text-sm">

            {commissionActivity.length > 0 ? (
  commissionActivity.map((item: any) => (
    <p
      key={item.id}
      className={
        item.type === "withdrawal"
          ? "text-red-600"
          : "text-green-700"
      }
    >
      {item.type} - ${item.amount}
    </p>
  ))
) : (
  <p className="text-gray-500">
    No commission activity
  </p>
)}

          </div>

        </div>

      )}







      {/* Ledger Status */}

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex justify-between items-center">

        <div>

          <h3 className="font-bold text-emerald-900">
            System Ledger & Asset Status
          </h3>

          <p className="text-2xl font-extrabold text-emerald-700 mt-2">
  {dashboardData?.system?.ledgerStatus || "Unknown"}
</p>

        </div>


        <div className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold">

          <CheckCircle size={18}/>

          Auto Verified

        </div>


      </div>







      {/* Problems */}

      <div className="bg-white border rounded-2xl p-5 shadow-sm">

        <h3 className="font-bold text-gray-800">
          System Problems
        </h3>


        <p className="text-sm text-gray-500 mt-3">
  {dashboardData?.system?.problems > 0
    ? `${dashboardData.system.problems} Problems Detected`
    : "No Problems Detected"}
</p>


      </div>






      {/* User Overview */}

      <div className="bg-white border rounded-2xl p-5">

        <h3 className="font-bold mb-4">
          User Overview
        </h3>


        <div className="grid md:grid-cols-3 gap-4">


          <div className="bg-gray-50 p-4 rounded-xl">
            Total Users
            <h4 className="text-2xl font-bold">
  {dashboardData?.users?.total || 0}
</h4>
          </div>


          <div className="bg-gray-50 p-4 rounded-xl">
            Active Users
           <h4 className="text-2xl font-bold text-emerald-600">
  {dashboardData?.users?.active || 0}
</h4>
          </div>


          <div className="bg-gray-50 p-4 rounded-xl">
            Suspended Users
            <h4 className="text-2xl font-bold text-red-600">
              {dashboardData?.users?.suspended || 0}
            </h4>
          </div>


        </div>


      </div>


{/* Wallet Overview */}
<div className="bg-white border rounded-2xl p-5">
  <h3 className="font-bold mb-4">
    Wallet Overview
  </h3>

  <div className="grid md:grid-cols-2 gap-4">

    {/* Total Wallets */}
    <div className="bg-gray-50 p-4 rounded-xl">
      Total Wallets
      <h4 className="text-2xl font-bold mt-2">
        {dashboardData?.wallets?.total || 0}
      </h4>
    </div>

    {/* Total Wallet Balance */}
    <div className="bg-gray-50 p-4 rounded-xl">
      Total Wallet Balance
      <h4 className="text-2xl font-bold text-emerald-600 mt-2">
       ${formatNumber(dashboardData?.wallets?.balance)}
      </h4>
    </div>

  </div>
</div>

{/* Transaction Overview */}
<div className="bg-white border rounded-2xl p-5">
  <h3 className="font-bold mb-4">
    Transaction Overview
  </h3>

  <div className="grid md:grid-cols-2 gap-4">

    {/* Total Transactions */}
    <div className="bg-gray-50 p-4 rounded-xl">
      Total Transactions
      <h4 className="text-2xl font-bold mt-2">
        {formatNumber(dashboardData?.transactions?.total)}
      </h4>
    </div>

    {/* Pending Transactions */}
    <div className="bg-gray-50 p-4 rounded-xl">
      Pending Transactions
      <h4 className="text-2xl font-bold text-yellow-600 mt-2">
      {formatNumber(dashboardData?.transactions?.pending)}
      </h4>
    </div>

  </div>
</div>

{/* Activity History */}
<div className="bg-white border rounded-2xl p-5">

  <h3 className="font-bold mb-4">
    Activity History
  </h3>

  <div className="grid md:grid-cols-3 gap-4">

    {/* Wallet Activity */}
    <div className="bg-gray-50 p-4 rounded-xl">
      <h4 className="font-semibold">
        Wallet Activity
      </h4>

      <p className="text-2xl font-bold mt-2">
        {dashboardData?.walletActivity || 0}
      </p>
    </div>


    {/* Reserve History */}
    <div className="bg-gray-50 p-4 rounded-xl">
      <h4 className="font-semibold">
        Reserve History
      </h4>

      <div className="mt-2 space-y-2">
  {companyReserveActivity.length > 0 ? (
    companyReserveActivity.map((item: any) => (
      <p key={item.id} className="text-sm">
        {item.type} - ${item.amount}
      </p>
    ))
  ) : (
    <p className="text-sm text-gray-500">
      No reserve activity
    </p>
  )}
</div>

    </div>


    {/* Commission History */}
    <div className="bg-gray-50 p-4 rounded-xl">
      <h4 className="font-semibold">
        Commission History
      </h4>

      <div className="mt-2 space-y-2">
  {commissionActivity.length > 0 ? (
    commissionActivity.map((item: any) => (
      <p key={item.id} className="text-sm">
        {item.type} - ${item.amount}
      </p>
    ))
  ) : (
    <p className="text-sm text-gray-500">
      No commission activity
    </p>
  )}
</div>

    </div>

  </div>

</div>


    </div>
  );
}
