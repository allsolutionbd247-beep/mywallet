export default function MerchantAdminPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Merchant Management & Settlement</h2>
          <p className="text-sm text-gray-500 mt-1">Manage merchant sales payments, commission deductions, and withdrawal requests.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition">
          Add New Merchant
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
              <th className="p-4">Merchant Name & ID</th>
              <th className="p-4">Total Sales</th>
              <th className="p-4">Platform Commission (2%)</th>
              <th className="p-4">Settlement Balance</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-4">
                <p className="font-bold text-gray-800">Aifa Mart BD</p>
                <span className="text-xs text-gray-400">#MRCH-502</span>
              </td>
              <td className="p-4 font-bold text-gray-700">৳ 50,000</td>
              <td className="p-4 font-bold text-purple-600">৳ 1,000</td>
              <td className="p-4 font-extrabold text-emerald-600">৳ 49,000</td>
              <td className="p-4 text-right space-x-2">
                <button className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-xs font-bold hover:bg-emerald-100">Issue Payout</button>
                <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold hover:bg-blue-100">View Ledger</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
