export default function VerifySuccess() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg,#667eea,#764ba2)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          maxWidth: "420px",
          width: "100%",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{color:"#16a34a"}}>
          ✅ Email Verified
        </h1>

        <h2>
          Welcome to My Wallet
        </h2>

        <p>
          Your email has been verified successfully.
          Your account is now active.
        </p>

        <a
          href="/login"
          style={{
            display:"inline-block",
            marginTop:"20px",
            padding:"12px 25px",
            background:"#2563eb",
            color:"white",
            borderRadius:"10px",
            textDecoration:"none",
          }}
        >
          Go to Login
        </a>

      </div>
    </div>
  );
}
