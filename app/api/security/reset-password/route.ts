import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      token,
      password,
    } = body;


    if (!token || !password) {
      return NextResponse.json(
        {
          error:
            "Token and password required",
        },
        {
          status: 400,
        }
      );
    }


    // Password rules:
    // 8-12 characters
    // uppercase
    // lowercase
    // number
    // special character

    const passwordValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,12}$/
      .test(password);


    if (!passwordValid) {
      return NextResponse.json(
        {
          error:
            "Password must be 8-12 characters and include uppercase, lowercase, number and special character.",
        },
        {
          status: 400,
        }
      );
    }


    const user =
      await prisma.user.findFirst({
        where: {
          passwordResetToken: token,
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
      user.passwordResetExpires &&
      user.passwordResetExpires < new Date()
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


    await prisma.user.update({
      where: {
        id: user.id,
      },

      data: {
        password,

        // remove used token
        passwordResetToken: null,
        passwordResetExpires: null,

        // unlock account
        passwordFailedAttempts: 0,
        passwordLockedUntil: null,
      },
    });


    return NextResponse.json({
      success: true,

      message:
        "Your password has been changed successfully. Please login now.",
    });


  } catch (error) {

    console.log(
      "RESET PASSWORD ERROR:",
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