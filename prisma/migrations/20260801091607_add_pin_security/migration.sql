-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pinCreated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "pinFailedAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "pinHash" TEXT,
ADD COLUMN     "pinLockedUntil" TIMESTAMP(3);
