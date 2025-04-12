'use server';

import prisma from '../../prisma/db';

export default async function queryForum() {
  return await prisma.forum.findMany();
}
