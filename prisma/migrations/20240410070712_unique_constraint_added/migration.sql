/*
  Warnings:

  - You are about to drop the column `professionalsId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `professionalsId` on the `Tvshow` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,contentId]` on the table `LikedContent` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_professionalsId_fkey";

-- DropForeignKey
ALTER TABLE "Tvshow" DROP CONSTRAINT "Tvshow_professionalsId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "professionalsId";

-- AlterTable
ALTER TABLE "Tvshow" DROP COLUMN "professionalsId";

-- CreateIndex
CREATE UNIQUE INDEX "LikedContent_userId_contentId_key" ON "LikedContent"("userId", "contentId");
