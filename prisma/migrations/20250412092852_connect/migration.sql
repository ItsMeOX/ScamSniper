/*
  Warnings:

  - You are about to drop the column `image` on the `Forum` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Forum" DROP COLUMN "image",
ADD COLUMN     "image_id" TEXT;

-- AddForeignKey
ALTER TABLE "Forum" ADD CONSTRAINT "Forum_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;
