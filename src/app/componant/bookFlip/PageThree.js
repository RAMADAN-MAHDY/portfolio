"use client";

export default function PageThree({ content, isRTL, index, getProjectsLinkes }) {
    return (
        <>
            {(content.id === "div2" || content.id === "div1") && (
                <div
                    className="text-[4px] whitespace-break-spaces"
                    // data-aos="fade-top"
                    dir={isRTL ? "rtl" : "ltr"}
                >
                    <h3 className="text-xl font-bold p-5 mb-2 text-[24px]">
                        {content?.ProjectDetails?.Title}
                    </h3>
                    <p className="text-[14px] p-5">{content.ProjectDetails.Description}</p>
                    <ul className="list-disc p-6 text-[13px]">
                        <li>{content?.ProjectDetails?.Technologies?._1}</li>
                        <li>{content?.ProjectDetails?.Technologies?._2}</li>
                        <li>{content?.ProjectDetails?.Technologies?._3}</li>
                        <li>{content?.ProjectDetails?.Technologies?._4}</li>
                        <li>{content?.ProjectDetails?.Technologies?._5}</li>
                    </ul>
                </div>
            )}
            {content.id === "div3" && (
                <div
                    className="text-[4px] font-semibold p-2 whitespace-break-spaces"
                    // data-aos="fade-top"
                    dir={isRTL ? "rtl" : "ltr"}
                >
                    <h3 className="text-xl p-1  text-[24px] text-[#fff]">
                        * {content?.ProjectDetails?.PromotionFeatures?.Title}
                    </h3>
                    <p className="text-[14px] p-1">
                        {content.ProjectDetails?.PromotionFeatures?.Description}
                    </p>
                    <h3 className="text-xl p-1  text-[24px] text-[#fff]">
                        * {content?.ProjectDetails?.Integration?.Title}
                    </h3>
                    <p className="text-[14px] p-1 ">
                        {content.ProjectDetails?.Integration?.Description}
                    </p>
                </div>
            )}
            {content.id === "div4" && (
                <div
                    className="text-[4px] font-semibold p-1  whitespace-break-spaces"
                    // data-aos="fade-top"
                    dir={isRTL ? "rtl" : "ltr"}
                >
                    <h3 className="text-xl p-0   text-[20px] text-[#e69999]">
                        * {content?.ProjectDetails?.ProjectGoal?.Title}
                    </h3>
                    <p className="text-[14px] p-1">
                        * {content?.ProjectDetails?.ProjectGoal?.Description}
                    </p>
                    <h3 className="text-xl p-0   text-[20px] text-[#e69999]">
                        * {content?.ProjectDetails?.ReviewFeature?.Title}
                    </h3>
                    <p className="text-[14px] p-1">
                        * {content?.ProjectDetails?.ReviewFeature?.Description}
                    </p>
                    <h3 className="text-xl p-0   text-[20px] text-[#e69999]">
                        * {content?.ProjectDetails?.Integration?.Title}
                    </h3>
                    <p className="text-[14px] p-1">
                        * {content?.ProjectDetails?.Integration?.Description}
                    </p>
                </div>
            )}
            {content.id === "div5" && (
                <ul className="list-disc p-0 m-[-170px] mt-[-220px] text-[13px]" dir={isRTL ? "rtl" : "ltr"}>
                    <li>{content?.ProjectDetails?.Technologies?._4}</li>
                    <li>{content?.ProjectDetails?.Technologies?._5}</li>
                    <li>{content?.ProjectDetails?.Technologies?._6}</li>
                    <li>{content?.ProjectDetails?.Technologies?._7}</li>
                </ul>
            )}
            {content.id === "div6" && (
                <div className="flex flex-col gap-6">
                    <ul className="list-disc text-[13px]" dir={isRTL ? "rtl" : "ltr"}>
                        <li>{content?.ProjectDetails?.Technologies?._5}</li>
                        <li>{content?.ProjectDetails?.Technologies?._6}</li>
                        <li>{content?.ProjectDetails?.Technologies?._7}</li>
                    </ul>

                    <div className="grid grid-cols-3 gap-2 w-[100%]">
                        <h1 className="col-span-3 text-center pt-0 text-[#e69999]">
                            {content?.ProjectDetails?.ProjectImages?.Title1}
                        </h1>
                        <div className="relative w-[350px] h-full col-span-3 row-span-3">
                            <script src="https://fast.wistia.com/player.js" async></script>
                            <script src="https://fast.wistia.com/embed/2oy5vdkezy.js" async type="module"></script>
                            <style>
                                {`
                  wistia-player[media-id='2oy5vdkezy']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/2oy5vdkezy/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top:55.94%;
                  }
                `}
                            </style>
                            <wistia-player media-id="2oy5vdkezy" aspect="1.7877094972067038"></wistia-player>
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
                </div>
            )}
             {content.id === "div7" && (
            <div className="text-[4px] bg-[#23252bcb] py-6 whitespace-break-spaces" 
            // data-aos="fade-top" 
            dir={isRTL ? "rtl" : "ltr"}>
     <h3 className={`text-2xl font-bold text-[#e69999] ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}>
            {content?.ProjectDetails?.ProjectGoal.Title}
          </h3>
          <p className={`text-sm ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}>
            {content?.ProjectDetails?.ProjectGoal.Description}
          </p>
  <h3 className={`text-2xl font-bold text-[#e69999] mt-2 ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}>
            {content?.ProjectDetails?.Integration.Title}
          </h3>
          <p className={`text-sm ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}>
            {content?.ProjectDetails?.Integration.Description}
          </p>
        </div>
      )}
        </>
    );
}
