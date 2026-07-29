"use client";

import { useEffect, useState } from "react";

type SendMoneyProps = {
  onClose: () => void;
};

export default function SendMoney({ onClose }: SendMoneyProps) {
  const [receiverMethod, setReceiverMethod] = useState("");
  const [rememberReceiverMethod, setRememberReceiverMethod] =
    useState(false);

  const [receiverValue, setReceiverValue] = useState("");

  const receiverMessage = "";

  // Load saved choice
  useEffect(() => {
    const savedMethod = localStorage.getItem("receiverMethod");

    if (savedMethod) {
      setReceiverMethod(savedMethod);
      setRememberReceiverMethod(true);
    }
  }, []);


  // Select method
  const handleReceiverMethod = (method: string) => {
    setReceiverMethod(method);

    if (rememberReceiverMethod) {
      localStorage.setItem("receiverMethod", method);
    }
  };


  // Remember checkbox
  const handleRememberChange = (
    checked: boolean
  ) => {
    setRememberReceiverMethod(checked);

    if (checked && receiverMethod) {
      localStorage.setItem(
        "receiverMethod",
        receiverMethod
      );
    }

    if (!checked) {
      localStorage.removeItem("receiverMethod");
    }
  };


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-5 w-[85%] max-w-md shadow-xl">

        <h2 className="text-lg font-semibold mb-4">
          Send Money
        </h2>


        <p className="text-sm text-gray-500 mb-2">
          Select Receiver Method
        </p>


        <div className="flex gap-3">

          <button
            onClick={() =>
              handleReceiverMethod("email")
            }
            className={`flex-1 border rounded-xl py-2 text-sm font-medium transition ${
              receiverMethod === "email"
                ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                : "border-gray-200 hover:bg-emerald-50"
            }`}
          >
            Email
          </button>


          <button
            onClick={() =>
              handleReceiverMethod("walletId")
            }
            className={`flex-1 border rounded-xl py-2 text-sm font-medium transition ${
              receiverMethod === "walletId"
                ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                : "border-gray-200 hover:bg-emerald-50"
            }`}
          >
            Wallet ID
          </button>

        </div>



        {receiverMethod && (

          <div className="mt-4">

            <p className="text-sm text-gray-500 mb-2">
              Enter Receiver{" "}
              {receiverMethod === "email"
                ? "Email"
                : "Wallet ID"}
            </p>


            <input
              value={receiverValue}
              onChange={(e) =>
                setReceiverValue(e.target.value)
              }
              placeholder={
                receiverMethod === "email"
                  ? "example@email.com"
                  : "Enter Wallet ID"
              }
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-500"
            />


            {receiverMessage && (
              <div className="mt-3 text-sm font-medium text-center">
                {receiverMessage}
              </div>
            )}

          </div>

        )}




        <label className="flex items-center gap-2 mt-4 text-sm text-gray-600 cursor-pointer">

          <input
            type="checkbox"
            checked={rememberReceiverMethod}
            onChange={(e) =>
              handleRememberChange(
                e.target.checked
              )
            }
            className="w-4 h-4"
          />

          Remember my choice

        </label>




        <div className="flex gap-3 mt-5">

          <button
            className="flex-1 bg-emerald-600 text-white py-2 rounded-xl text-sm font-medium"
          >
            Send Money
          </button>


<button
            onClick={onClose}
            className="flex-1 bg-gray-200 py-2 rounded-xl text-sm font-medium text-gray-700"
          >
            Cancel
          </button>

        </div>


      </div>

    </div>
  );
}
