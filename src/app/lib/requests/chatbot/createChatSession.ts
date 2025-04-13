'use server';

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';

export default async function createChatSession(
  userId : number,
  tx?: Prisma.TransactionClient
) {
  if (!tx) {
    tx = prisma;
  }

  const createdChatSession = await tx.chatSession.create({
    data: {
      user_id: userId,
    },
  });

  return createdChatSession;
}
