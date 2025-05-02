"use client"
import ContactMe from '@/app/componant/ContactMeForm';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chat from '@/app/componant/chat';
import Footer from '@/app/componant/footer';
const ContactMee = () => {

    
    const { UserId } = useSelector((state: { chat: { UserId: string } }) => state.chat);
    const { translations } = useSelector((state: { language: { translations: any } }) => state.language);
  const [showChat, setShowChat] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false); // حالة الاشتراك

  const subscribeToPush = async () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
        
        if (!vapidKey) {
          throw new Error("❌ VAPID key is missing!");
        }
  
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidKey),
        });
    
        console.log("🔔 Push Subscription:", JSON.stringify(subscription));
        console.log("📩 Push Subscription Payload:", JSON.stringify({ UserId , subscription }));

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subscription`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ UserId , subscription }),
        });
  
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  
        console.log("✅ Subscription sent successfully");
        setIsSubscribed(true);
        localStorage.setItem('isSubscribed', 'true');
      } catch (error) {
        console.error("❌ Error subscribing to push notifications:", error);
      }
    }
  };

// ✅ دالة تحويل المفتاح
const urlBase64ToUint8Array = (base64String: string) => {
const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
const rawData = window.atob(base64);
return new Uint8Array([...rawData].map((char) => char.charCodeAt(0)));
};



  // ✅ دالة طلب الإذن عند الضغط على الزر
  const requestNotificationPermission = () => {
    Notification.requestPermission()
      .then((permission) => {
        console.log("🔔 Notification Permission:", permission);
        if (permission === "granted") {
          subscribeToPush();
        }
      })
      .catch((error) => {
        console.error("❌ Error requesting notification permission:", error);
      });
  };


const getStatusfromContactMe = (state : boolean) => {
  setShowChat(state);        

}



  useEffect(() => {
    const success = localStorage.getItem('Success') === 'true';
    const isSubscribed = localStorage.getItem('isSubscribed') === 'true';
    setShowChat(success);
    setIsSubscribed(isSubscribed);
  }, []);

  return (
    <>
          {/* ✅ زر طلب الإذن */}
          {/* {UserId && 
            <div className="flex justify-center mt-[140px]">
            {!isSubscribed ? (
              <button
                onClick={requestNotificationPermission}
                className=" bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
              >
                🔔 تفعيل الإشعارات
              </button>
            ) : (
              <p className="text-green-500">✅ الإشعارات مفعلة</p>
            )}
          </div>
          } */}
        
      {!showChat ? <ContactMe getStatusfromContactMe={getStatusfromContactMe} /> :
      <>
    {/* <h1 className="text-[#fcf9f9] text-center text-[34px] mt-[140px] m-3">{translations?.ChatUser?.Chat_User}</h1> */}
       <Chat />
      
</>
       }
       <Footer />

    </>
  );
};

export default ContactMee;