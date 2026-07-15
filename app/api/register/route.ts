export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  console.log("Register API hit");

  try {
    const body = await request.json();

    const {
      email,
      password,
      phone,
      fullName,
      country,
      countryCode,
    } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and password are required",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
        phone,
      },
    });

    return NextResponse.json(
      {
        message: "Account created successfully",
        user,
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    console.error("Register Error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
