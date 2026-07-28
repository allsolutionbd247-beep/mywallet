import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  console.log("REGISTER API RUNNING");

  try {
    const body = await req.json();


    const { email, password, currency, country, captchaToken } = body;
    console.log("REGISTER DATA:", {
  email,
  password,
  captchaToken,
});

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

    if (!captchaToken) {
      return NextResponse.json(
        {
          error: "Please complete CAPTCHA",
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
console.log("EXISTING USER CHECK:", existingUser);

    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exists",
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
        currency,
        emailVerified: false,
      },
    });
    console.log("USER CREATED:", user.id);


    const code = Math.floor(
      100000 + Math.random() * 900000
    ).toString();


    console.log("OTP CODE:", code);
    console.log("USER EMAIL:", email);


    await prisma.verificationToken.create({
      data: {
        code,
        userId: user.id,
        expiresAt: new Date(
          Date.now() + 1000 * 60 * 10
        ),
      },
    });


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Verify your My Wallet account",

      html:`
      
      <div style="
        background:#000000;
        padding:40px 20px;
        font-family:Arial, sans-serif;
      ">

        <div style="
          max-width:500px;
          margin:auto;
          background:#0b0b0b;
          border:1px solid #222;
          border-radius:20px;
          padding:35px;
          text-align:center;
          color:white;
        ">

          <h1 style="
            color:white;
            font-size:28px;
            letter-spacing:2px;
          ">
            MY WALLET
          </h1>


          <p style="
            color:#cccccc;
            font-size:16px;
          ">
            Dear Customer,
          </p>


          <p style="
            color:white;
            font-size:15px;
          ">
            We need to confirm that you are trying to access your MY WALLET account.
          </p>


          <p style="
            color:white;
            font-size:15px;
          ">
            Your authentication code:
          </p>


          <div style="
            background:#ffffff;
            color:#000000;
            display:inline-block;
            padding:15px 30px;
            border-radius:12px;
            font-size:32px;
            font-weight:bold;
            letter-spacing:8px;
          ">
            ${code}
          </div>


          <p style="
            color:#bbbbbb;
            margin-top:25px;
          ">
            This code will expire in 10 minutes.
          </p>


          <p style="
            color:#888888;
            font-size:13px;
          ">
            Do not share this code with anyone.
          </p>


          <p style="
            color:white;
            margin-top:25px;
          ">
            Stay safe!
            <br/>
            <b>MY WALLET</b>
          </p>


        </div>

      </div>

      `,
    });


    console.log("EMAIL SENT SUCCESSFULLY");


    return NextResponse.json({

      success: true,

      message:
        "Verification code has been sent to your email. Please verify your email.",

    });


  } catch (error) {


    console.log(
      "REGISTER ERROR:",
      error
    );


    return NextResponse.json(

      {
        error: "Server error",
      },
     {
        status:500,
      }

    );

  }
}
