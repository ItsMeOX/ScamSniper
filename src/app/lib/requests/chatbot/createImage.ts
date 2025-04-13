'use server';

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';

export default async function createImage(
  url: string,
  chatId: number,
  tx?: Prisma.TransactionClient
) {
  if (!tx) {
    tx = prisma;
  }

  const createdImage = await tx.chatImages.create({
    data: {
      chat_id: chatId,
      url,
    },
  });

  return createdImage;
}
