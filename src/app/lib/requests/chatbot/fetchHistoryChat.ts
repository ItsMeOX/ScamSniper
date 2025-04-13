'use server';

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';

export default async function fetchHistoryChat(user_id : number) {
  return await prisma.chatSession.findMany({
    where: {
      user_id: user_id,
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      ChatMessage: {
        orderBy: {
          created_at: 'asc',
        },
        include: {
            ChatImages: true,
        }
      },
    },
  });


}

export type ChatSessionsType = Prisma.PromiseReturnType<typeof fetchHistoryChat>;
