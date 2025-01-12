"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const BookFlip = () => {
    
    const [isClient, setIsClient] = useState(false);


    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);

    useEffect(() => {       
            if (isClient) {
                AOS.init({
                    duration: 3000,
                });
            }
        }, [isClient]);






  const totalPages = 4;

  // الحالات الخاصة بكل div
  const [pages, setPages] = useState({
    div1: 0,
    div2: 0,
    div3: 0,
  });

  const flipNext = (divKey) => {
    setPages((prevPages) => {
      const newPage = prevPages[divKey] < totalPages ? prevPages[divKey] + 1 : 0;
      return { ...prevPages, [divKey]: newPage };
    });
  };
  const flipPrev = (divKey) => {
    setPages((prevPages) => {
      const newPage = prevPages[divKey] > 0 ? prevPages[divKey] - 1 : 0;
      return { ...prevPages, [divKey]: newPage };
    });
  };
  const getPageBackground = (index) => {
    switch (index) {
      case 0:
        return "url('https://i.postimg.cc/FzWZxWJy/Screenshot-2024-11-01-210001.png')";
      default:
        return "bg-[#222322]";
    }
  };

  const renderFlipBook = (divKey) => (
    <div className="perspective relative w-[90%] sm:w-[40%] h-[450px] preserve-3d z-10 mb-[60px] sm:ml-[10%]">
      {[7, 9, 3, 4].map((page, index) => (
        <div
          key={index}
          className={`page bg-[#e4ebe4] border border-gray-800 flex items-center justify-center text-2xl font-bold w-[100%] h-[100%]  ${
            pages[divKey] > index && `${index === 1 && pages[divKey] < 4 && "rotate-y-101"} rotate-y-100`
          }`}
          style={{ zIndex: totalPages - index }}
        >
          <div
            className="w-[100%] h-[100%] absolute bg-cover bg-center"
            style={{ backgroundImage: getPageBackground(index) }}
          ></div>
          <div className={`absolute ${pages[divKey] > index ? "hidden-text" : "visible-text"}`}>
            {page}
          </div>
        </div>
      ))}
      <button
        onClick={() => flipNext(divKey)}
        className="fixed bottom-[-40px] right-[10%] mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition z-40"
      >
        Flip next
      </button>
      <button
        onClick={() => flipPrev(divKey)}
        className="fixed bottom-[-40px] left-[10%] mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition z-40"
      >
        Flip prev
      </button>
    </div>
  );

  return (
    <>
      <style>
        {`
          .perspective {
            perspective: 2000px;
          }
          .page {
            position: absolute;
            width: 100%;
            height: 100%;
            transition: transform 1s ease;
            transform-origin: left;
          }
          .hidden-text {
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          .visible-text {
            opacity: 1;
          }
        `}
      </style>
      {isClient &&(
  <section data-aos="fade-top" className=' w-[100%] h-full py-10 bg-gradient-to-r from-[#0c3541] to-[#0e2ee6] text-white mt-[110px]'>
  <div className="container">
    <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10 sm:ml-[50%] ml-[25%] w-[150px]">My Projects</h2>
    <div className="container flex-wrap flex justify-around w-[100%]">
      {/* Flip books */}
      {renderFlipBook("div1")}
      {renderFlipBook("div2")}
      {renderFlipBook("div3")}
    </div>
  </div>
  </section>
      )}
    
    </>
  );
};

export default BookFlip;
