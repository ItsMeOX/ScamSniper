import styles from "./historytab.module.css";

export default function HistoryTab({historyChats, onSelectChat} : {historyChats: {chat_name : string, chat_id : number}[], onSelectChat : ( chat_id : number) => void}) {

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1 className={styles.gradientText}>VerifyAI</h1>
      </div>

    <div className={styles.chatButton_container}>
      {historyChats.map((label, idx) => (
        <button 
          key={idx} 
          className={`${label.chat_name === "New Chat" ? styles.newChatButton : styles.chatButton}`}
          onClick={() => onSelectChat(label.chat_id)}>
          {label.chat_name}
        </button>
      ))}
    </div>
    </div>
  );
}