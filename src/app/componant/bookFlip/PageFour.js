"use client";
import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

export default function PageFour({
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

    const TechList = ({ title, frontend, backend }) => (
        <div className="space-y-4">
            <h3 className="text-xl font-black text-[#e69999] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#e69999] rounded-full inline-block" />
                {title}
            </h3>
            <div className="grid grid-cols-1 gap-4">
                {frontend && (
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <h4 className="text-sm font-black text-[#e69999]/80 mb-2 uppercase tracking-wider">Frontend</h4>
                        <ul className="space-y-1.5">
                            {Object.values(frontend).map((tech, i) => tech && (
                                <li key={i} className="text-[12px] font-bold text-white/80 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-[#e69999] rounded-full" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {backend && (
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <h4 className="text-sm font-black text-[#e69999]/80 mb-2 uppercase tracking-wider">Backend</h4>
                        <ul className="space-y-1.5">
                            {Object.values(backend).map((tech, i) => tech && (
                                <li key={i} className="text-[12px] font-bold text-white/80 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-[#e69999] rounded-full" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );

    const ImageGallery = ({ title, images, links, showCodeWarning }) => (
        <div className="space-y-4">
            <h4 className="text-center text-[#e69999] font-black text-sm uppercase tracking-widest">
                {title || (isRTL ? "معرض الصور" : "Project Gallery")}
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
                {images[0] && (
                    <div className="col-span-2 rounded-xl overflow-hidden border border-white/10 shadow-lg group relative h-40">
                        <Image
                            className="object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                            src={images[0]}
                            alt="Project main"
                            fill
                            sizes="100%"
                            onClick={() => openImage(images[0])}
                        />
                    </div>
                )}
                {images.slice(1, 3).map((img, i) => img && (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/10 shadow-lg group relative h-24">
                        <Image
                            className="object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                            src={img}
                            alt={`Project ${i}`}
                            fill
                            sizes="100%"
                            onClick={() => openImage(img)}
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-3 mt-4">
                <div className="flex flex-wrap justify-center gap-2">
                    {links?.slice(0, 3).map((link, i) => link && (
                        <a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#26458a] px-4 py-2 rounded-xl text-[11px] font-black text-white hover:bg-[#2669f8] transition-all border border-white/10 shadow-lg active:scale-95"
                        >
                            {content?.ProjectDetails?.ProjectImages?.[`Link${i+1}`] || (isRTL ? "رابط" : "Link")}
                        </a>
                    ))}
                </div>
                
                {showCodeWarning && (
                    <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        <p className="text-[10px] font-black text-yellow-500/90">
                            {isRTL ? "الكود غير متوفر احتراما لرغبة العميل" : "Code private per client request"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full h-full p-6 flex flex-col gap-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#e69999]/30" dir={isRTL ? "rtl" : "ltr"}>
            {(content.id === "div3" || content.id === "div4") && (
                <TechList 
                    title={content?.ProjectDetails?.Title}
                    frontend={content?.ProjectDetails?.Technologies?.Frontend}
                    backend={content?.ProjectDetails?.Technologies?.Backend}
                />
            )}

            {(content.id === "div5" || content.id === "div8" || content.id === "div9") && (
                <ImageGallery 
                    title={content.id === "div8" ? (isRTL ? "عرض تفصيلي للمشروع" : "Project Detailed View") : content?.ProjectDetails?.ProjectImages?.Title1}
                    images={getProjectsImage(index)}
                    links={getProjectsLinkes(index)}
                    showCodeWarning={content.id === "div5"}
                />
            )}

            {content.id === "div1" && (
                <ImageGallery 
                    title={content?.ProjectDetails?.ProjectImages?.Title1}
                    images={getProjectsImage(index)}
                    links={getProjectsLinkes(index)}
                />
            )}

            {content.id === "div2" && (
                <div className="space-y-3 shrink-0">
                    <h4 className="text-center text-[#e69999] font-black text-[11px] uppercase tracking-widest">
                        {isRTL ? "فيديو سريع عن الموقع" : "Quick video about the site"}
                    </h4>
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-video">
                        <script src="https://fast.wistia.com/player.js" async></script>
                        <script src="https://fast.wistia.com/embed/59je9q3snh.js" async type="module"></script>
                        <wistia-player media-id="59je9q3snh" aspect="1.7777777777777777"></wistia-player>
                    </div>
                </div>
            )}

            {content.id === "div7" && (
                <div className="space-y-5 shrink-0">
                     <h4 className="text-center text-[#e69999] font-black text-[11px] uppercase tracking-widest">
                        {isRTL ? "فيديو سريع عن الموقع" : "Quick video about the site"}
                    </h4>
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-video shrink-0">
                        <script src="https://fast.wistia.com/player.js" async></script>
                        <script src="https://fast.wistia.com/embed/va62jyxsll.js" async type="module"></script>
                        <wistia-player media-id="va62jyxsll" aspect="1.7877094972067038"></wistia-player>
                    </div>

                    <div className="space-y-4 shrink-0">
                        <div className="flex flex-wrap justify-center gap-2">
                            {[0].map((i) => getProjectsLinkes(index)[i] && (
                                <a
                                    key={i}
                                    href={getProjectsLinkes(index)[i]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#26458a] px-3 py-1.5 rounded-xl text-[10px] font-black text-white hover:bg-[#2669f8] transition-all border border-white/10"
                                >
                                    {content?.ProjectDetails?.ProjectImages?.[`Link${i+1}`]}
                                </a>
                            ))}
                           
                        </div>

                        <a
                            href={getProjectsLinkes(index)[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-gradient-to-r from-[#005eff] to-[#1e3c72] rounded-2xl px-4 py-2.5 shadow-xl hover:scale-[1.02] transition-transform"
                        >
                            <span className="text-lg">👨‍💻</span>
                            <span className="text-white text-[10px] font-black">
                                {content?.ProjectDetails?.ProjectImages?.Link4 || (isRTL ? "زيارة البورتفوليو" : "Visit Portfolio")}
                            </span>
                            <span className="text-white/50 text-xs">→</span>
                        </a>
                    </div>
                </div>
            )}

            <ImageModal 
                isOpen={!!selectedImage} 
                onClose={closeImage} 
                imageUrl={selectedImage} 
            />
        </div>
    );
}
