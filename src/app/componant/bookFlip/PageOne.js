"use client";

export default function PageOne({ content, isRTL }) {
  return (
    <div
      className="text-[4px] rounded-3xl bg-[#23241060] whitespace-break-spaces"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h3 className="text-xl font-bold mb-2 mr-6 pl-3 text-[24px]  text-[#e69999]">
        {content?.SiteDefinition?.Title}
      </h3>
      <p className="text-[14px] mr-6 pl-5">{content?.SiteDefinition?.Description}</p>
      {content.id !== "div6" && (
        <h3 className="text-xl font-bold mr-6 mt-2 pl-3 mb-0 text-[24px] text-[#e69999]">
          {content?.ImportantPoints?.Title}
        </h3>
      )}
      {content.id === "div3" && (
        <ul className="list-disc mr-6 ml-6 text-[13px] font-sm">
          <li>{content?.ImportantPoints?.AttendanceManagement}</li>
          <li>{content?.ImportantPoints?.AttendanceReports}</li>
          <li>{content?.ImportantPoints?.StudentPromotion}</li>
        </ul>
      )}
      {content.id === "div4" && (
        <ul className="list-disc mr-6 ml-6 text-[13px] font-sm">
          <li>{content?.ImportantPoints?.DynamicProductManagement}</li>
          <li>{content?.ImportantPoints?.OrderTracking}</li>
        </ul>
      )}
      {(content.id === "div1" || content.id === "div2") && (
        <ul className="list-disc mr-6 ml-6 text-[10px]">
          <li>{content?.ImportantPoints?.ControlPanel}</li>
          <li>{content?.ImportantPoints?.ProductManagement}</li>
          {content.id === "div1" && <li>{content?.ImportantPoints?.OrderManagement}</li>}
        </ul>
      )}
      {content.id === "div5" && (
        <ul className="list-disc mr-6 ml-6 text-[10px]">
          <li className="mt-[20px] text-[14px]">{content?.ImportantPoints?.ModernUI}</li>
          <li className="text-[14px]">{content?.ImportantPoints?.ResponsiveDesign}</li>
          <li className="text-[14px]">{content?.ImportantPoints?.GalleryCarousel}</li>
        </ul>
      )}
      {content.id === "div7" && (
        <ul className="list-disc mr-6 ml-6 text-[10px]">
          <li className="text-[14px]">{content?.ImportantPoints?.MultiChannelAuth}</li>
          <li className="text-[14px]">{content?.ImportantPoints?.CoreModules}</li>
          {/* <li className="text-[14px]">{content?.ImportantPoints?.AdvancedReviews}</li> */}
          {/* <li className="text-[14px]">{content?.ImportantPoints?.Notifications}</li> */}
          {/* <li className="text-[14px]">{content?.ImportantPoints?.ImageUploads}</li> */}
        </ul>
      )}
    </div>
  );
}
