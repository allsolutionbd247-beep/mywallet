import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          error: "Email and password required",
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


    // Check password lock
    if (
      user.passwordLockedUntil &&
      user.passwordLockedUntil > new Date()
    ) {
      return NextResponse.json(
        {
          error:
            "Your account is locked for 24 hours. Please reset your password.",
        },
        {
          status: 403,
        }
      );
    }


    // Wrong password
    if (user.password !== password) {
      const attempts =
        user.passwordFailedAttempts + 1;


      if (attempts >= 3) {
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            passwordFailedAttempts: 3,
            passwordLockedUntil: new Date(
              Date.now() +
                1000 *
                  60 *
                  60 *
                  24
            ),
          },
        });


        return NextResponse.json(
          {
            error:
              "Your account is locked for 24 hours. Please reset your password.",
          },
          {
            status: 403,
          }
        );
      }


      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          passwordFailedAttempts: attempts,
        },
      });


      return NextResponse.json(
        {
          error: `Invalid password. Remaining ${
            3 - attempts
          } attempts.,`
        },
        {
          status: 401,
        }
      );
    }



    // Email verification check
    if (!user.emailVerified) {
      return NextResponse.json(
        {
          error:
            "Please verify your email first.",
        },
        {
          status: 403,
        }
      );
    }



    // Reset failed attempts after successful login
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        passwordFailedAttempts: 0,
        passwordLockedUntil: null,
      },
    });



    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
      },
    });



    response.cookies.set(
      "userId",
      user.id,
      {
        httpOnly: true,
        sameSite: "lax",
        secure:
          process.env.NODE_ENV ===
          "production",
      }
    );


    return response;


  } catch (error) {

    console.log(
      "LOGIN ERROR:",
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