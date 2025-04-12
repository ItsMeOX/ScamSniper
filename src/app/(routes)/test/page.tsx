'use client';

import createImage from '@/app/lib/requests/forum/createImage';
import { uploadImage } from '@/app/lib/requests/image/uploadImage';
import { useState } from 'react';

export default function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      //   const url = await uploadImage(file);
      //   await createImage()
      //   setPreview(url);
    } catch (err) {
      console.error('Upload failed', err);
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {preview && <img src={preview} alt="Preview" className="w-40 mt-2" />}
    </div>
  );
}
