-- CreateTable
CREATE TABLE "ChatImages" (
    "id" TEXT NOT NULL,
    "chat_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChatImages" ADD CONSTRAINT "ChatImages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "ChatMessage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
