import Image from 'next/image';
import styles from './scenebankkeyboard.module.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function SceneBankKeyboard({
  showSecondPage,
  setShowFirstPage,
  setShowSecondPage,
}: {
  showSecondPage: boolean;
  setShowSecondPage: Dispatch<SetStateAction<boolean>>;
  setShowFirstPage: Dispatch<SetStateAction<boolean>>;
}) {
  const TARGET_NUMBER = '12345678';
  const [number, setNumber] = useState('');
  const [numberCorrect, setNumberCorrect] = useState(false);

  function formatNumber(num: string) {
    return num.replace(/(.{4})/g, '$1 ').trim();
  }

  function handleButtonClick(value: string) {
    if (value !== 'del' && number.length >= 8) {
      return;
    }

    if (value === 'del') {
      setNumber((prev) => prev.slice(0, -1));
    } else {
      setNumber((prev) => prev + value);
    }
  }

  useEffect(() => {
    if (number === TARGET_NUMBER) {
      setNumberCorrect(true);
    }
  }, [number]);

  return (
    <div
      className={`${styles.container} ${
        showSecondPage ? styles.container_hide : ''
      }`}>
      <div className={styles.phonenumber_box}>
        <span className={styles.section_title}>BANK TRANSFER</span>
        <div className={styles.phonenumber_input_box}>
          <span className={styles.input_box_title}>Enter mobile no.</span>
          <span className={styles.inputbox}>+65 {formatNumber(number)}</span>
        </div>
      </div>

      <div
        className={`${styles.keypad} ${
          numberCorrect ? styles.keypad_hide : ''
        }`}>
        {[...'123456789'].map((num) => (
          <button key={num} value={num} onClick={() => handleButtonClick(num)}>
            {num}
          </button>
        ))}
        <button disabled />
        <button value="0" onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button onClick={() => handleButtonClick('del')}>
          <Image
            src="/simulation/lovescam/keypad_del.svg"
            alt="del"
            width={30}
            height={30}
          />
        </button>
      </div>
      {numberCorrect && (
        <button
          className={styles.transfer_button}
          onClick={() => {
            setShowSecondPage(true);
            setTimeout(() => {
              setShowFirstPage(false);
            }, 200);
          }}>
          Continue
        </button>
      )}
    </div>
  );
}
