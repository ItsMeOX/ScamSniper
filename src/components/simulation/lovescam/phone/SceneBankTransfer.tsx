import { useRef, useState } from 'react';
import styles from './scenebanktransfer.module.css';

export default function SceneBankTransfer({
  callback,
}: {
  callback: () => void;
}) {
  const [amount, setAmount] = useState(10000);
  const [holding, setHolding] = useState(false);
  const speedRef = useRef(200);
  const deductRef = useRef(1);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const deductMoney = () => {
    setAmount((prev) => {
      const next = Math.max(prev - deductRef.current, 0);
      if (next <= 0) {
        setHolding(false);
        callback();
      }

      return next;
    });

    speedRef.current = Math.max(speedRef.current - 20, 30);
    deductRef.current = deductRef.current + 1;
    timeoutRef.current = setTimeout(deductMoney, speedRef.current);
  };

  const handleHoldStart = () => {
    if (amount <= 0) {
      return;
    }
    setHolding(true);

    speedRef.current = 300;
    deductMoney();
  };

  const handleHoldEnd = () => {
    setHolding(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top_box}>
        <span className={styles.send_amount_text}>Send $10,000.00</span>
        <div className={styles.profile_box}>
          <span>Y</span>
        </div>
        <span className={styles.name_text}>Yuki</span>
      </div>
      <div className={styles.remark_box}>
        <span className={styles.remark_title}>Remark</span>
        <span className={styles.remark_content_text}>Medical Fee</span>
      </div>
      <div className={styles.bottom_box}>
        <div className={styles.warning_box}>
          <span>Only send money to people you trust.</span>
          <span>This payment can&apos;t be canceled.</span>
          <span>Hold Send to complete.</span>
        </div>
        <button
          className={`${styles.button} ${holding ? styles.vibrating : ''} ${
            amount <= 0 ? styles.broken_sign : ''
          } `}
          onMouseDown={handleHoldStart}
          onMouseUp={handleHoldEnd}
          onMouseLeave={handleHoldEnd}
          onTouchStart={handleHoldStart}
          onTouchEnd={handleHoldEnd}>
          Send $
          {amount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </button>
      </div>
    </div>
  );
}
