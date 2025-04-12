import HistoryTab from '@/components/chatbot/HIstoryTab';
import UserInputContainer from '@/components/chatbot/UserInputContainer';
import styles from './chatbot.module.css';

export default function ChatBot() {
  return (
    <div className={styles.test}>
      {/* <HistoryTab /> */}
      <UserInputContainer />
    </div>
  );
}
