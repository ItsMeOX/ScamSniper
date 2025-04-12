'use server';

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';

export default async function fetchForum() {
  return await prisma.forum.findMany({
    include: {
      ForumComment: {
        include: {
          User: true,
        },
      },
      ForumImage: true,
      ForumTag: true,
      User: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  });
}

export type ForumWithRelations = Prisma.PromiseReturnType<typeof fetchForum>;
