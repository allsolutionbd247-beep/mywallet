import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { userId, currency } = body;

    console.log("USER ID:", userId);
    console.log("CURRENCY:", currency);


    if (!userId || !currency) {
      return NextResponse.json(
        {
          message: "User ID and Currency are required.",
        },
        {
          status: 400,
        }
      );
    }


    const existingWallet = await prisma.wallet.findFirst({
      where: {
        userId: userId,
        currency: currency,
      },
    });


    if (existingWallet) {
      return NextResponse.json(
        {
          message: currency + " Wallet already exists.",
        },
        {
          status: 400,
        }
      );
    }


    let walletNumber = "";


    if (currency === "BDT") {
      walletNumber =
        "BDT" + Math.floor(1000000 + Math.random() * 9000000);
    } 
    else if (currency === "USD") {
      walletNumber =
        "U" + Math.floor(10000000 + Math.random() * 90000000);
    } 
    else {
      walletNumber =
        "E" + Math.floor(10000000 + Math.random() * 90000000);
    }


    const wallet = await prisma.wallet.create({
      data: {
        userId: userId,
        walletId: walletNumber,
        currency: currency,
        balance: 0,
      },
    });


    return NextResponse.json(
      {
        message: "Wallet created successfully.",
        wallet,
      },
      {
        status: 201,
      }
    );


  } catch (error) {

    console.error("WALLET CREATE ERROR:", error);

    return NextResponse.json(
      {
        message: "Wallet Error",
        error: String(error),
      },
      {
        status: 500,
      }
    );

  }
}
