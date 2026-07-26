export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200 pt-16 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
        
        {/* Column 1: Brand & About */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center font-black text-white text-base shadow-md">
              M
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">My Wallet</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            A secure digital wallet platform designed to make managing, sending, and receiving your money quick, easy, and globally accessible.
          </p>
          <div className="pt-2 flex gap-3">
            {/* App Store Badges style placeholder */}
            <span className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg cursor-pointer transition">
              Google Play
            </span>
            <span className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg cursor-pointer transition">
              App Store
            </span>
          </div>
        </div>

        {/* Column 2: My Wallet / Company */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">My Wallet</h4>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li><a href="#" className="hover:text-emerald-600 transition">Fees</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Merchant Directory</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Affiliate Program</a></li>
          </ul>
        </div>

        {/* Column 3: Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Features</h4>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li><a href="#" className="hover:text-emerald-600 transition">Pay online</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Net+ Cards</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Money Transfer</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Security & Protection</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Rewards & Loyalty</a></li>
          </ul>
        </div>

        {/* Column 4: Help & Support */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Help & Support</h4>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li><a href="#" className="hover:text-emerald-600 transition">Support Center</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Policies & Terms</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Privacy Notice</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Cookies Notice</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Cookie Settings</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal Copyright */}
      <div className="max-w-7xl mx-auto pt-8 text-xs text-slate-500 leading-relaxed space-y-3">
        <p>
          Copyright © 2026 My Wallet Limited. All rights reserved. Registered under standard digital financial regulations and secure encryption compliance protocols.
</p>
        <p className="text-[11px] text-slate-400">
          My Wallet is a secure digital wallet enabling multi-currency transactions, digital asset management, and global payment processing. Safe, reliable, and trusted worldwide.
        </p>
      </div>
    </footer>
  );
}