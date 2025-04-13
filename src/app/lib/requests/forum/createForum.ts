'use server';

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';
import { Forum } from '@/app/types/Forum';
import { Forum as ForumDTO } from '@prisma/client';

export default async function createForum(
  forum: Forum,
  tx?: Prisma.TransactionClient
): Promise<ForumDTO> {
  if (!tx) {
    tx = prisma;
  }

  const createdForum = await tx.forum.create({
    data: {
      user_id: forum.userId,
      title: forum.title,
      description: forum.description,
      chat_session_id: forum.chatSessionId,
    },
  });

  return createdForum as ForumDTO;
}
