"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// API Base URL - Managed via environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_URL ;

export default function ChatBotWidget() {
  const [showChat, setShowChat] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showSessions, setShowSessions] = useState(false);
  
  // Voice recording states
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const chatEndRef = useRef(null);

  const t = useCallback((enText, arText) => (currentLanguage === "ar" ? arText : enText), [currentLanguage]);

  // Fetch sessions on mount
  useEffect(() => {
    if (showChat) {
      fetchSessions();
    }
  }, [showChat]);

  const fetchSessions = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/ai/sessions`, { credentials: "include" });
      const data = await res.json();
      if (Array.isArray(data)) setSessions(data);
    } catch (err) {
      console.error("Error fetching sessions:", err);
    }
  };

  const loadSessionMessages = async (sessionId) => {
    setLoading(true);
    setActiveSessionId(sessionId);
    setShowSessions(false);
    try {
      const res = await fetch(`${API_BASE_URL}/ai/sessions/${sessionId}/messages`, { credentials: "include" });
      const data = await res.json();
      setHistory(data.map(msg => ({ from: msg.role === 'user' ? 'user' : 'bot', text: msg.content })));
    } catch (err) {
      console.error("Error loading messages:", err);
    } finally {
      setLoading(false);
    }
  };

  const createNewChat = () => {
    setActiveSessionId(null);
    setHistory([{ from: "bot", text: t("How can I help you today?", "كيف يمكنني مساعدتك اليوم؟") }]);
    setShowSessions(false);
  };

  useEffect(() => {
    if (showChat && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, showChat, isTyping]);

  const handleSend = async (textOverride = null) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    const newUserMsg = { from: "user", text: textToSend };
    setHistory(h => [...h, newUserMsg]);
    setInput("");
    setLoading(true);
    setIsTyping(true);

    try {
      const res = await fetch(`${API_BASE_URL}/ai/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ 
          question: textToSend,
          sessionId: activeSessionId,
          metadata: { language: currentLanguage }
        })
      });
      const data = await res.json();
      
      if (data.error) {
        setHistory(h => [...h, { from: "bot", text: data.error }]);
        return;
      }

      if (data.sessionId && !activeSessionId) {
        setActiveSessionId(data.sessionId);
        fetchSessions();
      }

      setHistory(h => [...h, { from: "bot", text: data?.answer || t("Error", "خطأ") }]);
    } catch {
      setHistory(h => [...h, { from: "bot", text: t("Connection error.", "خطأ في الاتصال.") }]);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }
  };

  // Voice logic
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
         // In a real app, you'd send this blob to an STT service.
         // For now, we'll simulate a voice-to-text or just show a fallback.
         handleSend(t("[Voice Message Sent]", "[تم إرسال رسالة صوتية]"));
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      alert(t("Microphone access denied.", "تم رفض الوصول للميكروفون." , err));
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div 
      drag="y"
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}
    >
        {/* Floating Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group rounded-full shadow-[0_10px_40px_rgba(59,130,246,0.5)] w-16 h-16 bg-[url('/animation/Animation-1751341569929.gif')] flex items-center bg-cover justify-center transition-all text-white relative border-4 border-white/30 backdrop-blur-sm overflow-visible"
          onClick={() => { if (!isDragging) { setShowChat(v => !v); setShowWelcome(false); } }}
          aria-label="Toggle chat"
        >
          {showChat ? (
            <span className="text-3xl font-light rotate-45 group-hover:rotate-0 transition-transform">×</span>
          ) : (
            <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping" />
          )}
          
          {showWelcome && !showChat && (
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-20 top-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-2xl shadow-2xl text-sm font-semibold whitespace-nowrap border border-white/20 backdrop-blur-md"
            >
              {t("Let's chat!", "تحدث معي!")}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-600 rotate-45 -z-10" />
            </motion.span>
          )}
        </motion.button>

        {/* Chat window */}
        {showChat && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-white/80 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.2)] rounded-[2.5rem] w-[90vw] sm:w-[440px] h-[640px] border border-white/40 mt-5 overflow-hidden flex flex-col relative"
          >
            
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-600/90 via-indigo-700/90 to-blue-800/90 p-5 flex items-center justify-between text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                  <lottie-player
                    src="https://assets4.lottiefiles.com/packages/lf20_zyquagfl.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '3rem', height: '3rem' }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div>
                  <h3 className="font-bold text-xl tracking-tight leading-none mb-1">{t("Ramadan AI", "رمضان AI")}</h3>
                  <div className="text-[10px] uppercase tracking-widest text-blue-200 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                    {isTyping ? t("Thinking...", "يفكر الآن...") : t("Ready for you", "جاهز لمساعدتك")}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 relative z-10">
                <button 
                  onClick={() => setShowSessions(!showSessions)} 
                  className="p-2.5 hover:bg-white/20 rounded-xl transition-all active:scale-90"
                  title={t("History", "تاريخ المحادثات")}
                >
                  <span className="text-xl">🕒</span>
                </button>
                <button onClick={() => setShowChat(false)} className="p-2.5 hover:bg-white/20 rounded-xl transition-all active:scale-90 text-2xl leading-none">×</button>
              </div>
            </div>

            {/* Session Sidebar (Overlay) */}
            {showSessions && (
              <motion.div 
                initial={{ x: currentLanguage === 'ar' ? 440 : -440 }}
                animate={{ x: 0 }}
                className="absolute inset-0 z-30 bg-white/95 backdrop-blur-xl flex flex-col pt-2"
              >
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                   <h4 className="font-extrabold text-xl text-gray-800 tracking-tight">{t("Your History", "محادثاتك")}</h4>
                   <button onClick={() => setShowSessions(false)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-3xl text-gray-400 transition">&times;</button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  <button 
                    onClick={createNewChat}
                    className="w-full group flex items-center justify-between p-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                  >
                    <span>{t("Start New Chat", "محادثة جديدة")}</span>
                    <span className="text-xl group-hover:rotate-90 transition-transform">+</span>
                  </button>
                  <div className="h-4" />
                  {sessions.map(s => (
                    <button
                      key={s._id}
                      onClick={() => loadSessionMessages(s._id)}
                      className={`w-full text-left p-4 rounded-2xl transition-all border ${activeSessionId === s._id ? 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm' : 'hover:bg-gray-50 border-transparent text-gray-600'}`}
                    >
                      <p className="truncate font-semibold mb-1 text-sm">{s.title || t("Conversation", "محادثة")}</p>
                      <p className="text-[10px] opacity-50 font-medium italic">{new Date(s.lastMessageAt).toLocaleDateString()}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-gray-50/30">
              {history.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  key={i} 
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] px-5 py-3.5 rounded-3xl text-sm leading-relaxed shadow-sm ${
                    msg.from === "user" 
                    ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-tr-none shadow-blue-100" 
                    : "bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-gray-200/50"
                  }`}>
                    {msg.from === "bot" ? (
                      <div className="prose prose-sm prose-slate max-w-none text-inherit">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      <span className="font-medium">{msg.text}</span>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" />
                   </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white/60 backdrop-blur-md border-t border-gray-100/50">
               <div className="flex items-center gap-3 bg-white rounded-2xl p-2.5 shadow-xl shadow-gray-200/50 border border-gray-100 transition-all focus-within:ring-2 ring-blue-500/20">
                  <button 
                    onMouseDown={startRecording}
                    onMouseUp={stopRecording}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'text-gray-400 hover:bg-gray-100'}`}
                    title={t("Hold to Record", "اضغط مطولاً للتسجيل")}
                  >
                    <span className="text-xl">🎙️</span>
                  </button>
                  <input
                    className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] py-1 disabled:opacity-50 text-gray-800 placeholder:text-gray-400 font-medium"
                    type="text"
                    placeholder={t("Ask me something...", "اسألني أي شيء...")}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleSend()}
                    disabled={loading || isRecording}
                  />
                  <button
                    className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${input.trim() ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:scale-105 active:scale-95' : 'bg-gray-100 text-gray-300 pointer-events-none'}`}
                    onClick={() => handleSend()}
                    disabled={loading || !input.trim() || isRecording}
                  >
                    <svg className={`w-5 h-5 fill-current transform ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
               </div>
               <div className="flex justify-center gap-4 mt-4 opacity-40">
                  <p className="text-[9px] uppercase tracking-tighter font-bold text-gray-500">
                    {t("Protected by SecurityUtils", "محمي بنظام التشفير")}
                  </p>
                  <span className="text-gray-300">|</span>
                  <p className="text-[9px] uppercase tracking-tighter font-bold text-gray-500">
                    {t("Powered by Gemini 1.5", "مدعوم بنظام Gemini 1.5")}
                  </p>
               </div>
            </div>
          </motion.div>
        )}
      
      <style jsx global>{`
        .markdown-container p { margin-bottom: 0.5rem; }
        .markdown-container p:last-child { margin-bottom: 0; }
        .rtl { direction: rtl; }
        .ltr { direction: ltr; }
        .rtl .prose { text-align: right; }
        .ltr .prose { text-align: left; }
      `}</style>
    </motion.div>
  );
}
