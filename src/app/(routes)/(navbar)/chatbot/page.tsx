'use client';
import UserInputContainer from '@/components/chatbot/UserInputContainer';
import ChatMessageBox from '@/components/chatbot/ChatMessageBox';
import Report from '@/components/chatbot/Report';
import styles from './chatbot.module.css';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import fetchHistoryChat, {
  ChatSessionsType,
} from '@/app/lib/requests/chatbot/fetchHistoryChat';
import updateChat from '@/app/lib/requests/chatbot/updateChat';
import updateChatSessionReport from '@/app/lib/requests/chatbot/updateChatSessionReport';
import HistoryTab from '@/components/chatbot/HistoryTab';

import fetchAllImageChatSession from '@/app/lib/requests/chatbot/fetchAllImageChatSession';

type MessageType = {
  role: string;
  content: (
    | {
        type: string;
        text: string;
      }
    | {
        type: string;
        image_url: {
          url: string;
        };
      }
  )[];
};

interface EvidenceSection {
  evidence: string[];
  chances: number;
}

interface ReportParamsType {
  images: string[];
  sign: {
    emotioanalAppeal: EvidenceSection;
    monetaryAppeal: EvidenceSection;
    urgencyAppeal: EvidenceSection;
    unsolicitedAppeal: EvidenceSection;
    sensitiveInformation: EvidenceSection;
  };
  validation: {
    timestamp: EvidenceSection;
    number: EvidenceSection;
    email: EvidenceSection;
    location: EvidenceSection;
  };
  summary: string;
}
const defaultReportParams = {
  images: [],
  sign: {
    emotioanalAppeal: { evidence: [], chances: 0 },
    monetaryAppeal: { evidence: [], chances: 0 },
    urgencyAppeal: { evidence: [], chances: 0 },
    unsolicitedAppeal: { evidence: [], chances: 0 },
    sensitiveInformation: { evidence: [], chances: 0 },
  },
  validation: {
    timestamp: { evidence: [], chances: 0 },
    number: { evidence: [], chances: 0 },
    email: { evidence: [], chances: 0 },
    location: { evidence: [], chances: 0 },
  },
  summary: '',
};

export default function ChatBot() {
  const session = useSession();
  const username = session.data?.user.name;
  const user_id = session.data?.user.id;
  const [historyChats, setHistoryChats] = useState<
    { chat_name: string; chat_id: number }[]
  >([{ chat_name: 'New Chat', chat_id: -1 }]);
  const [historyChatData, setHistoryChatData] = useState<ChatSessionsType>([]);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [selectedChat, setSelectedChat] = useState<number>(-1);
  const [loadingReport, setLoadingReport] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reportParams, setReportParams] =
    useState<ReportParamsType>(defaultReportParams);
  useEffect(() => {
    if (!user_id) return;
    async function fetchChat() {
      await fetchHistoryChat(parseInt(user_id || '0')).then((data) => {
        setHistoryChatData(data);
        setHistoryChats([{ chat_name: 'New Chat', chat_id: -1 }]);
        for (let i = data.length - 1; i >= 0; i--) {
          setHistoryChats((prev) => [
            ...prev,
            { chat_name: 'chat' + i, chat_id: data[data.length - 1 - i].id },
          ]);
        }
      });
    }
    fetchChat();
  }, [user_id, messages]);

  const handleSelectChat = async (chatId: number) => {
    setSelectedChat(chatId);
    if (chatId === -1 && messages.length > 0) {
      setMessages([]);
      setReportParams(defaultReportParams);
      return;
    }
    const chat = historyChatData.find((chat) => chat.id === chatId);
    if (chat) {
      setMessages(chat.ChatMessage.map((message) => JSON.parse(message.text)));
      if (chat.report_data) {
        setReportParams(JSON.parse(chat.report_data));
      } else {
        setReportParams(defaultReportParams);
      }
    }
    setSelectedChat(chatId);
  };

  const sendRequest = async (userInput: string, fileUrls: string[]) => {
    const currentMessage = {
      role: 'user',
      content: [
        { type: 'text', text: userInput },
        ...fileUrls.map((url) => ({
          type: 'image_url',
          image_url: { url },
        })),
      ],
    };
    const loader = {
      role: 'assistant',
      content: [
        {
          type: 'text',
          text: 'loading',
        },
      ],
    }
    setMessages([...messages, currentMessage, loader]);
    const chat_selected = await updateChat({
      userId: parseInt(user_id || '0'),
      message: JSON.stringify(currentMessage),
      chatId: selectedChat,
      image_urls: fileUrls,
    });
    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          ...messages,
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text:
                  ' You are an AI scam detector called VerifyAI, base on all the chat messages and analyse the images given(if any), help me answer this:' +
                  userInput,
              },
              ...fileUrls.map((url) => ({
                type: 'image_url',
                image_url: { url },
              })),
            ],
          },
        ],
      }),
    });

    const data = await res.json();
    const response = {
      role: 'assistant',
      content: [{ type: 'text', text: data.response.content }],
    };
    // remove loader
    setMessages((prev) => {
      const newMessages = [...prev];
      newMessages.pop();
      return newMessages;
    });
    setMessages([...messages, currentMessage, response]);
    await updateChat({
      userId: parseInt(user_id || '0'),
      message: JSON.stringify(response),
      chatId: chat_selected,
    });

    setSelectedChat(chat_selected);
    return data.response.content;
  };

  const handleToggleShowReport = async () => {
    setShowReport(!showReport);
    if (reportParams.summary === '') {
      setLoadingReport(true);
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...messages,
            {
              role: 'user',
              content:
                'You are a scam ai detector, generate a scam detection report base on all the chat messages above and return a string json object in this format interface ReportParamsType {sign: {emotioanalAppeal: {evidence: string[];    chances: number;  };      monetaryAppeal: {evidence: string[];    chances: number;  };      urgencyAppeal: {evidence: string[];    chances: number;  };      unsolicitedAppeal: {evidence: string[];    chances: number;  };      sensitiveInformation: {evidence: string[];    chances: number;  };    };    validation: {timestamp: {evidence: string[];    chances: number;  };      number: {evidence: string[];chances: number;};email: {evidence: string[];chances: number;};location: {evidence: string[];chances: number;};};summary: string;}, the chances is number between 0 and 10 inclusive, try to fill as much evidence as possible, and leave the chances as 0 and evidence as empty array if no evidence found, ONLY RETURN THE STRING OF THIS JSON OBJECT',
            },
          ],
        }),
      });

      const data = await res.json();
      const content = data.response.content
        .replace(/```json\n?/, '')
        .replace(/```/, '');
      const jsonContent = JSON.parse(content);
      const allChatImages = await fetchAllImageChatSession(selectedChat);
      setLoadingReport(false);
      setReportParams({
        ...reportParams,
        ...jsonContent,
        images: allChatImages,
      });
    }
  };

  useEffect(() => {
    if (reportParams.summary !== '') {
      const reportData = JSON.stringify(reportParams);
      const chatId = selectedChat;
      updateChatSessionReport({
        userId: parseInt(user_id || '0'),
        reportData: reportData,
        chatId: chatId,
      });
    }
  }, [reportParams, selectedChat, user_id]);

  return (
    <div className={styles.container}>
      {showReport ? (
        <Report
          loading={loadingReport}
          params={reportParams}
          toggleShowReport={handleToggleShowReport}
          chatId={selectedChat}
        />
      ) : (
        <>
          {username === undefined ? (
            <></>
          ) : (
            <HistoryTab
              historyChats={historyChats}
              onSelectChat={handleSelectChat}
            />
          )}
          <div className={styles.chat_container}>
            <ChatMessageBox messages={messages as any} username={username} />
            {username === undefined ? (
              <></>
            ) : (
              <UserInputContainer
                onSendMessage={sendRequest}
                toggleShowReport={handleToggleShowReport}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
