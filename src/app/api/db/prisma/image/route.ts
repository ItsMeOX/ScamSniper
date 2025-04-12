import prisma from '@/app/lib/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const imageUrl = body['url'];

  if (imageUrl === null) {
    return NextResponse.json(
      { message: 'image url is empty' },
      { status: 400 }
    );
  }

  try {
    const saved = await prisma.image.create({
      data: { url: imageUrl }, // adjust based on your model
    });
    return NextResponse.json({ saved }, { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'unknown error' }, { status: 500 });
  }
}
