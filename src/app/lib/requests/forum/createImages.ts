'use server';

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';

export default async function createImages(
  urls: string[],
  forumId: number,
  tx?: Prisma.TransactionClient
) {
  if (!tx) {
    tx = prisma;
  }

  const createdImage = await tx.forumImage.createMany({
    data: urls.map((url) => ({
      forum_id: forumId,
      url,
    })),
  });

  return createdImage;
}
