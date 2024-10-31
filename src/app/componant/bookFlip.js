import React, { useState } from "react";

const BookFlip = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;
console.log(currentPage)
  const flipPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      resetBook();
    }
  };

  const resetBook = () => {
    setCurrentPage(0);
  };

  // حدد خلفيات مختلفة لكل صفحة
  const getPageBackground = (index) => {
    switch (index) {
      case 0: 
        return "url('https://img.freepik.com/fotos-premium/patron-hoja-sobre-fondo-blanco-estilo-acuarela-generado-ai-ilustracion-postal-diseno-o-impresion-ia-generativa_185452-3040.jpg')";
      case 1:
        return "url('https://www.example.com/page2.jpg')";
      case 2:
        return "url('https://www.example.com/page3.jpg')";
      case 3:
        return "url('https://www.example.com/page4.jpg')";
      default:
        return "bg-[#222322]";
    }
  };

  return (
    <div>
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
      <div className="flex flex-col items-center justify-center h-screen bg-[#0c3541] w-[100vw] sm:mx-6 my-2 ml-[77%]">
        <hr className="border-solid border-indigo-700 border-[2px] w-[100%]"></hr>
<h2 className="text-[#fafafa] text-[24px] m-3  font-bold "> my projects</h2>

        <div className=" perspective relative w-[500px] h-[700px] preserve-3d">
          {[7, 9, 3, 4].map((page , index) => 
            <div
              key={index}
              className={`page bg-[#e4ebe4] border border-gray-800 flex items-center justify-center text-2xl font-bold w-[100%] h-[100%] ${currentPage > index && `${index === 1 && currentPage < 4 &&"rotate-y-101"} rotate-y-100`}`}
              style={{ zIndex: totalPages - index }}
            >
              {/* الخلفية الخاصة بكل صفحة */}
              <div
                className="w-[100%] h-[100%] absolute bg-cover bg-center"
                style={{ backgroundImage: getPageBackground(index) }}
              ></div>

              {/* النص هو اللي يختفي */}
              <div className={`absolute ${currentPage > index ? "hidden-text" : "visible-text"}`}>
                {page}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={flipPage}
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Flip Page
        </button>
      </div>
    </div>
  );
};

export default BookFlip;
