-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordFailedAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "passwordLockedUntil" TIMESTAMP(3),
ADD COLUMN     "passwordResetExpires" TIMESTAMP(3),
ADD COLUMN     "passwordResetToken" TEXT,
ADD COLUMN     "pinResetExpires" TIMESTAMP(3),
ADD COLUMN     "pinResetToken" TEXT;
