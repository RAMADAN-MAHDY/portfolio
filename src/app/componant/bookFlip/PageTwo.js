"use client";

export default function PageTwo({ content, isRTL }) {
  return (
    <>
      {(content.id === "div2" || content.id === "div1" || content.id === "div3") && (
        <ul className="list-disc mr-3 ml-6 mt-[-200px] text-[10px]" dir={isRTL ? "rtl" : "ltr"}>
          {content.id === "div2" && <li>{content?.ImportantPoints?.OrderManagement}</li>}
          {content.id === "div1" && (
            <ul dir={isRTL ? "rtl" : "ltr"}>
              <li>{content?.ImportantPoints?.ShoppingCart}</li>
              <li>{content?.ImportantPoints?.Support}</li>
              <li>{content?.ImportantPoints?.OrderForm}</li>
              <li>{content?.ImportantPoints?.DetailsPage}</li>
            </ul>
          )}
          {content.id === "div3" && (
            <>
              <ul className="list-disc mr-3 ml-6 mt-[-200px] text-[10px]" dir={isRTL ? "rtl" : "ltr"}>
                <li>{content?.ImportantPoints?.StudentPromotion}</li>
                <li>{content?.ImportantPoints?.AdminPanel}</li>
                <li>{content?.ImportantPoints?.SecureAuthentication}</li>
                <li>{content?.ImportantPoints?.ResponsiveDesign}</li>
              </ul>
              <div
                className="text-[4px] font-semibold p-2 whitespace-break-spaces mb-[-180px] mt-9"
                // data-aos="fade-top"
                dir={isRTL ? "rtl" : "ltr"}
              >
                <h3 className="text-xl  font-bold p-1 mb-2 text-[24px]">
                  * {content?.ProjectDetails?.ProjectGoal?.Title}
                </h3>
                <p className="text-[14px] font-sm p-1">{content.ProjectDetails?.ProjectGoal?.Description}</p>
              </div>
            </>
          )}
        </ul>
      )}
      {content.id === "div4" && (
        <ul
          className={`list-disc ${isRTL ? "mr-5 ml-1" : "mr-1 ml-5"} mr-5 ml-1 mt-0 text-[14px]`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <li>{content?.ImportantPoints?.ReviewSystem}</li>
          <li>{content?.ImportantPoints?.SecureAuthentication}</li>
          <li>{content?.ImportantPoints?.CentralizedAPISettings}</li>
          <li>{content?.ImportantPoints?.ResponsiveDesign}</li>
          <li>{content?.ImportantPoints?.CodeSeparation}</li>
        </ul>
      )}
      {content.id === "div5" && (
        <>
          <ul
            className={`list-disc ${isRTL ? "mr-5 ml-1" : "mr-1 ml-5"} mr-5 ml-1 mt-0 text-[14px]`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <li>{content?.ImportantPoints?.ChatBot}</li>
            <li>{content?.ImportantPoints?.Security}</li>
            <li>{content?.ImportantPoints?.SessionManagement}</li>
            <li>{content?.ImportantPoints?.Analytics}</li>
            <li>{content?.ImportantPoints?.ContentUs}</li>
          </ul>
          <div className="text-[4px] whitespace-break-spaces" 
        //   data-aos="fade-top"
           dir={isRTL ? "rtl" : "ltr"}>
            <h3 className="text-xl font-bold p-5 mb-3 text-[24px] text-[#e69999]">{content?.ProjectDetails?.Title}</h3>
            <ul className="list-disc p-6 pt-0 text-[13px]">
              <li>{content?.ProjectDetails?.Technologies?._1}</li>
              <li>{content?.ProjectDetails?.Technologies?._2}</li>
              <li>{content?.ProjectDetails?.Technologies?._3}</li>
            </ul>
          </div>
        </>
      )}
      {content.id === "div6" && (
        <div className="p-4" 
        // data-aos="fade-top"
        >
          <h3 className={`text-2xl font-bold text-[#e69999] mb-2 ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}>
            {content?.ImportantPoints?.Title}
          </h3>
          <ul
            className={`list-disc text-sm space-y-1 ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <li>{content?.ImportantPoints?.Dashboard}</li>
            <li>{content?.ImportantPoints?.AIChat}</li>
            <li>{content?.ImportantPoints?.Authentication}</li>
            <li>{content?.ImportantPoints?.FileUpload}</li>
            <li>{content?.ImportantPoints?.Security}</li>
            <li>{content?.ImportantPoints?.TokenManagement}</li>
          </ul>
          <h3 className={`text-2xl font-bold text-[#e69999] mb-2 ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}>
            {content?.ProjectDetails?.Title}
          </h3>
          <ul
            className={`list-disc text-sm space-y-1 ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <li>{content?.ProjectDetails?.Technologies?._1}</li>
            <li>{content?.ProjectDetails?.Technologies?._2}</li>
            <li>{content?.ProjectDetails?.Technologies?._3}</li>
            <li>{content?.ProjectDetails?.Technologies?._4}</li>
          </ul>
        </div>
      )}
         {content.id === "div7" && (
            <div className="text-[4px] whitespace-break-spaces" 
            // data-aos="fade-top" 
            dir={isRTL ? "rtl" : "ltr"}>
        <ul className="list-disc mr-6 ml-6 text-[10px]">
          {/* <li className="text-[14px]">{content?.ImportantPoints?.MultiChannelAuth}</li> */}
          {/* <li className="text-[14px]">{content?.ImportantPoints?.CoreModules}</li> */}
          <li className="text-[14px]">{content?.ImportantPoints?.AdvancedReviews}</li>
          <li className="text-[14px]">{content?.ImportantPoints?.Notifications}</li>
          <li className="text-[14px]">{content?.ImportantPoints?.ImageUploads}</li>
        </ul>
     <h3 className={`text-2xl font-bold text-[#e69999] mb-2 ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}>
            {content?.ProjectDetails?.Title}
          </h3>
          <ul
            className={`list-disc text-sm space-y-1 ${isRTL ? "pr-6 text-right" : "pl-6 text-left"}`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <li>{content?.ProjectDetails?.Technologies?.Backend._1}</li>
            <li>{content?.ProjectDetails?.Technologies?.Backend._2}</li>
            <li>{content?.ProjectDetails?.Technologies?.Backend._3}</li>
            <li>{content?.ProjectDetails?.Technologies?.Backend._4}</li>
            <li>{content?.ProjectDetails?.Technologies?.Backend._5}</li>
            <li>{content?.ProjectDetails?.Technologies?.Services._1}</li>
            <li>{content?.ProjectDetails?.Technologies?.Services._2}</li>
            <li>{content?.ProjectDetails?.Technologies?.Services._3}</li>
          </ul>
        </div>
      )}
    </>
  );
}
