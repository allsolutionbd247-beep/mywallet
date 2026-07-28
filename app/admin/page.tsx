export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total User Balance</p>
          <h3 className="text-2xl font-extrabold text-gray-800 mt-2">৳ 1,25,450</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Merchant Reserve Pool</p>
          <h3 className="text-2xl font-extrabold text-blue-600 mt-2">৳ 3,50,000</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Today's Total Volume</p>
          <h3 className="text-2xl font-extrabold text-emerald-600 mt-2">৳ 8,20,000</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Platform Commission Income</p>
          <h3 className="text-2xl font-extrabold text-purple-600 mt-2">৳ 4,250</h3>
        </div>
      </div>

      {/* System Asset Verification Box */}
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl flex items-center justify-between">
        <div>
          <h4 className="font-bold text-emerald-900">System Ledger & Asset Status: Perfect Match ✓</h4>
          <p className="text-sm text-emerald-700 mt-0.5">Total company bank liquidity and all user/merchant running balances match accurately.</p>
        </div>
        <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">Auto-Verified</span>
      </div>
    </div>
  );
}
