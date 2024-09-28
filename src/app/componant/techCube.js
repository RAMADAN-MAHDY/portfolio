"use client"
import { useState, useEffect } from 'react';

const techs = [
  { name: 'HTML', color: 'bg-red-500' },
  { name: 'CSS', color: 'bg-blue-500' },
  { name: 'JavaScript', color: 'bg-yellow-500' },
  { name: 'Tailwind CSS', color: 'bg-teal-500' },
  { name: 'Next.js', color: 'bg-gray-700' },
  { name: 'Express.js', color: 'bg-green-500' },
  { name: 'MongoDB', color: 'bg-green-800' },
  { name: 'MERN Stack', color: 'bg-purple-500' }
];


const TechCube = () => {




    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Function to update scroll position
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    console.log(scrollY);


  return (
    <div className={`overflow-hidden h-[100%] sm:top-[-220px] top-[-200px]  left-[-25%] lg:left-[-10%]  flex items-center justify-center ${scrollY >= 427 ?    'hidden'  : 'fixed' } w-[130%] md:w-[100%]`}>
      <div className="relative w-64 h-64 z-0">
        {techs.map((tech, index) => {
          const angle = index * (-180 / techs.length); // الزاوية لكل عنصر
          const x = 50 + 90 * Math.cos((angle * Math.PI) / 180); // حساب الموضع الأفقي باستخدام الجيب التمام
          const y = 50 + 100 * Math.sin((angle * Math.PI) / 180); // حساب الموضع العمودي باستخدام الجيب

          return (
            <div
              key={index}
              className={`absolute text-white px-1 py-1 rounded shadow-md text-center text-sm font-semibold w-20 h-10 flex items-center justify-center animate-float ${tech.color}`}
              style={{
                left: `${x}%`, // وضع العنصر بشكل نسبي أفقيًا
                top: `${y}%`,  // وضع العنصر بشكل نسبي عموديًا
                transform: `translate(-50%, -50%)` // لضبط مركز العنصر في موقعه
              }}
            >
              {tech.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCube;
