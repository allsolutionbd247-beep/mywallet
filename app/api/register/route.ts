import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import nodemailer from "nodemailer";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

   const { email, password, captchaToken } = body;


    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }
      if (!captchaToken) {
      return NextResponse.json(
      { error: "Please complete CAPTCHA" },
      { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });


    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }


    const user = await prisma.user.create({
      data: {
        email,
        password,
        emailVerified: false,
      },
    });


    const token = crypto.randomBytes(32).toString("hex");


    await prisma.verificationToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const verifyLink = "http://localhost:3000/api/verify?token=" + token;

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Verify your My Wallet account",
  html:`
    <h2>Welcome to My Wallet</h2>
    <p>Please click the link below to verify your email:</p>
    <a href="${verifyLink}">
      Verify Email
    </a>
  `,
});

    return NextResponse.json({
      success: true,
      message:
        "Account created. Please verify your email.",
    });


  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );

  }
}
