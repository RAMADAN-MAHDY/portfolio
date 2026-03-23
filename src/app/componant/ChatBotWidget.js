"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';   // uninstall
import { useSelector } from "react-redux";

export default function ChatBotWidget() {
  const [showChat, setShowChat] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
//   const [isClient, setIsClient] = useState(false);

  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  const chatEndRef = useRef(null);

  // دالة ترجمة بسيطة
  const t = useCallback((enText, arText) => (currentLanguage === "ar" ? arText : enText), [currentLanguage]);

  useEffect(() => {
    // setIsClient(true);

    // رسالة البداية
    setHistory([
      {
        from: "bot",
        text: t(
          "Hello, I am Ramadan's special assistant. How can I help you?",
          "مرحبا انا مساعد رمضان الخاص، كيف يمكنني مساعدتك؟"
        )
      }
    ]);

    // رسائل الترحيب العشوائية
    const welcomeMessages = currentLanguage === "ar"
      ? [
          "اهلا 👋، انا مساعدك الذكي! كيف يمكنني مساعدتك اليوم؟",
          "مرحبا! 🤖 اسألني أي شيء عن موقعي.",
          "اهلا بك! 👋 تحتاج لمعلومة أو تريد الدردشة؟",
          "هاي! انا هنا للإجابة على اسئلتك."
        ]
      : [
          "Hi 👋, I'm your AI assistant! How can I help you today?",
          "Welcome! 🤖 Ask me anything about my portfolio.",
          "Hello there! 👋 Need info or want to chat?",
          "Hey! I'm here to answer your questions."
        ];

    setMessage(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);

    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, [currentLanguage]);

  useEffect(() => {
    if (showChat && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, showChat]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setHistory(h => [...h, { from: "user", text: input }]);
    setLoading(true);
    setInput("");
    try {
      const res = await fetch("https://portfolio-api-three-murex.vercel.app/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input })
      });
      const data = await res.json();
      setHistory(h => [...h, { from: "bot", text: data?.answer || t("Didn't get that.", "لم أفهم ذلك.") }]);
    } catch {
      setHistory(h => [...h, { from: "bot", text: t("Error connecting to AI service.", "حدث خطأ في الاتصال بالمساعد.") }]);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-[20%] sm:right-6 right-0 z-50 flex flex-col items-end">
        <button
          className="rounded-full shadow-lg w-16 h-16 bg-[url('/animation/Animation-1751341569929.gif')] flex items-center bg-cover justify-center hover:scale-110 transition relative"
          onClick={() => { setShowChat(v => !v); setShowWelcome(false); }}
          aria-label="Open chat"
        >
          {/* {isClient && (
            <DotLottieReact
              src="https://lottie.host/58cfed2f-a4f8-4271-9887-02ff4bd7831b/EbAMuFGCsN.lottie"
              loop
              autoplay
            />
          )} */}

          {showWelcome && (
            <span className="absolute sm:right-20 right-10 top-[-20px] sm:top-1 bg-white text-blue-700 sm:px-4 px-1 py-2 rounded-l-[50px] rounded-tr-[30px] sm:rounded-xl shadow-lg text-base font-semibold animate-fade-in animate-slide-down sm:whitespace-nowrap w-[300px] sm:w-auto">
              {message}
            </span>
          )}
        </button>

        {showChat && (
          <div className="bg-white shadow-2xl rounded-2xl p-4 max-w-xs w-[690px] border border-blue-200 mt-4 relative animate-fade-in flex flex-col" style={{ minHeight: 380 }}>
            <button
              className="absolute top-2 left-2 text-gray-400 hover:text-red-500 text-xl"
              onClick={() => setShowChat(false)}
              aria-label="Close chat"
            >
              ×
            </button>
            <div className="flex items-center mb-2">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_zyquagfl.json"
                background="transparent"
                speed="1"
                style={{ width: '2rem', height: '2rem' }}
                loop
                autoplay
              ></lottie-player>
              <span className="font-bold text-blue-700 text-lg ml-2">
                {t("AI Bot", "المساعد الذكي")}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto mb-2 pr-1" style={{ maxHeight: 220 }}>
              {history.length === 0 && (
                <div className="text-gray-400 text-center mt-8">
                  {t("Start chatting", "ابدأ المحادثة")}
                </div>
              )}
              {history.map((msg, i) => (
                <div key={i} className={`my-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-3 py-2 rounded-xl max-w-[80%] text-sm ${msg.from === "user" ? "bg-blue-100 text-blue-900" : "bg-blue-600 text-white"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            {loading && <div className="relative w-20 h-20"><Image src="/animation/Ripple-loading-animation.gif" alt="loading..." fill sizes="80px" unoptimized /></div>}
            <div className="flex gap-2 mt-2">
              <input
                className="flex-1 border border-blue-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder={t("Type your message...", "اكتب رسالتك...")}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                disabled={loading}
              />
              <button
                className="bg-blue-600 text-white px-1 py-2 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-50"
                onClick={handleSend}
                disabled={loading || !input.trim()}
              >
                {loading ? "..." : t("Send", "إرسال")}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
