import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          error: "Email is required",
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


    // Email database এ না থাকলে
    if (!user) {
      return NextResponse.json(
        {
          error: "This email is not registered.",
        },
        {
          status: 404,
        }
      );
    }


    // Reset token তৈরি
    const token = crypto
      .randomBytes(32)
      .toString("hex");


    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        passwordResetToken: token,
        passwordResetExpires: new Date(
          Date.now() + 1000 * 60 * 10
        ),
      },
    });


    const resetLink =
      `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;


    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });


    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject:
        "Reset your My Wallet password",

      html:` 
      <div style="
        font-family:Arial;
        padding:30px;
      ">

        <h2>
          Reset Password
        </h2>

        <p>
          You requested to reset your password.
        </p>


        <p>
          <a
            href="${resetLink}"
            style="
              background:#16a34a;
              color:white;
              padding:12px 20px;
              border-radius:8px;
              text-decoration:none;
              display:inline-block;
            "
          >
            Reset Password
          </a>
        </p>


        <p>
          This link will expire in 10 minutes.
        </p>


        <p>
          If you did not request this,
          ignore this email.
        </p>

      </div>
      `,
    });


    return NextResponse.json({
      success: true,
      message:
        "Password reset link sent successfully.",
    });


  } catch (error) {

    console.log(
      "FORGOT PASSWORD ERROR:",
      error
    );


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