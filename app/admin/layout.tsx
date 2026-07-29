import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex shadow-lg">

        {/* Logo */}
        <div className="p-6 text-2xl font-bold text-white tracking-wider border-b border-slate-800">
          Wallet <span className="text-blue-500">Admin</span>
        </div>


        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 text-sm font-medium">


          <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
          Dashboard Overview
         </Link>



          <Link
            href="/admin/users"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            User Management & Ledger
          </Link>



          <Link
            href="/admin/merchants"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            Merchants & Payouts
          </Link>



          <Link
            href="/admin/transactions"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            Transaction Monitoring
          </Link>



          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            Fees & Commission Settings
          </Link>


        </nav>



        {/* Logout */}
        <div className="p-4 border-t border-slate-800">

          <button
            className="w-full bg-rose-600 hover:bg-rose-700 py-2.5 rounded-lg text-white font-medium transition-all duration-200"
          >
            Logout
          </button>

        </div>


      </aside>




      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">


        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 border-b border-gray-100">


          <h1 className="text-lg font-bold text-gray-800">
            Central Admin Control Panel
          </h1>



          <div className="flex items-center gap-3">

            <span className="text-sm font-semibold text-gray-600">
              Super Admin
            </span>


            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              A
            </div>


          </div>


        </header>




        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>


      </div>


    </div>
  );
}