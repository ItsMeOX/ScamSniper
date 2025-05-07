import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import styles from './scene0.module.css';

export type Scene0Ref = {
  container: HTMLDivElement | null;
};
type Scene0Props = object;

function Scene0(props: Scene0Props, ref: Ref<Scene0Ref>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    container: containerRef.current,
  }));

  return <div ref={containerRef} className={styles.scene0}></div>;
}

export default forwardRef(Scene0);
