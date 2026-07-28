-- CreateTable
CREATE TABLE "WalletActivity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WalletActivity" ADD CONSTRAINT "WalletActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
