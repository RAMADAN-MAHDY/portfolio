"use client";

export default function PageOne({ content, isRTL }) {
  return (
    <div
      className="w-full h-full p-6 flex flex-col gap-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#e69999]/30"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="space-y-3 shrink-0">
        <h3 className="text-xl font-black text-[#e69999] leading-tight tracking-tight drop-shadow-sm">
          {content?.SiteDefinition?.Title}
        </h3>
        <div className="w-12 h-1 bg-[#e69999]/30 rounded-full" />
        <p className="text-[13px] font-bold text-white/90 leading-relaxed text-justify">
          {content?.SiteDefinition?.Description}
        </p>
      </div>

      {content.id !== "div6" && (
        <div className="space-y-3 flex-1">
          <h3 className="text-lg font-black text-[#e69999] flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-5 bg-[#e69999] rounded-full inline-block" />
            {content?.ImportantPoints?.Title}
          </h3>
          
          <ul className={`space-y-2.5 ${isRTL ? 'pr-4' : 'pl-4'}`}>
            {content.id === "div3" && (
              <>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.AttendanceManagement}</li>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.AttendanceReports}</li>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.StudentPromotion}</li>
              </>
            )}
            {content.id === "div4" && (
              <>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.DynamicProductManagement}</li>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.OrderTracking}</li>
              </>
            )}
            {(content.id === "div1" || content.id === "div2") && (
              <>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ControlPanel}</li>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ProductManagement}</li>
                {content.id === "div1" && <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.OrderManagement}</li>}
              </>
            )}
            {content.id === "div5" && (
              <>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ModernUI}</li>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ResponsiveDesign}</li>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.GalleryCarousel}</li>
              </>
            )}
            {(content.id === "div7" || content.id === "div9") && (
              <>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.MultiChannelAuth}</li>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.CoreModules}</li>
                <li className="text-[12px] text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.AdvancedReviews}</li>
              </>
            )}
            {content.id === "div8" && (
              <>
                <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Dashboard}</li>
          <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.SalesPurchases}</li>
          <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Subscriptions}</li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
