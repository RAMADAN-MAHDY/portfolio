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

  const [currentConversation, setCurrentConversation] = useState(null);
  const [GetMessages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
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
  }, []);


  // ✅ إعداد Pusher للاستقبال الفوري للرسائل
  useEffect(() => {
    if (!currentConversation) return;
  
    const pusher = new Pusher(NEXT_PUBLIC_PUSHER_KEY, {
      cluster: "eu",
      forceTLS: true
    });
  
    const channel = pusher.subscribe(`chat-${currentConversation}`);

    channel.bind("new-message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
      showNotification(newMessage);
    });
  
    return () => {      
      channel.unbind_all(); 
      pusher.unsubscribe(`chat-${currentConversation}`);
    };
  }, [currentConversation]); 
  
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

    if (!messageText.trim()) return;

    setLoading(true);

    try {
        const res = await fetch( `${process.env.NEXT_PUBLIC_URL}/chat` , {
            method: "POST",
            credentials: "include" ,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              messageText
            }),
        }
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        if (!Pusher.instances.length) { 
            setMessages((prev) => [...prev, { text: messageText, sender: UserId, timestamp: new Date().toISOString() }]);
          }
          
//   console.log(GetMessages);
        
        // const data = await res.json();
        // console.log(data);
        setLoading(false);
        setMessageText(""); 
  
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };



return (
     <div className="isolate bg-[#0000009c] px-6 py-24 sm:py-32 lg:px-8 ">

    <div className="w-full h-[500px] sm:ml-[20%] lg:ml-[30%] flex flex-col sm:w-[60%] lg:w-[40%]  porder border-[#f1f3f5] rounded-lg">
      <div className="flex-1 overflow-y-auto bg-[url('https://img.freepik.com/premium-photo/fingerprint-interface-blue-wallpaper-3d-rendering_670147-42823.jpg?w=2000')] bg-no-repeat bg-cover">

         {fetching && <div className="text-[#fff] fixed left-[45%] top-[50%]">
            <div class="flex gap-2">
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
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
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
      </div>
    </div>
   </div>

)

};

export default Chat;
