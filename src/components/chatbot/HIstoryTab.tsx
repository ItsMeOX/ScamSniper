import styles from "./historytab.module.css";

export default function HistoryTab({historyChats} : {historyChats: string[]}) {

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1 className={styles.gradientText}>VerifyAI</h1>
      </div>

    <div className={styles.chatButton_container}>
      {historyChats.map((label, idx) => (
        <button key={idx} className={`${label === "New Chat" ? styles.newChatButton : styles.chatButton}`}>
          {label}
        </button>
      ))}
    </div>
    </div>
  );
}