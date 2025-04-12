'use server';

import prisma from '../../prisma/db';
import { Prisma } from '@prisma/client';

export default async function createForumTags({
  forumId,
  tagIds,
  tx,
}: {
  forumId: number;
  tagIds: number[];
  tx?: Prisma.TransactionClient;
}) {
  if (!tx) {
    tx = prisma;
  }

  await tx.forumTag.createMany({
    data: tagIds.map((tagId) => ({
      forum_id: forumId,
      tag_id: tagId,
    })),
  });
}
