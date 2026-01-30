/*
  Warnings:

  - You are about to drop the column `tutorId` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_tutorId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "tutorId";

-- CreateTable
CREATE TABLE "_TutorStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TutorStudent_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TutorStudent_B_index" ON "_TutorStudent"("B");

-- AddForeignKey
ALTER TABLE "_TutorStudent" ADD CONSTRAINT "_TutorStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TutorStudent" ADD CONSTRAINT "_TutorStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Tutor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
