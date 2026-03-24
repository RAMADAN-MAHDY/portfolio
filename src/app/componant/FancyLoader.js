"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// مكون التحميل بتوهج ألوان احترافي
export default function FancyLoader() {
  const [hide, setHide] = useState(false);
  const [mounted, setMounted] = useState(false);
  const currentLanguage = useSelector((state) => state.language.currentLanguage); // en or ar

  const t = (enText, arText) => currentLanguage === "ar" ? arText : enText;

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setHide(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[2000] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full" 
        />
      </div>

      {/* Glassmorphic Central Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative w-40 h-40 mb-12 flex items-center justify-center">
          {/* Animated Rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-indigo-400/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Center Logo/Icon Placeholder (Gradient Orb) */}
          <motion.div
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 shadow-2xl flex items-center justify-center"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="text-4xl">✨</span>
          </motion.div>
        </div>

        {/* Welcome Text with Premium Styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            {t("RAMADAN", "رمضان")}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-blue-500/50" />
            <p className="text-blue-200/60 text-sm sm:text-base font-bold tracking-[0.3em] uppercase">
              {t("Creative Developer", "مطور مبدع")}
            </p>
            <span className="h-[1px] w-8 bg-blue-500/50" />
          </div>
        </motion.div>

        {/* Loading Progress Bar - Decorative */}
        <div className="mt-12 w-48 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Decorative Particles (Subtle SVG circles) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         {mounted && [...Array(6)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-1 h-1 bg-white rounded-full"
             initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
             animate={{ y: ["-10%", "110%"] }}
             transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
           />
         ))}
      </div>
    </motion.div>
  );
}
