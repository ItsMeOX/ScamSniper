import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import styles from './scene1.module.css';
import Image from 'next/image';

export type Scene1Ref = {
  container: HTMLDivElement | null;
};
type Scene1Props = object;

function Scene1(props: Scene1Props, ref: Ref<Scene1Ref>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    container: containerRef.current,
  }));

  return (
    <div className={styles.scene1} ref={containerRef}>
      <div className={styles.scene1_bgholder}>
        <Image
          src="/simulation/lovescam/scene1.png"
          alt="scene1"
          width={1200}
          height={1200}
          quality={100}
          unoptimized={true}
        />
      </div>
      <p className={styles.scene1_text}>
        Jimmy, a 23-year-old independent mechanical engineer, has been single
        for years. Encouraged by his best friend, he decides to try online
        dating. He joins an exclusive dating site for professionals, hoping to
        find someone serious about love.
      </p>
    </div>
  );
}

export default forwardRef(Scene1);
