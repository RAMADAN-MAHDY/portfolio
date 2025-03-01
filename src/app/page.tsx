"use client";
import { useEffect, useState } from "react";
import SkillsSection from "@/app/componant/SkillsSection";
import Vismeforms from "@/app/componant/vismeforms";
import { loadTranslations } from "@/utils/loadTranslations";
import { setLanguage, setTranslations } from "@/lib/slices/languageSlice";
import AboutMyself from "@/app/componant/AboutMyself";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
//   const [isSubscribed, setIsSubscribed] = useState(false); // حالة الاشتراك

//   const { UserId } = useSelector((state: any) => state.chat);
//   const NEXT_PUBLIC_PUSHER_KEY = process.env.NEXT_PUBLIC_PUSHER_KEY || "";
// console.log("VAPID Public Key:", process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("✅ Service Worker Registered:", registration);
        })
        .catch((error) => {
          console.error("❌ Service Worker Registration Failed:", error);
        });
    }
  }, []);

//   const subscribeToPush = async () => {
//     if ("serviceWorker" in navigator && "PushManager" in window) {
//       try {
//         const registration = await navigator.serviceWorker.ready;
//         const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  
//         if (!vapidKey) {
//           throw new Error("❌ VAPID key is missing!");
//         }
  
//         const subscription = await registration.pushManager.subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: urlBase64ToUint8Array(vapidKey),
//         });
    
//         console.log("🔔 Push Subscription:", JSON.stringify(subscription));
//         console.log("📩 Push Subscription Payload:", JSON.stringify(subscription));

//         const res = await fetch("http://localhost:4000/subscription", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ subscription }),
//         });
  
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  
//         console.log("✅ Subscription sent successfully");
//         setIsSubscribed(true);
//       } catch (error) {
//         console.error("❌ Error subscribing to push notifications:", error);
//       }
//     }
//   };
  
  // ✅ دالة تحويل المفتاح
//   const urlBase64ToUint8Array = (base64String: string) => {
//     const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//     const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
//     const rawData = window.atob(base64);
//     return new Uint8Array([...rawData].map((char) => char.charCodeAt(0)));
//   };
  

  // ✅ دالة طلب الإذن عند الضغط على الزر
//   const requestNotificationPermission = () => {
//     Notification.requestPermission()
//       .then((permission) => {
//         console.log("🔔 Notification Permission:", permission);
//         if (permission === "granted") {
//           subscribeToPush();
//         }
//       })
//       .catch((error) => {
//         console.error("❌ Error requesting notification permission:", error);
//       });
//   };

  useEffect(() => {
    const fetchTranslations = async () => {
      const getLanguageFromLocal = localStorage.getItem("language") || "en";
      const newLanguage = getLanguageFromLocal === "en" ? "en" : "ar";
      const translations = await loadTranslations(newLanguage);

      dispatch(setLanguage(newLanguage));
      dispatch(setTranslations(translations));

      setLoading(false);
    };
    fetchTranslations();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="relative mt-[150px] h-[10%] sm:h-[30%] w-[100%] sm:w-[50%] sm:ml-[20%] bg-[#3544c738] z-10 rounded-full">
        <Vismeforms />
      </main>

      <div className="container mt-[-250px] sm:mt-[-350px] mr-0 sm:ml-[0%] sm:mr-[10%] pt-[0px] w-[100%]">
        <main className="flex items-center justify-center min-h-screen z-100 overflow-hidden pl-6 ml-[-70px]">
          <AboutMyself />
        </main>
      </div>

      <section className="sm:mt-[-350px] mt-[-200px]">
        <SkillsSection />
      </section>

      <hr className="border-solid border-indigo-700 border-[2px] w-full"></hr>

      {/* ✅ زر طلب الإذن */}
      {/* <div className="flex justify-center mt-10">
        {!isSubscribed ? (
          <button
            onClick={requestNotificationPermission}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
            🔔 تفعيل الإشعارات
          </button>
        ) : (
          <p className="text-green-500">✅ الإشعارات مفعلة</p>
        )}
      </div> */}
    </>
  );
};

export default Home;
