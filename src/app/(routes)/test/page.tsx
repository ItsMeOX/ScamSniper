'use client';

import createImage from '@/app/lib/requests/createImage';
import { uploadImage } from '@/app/utils/uploadImage';
import { useState } from 'react';

export default function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await uploadImage(file);
      setPreview(url);
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
