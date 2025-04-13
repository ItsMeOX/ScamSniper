'use server';

import prisma from '../../prisma/db';
import { Prisma } from '@prisma/client';

export default async function createMessage({
  chatId,
  message,
  tx,
}: {
  chatId: number;
  message: string;
  tx?: Prisma.TransactionClient;
}) {
  if (!tx) {
    tx = prisma;
  }

  return await tx.chatMessage.create({
    data: {
        session_id: chatId,
        text: message,
    },
  });
}
