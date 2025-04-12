'use server';

import { Prisma } from '@prisma/client';
import prisma from '../prisma/db';

export default async function createImage(
  url: string,
  tx?: Prisma.TransactionClient
) {
  if (!tx) {
    tx = prisma;
  }

  let createdImage;

  await prisma.$transaction(async (tx) => {
    createdImage = await tx.image.create({
      data: {
        url,
      },
    });
  });

  return createdImage;
}
