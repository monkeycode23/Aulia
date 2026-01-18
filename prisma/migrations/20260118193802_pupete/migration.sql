/*
  Warnings:

  - You are about to drop the `_UserToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_UserToken" DROP CONSTRAINT "_UserToken_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToken" DROP CONSTRAINT "_UserToken_B_fkey";

-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_UserToken";

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
