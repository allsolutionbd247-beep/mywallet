export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">

      <h1 className="text-2xl font-bold mb-5">
        My Wallet
      </h1>


      {/* Balance Card */}
      <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg">
        <p className="text-lg">
          Available Balance
        </p>

        <h2 className="text-4xl font-bold mt-2">
          ৳ 0.00
        </h2>
      </div>


      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <button className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-lg">
            Add Money
          </h3>
          <p className="text-gray-500">
            Deposit
          </p>
        </button>


        <button className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-lg">
            Send Money
          </h3>
          <p className="text-gray-500">
            Transfer
          </p>
        </button>


        <button className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-lg">
            Cash Out
          </h3>
          <p className="text-gray-500">
            Withdraw
          </p>
        </button>


        <button className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold text-lg">
            Notification
          </h3>
          <p className="text-gray-500">
            Alerts
          </p>
        </button>

      </div>


      {/* Transaction History */}
      <div className="bg-white rounded-xl shadow mt-6 p-5">

        <h2 className="text-xl font-bold mb-4">
          Transaction History
        </h2>

        <div className="border-b py-3">
          No transactions yet
        </div>

      </div>


    </div>
  );
}
