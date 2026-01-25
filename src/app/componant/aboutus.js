"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function AboutUs() {
  const [isClient, setIsClient] = useState(false);
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const gitLanguage = currentLanguage === "ar" ? "ar" : "en";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // منع الريندر قبل التأكد إننا على الكلاينت

  return (
    <div className="mb-8 text-center" data-aos="fade-up" data-aos-duration="1200">
         <h1 className="text-[15px] p-1 whitespace-nowrap sm:whitespace-pre-wrap sm:text-4xl rounded-2xl md:text-5xl font-bold sm:font-extrabold mb-10 mt-6 bg-gradient-to-r from-[#1b474e] via-[#4c3ca8] to-[#3a773a] drop-shadow-xl animate-slide-down animate-delay-[100ms]">
           <span className="inline-block text-4xl sm:text-7xl md:text-8xl text-[#60e6ff] animate-wiggle mr-2 align-middle">🕸️</span>
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
                   <span className="font-semibold text-[#60e6ff]">+ AI Integration:</span> I can integrate smart AI chatbots that answer based on your site data
                   {/* <a href="https://village-services-dxve.vercel.app/" target="_blank" className="inline-block font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-[#60e6ff] to-[#4c3ca8] text-white shadow-lg hover:scale-105 transition-transform ml-2 animate-glow focus:outline-none focus:ring-4 focus:ring-[#60e6ff]/50 mt-6">Live AI Demo</a>. */}
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
                   <span className="font-semibold text-[#60e6ff]">+ دمج الذكاء الاصطناعي:</span> أستطيع دمج شات ذكي يجيب بناءً على بيانات موقعك
                   {/* <a href="https://village-services-dxve.vercel.app/" target="_blank" className="inline-block font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-[#60e6ff] to-[#4c3ca8] text-white shadow-lg hover:scale-105 transition-transform ml-2 animate-glow focus:outline-none focus:ring-4 focus:ring-[#60e6ff]/50 mt-6">تجربة حية</a>. */}
                 </span>
               </>
             )}
         </p>
       </div>
  );
}
