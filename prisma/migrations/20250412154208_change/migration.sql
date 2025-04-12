/*
  Warnings:

  - You are about to drop the `UserImage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_image_url` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserImage" DROP CONSTRAINT "UserImage_user_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_image_url" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserImage";
