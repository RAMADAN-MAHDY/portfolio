"use client";

export default function PageTwo({ content, isRTL }) {
  return (
    <div className="w-full h-full p-3 flex flex-col gap-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#e69999]/30" dir={isRTL ? "rtl" : "ltr"}>
      {(content.id === "div2" || content.id === "div1" || content.id === "div3") && (
        <div className="space-y-4 shrink-0">
          <ul className="space-y-2.5 pl-4 pr-4">
            {content.id === "div2" && <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.OrderManagement}</li>}
            {content.id === "div1" && (
              <>
                <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ShoppingCart}</li>
                <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Support}</li>
                <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.OrderForm}</li>
                <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.DetailsPage}</li>
              </>
            )}
            {content.id === "div3" && (
              <>
                <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.StudentPromotion}</li>
                <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.AdminPanel}</li>
                <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.SecureAuthentication}</li>
                <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ResponsiveDesign}</li>
              </>
            )}
          </ul>
          
          {content.id === "div3" && (
            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
              <h3 className="text-lg font-black text-[#e69999] mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#e69999] rounded-full" />
                {content?.ProjectDetails?.ProjectGoal?.Title}
              </h3>
              <p className="text-[12px] font-bold text-white/70 leading-relaxed italic">
                {content.ProjectDetails?.ProjectGoal?.Description}
              </p>
            </div>
          )}
        </div>
      )}

      {content.id === "div4" && (
        <ul className="space-y-2.5 pl-4 pr-4 shrink-0">
          <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ReviewSystem}</li>
          <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.SecureAuthentication}</li>
          <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.CentralizedAPISettings}</li>
          <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ResponsiveDesign}</li>
          <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.CodeSeparation}</li>
        </ul>
      )}

      {content.id === "div5" && (
        <div className="space-y-4 shrink-0">
          <ul className="space-y-2.5 pl-4 pr-4">
            <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ChatBot}</li>
            <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Security}</li>
            <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.SessionManagement}</li>
            <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Analytics}</li>
            <li className="text-[12px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.ContentUs}</li>
          </ul>
          
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
            <h3 className="text-lg font-black text-[#e69999] mb-3">{content?.ProjectDetails?.Title}</h3>
            <ul className="space-y-2 pl-4 pr-4">
              <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30">{content?.ProjectDetails?.Technologies?._1}</li>
              <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30">{content?.ProjectDetails?.Technologies?._2}</li>
              <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30">{content?.ProjectDetails?.Technologies?._3}</li>
            </ul>
          </div>
        </div>
      )}

      {content.id === "div6" && (
        <div className="space-y-4 flex-1">
          <div className="space-y-3 shrink-0">
            <h3 className="text-lg font-black text-[#e69999] border-b border-white/10 pb-2">{content?.ImportantPoints?.Title}</h3>
            <ul className="grid grid-cols-1 gap-2 pl-4 pr-4">
              <li className="text-[11px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Dashboard}</li>
              <li className="text-[11px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.AIChat}</li>
              <li className="text-[11px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Authentication}</li>
              <li className="text-[11px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.FileUpload}</li>
              <li className="text-[11px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Security}</li>
              <li className="text-[11px] font-bold text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.TokenManagement}</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
            <h3 className="text-lg font-black text-[#e69999] mb-3">{content?.ProjectDetails?.Title}</h3>
            <ul className="space-y-2 pl-4 pr-4">
              <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30">{content?.ProjectDetails?.Technologies?._1}</li>
              <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30">{content?.ProjectDetails?.Technologies?._2}</li>
              <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30">{content?.ProjectDetails?.Technologies?._3}</li>
            </ul>
          </div>
        </div>
      )}

      {(content.id === "div7" || content.id === "div9" || content.id === "div10") && (
        <div className="space-y-4 flex-1">
          <div className="space-y-3 shrink-0">
            <ul className="grid grid-cols-1 gap-2 pl-4 pr-4">
          
          <li className="text-[12px] text-white/80 list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Notifications}</li>
          <li className="text-[12px] text-white/80 list-disc marker:text-[#e69999] ">{content?.ImportantPoints?.ImageUploads}</li>
            </ul>
          </div>
          
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
            <h3 className="text-lg font-black text-[#e69999] mb-3">{content?.ProjectDetails?.Title}</h3>
            <p className="text-[12px] font-bold text-white/70 leading-relaxed italic mb-3">
              {content.ProjectDetails?.ProjectGoal?.Description}
            </p>
            <ul className="space-y-0 pl-0 pr-0">
               <li className="text-[11px] font-bold text-white/70 list-disc marker:text-[#e69999]">{content?.ProjectDetails?.Technologies?.Backend._1}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-[#e69999]">{content?.ProjectDetails?.Technologies?.Backend._2}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-[#e69999]">{content?.ProjectDetails?.Technologies?.Backend._3}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-[#e69999]">{content?.ProjectDetails?.Technologies?.Backend._4}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-[#e69999]">{content?.ProjectDetails?.Technologies?.Backend._5}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-[#e69999]">{content?.ProjectDetails?.Technologies?.Services._1}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-[#e69999]">{content?.ProjectDetails?.Technologies?.Services._2}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-[#e69999]">{content?.ProjectDetails?.Technologies?.Services._3}</li>
            </ul>
          </div>
        </div>
      )}

      {content.id === "div8" && (
        <div className="space-y-4 flex-1">
         <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.SalesPurchases}</li>
            <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Subscriptions}</li>
            <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.Reports}</li>
            <li className="text-[12px] font-bold text-white/80 leading-snug list-disc marker:text-[#e69999]">{content?.ImportantPoints?.MultiTenancy}</li>
          

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
            <h4 className="text-sm font-black text-[#e69999] mb-2 uppercase tracking-wider">{isRTL ? "التقنيات" : "Technologies"}</h4>
            <ul className="grid grid-cols-1 gap-0">
              <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Frontend._1}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Frontend._2}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Frontend._3}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Backend._1}</li>
             <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Backend._2}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Backend._3}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Tools._1}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Tools._2}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Tools._3}</li>
            <li className="text-[11px] font-bold text-white/70 list-disc marker:text-white/30 ml-4">{content?.ProjectDetails?.Technologies?.Tools._4}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
