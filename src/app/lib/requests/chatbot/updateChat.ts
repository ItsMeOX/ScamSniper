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
  image_urls,
  tx,
}: {
  chatId: number;
  userId: number;
  message: string;
  image_urls?: string[];
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
    if (image_urls && image_urls.length > 0) {
        image_urls.forEach(async (url) => {
            await createImage(url, chatId, tx);
        });
    }
    return chatId;
}
