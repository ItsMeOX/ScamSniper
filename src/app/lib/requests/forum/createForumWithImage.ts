'use server';

import prisma from '../../prisma/db';
import { Forum } from '@/app/types/Forum';
import createForum from './createForum';
import createImage from './createImage';
import { uploadImage } from '../image/uploadImage';
import createForumTags from './createForumTags';

export default async function createFullForum(forum: Forum) {
  return await prisma.$transaction(async (tx) => {
    const createdForum = await createForum(forum, tx);
    let imageUrl: string | undefined;
    if (forum.image) {
      imageUrl = await uploadImage(forum.image);
      await createImage(imageUrl, createdForum.id, tx);
    }
    await createForumTags({
      forumId: createdForum.id,
      tagIds: forum.tagIds ?? [],
      tx,
    });
    return createdForum;
  });
}
