"use client";

export const getPageBackground = (index) => {
  switch (index) {
    case 0:
      return "bg-[url('https://i.postimg.cc/FzWZxWJy/Screenshot-2024-11-01-210001.png')]";
    case 1:
      return "bg-[url('https://i.postimg.cc/wvT730Ct/Screenshot-2025-02-05-201211.png')]";
    case 2:
      return "bg-[url('https://i.postimg.cc/W4T9hr3R/Whats-App-Image-2025-05-02-at-15-48-17-04ec0411.jpg')]";
    case 3:
      return "bg-[url('https://i.ibb.co/zhMD3x9F/Screenshot-2025-06-30-233600.png')]";
    case 4:
      return "bg-[url('https://i.ibb.co/GvmC19Pn/Screenshot-2026-01-29-193020.png')]";
    case 5:
      return "bg-[url('https://i.ibb.co/7dSMMhXd/Screenshot-2025-09-04-172302.png')]";
    case 6:
      return "bg-[url('https://i.ibb.co/yFyvNxx8/Screenshot-2026-01-25-150958.png')]";
    case 7:
      return "bg-[url('https://i.ibb.co/fdXN70Th/Screenshot-2026-03-23-022816.png')]"; // Placeholder background
    case 8:
      return "bg-[url('https://i.ibb.co/k2xgCJrn/image.png')]";
    case 9:
      return "bg-[url('https://i.ibb.co/BHvtNPXY/3-D.png')]";
    default:
      return [];
  }
};

export const getProjectsImage = (index) => {
  switch (index) {
    case 0:
      return [
        "https://i.postimg.cc/JhqVmb7k/Screenshot-2024-11-01-210251.png",
        "https://i.postimg.cc/g0dFfMpp/Screenshot-2024-11-01-210438.png",
        "https://i.postimg.cc/xC1rdcqF/Screenshot-2024-11-01-210355.png",
      ];
    case 2:
      return [
        "https://i.postimg.cc/65PvTG9H/Screenshot-2025-04-29-190231.png",
        "https://i.postimg.cc/W4T9hr3R/Whats-App-Image-2025-05-02-at-15-48-17-04ec0411.jpg",
        "https://i.postimg.cc/GmkGNmCq/Screenshot-2025-05-02-192632.png",
        "https://i.postimg.cc/NM0X58rz/Screenshot-2025-05-02-192611.png",
        "https://i.postimg.cc/9fLR54Nt/Screenshot-2025-05-02-192441.png",
        "https://i.postimg.cc/6qvhYsfZ/Screenshot-2025-05-02-192649.png",
      ];
    case 3:
      return ["https://i.ibb.co/SXP5YkTy/Screenshot-2025-07-01-010412.png"];
    case 4:
      return ["https://i.ibb.co/3nRpB8r/61196c35add3.png"];
    case 5:
      return [
        "https://i.ibb.co/3ybcTD4Q/Screenshot-2025-08-31-101054.png",
        "https://i.ibb.co/7t5TbVcD/Screenshot-2025-08-31-101109.png",
        "https://i.ibb.co/ZpDHK5XM/Screenshot-2025-09-04-170852.png",
        "https://i.ibb.co/hxCRtyzG/Screenshot-2025-09-04-171059.png",
        "https://i.ibb.co/m5dNTCPr/Screenshot-2025-09-04-171141.png",
        "https://i.ibb.co/KpDvmjGw/Screenshot-2025-09-04-171217.png",
        "https://i.ibb.co/35T5gSLb/Screenshot-2025-09-04-171251.png",
        "https://i.ibb.co/qFgb2P32/Screenshot-2025-09-04-171308.png",
        "https://i.ibb.co/MkYdKcVn/Screenshot-2025-09-04-171324.png",
      ];
    case 7:
      return [
        "https://i.ibb.co/QvPfdpWg/image.jpg", // Placeholder image
      ];
    case 8:
      return [
        "https://i.ibb.co/5gJWqtfw/Portfolio-UI-Screenshots-Grid.png",
        "https://i.ibb.co/k2xgCJrn/image.png",
      ];
    case 9:
      return [
        "https://i.ibb.co/9kd21Hj4/imgpublish1.webp",
        "https://i.ibb.co/hF5H1B5K/imgpublish2.webp",
        "https://i.ibb.co/BHvtNPXY/3-D.png",
      ];
    default:
      return [];
  }
};

export const getProjectsLinkes = (index) => {
  switch (index) {
    case 0:
      return [
        "https://elmahdy.vercel.app/",
        // "https://github.com/RAMADAN-MAHDY/affiliate_api",
        // "https://github.com/RAMADAN-MAHDY/affiliate-app",
      ];
    case 1:
      return [
        // "https://github.com/RAMADAN-MAHDY/affiliate-app",
        "https://elmahdy.vercel.app/",
      ];
    case 2:
      return [
        "https://attendance-log-school.vercel.app",
        // "https://github.com/RAMADAN-MAHDY/Attendance-Log-school",
        // "https://github.com/RAMADAN-MAHDY/Attendance-Log-school-api",
      ];
    case 3:
      return [
        // "https://github.com/RAMADAN-MAHDY/olive-oil-store-api",
        // "https://github.com/RAMADAN-MAHDY/olive-oil-store",
        "https://spontaneous-valkyrie-aae13b.netlify.app",
      ];
    case 4:
      return [
        // "https://github.com/RAMADAN-MAHDY/olive-oil-store-api",
        // "https://github.com/RAMADAN-MAHDY/olive-oil-store",
        // "https://nazafaa.com",
        "https://al-kharj-clean-git-main-ramadans-projects-777f5ec4.vercel.app",
      ];
    case 5:
      return [
        // "https://github.com/RAMADAN-MAHDY/down-syndrome-Api",
        // "https://github.com/dina-abaza/down-syndrome",
        "https://down-syndrome-one.vercel.app",
        "https://portofilio-l9ls.vercel.app",
      ];
    case 6:
      return [
        // "https://github.com/RAMADAN-MAHDY/Iraqi-EStore-api",
        // "https://github.com/dina-abaza/grocy-web",
        "https://grocy-web.vercel.app/",
        "https://portofilio-l9ls.vercel.app",
      ];
    case 7:
      return [
        "https://warehouse-management-system-for-an-sooty.vercel.app", // Placeholder links
      ];
    case 8:
      return [
        "https://e-commece-vitrine-jm7x.vercel.app/",
        "https://portofilio-l9ls.vercel.app/",
      ];
    case 9:
      return [
        "https://aldawlia-publishing.vercel.app/",
        "https://portofilio-l9ls.vercel.app/",
      ];
    default:
      return [];
  }
};
