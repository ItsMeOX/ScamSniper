import { Chat } from './../../../../../node_modules/openai/src/resources/beta/chat/chat';
'use server';

import { image } from 'framer-motion/client';
import prisma from '../../prisma/db';
import { Prisma } from '@prisma/client';
import createChatSession from './createChatSession';
import createImage from './createImage';
import { uploadImage } from '../image/uploadImage';
import createMessage from './createMessage';

export default async function updateChatSessionReport({
  chatId,
  reportData,
  userId,
  tx,
}: {
  chatId: number;
  reportData: string;
  userId: number;
  tx?: Prisma.TransactionClient;
}) {
  if (!tx) {
    tx = prisma;
  }
 await prisma.chatSession.update({
    where: {
        id: chatId,
        user_id: userId,
        },
    data: {
        report_data : reportData,
    },
});
}
