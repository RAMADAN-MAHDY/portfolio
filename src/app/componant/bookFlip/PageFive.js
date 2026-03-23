"use client";
import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

export default function PageFive({
  content,
  isRTL,
  index,
  getProjectsImage,
  getProjectsLinkes,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (url) => {
    setSelectedImage(url);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const images = getProjectsImage(index);
  const links = getProjectsLinkes(index);

  return (
    <div className="w-full h-full p-6 flex flex-col gap-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#e69999]/30" dir={isRTL ? "rtl" : "ltr"}>
      <div className="space-y-4 shrink-0">
        <h4 className="text-center text-[#e69999] font-black text-[11px] uppercase tracking-widest">
          {content?.ProjectDetails?.ProjectImages?.Title1 || (isRTL ? "معرض الصور" : "Project Gallery")}
        </h4>
        
        {content.id === "div4" ? (
          <div className="space-y-4 shrink-0">
            {images[0] && (
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group shrink-0 relative h-40">
                <Image
                  className="object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                  src={images[0]}
                  alt="Project view"
                  fill
                  sizes="100%"
                  onClick={() => openImage(images[0])}
                />
              </div>
            )}
            <div className="flex flex-wrap justify-center gap-2 shrink-0">
              {[2, 1, 0].map((i) => links[i] && (
                <a
                  key={i}
                  href={links[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#26458a] px-3 py-1.5 rounded-xl text-[10px] font-black text-white hover:bg-[#2669f8] transition-all border border-white/10 shadow-lg"
                >
                  {content?.ProjectDetails?.ProjectImages?.[`Link${i+1}`]}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-5 shrink-0">
            <div className="grid grid-cols-2 gap-2 shrink-0">
              {images[0] && (
                <div className="col-span-2 rounded-xl overflow-hidden border border-white/10 shadow-lg group relative h-28">
                  <Image
                    className="object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                    src={images[0]}
                    alt="Gallery 1"
                    fill
                    sizes="100%"
                    onClick={() => openImage(images[0])}
                  />
                </div>
              )}
              {[2, 4, 5].map((imgIdx, i) => images[imgIdx] && (
                <div key={i} className={`rounded-xl overflow-hidden border border-white/10 shadow-lg group relative ${i === 2 ? 'col-span-2 h-20' : 'h-16'}`}>
                  <Image
                    className="object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                    src={images[imgIdx]}
                    alt={`Gallery ${imgIdx}`}
                    fill
                    sizes="100%"
                    onClick={() => openImage(images[imgIdx])}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 shrink-0">
              {[2, 1, 0].map((i) => links[i] && (
                <a
                  key={i}
                  href={links[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#26458a] px-3 py-1.5 rounded-xl text-[10px] font-black text-white hover:bg-[#2669f8] transition-all border border-white/10"
                >
                  {content?.ProjectDetails?.ProjectImages?.[`Link${i === 0 ? 1 : i === 1 ? 3 : 2}`]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={closeImage} 
        imageUrl={selectedImage} 
      />
    </div>
  );
}

