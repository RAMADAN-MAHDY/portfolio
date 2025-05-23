"use client";
import { useState, useEffect , useRef } from "react";
import { useSelector ,useDispatch } from 'react-redux';
import {setUserId} from '../../lib/slices/chatSlice'
import Loading from '@/app/componant/loading';
import moment from "moment-timezone";

import Pusher from "pusher-js";



const Chat = () => {
    const dispatch = useDispatch();


const NEXT_PUBLIC_PUSHER_KEY = process.env.NEXT_PUBLIC_PUSHER_KEY;
const adminId = process.env.NEXT_PUBLIC_adminId;
const messagesEndRef = useRef(null);
const { UserId } = useSelector((state) => state.chat);
const { translations } = useSelector((state) => state.language);

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [GetMessages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [showChat, setShowChat] = useState(false);
  
  const [isChatOpen, setIsChatOpen] = useState(false); // حالة لتتبع ما إذا كان الشات مفتوحًا
//  console.log("currentConversation");
//  console.log(currentConversation);

 // دالة تحريك السكرول لأسفل عند إضافة رسالة جديدة
 const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) { // التحقق من عدم الضغط على Shift مع Enter
      event.preventDefault(); 
      sendMessage();
    }
  };
  
// ارسال شعار بان في رساله جديد
const showNotification = (message) => {
if(message.sender !== UserId){
    if (Notification.permission === "granted") {
      new Notification("New Message from Ramadan !", { body: message.text });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("New Message from Ramadan !", { body: message.text });
        }
      });
    }
}

  };

  const fetchConversations = async (url) => {
    try {
      const res = await fetch( url , {
          method: "GET",
          credentials: "include" 
      }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
       setMessages(data.messages);
       setCurrentConversation(data.messages[0].conversationId);
       dispatch(setUserId(data.messages[0].sender));
       setFetching(false);

    } catch (error) {
      console.error("Error fetching conversations:", error);
      setFetching(false);
    }
  };



  useEffect(() => {
    fetchConversations(`${process.env.NEXT_PUBLIC_URL}/message`);
  }, [isChatOpen]);

  useEffect(() => {
    const success = localStorage.getItem('Success') === 'true';
    setShowChat(success);

  }, []);

  // ✅ إعداد Pusher عند فتح الشات
  useEffect(() => {
    if (!isChatOpen || !currentConversation) return;

    const pusher = new Pusher(NEXT_PUBLIC_PUSHER_KEY, {
        cluster: "eu",
        forceTLS: true,
    });

    const channel = pusher.subscribe(`chat-${currentConversation}`);

    channel.bind("pusher:subscription_succeeded", () => {
        console.log("Channel subscribed successfully.");
        setIsSubscribed(true); // تحديث حالة الاشتراك
    });

    channel.bind("new-message", (newMessage) => {
        if (newMessage.sender === "65a123456789abcd12345678") {
            setMessages((prev) => [...prev, newMessage]);
        }

        showNotification(newMessage);
    });

    return () => {
        channel.unbind_all();
        pusher.unsubscribe(`chat-${currentConversation}`);
        setIsSubscribed(false); // إعادة تعيين حالة الاشتراك عند إلغاء الاشتراك
    };
}, [isChatOpen, currentConversation]);
  
const HandleTimeOfMessage = (time) =>{
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = moment.utc(time).tz(userTimeZone);
    const localHours = localTime.format("hh");
    const localMinutes = localTime.format("mm");
    const amPm = localTime.format("A");
    
   return ` ${amPm} ${localHours}:${localMinutes} ` ;
}


const formatMessageDate = (dateString) => {
    const date = moment(dateString);
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');
  
    if (date.isSame(today, 'day')) {
      return "اليوم";
    } else if (date.isSame(yesterday, 'day')) {
      return "أمس";
    } else {
      return date.format('YYYY-MM-DD'); // إعادة التاريخ بصيغته الأصلية إذا لم يكن اليوم أو الأمس
    }
};

  useEffect(() => {
            //   localStorage.setItem("Success", false);
    scrollToBottom();
  }, [GetMessages]);

//   ✅ إرسال رسالة جديدة
const sendMessage = async () => {
    if (!messageText.text.trim()) return; // تأكد من أن النص ليس فارغًا
   
    if (!isSubscribed) {
        console.warn("Channel not subscribed yet. Please wait.");
        return; // منع إرسال الرسالة إذا لم يتم الاشتراك بعد
    }
    
    setLoading(true);

    try {
        // تحقق من حالة القناة
        const pusher = Pusher.instances[0];
        let pusherChannel = pusher?.channel(`chat-${currentConversation}`);

        if (!pusherChannel || !pusherChannel.subscribed) {
            console.warn("Channel not subscribed. Re-subscribing...");
            pusherChannel = pusher.subscribe(`chat-${currentConversation}`);

            // انتظر حتى يتم الاشتراك في القناة
            await new Promise((resolve) => {
                pusherChannel.bind("pusher:subscription_succeeded", () => {
                    console.log("Channel subscribed successfully.");
                    resolve();
                });
            });
        }

        // إرسال الرسالة إلى الخادم
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/chat`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                messageText: messageText.text
            }),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        setMessages((prev) => [
            ...prev,
            { text: messageText.text, timestamp: new Date().toISOString() , id: messageText.id }
        ]);

        // console.log(GetMessages.map(
        //     (message) => message.id 
        // ));

        // console.log(messageText.id);
        // أضف الرسالة يدويًا إلى الحالة بعد التأكد من النص

        setLoading(false);
        setMessageText({ text: "", id: "" }); // إعادة تعيين النص بعد الإضافة

    } catch (error) {
        console.error("Error sending message:", error);
        setLoading(false);
    }
};



return (
    <>
     {/* زر فتح الشات */}
       {(showChat)&& (
        <button
            onClick={() => {
                setIsChatOpen(true)
                setTimeout(() => {
                    scrollToBottom(); // استدعاء دالة تحريك السكرول بعد فتح الشات
                }, 0);
            }}
           className="fixed right-4 top-[90%] z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
        >
            {translations?.ChatUser?.open_chat}
        </button>
    )}
     {/* <div className={`isolate bg-[#0000009c] px-6 py-24 sm:py-32 lg:px-8 h-screen `}> */}

   
 

    {/* واجهة الشات */}
    {isChatOpen && (
   <div className="fixed right-0 top-0  w-full h-screen bg-[#0000009c] z-50">
        <div className={`w-full fixed right-0 h-[500px] sm:ml-[20%] lg:ml-[30%] mt-[30%] lg:mt-[10%] md:mr-[20%] lg:mr-[30%] flex flex-col sm:w-[60%] lg:w-[40%]  porder border-[#f1f3f5] bg-[#070b20] rounded-3xl ${!isChatOpen && "hidden"} `}>
            <div className="flex-1 overflow-y-auto bg-[url('https://img.freepik.com/premium-photo/fingerprint-interface-blue-wallpaper-3d-rendering_670147-42823.jpg?w=2000')] bg-no-repeat bg-cover">

                {fetching && <div className="text-[#fff] fixed left-[45%] top-[50%]">
                    <div className="flex gap-2">
                    <Loading/>
                        </div>
                    </div>}
                {GetMessages.map((message, index) => (
                    <div key={index}> 
                        
                <p className="bg-[#fff] inline-block p-1 rounded-2xl ml-[43%] ">{formatMessageDate(message.timestamp)}</p>

                <div  className={`p-2 ${message.sender === adminId ? "text-right" : "text-left"}`}>
                <p className={`flex flex-col p-2  ${message.sender === adminId ? "bg-gray-300 text-black rounded-br-[55px] rounded-bl-[55px] rounded-tl-[55px] pr-6 " : "bg-blue-500 text-white  rounded-br-[55px] rounded-bl-[55px] rounded-tr-[55px] pl-6 "}`}>
                    {message.text}
                    <span className={`text-[12px]   ${message.sender === adminId ? "text-[#ffffff]": "text-[#eaff31]"} `}>{HandleTimeOfMessage(message.timestamp)}</span>

                </p>
                </div>
                </div>

                )) }
                {/* عنصر خفي لتحريك السكرول إلى أسفل */}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-2 border-t border-gray-300">
                <input
                type="text"
                value={messageText.text}
                onChange={(e) => setMessageText({id:Math.random() , text :  e.target.value} )}
                onKeyDown={handleKeyDown}
                className="w-full p-2 border rounded"
                placeholder="Type your message..."
                />
                <button
                onClick={sendMessage}
                className="mt-2 p-2 relative w-[40px] h-[40px] bg-[#20fa74]  rounded-2xl"
                >
                    {!loading ?
                    <svg className="w-[20px] h-[20px]"  xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" role="img" aria-labelledby="sendIconTitle" stroke="#000000" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000"> <title id="sendIconTitle">Send</title> <polygon points="21.368 12.001 3 21.609 3 14 11 12 3 9.794 3 2.394"/> </svg>
                :
            <span> ...  </span>   
                }
        
                </button>
                <button
                    onClick={() => setIsChatOpen(false)}
                    className="fixed right-4 top-[90%] bg-red-500 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
                >
                  {translations?.ChatUser?.close_chat}
                </button>
            </div>
        </div>
        </div>
      
    )}
   {/* </div> */}
   </>

)

};

export default Chat;
