/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `VerificationToken` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'BDT';

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_code_key" ON "VerificationToken"("code");
