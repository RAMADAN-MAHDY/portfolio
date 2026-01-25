"use client";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";

export default function FlipBookItem({
  content,
  index,
  isRTL,
  pages,
  totalPages,
  flipNext,
  flipPrev,
  translations,
  getPageBackground,
  getProjectsImage,
  getProjectsLinkes,
}) {
  const currentPage = pages[content.id];
  return (
    <div
      className="perspective relative w-[394px] sm:w-[394px] h-[500px] preserve-3d z-10 mb-[60px] ml-10 sm:ml-[10%] mr-[10px] sm:mr-[0px]"
    >
      {content.countPage.map((page, pageIndex) => (
        <div
          key={pageIndex}
          className={`page ${
            currentPage === 0 ? getPageBackground(index) : "bg-[url('https://tse3.mm.bing.net/th/id/OIP.eeKEfzNXtn2xW_ZgmjkP7QHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')]"
          } ${
            currentPage === 4 ? "bg-[rgba(0,0,0,0.57)]" : "bg-[#000000]"
          } bg-cover bg-center border border-gray-800 flex items-center justify-center text-[#fff] text-2xl font-bold w-[100%] h-[100%]  ${
            currentPage > pageIndex && `${currentPage === 1 && "rotate-y-101"} rotate-y-100`
          }`}
          style={{ zIndex: totalPages - currentPage }}
        >
          <div className={`absolute ${currentPage > pageIndex ? "hidden-text" : "visible-text"}`}>
            {(currentPage === 1) && <PageOne content={content} isRTL={isRTL} />}
            {currentPage === 2 && <PageTwo content={content} isRTL={isRTL} />}
            {currentPage === 3 && (
              <PageThree
                content={content}
                isRTL={isRTL}
                index={index}
                getProjectsLinkes={getProjectsLinkes}
              />
            )}
            {currentPage === 4 && (
              <PageFour
                content={content}
                isRTL={isRTL}
                index={index}
                getProjectsImage={getProjectsImage}
                getProjectsLinkes={getProjectsLinkes}
              />
            )}
            {currentPage === 5 && (
              <PageFive
                content={content}
                isRTL={isRTL}
                index={index}
                getProjectsImage={getProjectsImage}
                getProjectsLinkes={getProjectsLinkes}
              />
            )}
          </div>
        </div>
      ))}
      <button
        onClick={() => flipNext(content.id)}
        className="fixed bottom-[-40px] right-[10%] mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition z-40"
      >
        {translations?.Projects?.FlipNext}
      </button>
      <button
        onClick={() => flipPrev(content.id)}
        className="fixed bottom-[-40px] left-[10%] mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition z-40"
      >
        {translations?.Projects?.FlipPrev}
      </button>
    </div>
  );
}
