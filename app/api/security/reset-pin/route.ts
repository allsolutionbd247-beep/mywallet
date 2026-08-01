import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      token,
      pin,
    } = await req.json();


    if (!token || !pin) {
      return NextResponse.json(
        {
          error:
            "Token and PIN required",
        },
        {
          status: 400,
        }
      );
    }


    // PIN validation
    if (!/^\d{4,6}$/.test(pin)) {
      return NextResponse.json(
        {
          error:
            "PIN must be 4 to 6 digits.",
        },
        {
          status: 400,
        }
      );
    }


    const user =
      await prisma.user.findFirst({
        where: {
          pinResetToken: token,
        },
      });


    if (!user) {
      return NextResponse.json(
        {
          error:
            "Invalid or expired reset link.",
        },
        {
          status: 400,
        }
      );
    }


    if (
      user.pinResetExpires &&
      user.pinResetExpires < new Date()
    ) {
      return NextResponse.json(
        {
          error:
            "Reset link has expired. Please request a new one.",
        },
        {
          status: 400,
        }
      );
    }


    const hashedPin =
      await bcrypt.hash(pin, 10);



    await prisma.user.update({

      where: {
        id: user.id,
      },


      data: {

        pinHash: hashedPin,

        pinCreated: true,


        // remove used token
        pinResetToken: null,
        pinResetExpires: null,


        // unlock PIN
        pinFailedAttempts: 0,
        pinLockedUntil: null,
      },

    });



    return NextResponse.json({

      success: true,

      message:
        "Security PIN changed successfully. Please login again.",

    });



  } catch (error) {

    console.log(
      "RESET PIN ERROR:",
      error
    );


    return NextResponse.json(
      {
        error:
          "Server error",
      },
      {
        status: 500,
      }
    );

  }
}