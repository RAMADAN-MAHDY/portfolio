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
      alert(t("Microphone access denied.", "تم رفض الوصول للميكروفون."));
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
        <button
          className="rounded-full shadow-2xl w-16 h-16 bg-[url('/animation/Animation-1751341569929.gif')] flex items-center bg-cover justify-center hover:scale-110 active:scale-95 transition-all text-white relative border-4 border-white/20"
          onClick={() => { if (!isDragging) { setShowChat(v => !v); setShowWelcome(false); } }}
          aria-label="Open chat"
        >
          {showChat ? <span className="text-3xl">×</span> : null}
          
          {showWelcome && !showChat && (
            <span className="absolute right-20 top-2 bg-white text-blue-800 px-4 py-2 rounded-2xl shadow-xl text-sm font-bold whitespace-nowrap animate-bounce border border-blue-100">
              {t("Ask me anything!", "اسألني أي شيء!")}
            </span>
          )}
        </button>

        {/* Chat window */}
        {showChat && (
          <div className="bg-[#f8fafc] shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl w-[90vw] sm:w-[420px] h-[600px] border border-white/50 mt-4 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <lottie-player
                    src="https://assets4.lottiefiles.com/packages/lf20_zyquagfl.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '2.5rem', height: '2.5rem' }}
                    loop
                    autoplay
                  ></lottie-player>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{t("Ramadan Assistant", "مساعد رمضان")}</h3>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {isTyping ? t("Typing...", "يكتب الآن...") : t("Online", "متصل")}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowSessions(!showSessions)} 
                  className="p-2 hover:bg-white/10 rounded-lg transition"
                  title={t("History", "تاريخ المحادثات")}
                >
                  📜
                </button>
                <button onClick={() => setShowChat(false)} className="p-2 hover:bg-white/10 rounded-lg transition text-xl">×</button>
              </div>
            </div>

            {/* Session Sidebar (Overlay) */}
            {showSessions && (
              <div className="absolute inset-0 z-20 bg-white animate-in slide-in-from-left duration-200 flex flex-col">
                <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                   <h4 className="font-bold text-gray-700">{t("Recent Chats", "المحادثات السابقة")}</h4>
                   <button onClick={() => setShowSessions(false)} className="text-2xl text-gray-400">&times;</button>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                  <button 
                    onClick={createNewChat}
                    className="w-full text-left p-3 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 transition mb-4"
                  >
                    + {t("New Chat", "محادثة جديدة")}
                  </button>
                  {sessions.map(s => (
                    <button
                      key={s._id}
                      onClick={() => loadSessionMessages(s._id)}
                      className={`w-full text-left p-3 rounded-xl transition ${activeSessionId === s._id ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-semibold' : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                      <p className="truncate text-sm">{s.title || t("Untitled", "بدون عنوان")}</p>
                      <p className="text-[10px] opacity-60">{new Date(s.lastMessageAt).toLocaleDateString()}</p>
                    </button>
                  ))}
                  {sessions.length === 0 && (
                    <div className="text-center py-10 text-gray-400 text-sm">
                      {t("No history found.", "لا يوجد تاريخ محادثات.")}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('/grid.svg')] bg-center">
              {history.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm shadow-sm ${
                    msg.from === "user" 
                    ? "bg-indigo-600 text-white rounded-tr-none" 
                    : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                  }`}>
                    {msg.from === "bot" ? (
                      <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                   <div className="relative w-16 h-10">
                      <Image src="/animation/Ripple-loading-animation.gif" alt="loading..." fill sizes="60px" unoptimized />
                   </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
               <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-2 border border-gray-200 focus-within:ring-2 ring-blue-500/20 ring-offset-0 transition-all">
                  <button 
                    onMouseDown={startRecording}
                    onMouseUp={stopRecording}
                    className={`p-2 rounded-xl transition ${isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'text-gray-400 hover:bg-gray-200'}`}
                    title={t("Hold to Record", "اضغط مطولاً للتسجيل")}
                  >
                    🎙️
                  </button>
                  <input
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 disabled:opacity-50 text-gray-800 placeholder:text-gray-400"
                    type="text"
                    placeholder={t("Type something...", "اكتب شيئاً...")}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleSend()}
                    disabled={loading || isRecording}
                  />
                  <button
                    className={`p-2.5 rounded-xl transition shadow-md ${input.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400'}`}
                    onClick={() => handleSend()}
                    disabled={loading || !input.trim() || isRecording}
                  >
                    <svg className={`w-5 h-5 transform ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
               </div>
               <p className="text-[10px] text-center text-gray-400 mt-2">
                 {t("AI may make mistakes, verify information.", "قد يخطئ الذكاء الاصطناعي، يرجى التثبت من المعلومات.")}
               </p>
            </div>
          </div>
        )}
      
      <style jsx global>{`
        .markdown-container p { margin-bottom: 0.5rem; }
        .markdown-container p:last-child { margin-bottom: 0; }
        .rtl { direction: rtl; }
        .ltr { direction: ltr; }
      `}</style>
    </motion.div>
  );
}
