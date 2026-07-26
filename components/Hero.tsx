export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 lg:py-32 bg-[#064e3b]">
      {/* Background Image using Next.js public path class style without inline url function error */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/Photo_MYPAY.jpg')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Content Area */}
        <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-center lg:text-left">
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
            Introducing <span className="text-emerald-400 block sm:inline mt-1 sm:mt-0">My Wallet</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Experience the future of finance. A smart, lightning-fast, and ultra-secure digital wallet designed to make managing, sending, and growing your money effortless.
          </p>

          <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
            {/* Corrected to your working /register route */}
            <a
              href="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-950 hover:bg-gray-100 transition shadow-lg text-center"
            >
              Sign up now
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}