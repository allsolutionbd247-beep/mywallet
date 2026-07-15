export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Login</h1>

        <input
          type="text"
          placeholder="Email or Phone"
          className="mb-4 w-full rounded border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded border p-3"
        />

        <div className="mb-4 flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>

          <a href="/forgot-password" className="text-blue-600">
            Forgot Password?
          </a>
        </div>

        <button className="w-full rounded bg-blue-600 p-3 text-white">
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}
