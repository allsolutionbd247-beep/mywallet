import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json(
        {
          error: "Email and verification code required",
        },
        {
          status: 400,
        }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const verificationToken =
      await prisma.verificationToken.findFirst({
        where: {
          userId: user.id,
          code,
        },
      });

    if (!verificationToken) {
      return NextResponse.json(
        {
          error: "Invalid verification code",
        },
        {
          status: 400,
        }
      );
    }

    if (verificationToken.expiresAt < new Date()) {
      return NextResponse.json(
        {
          error: "Verification code expired",
        },
        {
          status: 400,
        }
      );
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerified: true,
      },
    });

    await prisma.verificationToken.delete({
      where: {
        id: verificationToken.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}
