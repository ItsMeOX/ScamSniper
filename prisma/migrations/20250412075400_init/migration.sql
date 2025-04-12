-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_name" VARCHAR(256) NOT NULL,
    "user_password" VARCHAR(256) NOT NULL,
    "user_email" VARCHAR(256) NOT NULL,
    "user_role" VARCHAR(256) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatSession" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "monetary_appeal" TEXT,
    "urgency" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" SERIAL NOT NULL,
    "session_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Forum" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Forum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumTag" (
    "id" SERIAL NOT NULL,
    "forum_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "ForumTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumComment" (
    "id" SERIAL NOT NULL,
    "forum_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "upvote" INTEGER NOT NULL DEFAULT 0,
    "downvote" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ForumComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChatSession" ADD CONSTRAINT "ChatSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "ChatSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Forum" ADD CONSTRAINT "Forum_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumTag" ADD CONSTRAINT "ForumTag_forum_id_fkey" FOREIGN KEY ("forum_id") REFERENCES "Forum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumComment" ADD CONSTRAINT "ForumComment_forum_id_fkey" FOREIGN KEY ("forum_id") REFERENCES "Forum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumComment" ADD CONSTRAINT "ForumComment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
