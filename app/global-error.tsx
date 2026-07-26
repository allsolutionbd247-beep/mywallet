'use client';

export const dynamic = 'force-dynamic';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>কোথাও একটা সমস্যা হয়েছে!</h2>
          <button onClick={() => reset()} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            다시 시도 (আবার চেষ্টা করুন)
          </button>
        </div>
      </body>
    </html>
  );
}