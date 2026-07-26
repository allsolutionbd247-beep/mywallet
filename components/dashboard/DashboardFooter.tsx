export default function DashboardFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 p-6 transition-all duration-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="#" className="hover:text-white transition">About Us</a>
          <a href="#" className="hover:text-white transition">Careers</a>
          <a href="#" className="hover:text-white transition">Partners</a>
          <a href="#" className="hover:text-white transition">News</a>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Help Center</a>
          <a href="#" className="hover:text-white transition">Contact Support</a>
          <a href="#" className="hover:text-white transition">Live Chat</a>
          <a href="#" className="hover:text-white transition">FAQs</a>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
        © 2026 Your Wallet. All Rights Reserved.
      </div>
    </footer>
  );
}
