'use server';

import prisma from '../../prisma/db';
import { Forum } from '@/app/types/Forum';
import createForum from './createForum';
import createForumTags from './createForumTags';
import createImages from './createImages';

export default async function createFullForumWithImages(
  forum: Omit<Forum, 'image'> & {
    imageUrls: string[];
  }
) {
  return await prisma.$transaction(async (tx) => {
    const createdForum = await createForum(forum, tx);
    if (forum.imageUrls) {
      await createImages(forum.imageUrls, createdForum.id, tx);
    }
    await createForumTags({
      forumId: createdForum.id,
      tagIds: forum.tagIds ?? [],
      tx,
    });
    return createdForum;
  });
}
