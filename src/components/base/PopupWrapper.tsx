import { ReactNode } from 'react';
import styles from './popupwrapper.module.css';

export default function PopupWrapper({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
