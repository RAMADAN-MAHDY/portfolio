"use client";
import { useEffect, useState } from "react";
import style from "./style/aboutMyselfStyle.module.css";
import {useTranslations} from 'next-intl';
import { usePathname  } from 'next/navigation';

const AnimatedText = ({ letters, style }) => (
    <>
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${index * 0.1}s`,
            ...style(letter, index),
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </>
  );
  
  const AboutMyself = () => {
    const t = useTranslations();
    const text = t('AboutMyself.Text');
  
    // تقطيع النص بناءً على النقطة
    const texts = text.split("/");
    const pathname = usePathname();
    const isRTL = pathname.slice(1, 3) !== 'en';
  
    const [screenSize, setscreenSize] = useState({
      width: 0,
      height: 0,
    });
  
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
  
    const isSmallScreen = screenSize.width < 570;
  
    // معالجة النصوص بناءً على اللغة
    // language-based text processing
    const processedTexts = isRTL
      ? texts 
      : texts.map((txt) => txt.split("")); 
  
    return (
      <div
        className={style["char-by-char"]}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <AnimatedText
          letters={isRTL ? [processedTexts[0]] : processedTexts[0]}
          style={(letter, index) => ({
            color: index >= 13 && index < 20 ? "#D4AC0D" : "inherit",
            fontSize: index >= 13 && index < 20 ? "1.5em" : "inherit",
            lineHeight: index ? "1.79em" : "inherit",
          })}
        />
        <br />
        {isSmallScreen && (
          <AnimatedText
            letters={isRTL ? [processedTexts[1]] : processedTexts[1]}
            style={(letter, index) => ({
              color: index >= 3 && index < 16 ? "#D4AC0D" : "inherit",
              fontSize: index >= 3 && index < 16 ? "1.5em" : "inherit",
            })}
          />
        )}
        <br />
        {isSmallScreen && (
          <AnimatedText
            letters={isRTL ? [processedTexts[2]] : processedTexts[2]}
            style={(letter, index) => ({
              color: index >= 15 && index < 19 ? "#D4AC0D" : "inherit",
              fontSize: index >= 15 && index < 19 ? "2em" : "inherit",
            })}
          />
        )}
        {!isSmallScreen && (
          <AnimatedText
            letters={isRTL ? [processedTexts[3]] : processedTexts[3]}
            style={(letter, index) => ({
              color:
                (index >= 0 && index < 16) || (index >= 31 && index < 35)
                  ? "#D4AC0D"
                  : "inherit",
              fontSize:
                (index >= 0 && index < 16) || (index >= 31 && index < 35)
                  ? "1em"
                  : "inherit",
            })}
          />
        )}
      </div>
    );
  };
  
  export default AboutMyself;
  