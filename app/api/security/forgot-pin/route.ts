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


    if (!user) {
      return NextResponse.json(
        {
          error:
            "This email is not registered.",
        },
        {
          status: 404,
        }
      );
    }


    const token = crypto
      .randomBytes(32)
      .toString("hex");


    await prisma.user.update({
      where: {
        id: user.id,
      },

      data: {
        pinResetToken: token,

        pinResetExpires: new Date(
          Date.now() + 1000 * 60 * 10
        ),
      },
    });


    const resetLink =
      `${process.env.NEXT_PUBLIC_APP_URL}/reset-pin?token=${token}`;


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
        "Reset your My Wallet Security PIN",


      html:` 
      <div style="
        font-family:Arial;
        padding:30px;
        background:#000;
      ">

        <div style="
          max-width:500px;
          margin:auto;
          background:#111;
          padding:30px;
          border-radius:20px;
          color:white;
          text-align:center;
        ">

          <h2>
            Reset Security PIN
          </h2>


          <p>
            You requested to reset your security PIN.
          </p>


          <a
            href="${resetLink}"
            style="
              display:inline-block;
              background:#16a34a;
              color:white;
              padding:12px 25px;
              border-radius:10px;
              text-decoration:none;
              margin-top:20px;
            "
          >
            Reset PIN
          </a>


          <p style="
            margin-top:25px;
            color:#aaa;
          ">
            This link will expire in 10 minutes.
          </p>


          <p style="
            color:#777;
            font-size:13px;
          ">
            If you did not request this,
            ignore this email.
          </p>


        </div>

      </div>
      `,
    });


    return NextResponse.json({

      success: true,

      message:
        "Security PIN reset link sent successfully.",

    });


  } catch (error) {

    console.log(
      "FORGOT PIN ERROR:",
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