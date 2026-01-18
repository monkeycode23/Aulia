/*
  Warnings:

  - The values [MOD,ADMIN] on the enum `ERole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `passwordResetExpires` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordResetToken` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identification]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identification` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `name` on the `Role` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "EPermission" ADD VALUE 'GROUP_CREATE';
ALTER TYPE "EPermission" ADD VALUE 'GROUP_EDIT';
ALTER TYPE "EPermission" ADD VALUE 'GROUP_GET';
ALTER TYPE "EPermission" ADD VALUE 'GROUP_DELETE';
ALTER TYPE "EPermission" ADD VALUE 'TEACHER_CREATE';
ALTER TYPE "EPermission" ADD VALUE 'TEACHER_EDIT';
ALTER TYPE "EPermission" ADD VALUE 'TEACHER_GET';
ALTER TYPE "EPermission" ADD VALUE 'TEACHER_DELETE';
ALTER TYPE "EPermission" ADD VALUE 'STUDENT_CREATE';
ALTER TYPE "EPermission" ADD VALUE 'STUDENT_EDIT';
ALTER TYPE "EPermission" ADD VALUE 'STUDENT_GET';
ALTER TYPE "EPermission" ADD VALUE 'STUDENT_DELETE';
ALTER TYPE "EPermission" ADD VALUE 'SCHEDULE_CREATE';
ALTER TYPE "EPermission" ADD VALUE 'SCHEDULE_EDIT';
ALTER TYPE "EPermission" ADD VALUE 'SCHEDULE_GET';
ALTER TYPE "EPermission" ADD VALUE 'SCHEDULE_DELETE';
ALTER TYPE "EPermission" ADD VALUE 'SUBJECT_CREATE';
ALTER TYPE "EPermission" ADD VALUE 'SUBJECT_EDIT';
ALTER TYPE "EPermission" ADD VALUE 'SUBJECT_GET';
ALTER TYPE "EPermission" ADD VALUE 'SUBJECT_DELETE';
ALTER TYPE "EPermission" ADD VALUE 'EVENT_CREATE';
ALTER TYPE "EPermission" ADD VALUE 'EVENT_EDIT';
ALTER TYPE "EPermission" ADD VALUE 'EVENT_GET';
ALTER TYPE "EPermission" ADD VALUE 'EVENT_DELETE';
ALTER TYPE "EPermission" ADD VALUE 'PARENT_CREATE';
ALTER TYPE "EPermission" ADD VALUE 'PARENT_EDIT';
ALTER TYPE "EPermission" ADD VALUE 'PARENT_GET';
ALTER TYPE "EPermission" ADD VALUE 'PARENT_DELETE';






-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "additionalInfo" JSONB,
ADD COLUMN     "birthDate" TIMESTAMP(3),
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "identification" TEXT NOT NULL,
ADD COLUMN     "middleName" TEXT,
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "state" TEXT;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordResetExpires",
DROP COLUMN "passwordResetToken";

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToken" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserToken_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserToken_B_index" ON "_UserToken"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Person_identification_key" ON "Person"("identification");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- AddForeignKey
ALTER TABLE "_UserToken" ADD CONSTRAINT "_UserToken_A_fkey" FOREIGN KEY ("A") REFERENCES "Token"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToken" ADD CONSTRAINT "_UserToken_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
