import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(
        new URL("/verify-failed", req.url)
      );
    }

    const verificationToken =
      await prisma.verificationToken.findUnique({
        where: {
          token,
        },
      });

    if (!verificationToken) {
      return NextResponse.redirect(
        new URL("/verify-failed", req.url)
      );
    }

    await prisma.user.update({
      where: {
        id: verificationToken.userId,
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

    return NextResponse.redirect(
      new URL("/verify-success", req.url)
    );

  } catch (error) {
    console.log(error);

    return NextResponse.redirect(
      new URL("/verify-failed", req.url)
    );
  }
}
