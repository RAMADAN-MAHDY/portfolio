"use client";
import { AlertTriangle } from "lucide-react";

export default function PageFour({
    content,
    isRTL,
    index,
    getProjectsImage,
    getProjectsLinkes,
}) {
    if (content.id === "div3") {
        return (
            <div className="text-[4px] whitespace-break-spaces" dir={isRTL ? "rtl" : "ltr"}>
                <h3 className="text-xl font-bold p-5 mb-2 text-[24px]">
                    * {content?.ProjectDetails?.Title}
                </h3>
                <ul className="list-disc p-6 text-[13px]">
                    <li>{content?.ProjectDetails?.Technologies?.Frontend?._1}</li>
                    <li>{content?.ProjectDetails?.Technologies?.Frontend?._2}</li>
                    <li>{content?.ProjectDetails?.Technologies?.Frontend?._3}</li>
                    <li>{content?.ProjectDetails?.Technologies?.Backend?._1}</li>
                    <li>{content?.ProjectDetails?.Technologies?.Backend?._2}</li>
                    <li>{content?.ProjectDetails?.Technologies?.Backend?._3}</li>
                    <li>{content?.ProjectDetails?.Technologies?.Backend?._5}</li>
                </ul>
            </div>
        );
    }

    return (
        <>
            <div dir={isRTL ? "rtl" : "ltr"}>
                {content.id === "div5" && (
                    <div className="grid grid-cols-3 gap-2 w-[100%] h-[100%] overflow-hidden">
                        <h1 className="col-span-3 text-center pt-4">
                            {content?.ProjectDetails?.ProjectImages?.Title1}
                        </h1>
                        <img
                            className="w-full h-48 object-cover rounded-md col-span-3"
                            src={getProjectsImage(index)[0]}
                            alt="Nature"
                        />
                        <div className="w-full h-full text-[#ffffff] text-center mt-2 text-[12px] col-span-3">
                            <a
                                href={getProjectsLinkes(index)[2]}
                                target="-plank"
                                className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
                            >
                                {content?.ProjectDetails?.ProjectImages?.Link1}
                            </a>
                            <p className="text-sm font-semibold text-[#f0ff1b] p-3 flex items-center justify-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-[#f0ff1b]" />
                                الكود غير متوفر احتراما لرغبة العميل
                            </p>
                        </div>
                    </div>
                )}
            </div>
            {content.id === "div4" && (
                <div className="text-[4px] whitespace-break-spaces" dir={isRTL ? "rtl" : "ltr"}>
                    <h3 className="text-xl font-bold p-5 mb-2 text-[24px] text-[#e69999]">
                        * {content?.ProjectDetails?.Title}
                    </h3>
                    <ul className="list-disc p-6 text-[13px]">
                        <li>{content?.ProjectDetails?.Technologies?.Frontend?._1}</li>
                        <li>{content?.ProjectDetails?.Technologies?.Frontend?._2}</li>
                        <li>{content?.ProjectDetails?.Technologies?.Frontend?._3}</li>
                        <li>{content?.ProjectDetails?.Technologies?.Backend?._1}</li>
                        <li>{content?.ProjectDetails?.Technologies?.Backend?._2}</li>
                        <li>{content?.ProjectDetails?.Technologies?.Backend?._3}</li>
                        <li>{content?.ProjectDetails?.Technologies?.Backend?._5}</li>
                    </ul>
                </div>
            )}
            {content.id !== "div4" && content.id !== "div5" && (
                <section
                    className="grid grid-cols-3 gap-2 w-[100%] h-[100%] overflow-hidden"
                    // data-aos="fade-top"
                    dir={isRTL ? "rtl" : "ltr"}
                >
                    <h1 className="col-span-3 text-center pt-4">
                        {content.id === "div1"
                            ? content?.ProjectDetails?.ProjectImages?.Title1
                            : isRTL
                                ? "فديو سريع عن الموقع "
                                : "Quick video about the site"}
                    </h1>
                    {content.id === "div1" && (
                        <>
                            <div className="relative w-full col-span-2 h-[100%] mt-0 drop-shadow-[0_35px_35px_rgba(24,0,255,0.25)]">
                                <img className="w-full h-full" src={getProjectsImage(index)[0]} alt="Nature" />
                            </div>
                            <div className="relative w-full h-full">
                                <img
                                    src={getProjectsImage(index)[1]}
                                    alt="City Skyline"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative w-full h-full col-span-3">
                                <img
                                    src={getProjectsImage(index)[2]}
                                    alt="Forest Mountain"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </>
                    )}
                    {content.id === "div2" && (
                        <div className="relative w-full h-full col-span-3 row-span-3">
                            <script src="https://fast.wistia.com/player.js" async></script>
                            <script
                                src="https://fast.wistia.com/embed/59je9q3snh.js"
                                async
                                type="module"
                            ></script>
                            <style>
                                {`
                  wistia-player[media-id='59je9q3snh']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/59je9q3snh/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                `}
                            </style>
                            <wistia-player media-id="59je9q3snh" aspect="1.7777777777777777"></wistia-player>
                        </div>
                    )}
                    {content.id === "div1" && (
                        <div className="w-full h-full text-[#ffffff] text-center mt-2 text-[12px] col-span-3">
                            <a
                                href={getProjectsLinkes(index)[2]}
                                target="-plank"
                                className="bg-[#26458a] p-3 mx-3 rounded-lg  hover:bg-[#2669f8] rounded-tl-[4px] rounded-tr-[50px] rounded-bl-[60px] rounded-br-[9px]"
                            >
                                {content?.ProjectDetails?.ProjectImages?.Link1}
                            </a>
                            <a
                                href={getProjectsLinkes(index)[0]}
                                target="-plank"
                                className="bg-[#26458a] p-3 rounded-tl-[50px] rounded-tr-[4px] rounded-bl-[9px] rounded-br-[60px]  hover:bg-[#2669f8]"
                            >
                                {content?.ProjectDetails?.ProjectImages?.Link3}
                            </a>
                        </div>
                    )}
                </section>
            )}
            {content.id === "div7" && (
                <div className="grid grid-cols-3 gap-2 w-[100%]">
                    <div className="relative w-[350px] h-full col-span-3 row-span-3">
                        <script src="https://fast.wistia.com/player.js" async></script>
                        <script src="https://fast.wistia.com/embed/va62jyxsll.js" async type="module"></script>
                        <style>
                            {`
                  wistia-player[media-id='2oy5vdkezy']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/va62jyxsll/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top:55.94%;
                  }
                `}
                        </style>
                        <wistia-player media-id="va62jyxsll" aspect="1.7877094972067038"></wistia-player>
                    </div>

                    <div className="w-full col-span-3 text-white text-center mt-4 text-[12px] flex flex-col items-center gap-2">

                        {/* Secondary Links */}
                        <div className="flex flex-wrap justify-center gap-2">
                            <a
                                href={getProjectsLinkes(index)[2]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
        bg-[#26458a]
        px-4 py-2
        rounded-lg
        hover:bg-[#2669f8]
        transition
        min-w-[90px]
      "
                            >
                                {content?.ProjectDetails?.ProjectImages?.Link1}
                            </a>

                            <a
                                href={getProjectsLinkes(index)[1]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
        bg-[#26458a]
        px-4 py-2
        rounded-lg
        hover:bg-[#2669f8]
        transition
        min-w-[90px]
      "
                            >
                                {content?.ProjectDetails?.ProjectImages?.Link2}
                            </a>

                            <a
                                href={getProjectsLinkes(index)[0]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
        bg-[#26458a]
        px-4 py-2
        rounded-lg
        hover:bg-[#2669f8]
        transition
        min-w-[90px]
      "
                            >
                                {content?.ProjectDetails?.ProjectImages?.Link3}
                            </a>
                        </div>

                        {/* Primary CTA */}
                        <div className="flex items-center justify-between bg-gradient-to-r from-[#005eff] to-[#1e3c72] rounded-xl px-4 py-3 w-[350px] shadow-md">
                            <span className="text-2xl">👨‍💻</span>

                            <a
                                href={getProjectsLinkes(index)[3]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
        bg-white
        text-[#26458a]
        text-sm
        font-bold
        px-5 py-2
        rounded-lg
        hover:bg-[#f0f0f0]
        transition
      "
                            >
                                {content?.ProjectDetails?.ProjectImages?.Link4 || "زيارة البورتفوليو"}
                            </a>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
}
