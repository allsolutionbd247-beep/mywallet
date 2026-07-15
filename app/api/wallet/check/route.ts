import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { walletId } = await request.json();

    if (!walletId) {
      return NextResponse.json(
        {
          message: "Wallet number required",
        },
        {
          status: 400,
        }
      );
    }

    const wallet = await prisma.wallet.findUnique({
      where: {
        walletId: walletId,
      },
      include: {
        user: {
          include: {
            profile: true,
          },
        },
      },
    });


    if (!wallet) {
      return NextResponse.json(
        {
          message: "Wallet not found",
        },
        {
          status: 404,
        }
      );
    }


    return NextResponse.json(
      {
        success: true,
        walletId: wallet.walletId,
        currency: wallet.currency,
        balance: wallet.balance,
        name: wallet.user.profile?.fullName || "User",
      },
      {
        status: 200,
      }
    );


  } catch (error) {

    return NextResponse.json(
      {
        message: "Server error",
        error: String(error),
      },
      {
        status: 500,
      }
    );

  }
}
