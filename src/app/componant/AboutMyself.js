"use client";
import { useEffect, useState } from "react";
import style from "./style/aboutMyselfStyle.module.css";
import { useSelector } from "react-redux";

const AnimatedText = ({ letters, style, language }) => (
  <>
    {language === "en" ? (
      letters.map((letter, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${index * 0.1}s`,
            ...style(letter, index),
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))
    ) : (
      <span
        style={{
          animationDelay: `0.1s`,
        }}
      >
        {letters}
      </span>
    )}
  </>
);

const AboutMyself = () => {
  const { translations } = useSelector((state) => state.language);

  // حالة اللغة
  const [getLanguageFromLocal, setGetLanguageFromLocal] = useState(null);

  // حالة حجم الشاشة
  const [screenSize, setscreenSize] = useState({
    width: 0,
    height: 0,
  });

  // استخدام useEffect فقط لتحديث حالة اللغة
  useEffect(() => {
    if (typeof window !== "undefined") {
      const languageFromLocal = localStorage.getItem("language") || "en";
      setGetLanguageFromLocal(languageFromLocal);
      if (!languageFromLocal) {
        localStorage.setItem("language", "en");
      }
    }
  }, []);

  // استخدام useEffect لمراقبة تغييرات حجم الشاشة
  useEffect(() => {
    const updateSize = () => {
      setscreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // تأكد من أن الكود لا يعمل إلا بعد تحميل اللغة
  if (getLanguageFromLocal === null) {
    return null; // يمكنك عرض شاشة تحميل أو رسالة مؤقتة هنا
  }

  const text = translations?.AboutMyself?.Text || "نص غير متوفر";
  const texts = text.split("/");

  // تحديد اتجاه الكتابة
  const isRTL = getLanguageFromLocal !== "en";

  const isSmallScreen = screenSize.width < 570;

  // معالجة النصوص بناءً على اللغة
  const processedTexts = isRTL
    ? texts
    : texts.map((txt) => txt.split(""));

  return (
    <div className={style["char-by-char"]} dir={isRTL ? "rtl" : "ltr"}>
      <AnimatedText
        letters={processedTexts[0]}
        style={(letter, index) => ({
          color: index >= 13 && index < 20 ? "#D4AC0D" : "inherit",
          fontSize: index >= 13 && index < 20 ? "1.5em" : "inherit",
          lineHeight: index ? "1.79em" : "inherit",
        })}
        language={getLanguageFromLocal}
      />
      <br />
      {isSmallScreen && (
        <AnimatedText
          letters={processedTexts[1]}
          style={(letter, index) => ({
            color: index >= 3 && index < 16 ? "#D4AC0D" : "inherit",
            fontSize: index >= 3 && index < 16 ? "1.5em" : "inherit",
          })}
          language={getLanguageFromLocal}
        />
      )}
      <br />
      {isSmallScreen && (
        <AnimatedText
          letters={processedTexts[2]}
          style={(letter, index) => ({
            color: index >= 15 && index < 19 ? "#D4AC0D" : "inherit",
            fontSize: index >= 15 && index < 19 ? "2em" : "inherit",
          })}
          language={getLanguageFromLocal}
        />
      )}
      {!isSmallScreen && (
        <AnimatedText
          letters={processedTexts[3]}
          style={(letter, index) => ({
            color:
              (index >= 0 && index < 16) || (index >= 31 && index < 35)
                ? "#D4AC0D"
                : "inherit",
            fontSize:
              (index >= 0 && index < 16) || (index >= 31 &&  index < 35)
                ? "1em"
                : "inherit",
          })}
          language={getLanguageFromLocal}
        />
      )}
    </div>
  );
};

export default AboutMyself;