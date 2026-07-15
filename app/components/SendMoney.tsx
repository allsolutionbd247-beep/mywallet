"use client";

import { useState } from "react";

export default function SendMoney() {
  const [walletNumber, setWalletNumber] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [currency, setCurrency] = useState("");
  const [message, setMessage] = useState("");

  function checkWallet() {
    if (walletNumber.startsWith("U")) {
      setReceiverName("USD Wallet Owner");
      setCurrency("USD");
      setMessage("Wallet Found");
    } 
    else if (walletNumber.startsWith("BDT")) {
      setReceiverName("BDT Wallet Owner");
      setCurrency("BDT");
      setMessage("Wallet Found");
    } 
    else {
      setReceiverName("");
      setCurrency("");
      setMessage("Wallet Not Found");
    }
  }


  return (
    <div className="mt-4 bg-gray-50 border rounded-xl p-5">

      <h3 className="text-xl font-semibold mb-4">
        Transfer Money
      </h3>


      <label className="block mb-2">
        Receiver Wallet Number
      </label>


      <input
        value={walletNumber}
        onChange={(e) =>
          setWalletNumber(e.target.value)
        }
        placeholder="Enter wallet number"
        className="w-full border rounded-lg p-3"
      />


      <button
        onClick={checkWallet}
        className="w-full mt-4 bg-blue-600 text-white rounded-lg py-3"
      >
        Check Wallet
      </button>



      {message && (

        <div className="mt-4 bg-white border rounded-lg p-4">

          <p className="text-sm text-gray-500">
            Status
          </p>

          <p className="font-semibold">
            {message}
          </p>


          {receiverName && (
            <>
              <p className="mt-3 text-sm text-gray-500">
                Receiver Name
              </p>

              <p className="font-semibold">
                {receiverName}
              </p>


              <p className="mt-3 text-sm text-gray-500">
                Currency
              </p>

              <p className="font-semibold">
                {currency}
              </p>
            </>
          )}

        </div>

      )}



      {receiverName && (

        <>

          <label className="block mt-5 mb-2">
            Amount
          </label>


          <input
            type="number"
            placeholder="Enter amount"
            className="w-full border rounded-lg p-3"
          />


          <button
            className="w-full mt-4 bg-green-600 text-white rounded-lg py-3"
          >
            Confirm Transfer
          </button>

        </>

      )}


    </div>
  );
}
