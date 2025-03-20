"use client";
import { useState, useEffect } from "react";
import ShowAdminChatWithUser from "./showMessageToAdmin";
import { useSelector, useDispatch } from 'react-redux';
import { setParticipants, setNewMessages } from '../../lib/slices/chatSlice';
import Pusher from "pusher-js";

const ChatAdmin = () => {
  // Fetch environment variables for admin ID and Pusher key
  const adminId = process.env.NEXT_PUBLIC_adminId;
  const NEXT_PUBLIC_PUSHER_KEY = process.env.NEXT_PUBLIC_PUSHER_KEY;

  const dispatch = useDispatch();
  const { translations } = useSelector((state) => state.language);
  const { participants } = useSelector((state) => state.chat);

  const [I_am_Admin, setI_am_Admin] = useState(true);
  const [userName, setUserName] = useState("");
  const [showMessageToAdmin, setShowMessageToAdmin] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [userId, setUserId] = useState();
  const [senderId, setSenderId] = useState(null);
  const [GetMessages, setMessages] = useState([]);
  const [GetLastMessages, setLastMessages] = useState();

  // Fetch all conversations for the admin
  const fetch_ALL_Conversations = async (url) => {
    try {
      const res = await fetch(url, { method: "GET", credentials: "include" });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      dispatch(setParticipants(data.conversations));
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  // Show notification for new messages
  const showNotification = (message) => {
    if (message.sender === userId && Notification.permission === "granted") {
      new Notification("New Message from user!", { body: message.text });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("New Message from user!", { body: message.text });
        }
      });
    }
  };

  // Fetch messages for a specific conversation
  const fetchMessages = async (conversations_ID) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/getMessageAdmin/${conversations_ID}`, { method: "GET" });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setMessages(data.messages);
      setCurrentConversation(data.messages[0]?.conversationId);
      setUserId(data.messages[0]?.sender);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Fetch all conversations on component mount
  useEffect(() => {
    fetch_ALL_Conversations(`${process.env.NEXT_PUBLIC_URL}/conversations/${adminId}`);
  }, [adminId]);

  // Set up Pusher for real-time updates
  useEffect(() => {
    if (!adminId || !NEXT_PUBLIC_PUSHER_KEY) return;
    const pusher = new Pusher(NEXT_PUBLIC_PUSHER_KEY, { cluster: "eu", forceTLS: true });
    const channel = pusher.subscribe(`admin-chat-${adminId}`);

    const handleNewMessage = (newMessage) => {
      setLastMessages(newMessage);
      setSenderId(newMessage.conversationId);
      showNotification(newMessage);
      dispatch(setNewMessages(newMessage.conversationId));
      if (currentConversation === newMessage.conversationId) {
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    channel.bind("new-message", handleNewMessage);

    return () => {
      channel.unbind("new-message", handleNewMessage);
      pusher.unsubscribe(`admin-chat-${adminId}`);
    };
  }, [adminId, currentConversation]);

  // Handle selecting a conversation to view messages
  const handleShowMessageWithUser = async (conversationsID, userName) => {
    setShowMessageToAdmin(conversationsID);
    fetchMessages(conversationsID);
    setUserName(userName);
  };

  // Display message if user is not an admin
  if (!I_am_Admin) {
    return <h1 className="mt-[40%] text-[#fff] w-full h-full p-[100px] text-center text-[24px]"> you are not admin </h1>;
  }

  return (
    <section className="w-full">
      <ul className="flex flex-col h-full w-full text-[#ffffff] rounded-lg p-[10px] mt-[15%] text-center" dir="rtl">
        <h1>{translations?.ChatAdmin?.Chat_Admin}</h1>
        {Object.values(participants).map((partic) => (
          <li key={partic._id} className="flex flex-col hover:bg-[#343] cursor-pointer hover:rounded-2xl sm:w-[40%]">
            <div className="flex flex-row w-full rounded-lg p-[10px] text-center" onClick={() => handleShowMessageWithUser(partic._id, partic.participants[0].full_name)}>
              <p className="text-[#4e28f5] bg-[#2cf32c] p-1 w-10 h-10 font-bold text-[24px] rounded-full ">{partic.participants[0].full_name.slice(0, 1).toUpperCase()}</p>
              <p className="text-[#fff] pb-6 m-3 flex flex-col">
                {partic.participants[0].full_name}
                <span className="text-[#ffffff5e] text-[14px] mb-[-60px]">{GetLastMessages?.conversationId === partic._id && GetLastMessages?.text}</span>
              </p>
              {senderId === partic._id && <p className="w-3 h-3 m-3 rounded-full bg-[#2a2dff]"></p>}
            </div>
          </li>
        ))}
      </ul>
      {showMessageToAdmin !== null && (
        <div className="fixed mt-6 left-0 right-0 bottom-0 top-[10%] bg-[#fff] rounded-lg p-[10px] text-center" dir="rtl">
          <p className="text-[#fdfcfc] bg-[#ff2121] w-6 rounded-full mb-4 cursor-pointer" onClick={() => {
            setShowMessageToAdmin(null);
            setMessages([]);
          }}> x </p>
          <h1 className="text-[#fff] rounded-lg bg-[#241111]">{userName}</h1>
          <ShowAdminChatWithUser currentConversation={currentConversation} userId={userId} GetMessages={GetMessages} />
        </div>
      )}
    </section>
  );
};

export default ChatAdmin;
