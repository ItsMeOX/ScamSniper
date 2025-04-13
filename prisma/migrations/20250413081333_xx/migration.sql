-- DropForeignKey
ALTER TABLE "ChatImages" DROP CONSTRAINT "ChatImages_chat_id_fkey";

-- AddForeignKey
ALTER TABLE "ChatImages" ADD CONSTRAINT "ChatImages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "ChatSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
