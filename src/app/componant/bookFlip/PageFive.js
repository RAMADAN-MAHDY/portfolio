"use client";
import { useState } from "react";
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

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      {content.id === "div4" ? (
        <div className="grid grid-cols-3 gap-2 w-[100%] h-[100%] overflow-hidden">
          <h1 className="col-span-3 text-center pt-4">
            {content?.ProjectDetails?.ProjectImages?.Title1}
          </h1>
          <img
            className="w-full h-48 object-cover rounded-md col-span-3 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
            src={getProjectsImage(index)[0]}
            alt="Nature"
            onClick={() => openImage(getProjectsImage(index)[0])}
          />
          <div className="w-full h-full text-[#ffffff] text-center mt-2 text-[12px] col-span-3">
            <a
              href={getProjectsLinkes(index)[2]}
              target="-plank"
              className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
            >
              {content?.ProjectDetails?.ProjectImages?.Link1}
            </a>
            <a
              href={getProjectsLinkes(index)[1]}
              target="-plank"
              className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
            >
              {content?.ProjectDetails?.ProjectImages?.Link2}
            </a>
            <a
              href={getProjectsLinkes(index)[0]}
              target="-plank"
              className="bg-[#26458a] p-3  hover:bg-[#2669f8]"
            >
              {content?.ProjectDetails?.ProjectImages?.Link3}
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full h-auto overflow-hidden">
            <img
              className="w-full h-48 object-cover rounded-md col-span-3 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
              src={getProjectsImage(index)[0]}
              alt="Nature"
              onClick={() => openImage(getProjectsImage(index)[0])}
            />
            <img
              className="w-full h-48 object-cover rounded-md cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
              src={getProjectsImage(index)[2]}
              alt="Nature"
              onClick={() => openImage(getProjectsImage(index)[2])}
            />
            <img
              className="w-full h-48 object-cover rounded-md cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
              src={getProjectsImage(index)[4]}
              alt="Nature"
              onClick={() => openImage(getProjectsImage(index)[4])}
            />
            <img
              className="w-full h-48 object-cover rounded-md cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
              src={getProjectsImage(index)[5]}
              alt="Nature"
              onClick={() => openImage(getProjectsImage(index)[5])}
            />
          </div>
          <div className="w-full h-full text-[#ffffff] text-center mt-2 text-[12px] col-span-3" dir="ltr">
            <a
              href={getProjectsLinkes(index)[2]}
              target="-plank"
              className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
            >
              {content?.ProjectDetails?.ProjectImages?.Link1}
            </a>
            <a
              href={getProjectsLinkes(index)[1]}
              target="-plank"
              className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
            >
              {content?.ProjectDetails?.ProjectImages?.Link3}
            </a>
            <a
              href={getProjectsLinkes(index)[0]}
              target="-plank"
              className="bg-[#26458a] p-3  hover:bg-[#2669f8]"
            >
              {content?.ProjectDetails?.ProjectImages?.Link2}
            </a>
          </div>
        </>
      )}
      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={closeImage} 
        imageUrl={selectedImage} 
      />
    </div>
  );
}

