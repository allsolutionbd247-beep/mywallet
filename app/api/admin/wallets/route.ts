import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        wallets: true,
      },
    });

    return NextResponse.json({
      success: true,
      users,
    });

  } catch (error) {
    console.error("ADMIN WALLET FETCH ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch wallets",
      },
      {
        status: 500,
      }
    );
  }
}
