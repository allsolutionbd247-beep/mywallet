export default function WalletCard() {
  return (
    <div className="flex w-full justify-end px-4 md:justify-center">
      <div
        className="
          w-[290px]
          h-[185px]
          md:w-[430px]
          md:h-[270px]
          rounded-[24px]
          bg-gradient-to-br
          from-blue-700
          via-blue-600
          to-blue-950
          p-4
          md:p-6
          text-white
          shadow-2xl
        "
      >

        {/* Wallet Title */}
        <p className="text-xs text-white/70 md:text-sm">
          My Wallet
        </p>


        {/* Balance */}
        <h2 className="mt-1 text-2xl font-bold md:text-4xl">
          $10,000
        </h2>

        <p className="text-xs text-white/70 md:text-sm">
          USD Balance
        </p>


        {/* Chip */}
        <div className="mt-2 md:mt-5">
          <div className="h-6 w-9 rounded-md bg-yellow-300 shadow-md md:h-8 md:w-12">
          </div>
        </div>


        {/* Account ID */}
        <div
          className="
            mt-2
            rounded-xl
            bg-black/20
            px-3
            py-1
            md:mt-4
            md:py-2
          "
        >
          <p className="text-[10px] text-white/70 md:text-xs">
            Account ID
          </p>

          <p className="text-xs font-semibold md:text-sm">
            Uxxxxx678
          </p>
        </div>


        {/* Status */}
        <div
          className="
            mt-1
            flex
            justify-between
            text-[10px]
            md:mt-3
            md:text-xs
          "
        >
          <span>
            🔒 Secure
          </span>

          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            Active
          </span>
        </div>


      </div>
    </div>
  );
}