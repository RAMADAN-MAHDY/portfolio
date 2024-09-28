"use client";
import { useEffect, useState } from "react";
import style from "./style/aboutMyselfStyle.module.css";

const AboutMyself = () => {
  const text = "My name is Ramadan, and I am a web developer.";

  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const textArray = text.split("");
    setLetters(textArray);
  }, []);

  return (
    <div className={style['char-by-char']}>
      {letters.map((letter, index) => {
        const isRamadan = index >= 11 && index < 18; // كلمة "Ramadan"
        const isDeveloper = index >= 35 && index < 44; // كلمة "developer"

        return (
          <span
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`,
              color: isRamadan || isDeveloper ? '#D4AC0D' : 'inherit',
              fontSize: isRamadan ? '1.5em' : 'inherit',
              lineHeight: isRamadan ? '1.79em' : 'inherit',
            //   display: isDeveloper ? 'inline-block' : 'inline', 
            //   writingMode: isDeveloper ? 'vertical-rl' : 'inherit', 
            //   marginLeft: isDeveloper ? '10px' : 'inherit',
              transform: isDeveloper ? 'rotate(280deg)' : 'none' 
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
          
        
        );
      })}
<br></br>
<span className="absulote">

</span>
    </div>
  );
};

export default AboutMyself;
