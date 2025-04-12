import prisma from '@/app/lib/prisma/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { imageUrl } = body;

  if (!imageUrl) {
    return NextResponse.json({ message: 'Missing image url' }, { status: 400 });
  }

  try {
    const saved = await prisma.image.create({
      data: { url: imageUrl }, // adjust based on your model
    });
    return NextResponse.json({ saved }, { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 200 });
    }
    return NextResponse.json({ message: 'unknown error' }, { status: 200 });
  }
}
