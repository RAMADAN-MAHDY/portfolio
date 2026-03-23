"use client";
import { useState, useEffect, useRef } from "react";
// import Pusher from "pusher-js";
import moment from "moment-timezone";


const ShowAdminChatWithUser = ({ userId , GetMessages}) => {
    // const NEXT_PUBLIC_PUSHER_KEY = process.env.NEXT_PUBLIC_PUSHER_KEY;
    const adminId = process.env.NEXT_PUBLIC_adminId;

    // console.log(currentConversation);
    // console.log(adminId);

  const messagesEndRef = useRef(null);

  const [messageText, setMessageText] = useState("");
//   const [messages, setMessages] = useState(GetMessages);

  // ارسال الرساله عن الضغط علي Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) { // التحقق من عدم الضغط على Shift مع Enter
      event.preventDefault(); 
      sendMessage();
    }
  };
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

//   useEffect(() => {
//     if (!currentConversation) return;
  
//     // ✅ تأكد من استخدام مفتاح Pusher الصحيح
//     const pusher = new Pusher(NEXT_PUBLIC_PUSHER_KEY, {
//       cluster: "eu",
//       forceTLS: true // 🔹 تأكد من استخدام TLS لتشفير الاتصال
//     });
  
//     // ✅ اشتراك في القناة بناءً على الـ conversation ID
//     const channel = pusher.subscribe(`chat-${currentConversation}`);
  
//     // ✅ استقبال الرسائل الجديدة
//     channel.bind("new-message", (newMessage) => {
//       console.log("📩 رسالة جديدة وصلت:", newMessage);
//       setMessages((prev) => [...prev, newMessage]);
//     });
  
//     // ✅ تنظيف الاشتراك عند تغيير المحادثة أو تفريغ الكومبوننت
//     return () => {
//       console.log("❌ تم إلغاء الاشتراك من:", `chat-${currentConversation}`);
//       channel.unbind_all(); // 🔹 تفريغ جميع الأحداث المرتبطة بالقناة
//       pusher.unsubscribe(`chat-${currentConversation}`);
//     };
//   }, [currentConversation]);
  
  useEffect(() => {
    scrollToBottom();
  }, [GetMessages]); // لما تتغير الرسائل، انزل تحت تلقائيًا

  //   ✅ تنسيق التاريخ
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

// ✅ تحويل الوقت إلى التوقيت المحلي
const HandleTimeOfMessage = (time) =>{
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = moment.utc(time).tz(userTimeZone);
    const localHours = localTime.format("hh");
    const localMinutes = localTime.format("mm");
    const amPm = localTime.format("A");
    
   return ` ${amPm} ${localHours}:${localMinutes} ` ;
}

  //   ✅ إرسال رسالة جديدة
  const sendMessage = async () => {
    if (!messageText.trim()) return;
    try {
        const res = await fetch( `${process.env.NEXT_PUBLIC_URL}/admin-reply` , {
            method: "POST",
            credentials: "include" ,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              messageText,
              adminId,
              userId
            }),
        }
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        await res.json();
        // console.log(data);
        setMessageText(""); // مسح حقل الإدخال بعد الإرسال
  
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };
 

  return (
    
    <div className="w-full h-[90%] flex flex-col justify-center items-center rounded-lg shadow-lg">
        <div className=" w-[50%] lg:w-[30%] bg-[#345] h-[90%]">
      <div className="flex-1 overflow-y-auto h-[84%] ">
        {GetMessages?.map((message, index) => (

<div key={index}> 
             <p className="bg-[#fff] inline-block p-1 rounded-2xl ">{formatMessageDate(message.timestamp)}</p>


        <div className={`p-2 ${message.sender !== adminId ? "text-right" : "text-left"}`}>
 



          <p className={`flex flex-col  p-2  ${message.sender !== adminId ? "bg-gray-300 text-black rounded-br-[55px] rounded-bl-[55px] rounded-tl-[55px] pr-6 " : "bg-blue-500 text-white  rounded-br-[55px] rounded-bl-[55px] rounded-tr-[55px] pl-6 "}`}>
            {message.text}

            <span className={`text-[12px]   ${message.sender === adminId ? "text-[#dfff28]": "text-[#3633d6]"} `}>{HandleTimeOfMessage(message.timestamp)}</span>

          </p>
        </div>
</div>
        ))}
          {/* عنصر خفي لتحريك السكرول إلى أسفل */}
          <div ref={messagesEndRef} />
      </div>
      <div className="p-2 border-t border-gray-300">
        <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-2 border rounded text-[black]"
        placeholder="Type your message..."
        />
        <button
        onClick={sendMessage}
        className="mt-2 p-2 relative w-[40px] h-[40px] bg-[#20fa74]  rounded-2xl"
        >
        <svg className="w-[20px] h-[20px]"  xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" role="img" aria-labelledby="sendIconTitle" stroke="#000000" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000"> <title id="sendIconTitle">Send</title> <polygon points="21.368 12.001 3 21.609 3 14 11 12 3 9.794 3 2.394"/> </svg>
        </button>
      </div>
    </div>
    </div>
  );
};

export default ShowAdminChatWithUser;
