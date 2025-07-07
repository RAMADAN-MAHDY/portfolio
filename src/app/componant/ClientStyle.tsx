"use client";

export default function ClientStyle() {
  return (
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
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 16px 4px #60e6ff, 0 0 32px 8px #4c3ca8; }
        50% { box-shadow: 0 0 32px 12px #60e6ff, 0 0 48px 16px #4c3ca8; }
      }
      .animate-glow {
        animation: glow 1.6s ease-in-out infinite alternate;
      }
    `}</style>
  );
}
