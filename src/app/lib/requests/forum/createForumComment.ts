'use server';

import prisma from '../../prisma/db';
import { Prisma } from '@prisma/client';

export default async function createForumComment({
  forumId,
  userId,
  commentText,
  tx,
}: {
  forumId: number;
  userId: number;
  commentText: string;
  tx?: Prisma.TransactionClient;
}) {
  if (!tx) {
    tx = prisma;
  }

  await tx.forumComment.create({
    data: {
      forum_id: forumId,
      user_id: userId,
      text: commentText,
    },
  });
}
