"use client";
import { useEffect, useState } from "react";
import style from "./style/aboutMyselfStyle.module.css";

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
  const texts = [
    " - Hello I'm Ramadan.",
    " - Web Developer.",
    " - Full Stack (MERN).",
    " - Web Developer , Full Stack (MERN).",
  ];

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

  return (
    <div className={style["char-by-char"]}>
      <AnimatedText
        letters={texts[0].split("")}
        style={(letter, index) => ({
          color: index >= 13 && index < 20 ? "#D4AC0D" : "inherit",
          fontSize: index >= 13 && index < 20 ? "1.5em" : "inherit",
          lineHeight: index ?  '1.79em' : 'inherit',
        })}
      />
      <br />
      {isSmallScreen && (
        <AnimatedText
          letters={texts[1].split("")}
          style={(letter, index) => ({
            color: index >= 3 && index < 16 ? "#D4AC0D" : "inherit",
            fontSize: index >= 3 && index < 16 ? "1.5em" : "inherit",
          })}
        />
      )}
      <br />
      {isSmallScreen && (
        <AnimatedText
          letters={texts[2].split("")}
          style={(letter, index) => ({
            color: index >= 15 && index < 19 ? "#D4AC0D" : "inherit",
            fontSize: index >= 15 && index < 19 ? "2em" : "inherit",
          })}
        />
      )}
      {!isSmallScreen && (
        <AnimatedText
          letters={texts[3].split("")}
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
