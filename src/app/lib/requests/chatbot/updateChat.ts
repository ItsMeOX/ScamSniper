import { Chat } from './../../../../../node_modules/openai/src/resources/beta/chat/chat';
'use server';

import { image } from 'framer-motion/client';
import prisma from '../../prisma/db';
import { Prisma } from '@prisma/client';
import createChatSession from './createChatSession';
import createImage from './createImage';
import { uploadImage } from '../image/uploadImage';
import createMessage from './createMessage';

export default async function updateChat({
  chatId,
  userId,
  message,
  images,
  tx,
}: {
  chatId: number;
  userId: number;
  message: string;
  images?: File[];
  tx?: Prisma.TransactionClient;
}) {
  if (!tx) {
    tx = prisma;
  }
    // Create ChatSession if chatId is not provided
    if (chatId === -1) {
        const chatSession = await createChatSession(userId, tx);
        chatId = chatSession.id;
    }
    
    // Create Message
    const createdMessage = await createMessage({
        chatId,
        message,
        tx,
    });

    // Create Images
    if (images && images.length > 0) {
        images.forEach(async (file) => {
            const url = await uploadImage(file);
            await createImage(url, createdMessage.id, tx);
        });
    }
    return chatId;
}
