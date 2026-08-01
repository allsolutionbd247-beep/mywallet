import { Suspense } from "react";
import ResetPinForm from "./ResetPinForm";

export default function ResetPinPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ResetPinForm />
    </Suspense>
  );
}