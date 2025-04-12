import NextAuth from 'next-auth';
import { options } from './options';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextRequest, res: NextResponse) => {
  const cookieStore = await cookies();
  const rememberMe = cookieStore.get('rememberMe');

  let maxAge = 30 * 24 * 60 * 60;
  if (rememberMe?.value === 'null') {
    maxAge = 24 * 60 * 60;
  }

  return NextAuth(
    req as unknown as NextApiRequest,
    res as unknown as NextApiResponse,
    { ...options, session: { maxAge } }
  );
};

export { handler as GET, handler as POST };
