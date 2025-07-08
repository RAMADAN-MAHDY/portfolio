"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// مكون التحميل بتوهج ألوان احترافي
export default function FancyLoader() {
  const [hide, setHide] = useState(false);
  const currentLanguage = useSelector((state) => state.language.currentLanguage); // en or ar

  const t = (enText, arText) => currentLanguage === "ar" ? arText : enText;

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#0c3541] via-[#3d3b9b] to-[#0f47ff] flex flex-col items-center justify-center text-center px-4"
    >
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* هالة خارجية بتوهج متغير */}
        <motion.div
          className="absolute w-48 h-48 rounded-full border-4 border-[#60e6ff] shadow-[0_0_60px_10px_rgba(96,230,255,0.7)]"
          animate={{
            boxShadow: [
              "0 0 20px 5px rgba(96,230,255,0.5)",
              "0 0 50px 15px rgba(76,60,168,0.7)",
              "0 0 20px 5px rgba(96,230,255,0.5)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
        />

        {/* دائرة داخلية صلبة */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#60e6ff] to-[#4c3ca8] shadow-[0_0_40px_10px_rgba(76,60,168,0.5)]"></div>
      </div>

      {/* الرسالة التعريفية */}
      <p className="mt-6 text-white text-xl sm:text-2xl font-semibold animate-pulse">
        {t("Welcome to my world", "مرحبًا بك في عالمي")}
      </p>
    </motion.div>
  );
}
