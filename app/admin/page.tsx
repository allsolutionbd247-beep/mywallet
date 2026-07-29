export default function AdminDashboard() {
  return (
    <div className="space-y-6">

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            Total User Balance
          </p>
          <h3 className="text-2xl font-extrabold text-gray-800 mt-2">
            ৳ 1,25,450
          </h3>
        </div>


        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            Merchant Reserve Pool
          </p>
          <h3 className="text-2xl font-extrabold text-blue-600 mt-2">
            ৳ 3,50,000
          </h3>
        </div>


        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            Today's Total Volume
          </p>
          <h3 className="text-2xl font-extrabold text-emerald-600 mt-2">
            ৳ 8,20,000
          </h3>
        </div>


        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            Platform Commission Income
          </p>
          <h3 className="text-2xl font-extrabold text-purple-600 mt-2">
            ৳ 4,250
          </h3>
        </div>

      </div>



      {/* Ledger Verification */}

      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl flex items-center justify-between">

        <div>
          <h4 className="font-bold text-emerald-900">
            System Ledger & Asset Status: Perfect Match ✓
          </h4>

          <p className="text-sm text-emerald-700 mt-1">
            Company liquidity, user balances and transaction records are synchronized.
          </p>
        </div>


        <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
          Auto Verified
        </span>

      </div>




      {/* User Overview */}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">

        <h3 className="font-bold text-gray-800 mb-4">
          User Overview
        </h3>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">
              Total Users
            </p>
            <h4 className="text-2xl font-bold mt-2">
              1,250
            </h4>
          </div>


          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">
              Active Users
            </p>
            <h4 className="text-2xl font-bold text-emerald-600 mt-2">
              1,180
            </h4>
          </div>


          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">
              Suspended Users
            </p>
            <h4 className="text-2xl font-bold text-red-500 mt-2">
              70
            </h4>
          </div>


        </div>

      </div>




      {/* Wallet Overview */}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">

        <h3 className="font-bold text-gray-800 mb-4">
          Wallet & Asset Overview
        </h3>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">
              Total Wallets
            </p>
            <h4 className="text-xl font-bold">
              2,450
            </h4>
          </div>


          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">
              USD Asset
            </p>
            <h4 className="text-xl font-bold">
              $12,500
            </h4>
          </div>

<div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">
              BDT Asset
            </p>
            <h4 className="text-xl font-bold">
              ৳ 8,50,000
            </h4>
          </div>


          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">
              Total Transactions
            </p>
            <h4 className="text-xl font-bold">
              8,920
            </h4>
          </div>


        </div>

      </div>




      {/* Transaction Monitoring */}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">

        <h3 className="font-bold text-gray-800">
          Transaction Monitoring
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Search transactions by Token ID and review complete transaction details.
        </p>

      </div>


    </div>
  );
}
