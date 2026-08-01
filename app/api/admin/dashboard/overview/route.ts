import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [
      totalUsers,
      activeUsers,
      suspendedUsers,
      totalWallets,
      walletBalance,
      companyReserve,
      commissionPool,
      clientReserve,
      pendingReserve,
      totalTransactions,
      pendingTransactions,
      systemProblems,
      ledger,
    ] = await Promise.all([
      prisma.user.count(),

      prisma.user.count({
        where: {
          accountStatus: "active",
        },
      }),

      prisma.user.count({
  where: {
    accountStatus: "suspended",
  },
}),

      prisma.wallet.count(),

      prisma.wallet.aggregate({
        _sum: {
          balance: true,
        },
      }),
prisma.wallet.aggregate({
  _sum: {
    balance: true,
  },
}),

      prisma.companyReserve.findFirst(),

      prisma.commission.findFirst(),

      prisma.transaction.count(),

      prisma.transaction.count({
        where: {
          status: "pending",
        },
      }),
      prisma.transaction.aggregate({
  where: {
    status: "pending",
  },
  _sum: {
    amount: true,
  },
}),

      prisma.systemProblem.count({
        where: {
          status: "open",
        },
      }),

      prisma.systemLedger.findFirst({
        orderBy: {
          createdAt: "desc",
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
       users: {
  total: totalUsers,
  active: activeUsers,
  suspended: suspendedUsers,
},

wallets: {
  total: totalWallets,
  balance: walletBalance._sum.balance || 0,
},

companyReserve:
  companyReserve?.totalReserve || 0,

commissionPool:
  commissionPool?.totalCommission || 0,

clientReserve:
  clientReserve?._sum?.balance || 0,

pendingReserve:
  pendingReserve?._sum?.amount || 0,

transactions: {
  total: totalTransactions,
  pending: pendingTransactions,
},

system: {
  problems: systemProblems,
  ledgerStatus:
    ledger?.status || "unknown",
},
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Dashboard overview failed",
      },
      {
        status: 500,
      }
    );
  }
}