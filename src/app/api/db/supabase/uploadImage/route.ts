import prisma from '@/app/lib/prisma/db';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { imageUrl } = req.body;
  if (!imageUrl) return res.status(400).json({ error: 'Missing imageUrl' });

  try {
    const saved = await prisma.image.create({
      data: { url: imageUrl }, // adjust based on your model
    });
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'DB save failed' });
  }
}
