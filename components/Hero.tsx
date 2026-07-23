import WalletCard from "@/components/WalletCard";

export default function Hero() {
  return (
    <section
      className="
        relative
        mx-4
        overflow-hidden
        rounded-3xl
        bg-cover
        bg-center
        min-h-[700px]
        md:mx-12
        md:min-h-[650px]
      "
      style={{
        backgroundImage: "url('/photo_MYPAY.jpg')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>


      {/* Content */}
      <div
        className="
          relative
          z-10
          grid
          min-h-[700px]
          items-center
          gap-10
          px-6
          md:grid-cols-2
          md:min-h-[650px]
          md:px-16
        "
      >

        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Smart Digital Wallet
            <br />
            For Global Payments
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-200">
            Send money, manage your wallet and enjoy secure digital
            payments with My Wallet.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-blue-600 px-8 py-3 font-semibold">
              GET STARTED
            </button>

            <button className="rounded-full border border-white px-8 py-3">
              Learn More
            </button>
          </div>
        </div>


        {/* Right Wallet Card */}
        <div className="flex justify-center md:justify-end">
          <WalletCard />
        </div>


      </div>

    </section>
  );
}