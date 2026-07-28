export default function UserLedgerPage() {
  const ledgerHistory = [
    { id: 1, type: "Cash In", desc: "bKash Gateway Deposit", amount: 1000, sign: "+", balance: 1000, class: "text-emerald-600" },
    { id: 2, type: "Receive", desc: "Received from Karim", amount: 500, sign: "+", balance: 1500, class: "text-emerald-600" },
    { id: 3, type: "Send Money", desc: "Sent Money to Rahim", amount: 300, sign: "-", balance: 1200, class: "text-rose-600" },
    { id: 4, type: "Charge", desc: "Send Money Platform Fee", amount: 5, sign: "-", balance: 1195, class: "text-rose-600" },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* User Bio Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Rahim Ahmed (#USR-1024)</h2>
          <p className="text-sm text-gray-500 mt-1">Phone: +8801711223344 | KYC: Verified | Password Changed: 3 days ago</p>
        </div>
        <div className="text-right">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Active Account</span>
          <p className="text-lg font-extrabold text-blue-600 mt-2">Calculated Balance: ৳ 1,195</p>
        </div>
      </div>

      {/* Running Ledger & Math Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6">
        <h3 className="font-bold text-gray-800 mb-4 text-base">Complete User Transaction Ledger (Running Math)</h3>
        
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
              <th className="p-3.5">Type</th>
              <th className="p-3.5">Description</th>
              <th className="p-3.5">In / Out Amount</th>
              <th className="p-3.5 text-right">Running Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {ledgerHistory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50">
                <td className="p-3.5 font-bold text-gray-800">{item.type}</td>
                <td className="p-3.5 text-gray-500 text-xs">{item.desc}</td>
                <td className={`p-3.5 font-extrabold ${item.class}`}>
                  {item.sign} ৳ {item.amount}
                </td>
                <td className="p-3.5 text-right font-extrabold text-gray-900">
                  ৳ {item.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}