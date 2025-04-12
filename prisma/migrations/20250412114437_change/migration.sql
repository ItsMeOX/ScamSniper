/*
  Warnings:

  - You are about to drop the column `image_id` on the `Forum` table. All the data in the column will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Forum" DROP CONSTRAINT "Forum_image_id_fkey";

-- AlterTable
ALTER TABLE "Forum" DROP COLUMN "image_id";

-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "ForumImage" (
    "id" TEXT NOT NULL,
    "forum_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ForumImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ForumImage" ADD CONSTRAINT "ForumImage_forum_id_fkey" FOREIGN KEY ("forum_id") REFERENCES "Forum"("id") ON DELETE CASCADE ON UPDATE CASCADE;
