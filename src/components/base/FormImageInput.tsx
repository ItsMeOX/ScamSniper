'use client';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './formimageinput.module.css';
import Image from 'next/image';

export default function FormImageInput({
  input,
  setInput,
}: {
  input: File | null;
  setInput: Dispatch<SetStateAction<File | null>>;
}) {
  const inputRef = useRef<any>(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!input) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(input);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [input]);

  const handleChange = (ev: any) => {
    ev.preventDefault();

    if (ev.target.files && ev.target.files[0]) {
      setInput(ev.target.files[0]);
    }
  };
  const handleDragEnter = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    setDragActive(true);
  };

  const handleDragOver = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    setDragActive(false);
  };
  const handleDrop = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    setDragActive(false);

    const files = ev.dataTransfer.files;
    if (files && files.length > 0) {
      setInput(files[0]);
    }
  };

  const openFileExplorer = () => {
    inputRef.current.value = '';
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.outline}>
        <form
          className={`${dragActive ? styles.form_dragging : styles.form}`}
          onSubmit={(e) => e.preventDefault()}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>
          <input
            className={styles.hidden}
            type="file"
            placeholder="fileInput"
            accept="image/*"
            ref={inputRef}
            onChange={handleChange}
          />
          <Image
            alt="upload imgs"
            src="/cloud_upload.svg"
            width="70"
            height="70"
          />
          <p style={{ color: 'rgb(182, 182, 182)' }}>
            Drag & drop files here or{' '}
            <span onClick={openFileExplorer}>
              <u className={styles.select_files}>select files</u>
            </span>
          </p>
        </form>
      </div>
      <div className={styles.image_box}>
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="user uploaded image"
            width={130}
            height={130}
          />
        )}
      </div>
    </div>
  );
}
