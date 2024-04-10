/*
  Warnings:

  - You are about to drop the `actorContent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "actorContent";

-- CreateTable
CREATE TABLE "ActorContent" (
    "id" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActorContent_pkey" PRIMARY KEY ("id")
);
