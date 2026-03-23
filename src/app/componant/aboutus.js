"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Cpu, Database, Layout, Code2 } from "lucide-react";

export default function AboutUs() {
  const [isClient, setIsClient] = useState(false);
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const isRTL = currentLanguage === "ar";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const techStack = [
    { name: "Next.js", icon: Layout, color: "text-blue-400" },
    { name: "React", icon: Code2, color: "text-cyan-400" },
    { name: "Node.js", icon: Terminal, color: "text-green-400" },
    { name: "MongoDB", icon: Database, color: "text-emerald-500" },
    { name: "Tailwind", icon: Cpu, color: "text-sky-400" },
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center py-12 px-4"
    >
      {/* Badge */}
      <motion.div 
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 border border-blue-900/20 text-blue-900 text-xs font-bold uppercase tracking-widest mb-8 shadow-lg shadow-blue-900/5 backdrop-blur-sm"
      >
        <Sparkles size={14} className="animate-pulse" />
        <span className="[text-shadow:_0_1px_2px_rgba(255,255,255,0.5)]">{isRTL ? "متاح للعمل الحر" : "Available for Projects"}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        variants={itemVariants}
        className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight text-slate-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]"
      >
        {isRTL ? (
          <span className="leading-[1.2]">
            مطور ويب <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">متكامل</span>
          </span>
        ) : (
          <span className="leading-[1.1]">
            Full-Stack <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">Web Developer</span>
          </span>
        )}
      </motion.h1>

      {/* Description */}
      <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-6">
        <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-bold [text-shadow:_0_1px_1px_rgba(255,255,255,0.5)]">
          {isRTL ? (
            <>
              أقوم ببناء تطبيقات ويب <span className="text-blue-900 font-black underline decoration-blue-700/50 underline-offset-4">حديثة وتفاعلية</span> تركز على السرعة، الأمان، وتجربة المستخدم السلسة. متخصص في تحويل الأفكار المعقدة إلى حلول رقمية بسيطة وقوية.
            </>
          ) : (
            <>
              I craft <span className="text-blue-900 font-black underline decoration-blue-700/50 underline-offset-4">modern and interactive</span> web applications focused on performance, security, and seamless user experience. Specialized in turning complex ideas into simple, powerful digital solutions.
            </>
          )}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/40 border border-slate-900/10 backdrop-blur-md hover:bg-white/60 transition-all cursor-default shadow-sm shadow-black/5"
              >
                <Icon size={16} className={`${tech.color.replace('400', '700')} drop-shadow-sm`} />
                <span className="text-sm font-black text-slate-900">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mt-12">
        <a 
          href="/projects" 
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-black text-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 active:scale-95 transform"
        >
          {isRTL ? "عرض أعمالي" : "View My Work"}
        </a>
      </motion.div>
    </motion.div>
  );
}
