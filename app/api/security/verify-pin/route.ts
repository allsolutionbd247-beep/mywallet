import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { pin } = await req.json();

const cookieStore = await cookies();
const userId = cookieStore.get("userId")?.value;

    if (!userId || !pin) {
      return NextResponse.json(
        { message: "Required fields missing" },
        { status: 400 }
      );
    }

    if (!/^\d{6}$/.test(pin)) {
      return NextResponse.json(
        { message: "PIN must be 6 digits" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Check if PIN is locked
    if (
      user.pinLockedUntil &&
      user.pinLockedUntil > new Date()
    ) {
      return NextResponse.json(
        {
          message:
            "Your account is locked for 24 hours. Or reset your PIN.",
          locked: true,
        },
        { status: 403 }
      );
    }

    const isCorrect = await bcrypt.compare(
      pin,
      user.pinHash || ""
    );

    if (!isCorrect) {
      const attempts = user.pinFailedAttempts + 1;

      // 3 wrong attempts = 24 hours lock
      if (attempts >= 3) {
        const lockTime = new Date();

        lockTime.setHours(
          lockTime.getHours() + 24
        );

        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            pinFailedAttempts: attempts,
            pinLockedUntil: lockTime,
          },
        });

        return NextResponse.json(
          {
            message:
              "Your account is blocked 24 hours, or reset your PIN.",
            locked: true,
          },
          { status: 403 }
        );
      }

      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          pinFailedAttempts: attempts,
        },
      });

      return NextResponse.json(
        {
          message: "Your PIN is wrong",
          attemptsLeft: 3 - attempts,
        },
        { status: 401 }
      );
    }


    // Correct PIN
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        pinFailedAttempts: 0,
        pinLockedUntil: null,
      },
    });


    return NextResponse.json({
      success: true,
      message: "PIN verified successful",
    });


  } catch (error) {
    console.error("VERIFY PIN ERROR:", error);

    return NextResponse.json(
      {
        message: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}