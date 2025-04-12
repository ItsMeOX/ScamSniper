'use server';

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';

export default async function createImage(
  url: string,
  forumId: number,
  tx?: Prisma.TransactionClient
) {
  if (!tx) {
    tx = prisma;
  }

  const createdImage = await tx.forumImage.create({
    data: {
      forum_id: forumId,
      url,
    },
  });

  return createdImage;
}
