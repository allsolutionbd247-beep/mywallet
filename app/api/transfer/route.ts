import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      senderWalletId,
      receiverWalletId,
      amount,
      currency,
    } = body;

    if (!senderWalletId  !receiverWalletId  !amount || !currency) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // Sender wallet find
    const senderWallet = await prisma.wallet.findUnique({
      where: {
        walletId: senderWalletId,
      },
    });

    if (!senderWallet) {
      return NextResponse.json(
        {
          message: "Sender wallet not found",
        },
        {
          status: 404,
        }
      );
    }


    // Receiver wallet find
    const receiverWallet = await prisma.wallet.findUnique({
      where: {
        walletId: receiverWalletId,
      },
    });


    if (!receiverWallet) {
      return NextResponse.json(
        {
          message: "Receiver wallet not found",
        },
        {
          status: 404,
        }
      );
    }


    // Same currency check

    if (
      senderWallet.currency !== currency ||
      receiverWallet.currency !== currency
    ) {
      return NextResponse.json(
        {
          message:
            "You can only transfer same currency wallet",
        },
        {
          status: 400,
        }
      );
    }
if (amount < 0.01) {
  return NextResponse.json(
    {
      message: "Minimum transfer amount is 0.01",
    },
    {
      status: 400,
    }
  );
}

    // Balance check

    if (senderWallet.balance < amount) {
      return NextResponse.json(
        {
          message: "Insufficient balance",
        },
        {
          status: 400,
        }
      );
    }


    // Token generate

    const token =
      "TX-" +
      Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();


    // Transfer transaction

    await prisma.$transaction([

      prisma.wallet.update({
        where:{
          id: senderWallet.id,
        },
        data:{
          balance:{
            decrement: amount,
          },
        },
      }),


      prisma.wallet.update({
        where:{
          id: receiverWallet.id,
        },
        data:{
          balance:{
            increment: amount,
          },
        },
      }),


      prisma.transaction.create({
        data:{
          userId: senderWallet.userId,
          type:"TRANSFER",
          amount,
          currency,
          status:"completed",
          token,
        },
      }),

    ]);


    return NextResponse.json({
      success:true,
      message:"Transfer successful",
      token,
    });


  } catch(error){

    console.log(error);

    return NextResponse.json(
      {
        message:"Server error",
      },
      {
        status:500,
      }
    );
  }
}
