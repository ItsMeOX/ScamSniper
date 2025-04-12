import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrpyt from 'bcrypt';
import { cookies } from 'next/headers';
import { User } from '@prisma/client';
import prisma from '@/app/lib/prisma/db';

export const options: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          throw new Error('One of the fields is empty.');

        return await prisma.$transaction(async (tx) => {
          const user = await tx.user.findFirst({
            where: {
              user_email: credentials.email,
            },
          });

          if (!user) {
            throw new Error('Email not registered.');
          }

          if (
            !(await bcrpyt.compare(credentials.password, user.user_password))
          ) {
            throw new Error('Password does not match.');
          }

          //   (await cookies()).set('rememberMe', credentials.rememberMe);

          return {
            id: user.id,
            name: user.user_name,
            email: user.user_email,
            image_url: user.user_image_url,
          } as any;
        });
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const user = await prisma.user.findFirst({
        where: {
          user_email: token.email!,
        },
      });

      if (!user) throw new Error('user not found. (from jwt)');

      token.sub = user.id.toString();
      token.name = user.user_name;
      token.picture = user.user_image_url;

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: { ...session.user, id: token.sub, image_url: token.picture },
      };
    },
  },
};
