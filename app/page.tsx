export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-16 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            M
          </div>
          <h1 className="text-2xl font-bold text-blue-600">
            My Wallet
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-600">
          <a href="#">Home</a>
          <a href="#">Wallet</a>
          <a href="#">Security</a>
          <a href="#">Support</a>
        </nav>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-full border border-blue-600 text-blue-600">
            Login
          </button>

          <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
            Register
          </button>
        </div>
      </header>


      {/* Hero Section */}
      <section className="px-6 py-20 md:px-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Your Digital Wallet
            <span className="text-blue-600">
              {" "}Made Simple
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Send, receive and manage your digital money securely
            with My Wallet. Fast, simple and reliable payment solution.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
              Get Started
            </button>

            <button className="border px-8 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>


        {/* Wallet Card */}
        <div className="flex justify-center">

          <div className="w-full max-w-sm rounded-3xl bg-blue-600 p-8 text-white shadow-xl">

            <p className="text-sm opacity-80">
              My Wallet Balance
            </p>

            <h3 className="text-4xl font-bold mt-4">
              $ 12,500.00
            </h3>

            <div className="mt-10 flex justify-between">

              <div>
                <p className="text-sm opacity-80">
                  Wallet ID
                </p>
                <p>
                  MW-458920
                </p>
              </div>

              <div>
                <p className="text-sm opacity-80">
                  Status
                </p>
                <p>
                  Active
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="px-6 md:px-16 py-12">

        <h2 className="text-3xl font-bold text-center">
          Why Choose My Wallet?
        </h2>


        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-xl">
              Secure
            </h3>
            <p className="mt-3 text-gray-600">
              Your wallet and transactions are protected.
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-xl">
              Fast Transfer
            </h3>
            <p className="mt-3 text-gray-600">
              Send money quickly and easily.
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-xl">
              Multi Currency
            </h3>
            <p className="mt-3 text-gray-600">
              Manage different currencies in one place.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        © 2026 My Wallet. All rights reserved.
      </footer>

    </div>
  );
}