import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex shadow-lg">
        <div className="p-6 text-2xl font-bold text-white tracking-wider border-b border-slate-800">
          Wallet <span className="text-blue-500">Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-2 text-sm font-medium">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg transition">
            Dashboard Overview
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition">
            User Management & Ledger
          </Link>
          <Link href="/admin/merchants" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition">
            Merchants & Payouts
          </Link>
          <Link href="/admin/transactions" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition">
            Transaction Monitoring
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition">
            Fees & Commission Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button className="w-full bg-rose-600 hover:bg-rose-700 py-2.5 rounded-lg text-white font-medium transition">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 border-b border-gray-100">
          <h1 className="text-lg font-bold text-gray-800">Central Admin Control Panel</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-600">Super Admin</span>
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
          </div>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
