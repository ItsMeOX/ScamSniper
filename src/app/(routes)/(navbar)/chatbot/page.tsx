import UserInputContainer from '../../../../components/chatbot/UserInputContainer';
import ChatMessageBox from '../../../../components/chatbot/ChatMessageBox';
import styles from './chatbot.module.css';
import HistoryTab from '@/components/chatbot/HIstoryTab';

export default function ChatbotPage() {
  return (
    <div className={styles.container}>
      <HistoryTab />
      <div className={styles.chat_container}>
        <ChatMessageBox />
        <UserInputContainer />
      </div>
    </div>
  );
}
