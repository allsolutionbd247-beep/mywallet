import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { pin } = body;

    const cookieStore = await cookies();

    const userId = cookieStore.get("userId")?.value;


    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 401,
        }
      );
    }


    if (!pin || pin.length !== 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Six digit PIN required",
        },
        {
          status: 400,
        }
      );
    }


    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });


    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }


    const pinHash = await bcrypt.hash(pin, 10);


    await prisma.user.update({
      where: {
        id: userId,
      },

      data: {
        pinHash: pinHash,
        pinCreated: true,
        pinFailedAttempts: 0,
        pinLockedUntil: null,
      },
    });


    return NextResponse.json({
      success: true,
      message: "PIN created successfully",
    });


  } catch (error) {

    console.log("CREATE PIN ERROR:", error);


    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}