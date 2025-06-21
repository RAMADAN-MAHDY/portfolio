"use client";
import { useEffect, useState } from "react";
import SkillsSection from "@/app/componant/SkillsSection";
import Vismeforms from "@/app/componant/vismeforms";
import { loadTranslations } from "@/utils/loadTranslations";
import { setLanguage, setTranslations } from "@/lib/slices/languageSlice";
// import AboutMyself from "@/app/componant/AboutMyself";
import { useSelector, useDispatch } from "react-redux";
import Footer from "@/app/componant/footer";
import Chat from "@/app/componant/chat";
import SpiderWeb from '@/app/componant/SpiderWeb';

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [gitLanguage, setGitLanguage] = useState("en");
  const { translations } = useSelector((state: { language: { translations: any } }) => state.language);

  console.log("Translations:", gitLanguage);
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
        setGitLanguage(newLanguage);
      dispatch(setLanguage(newLanguage));
      dispatch(setTranslations(translations));

      setLoading(false);
    };
    fetchTranslations();
  }, [dispatch , translations]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <>
<main className="relative mt-[120px] p-4 sm:p-8 w-full bg-gradient-to-r from-[#0c3541] to-[#0f47ff] z-10 rounded-3xl overflow-hidden shadow-2xl border border-[#1e2a4a]/30">
  <SpiderWeb />
  <div className="relative bg-gradient-to-t from-[#0c354100] via-[#3d3b9b] to-[#0f47ff00] rounded-xl p-4 sm:p-10 z-20 shadow-[0_8px_40px_0_rgba(0,0,0,0.18)] backdrop-blur-xl">
    {/* Title & Description */}
    <div className="mb-8 text-center" data-aos="fade-up" data-aos-duration="1200">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-10 mt-6 bg-gradient-to-r from-[#1b474e] via-[#4c3ca8] to-[#3a773a] drop-shadow-xl animate-slide-down animate-delay-[100ms]">
        <span className="inline-block text-6xl sm:text-7xl md:text-8xl text-[#60e6ff] animate-wiggle mr-2 align-middle">🕸️</span>
        <span className="align-middle">
          {gitLanguage === "en"
            ? "Full-Stack Web Developer"
            : "مطور ويب متكامل (MERN)"}
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-blue-50 max-w-4xl mx-auto animate-slide-up animate-delay-[700ms] tracking-wide leading-relaxed font-semibold text-center space-y-4">
        {gitLanguage === "en"
          ? (
            <>
              <span className="block mb-4">
                I create <span className="font-bold text-[#60e6ff]">modern</span>, <span className="font-bold text-[#60e6ff]">scalable</span>, and <span className="font-bold text-[#60e6ff]">interactive</span> web apps using
                <span className="font-semibold text-[#60e6ff]"> Next.js</span>,
                <span className="font-semibold text-[#61dafb]"> React</span>,
                <span className="font-semibold text-[#367930]"> Node.js</span>,
                <span className="font-semibold text-[#f7df1e]"> Express</span>,
                <span className="font-semibold text-[#114433]"> MongoDB</span>, and
                <span className="font-semibold text-[#3e606e]"> Tailwind CSS</span>.
              </span>
              <span className="block mb-4">
                My work includes <span className="font-bold text-[#60e6ff]">e-commerce</span>, <span className="font-bold text-[#60e6ff]">dashboards</span>, and <span className="font-bold text-[#60e6ff]">smart attendance systems</span>, always focusing on <span className="font-bold text-[#60e6ff]">clean code</span>, <span className="font-bold text-[#60e6ff]">beautiful UI</span>, and a <span className="font-bold text-[#60e6ff]">seamless user experience</span>.
              </span>
              <span className="block mt-6">
                <span className="font-semibold text-[#60e6ff]">+ AI Integration:</span> I can integrate smart AI chatbots that answer based on your site data, just like in
                <a href="https://village-services-dxve.vercel.app/" target="_blank" className="inline-block font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-[#60e6ff] to-[#4c3ca8] text-white shadow-lg hover:scale-105 transition-transform ml-2">Live AI Demo</a>.
              </span>
            </>
          ) : (
            <>
              <span className="block mb-4">
                أطور تطبيقات ويب <span className="font-bold text-[#60e6ff]">حديثة</span>، <span className="font-bold text-[#60e6ff]">قابلة للتوسع</span> و <span className="font-bold text-[#60e6ff]">تفاعلية</span> باستخدام
                <span className="font-semibold text-[#60e6ff]"> Next.js</span>،
                <span className="font-semibold text-[#61dafb]"> React</span>،
                <span className="font-semibold text-[#367930]"> Node.js</span>،
                <span className="font-semibold text-[#f7df1e]"> Express</span>،
                <span className="font-semibold text-[#114433]"> MongoDB</span>، و
                <span className="font-semibold text-[#3e606e]"> Tailwind CSS</span>.
              </span>
              <span className="block mb-4">
                تشمل أعمالي <span className="font-bold text-[#60e6ff]">المتاجر الإلكترونية</span>، <span className="font-bold text-[#60e6ff]">لوحات التحكم</span>، و <span className="font-bold text-[#60e6ff]">أنظمة الحضور الذكية</span>، مع التركيز دائمًا على <span className="font-bold text-[#60e6ff]">كود نظيف</span>، <span className="font-bold text-[#60e6ff]">تصميم جذاب</span> و <span className="font-bold text-[#60e6ff]">تجربة مستخدم سلسة</span>.
              </span>
              <span className="block mt-6">
                <span className="font-semibold text-[#60e6ff]">+ دمج الذكاء الاصطناعي:</span> أستطيع دمج شات ذكي يجيب بناءً على بيانات موقعك، كما في
                <a href="https://village-services-dxve.vercel.app/" target="_blank" className="inline-block font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-[#60e6ff] to-[#4c3ca8] text-white shadow-lg hover:scale-105 transition-transform ml-2">تجربة حية</a>.
              </span>
            </>
          )}
      </p>
    </div>
    <Vismeforms />
  </div>
</main>













    {/* <h1 className="text-[#fcf9f9] text-center text-[34px] mt-[140px] m-3">{translations?.ChatUser?.Chat_User}</h1> */}
       <Chat />
      

      {/* <div className="container mt-[-250px] sm:mt-[-350px] mr-0 sm:ml-[0%] sm:mr-[10%] pt-[0px] w-[100%]">
        <main className="flex items-center justify-center min-h-screen z-100 overflow-hidden pl-6 ml-[-70px]">
          <AboutMyself />
        </main>
      </div> */}
{/* sm:mt-[-350px] mt-[-200px] */}
      <section className="mt-[50px]">
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
            <Footer />

    <style jsx global>{`
@keyframes bounce-smooth {
  0%, 100% { transform: translateY(0); }
  20% { transform: translateY(-12px); }
  40% { transform: translateY(-18px); }
  60% { transform: translateY(-12px); }
  80% { transform: translateY(-6px); }
}
.animate-bounce-smooth {
  animation: bounce-smooth 1.8s cubic-bezier(.68,-0.55,.27,1.55) infinite;
}
`}</style>
    </>
  );
};

export default Home;
