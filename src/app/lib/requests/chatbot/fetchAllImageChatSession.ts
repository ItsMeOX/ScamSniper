'use server';

import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';

export default async function fetchAllImageChatSession(chat_id : number) {


  const allChatImages =  await prisma.chatImages.findMany({
    where: {
        chat_id: chat_id,
        },
    orderBy: {
        createdAt: 'asc',
        },
    });
    return allChatImages.map(image => image.url)

}

