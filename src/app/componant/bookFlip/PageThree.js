"use client";

export default function PageThree({ content, isRTL, index, getProjectsLinkes }) {
    return (
        <>
            {(content.id === "div2" || content.id === "div1") && (
                <div className="space-y-4 shrink-0">
                    <div className="space-y-2">
                        <h3 className="text-xl font-black text-[#e69999] leading-tight">
                            {content?.ProjectDetails?.Title}
                        </h3>
                        <div className="w-12 h-1 bg-[#e69999]/30 rounded-full" />
                    </div>

                    <p className="text-[12px] font-bold text-white/90 leading-relaxed text-justify italic">
                        {content.ProjectDetails.Description}
                    </p>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                        <h4 className="text-[13px] font-black text-[#e69999] mb-3 flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#e69999] rounded-full" />
                            {isRTL ? "التقنيات المستخدمة" : "Technologies Used"}
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                content?.ProjectDetails?.Technologies?.[`_${i}`] && (
                                    <li key={i} className="text-[10px] font-bold text-white/70 flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#e69999]/40" />
                                        {content?.ProjectDetails?.Technologies?.[`_${i}`]}
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {content.id === "div3" && (
                <div className="space-y-4 shrink-0">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 shrink-0">
                        <h3 className="text-base font-black text-[#e69999] flex items-center gap-2">
                            <span className="text-lg">✨</span>
                            {content?.ProjectDetails?.PromotionFeatures?.Title}
                        </h3>
                        <p className="text-[12px] font-bold text-white/80 leading-relaxed">
                            {content.ProjectDetails?.PromotionFeatures?.Description}
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 shrink-0">
                        <h3 className="text-base font-black text-[#e69999] flex items-center gap-2">
                            <span className="text-lg">🔄</span>
                            {content?.ProjectDetails?.Integration?.Title}
                        </h3>
                        <p className="text-[12px] font-bold text-white/80 leading-relaxed">
                            {content.ProjectDetails?.Integration?.Description}
                        </p>
                    </div>
                </div>
            )}

            {content.id === "div4" && (
                <div className="space-y-3 shrink-0">
                    {[
                        {
                            title: content?.ProjectDetails?.ProjectGoal?.Title,
                            desc: content?.ProjectDetails?.ProjectGoal?.Description,
                            icon: "🎯"
                        },
                        {
                            title: content?.ProjectDetails?.ReviewFeature?.Title,
                            desc: content?.ProjectDetails?.ReviewFeature?.Description,
                            icon: "⭐"
                        },
                        {
                            title: content?.ProjectDetails?.Integration?.Title,
                            desc: content?.ProjectDetails?.Integration?.Description,
                            icon: "🔌"
                        }
                    ].map((item, idx) => (
                        item.title && (
                            <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                                <h3 className="text-[14px] font-black text-[#e69999] mb-1 flex items-center gap-2">
                                    <span>{item.icon}</span>
                                    {item.title}
                                </h3>
                                <p className="text-[11px] font-bold text-white/70 leading-snug">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    ))}
                </div>
            )}

            {content.id === "div5" && (
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10 shrink-0">
                    <h3 className="text-base font-black text-[#e69999] mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-5 bg-[#e69999] rounded-full" />
                        {isRTL ? "تقنيات إضافية" : "Additional Tech"}
                    </h3>
                    <ul className="space-y-2.5">
                        {[4, 5, 6, 7].map((i) => (
                            content?.ProjectDetails?.Technologies?.[`_${i}`] && (
                                <li key={i} className="text-[13px] font-bold text-white/80 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-sm rotate-45 bg-[#e69999]/60" />
                                    {content?.ProjectDetails?.Technologies?.[`_${i}`]}
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            )}

            {content.id === "div6" && (
                <div className="space-y-4 flex-1">
                    <ul className="grid grid-cols-1 gap-2.5 p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                        {[5, 6, 7].map((i) => (
                            content?.ProjectDetails?.Technologies?.[`_${i}`] && (
                                <li key={i} className="text-[12px] font-bold text-white/80 flex items-center gap-2">
                                    <span className="text-[#e69999]">⚡</span>
                                    {content?.ProjectDetails?.Technologies?.[`_${i}`]}
                                </li>
                            )
                        ))}
                    </ul>

                    <div className="space-y-2 shrink-0">
                        <h4 className="text-center text-[#e69999] font-black text-[11px] uppercase tracking-widest">
                            {content?.ProjectDetails?.ProjectImages?.Title1}
                        </h4>
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <script src="https://fast.wistia.com/player.js" async></script>
                            <script src="https://fast.wistia.com/embed/2oy5vdkezy.js" async type="module"></script>
                            <div className="aspect-video w-full bg-slate-900">
                                <wistia-player media-id="2oy5vdkezy" aspect="1.7877094972067038"></wistia-player>
                            </div>
                            {/* Secondary Links */}
                            <div className="flex flex-wrap justify-center gap-2">
                                <a
                                    href={getProjectsLinkes(index)[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
        
        px-4 py-2
        rounded-lg
        text-xs
        hover:text-[#2669f8]
        transition
        min-w-[90px]
        underline
      "
                                >
                                    {content?.ProjectDetails?.ProjectImages?.Link1}
                                </a>

                                {/* <a
                                    href={getProjectsLinkes(index)[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
         px-4 py-2
        rounded-lg
        text-xs
        hover:text-[#2669f8]
        transition
        min-w-[90px]
        underline
      "
                                >
                                    {content?.ProjectDetails?.ProjectImages?.Link2}
                                </a> */}

                             {/*    <a
                                    href={getProjectsLinkes(index)[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="  px-4 py-2
        rounded-lg
        text-xs
        hover:text-[#2669f8]
        transition
        min-w-[90px]
        underline
      "
                                > 
                                    {content?.ProjectDetails?.ProjectImages?.Link3}
                                </a> */}
                            </div>
                            {/* Primary CTA */}
                            <div className="flex items-center justify-between bg-gradient-to-r from-[#005eff] to-[#1e3c72] rounded-xl px-4 py-3 w-[350px] shadow-md">
                                <span className="text-2xl">👨‍💻</span>

                                <a
                                    href={getProjectsLinkes(index)[1]}
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
            {(content.id === "div7" || content.id === "div9") && (
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
            {content.id === "div8" && (
                <div className="text-[4px] bg-[#23252bcb] py-6 whitespace-break-spaces" dir={isRTL ? "rtl" : "ltr"}>
                    <ul
                        className={`list-disc text-sm space-y-1 ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}
                        dir={isRTL ? "rtl" : "ltr"}
                    >
                       
                    </ul>
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
