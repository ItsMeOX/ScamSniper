'use server';

import bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import prisma from '../../prisma/db';

export default async function registerUser(
  formdata: FormData,
  tx?: Prisma.TransactionClient
) {
  const email = formdata.get('email') as string;
  const plain_password = formdata.get('password') as string;

  if (!email) throw new Error('Email is empty.');

  if (!plain_password) throw new Error('Password is empty.');

  if (!tx) {
    tx = prisma;
  }

  const existUser = await tx.user.findFirst({
    where: {
      user_email: email,
    },
  });

  if (existUser) {
    throw new Error('User already exists.');
  }

  const hashed_password = await bcrypt.hash(plain_password, 12);

  const user = await tx.user.create({
    data: {
      user_name: 'test user',
      user_role: 'user',
      user_email: email,
      user_password: hashed_password,
    },
  });

  return user;
}
