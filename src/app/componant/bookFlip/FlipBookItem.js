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
      className="perspective relative w-[394px] h-[550px] preserve-3d z-10 mb-[60px] ml-10 sm:ml-[10%] mr-[10px] sm:mr-[0px]"
    >
      {/* 3D Book Shadow & Base */}
      <div className="absolute inset-0 bg-slate-900/20 dark:bg-black/30 blur-2xl rounded-[2rem] transform translate-y-8 scale-90 -z-10 group-hover:bg-blue-900/30 dark:group-hover:bg-blue-400/20 transition-all duration-500" />
      
      {content.countPage.map((page, pageIndex) => (
        <div
          key={pageIndex}
          className={`page rounded-r-2xl overflow-hidden shadow-2xl ${
            currentPage === 0 ? getPageBackground(index) : "bg-slate-900 dark:bg-slate-800"
          } ${
            currentPage === 4 ? "bg-slate-900/90 dark:bg-slate-800/90" : "bg-slate-950 dark:bg-slate-900"
          } bg-cover bg-center border border-white/10 dark:border-slate-700/50 flex items-center justify-center text-white text-2xl font-bold w-full h-full ${
            currentPage > pageIndex && `${currentPage === 1 && "rotate-y-101"} rotate-y-100`
          }`}
          style={{ 
            zIndex: totalPages - pageIndex,
            boxShadow: currentPage <= pageIndex ? 'inset -10px 0 30px rgba(0,0,0,0.5), 10px 0 20px rgba(0,0,0,0.3)' : 'none'
          }}
        >
          <div className={`w-full h-full p-6 flex flex-col items-center justify-center relative ${currentPage > pageIndex ? "hidden-text" : "visible-text"}`}>
            {/* Book Spine Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 to-transparent z-20" />
            
            {(currentPage === 0 && pageIndex === 0) && (
                <div className="text-center absolute bottom-0 p-8">
                    <p className="text-[15px] bg-white/60 dark:bg-slate-900/60 p-3 rounded-[15px] font-bold text-black/70 dark:text-white/70 uppercase tracking-[0.3em]">
                        {isRTL ? "اضغط علي التالي لرؤية المزيد" : "Click next to see more"}
                    </p>
                </div>
            )}

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

      {/* Navigation Controls */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4 z-50">
        <button
          onClick={() => flipPrev(content.id)}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all shadow-lg ${
            currentPage === 0 
            ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed' 
            : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white'
          }`}
        >
          <span className={isRTL ? "rotate-180" : ""}>←</span>
          {translations?.Projects?.FlipPrev}
        </button>
        
        <button
          onClick={() => flipNext(content.id)}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all shadow-lg ${
            currentPage === totalPages - 1
            ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed' 
            : 'bg-blue-700 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-500'
          }`}
        >
          {translations?.Projects?.FlipNext}
          <span className={isRTL ? "rotate-180" : ""}>→</span>
        </button>
      </div>
    </div>
  );
}
