"use client";

import { useState } from "react";

export default function WalletPage() {

  const [copied, setCopied] = useState("");
  const [openMenu, setOpenMenu] = useState("");
  const [openTransaction, setOpenTransaction] = useState("");
  const [openTransfer, setOpenTransfer] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [transferResult, setTransferResult] = useState("");
  const [receiverInfo, setReceiverInfo] = useState<any>(null);
  const [checkMessage, setCheckMessage] = useState("");


  const wallets = [
    {
      id: "U87654356",
      name: "USD Wallet",
      balance: "250 USD",
    },
    {
      id: "BDT6557875",
      name: "BDT Wallet",
      balance: "5000 BDT",
    },
  ];



  function copyWallet(id: string) {

    navigator.clipboard.writeText(id);

    setCopied(id);

    setTimeout(() => {
      setCopied("");
    }, 2000);

  }
  async function checkWallet() {

  const response = await fetch("/api/wallet/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      walletId: receiver,
    }),
  });


  const data = await response.json();


  if (data.success) {

    setReceiverInfo(data);
    setCheckMessage("");

  } else {

    setReceiverInfo(null);
    setCheckMessage(data.message);

  }

}

async function transferMoney(walletId: string) {
if (Number(amount) < 0.01) {
  setTransferResult(
    "Minimum transfer amount is 0.01"
  );
  return;
}
  const response = await fetch("/api/transfer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      senderWalletId: walletId,
      receiverWalletId: receiver,
      amount: Number(amount),
      currency: "USD",
    }),
  });


  const data = await response.json();


  if (data.success) {

    setTransferResult(
      "Transfer Successful | Token: " + data.token
    );

  } else {

    setTransferResult(data.message);

  }

}


  return (

    <div className="min-h-screen bg-gradient-to-br from-[#071A33] via-[#0B3A6E] to-[#1E88E5] p-6">


      <div className="max-w-md mx-auto">


        <h1 className="text-3xl font-bold text-center mb-8">
          My Wallet
        </h1>
<button
  className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold mb-6"
  onClick={() => alert("Add Wallet")}
>
  + Add Wallet
</button>


        {wallets.map((wallet) => (


          <div
            key={wallet.id}
           className="bg-gradient-to-br from-[#1A237E] via-[#1565C0] to-[#00ACC1] rounded-3xl shadow-2xl p-6 mb-6 text-white relative overflow-hidden"
          >



            <div className="flex justify-between items-center">
  <h2 className="text-xl font-bold">
    {wallet.name}
  </h2>

  <div className="w-10 h-8 rounded-md bg-yellow-400 border border-yellow-200 shadow-inner">
  <div className="h-full w-full grid grid-cols-3 gap-1 p-1">
    <span className="border border-yellow-700 rounded"></span>
    <span className="border border-yellow-700 rounded"></span>
    <span className="border border-yellow-700 rounded"></span>
    <span className="border border-yellow-700 rounded"></span>
    <span className="border border-yellow-700 rounded"></span>
    <span className="border border-yellow-700 rounded"></span>
  </div>
</div>
</div>




            {/* Wallet Number */}

            <div className="flex justify-between items-center mt-5">


              <div className="flex items-center gap-3">


                <span className="font-semibold text-white tracking-widest">
  {wallet.id}
</span>



                <button

                  onClick={() => copyWallet(wallet.id)}

                  className="text-xl"

                >
                  ⧉
                </button>



              </div>




              {/* Three Dot */}

              <button

                onClick={() =>
                  setOpenMenu(
                    openMenu === wallet.id
                      ? ""
                      : wallet.id
                  )
                }

                className="text-2xl font-bold text-gray-600"

              >
                •••
              </button>



            </div>




            {copied === wallet.id && (

              <p className="text-green-600 text-sm mt-2">
                Copied
              </p>

            )}






            {/* Balance */}

            <p className="text-3xl font-extrabold mt-6 text-white">
  {wallet.balance}
</p>






            {/* Transaction Button */}

            <div className="mt-5 bg-emerald-500 border border-emerald-400 rounded-lg p-3 flex justify-between items-center text-white">


              <span className="font-semibold">
                Transaction
              </span>



              <button

                onClick={() =>
                  setOpenTransaction(
                    openTransaction === wallet.id
                      ? ""
                      : wallet.id
                  )
                }

                className="text-lg"

              >
                ✎

              </button>



            </div>







            {/* Transaction Options */}

            {openTransaction === wallet.id && (


              <div className="mt-4 space-y-3">


               <button
  onClick={() =>
    setOpenTransfer(
      openTransfer === wallet.id ? "" : wallet.id
    )
  }
  className="w-full bg-blue-600 text-white rounded-lg py-2"
>
  Transfer Money
</button>
{openTransfer === wallet.id && (
  <div className="mt-4 bg-gray-50 border rounded-lg p-4">

    <h3 className="font-bold mb-3">
      Transfer Money
    </h3>

    <input
      placeholder="Receiver Wallet Number"
      className="w-full border rounded-lg p-2 mb-3"
    />

    <input
      placeholder="Amount"
      className="w-full border rounded-lg p-2 mb-3"
    />

  <button
  onClick={checkWallet}
  className="w-full bg-black text-white rounded-lg py-2"
>
  Continue
</button>
{checkMessage && (
  <p className="mt-3 text-red-600">
    {checkMessage}
  </p>
)}

{receiverInfo && (
  <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
    <p>
      Account Name: {receiverInfo.name}
    </p>

    <p>
      Wallet: {receiverInfo.walletId}
    </p>

    <p>
      Currency: {receiverInfo.currency}
    </p>
  </div>
)}

  </div>
)}


                <button className="w-full bg-green-600 text-white rounded-lg py-2">

                  Request Money

                </button>






                <button className="w-full bg-orange-500 text-white rounded-lg py-2">

                  Money Out

                </button>






              </div>


            )}







            {/* Wallet Menu */}

            {openMenu === wallet.id && (


              <div className="mt-4 bg-white border rounded-lg shadow p-3">


                <button className="block w-full text-left py-2">

                  View History

                </button>



                <button className="block w-full text-left py-2 text-red-600">

                  Delete Wallet

                </button>
</div>


            )}



          </div>


        ))}



      </div>


    </div>

  );

}
