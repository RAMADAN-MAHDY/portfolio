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

  const flipPage = (divKey) => {
    setPages((prevPages) => {
      const newPage = prevPages[divKey] < totalPages ? prevPages[divKey] + 1 : 0;
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
    <div className="perspective relative w-[90%] sm:w-[40%] sm:h-[600px] preserve-3d z-10 mb-11 sm:ml-[10%]">
      {[7, 9, 3, 4].map((page, index) => (
        <div
          key={index}
          className={`page bg-[#e4ebe4] border border-gray-800 flex items-center justify-center text-2xl font-bold w-[100%] h-[100%] ${
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
        onClick={() => flipPage(divKey)}
        className="fixed bottom-[-40px] right-[30%] mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition z-40"
      >
        Flip Page
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
  <section data-aos="fade-left" className=' w-[50%]'>
  <div>
    <h2 className="text-[#fafafa] text-[24px] p-8 text-center font-bold">My Projects</h2>
    <div className="container flex-wrap flex justify-around h-screen bg-[#0c3541] m-6 w-[190%]">
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
