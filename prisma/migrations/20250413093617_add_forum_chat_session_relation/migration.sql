-- AlterTable
ALTER TABLE "Forum" ADD COLUMN     "chat_session_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Forum" ADD CONSTRAINT "Forum_chat_session_id_fkey" FOREIGN KEY ("chat_session_id") REFERENCES "ChatSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;
