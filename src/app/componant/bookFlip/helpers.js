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
      return "bg-[url('https://i.ibb.co/1Gm6Y9Rq/Screenshot-2025-08-27-110420.png')]";
    case 5:
      return "bg-[url('https://i.ibb.co/7dSMMhXd/Screenshot-2025-09-04-172302.png')]";
    case 6:
      return "bg-[url('https://i.ibb.co/wFJHCJNS/3-D-Book-Mockup-394x500-1.png')]";
    default:
      return "bg-[#222322]";
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
    default:
      return "bg-[#222322]";
  }
};

export const getProjectsLinkes = (index) => {
  switch (index) {
    case 0:
      return [
        "https://github.com/RAMADAN-MAHDY/affiliate-app",
        "https://github.com/RAMADAN-MAHDY/affiliate-app",
        "https://elmahdy.vercel.app/",
      ];
    case 1:
      return [
        "https://github.com/RAMADAN-MAHDY/affiliate-app",
        "https://elmahdy.vercel.app/",
      ];
    case 2:
      return [
        "https://github.com/RAMADAN-MAHDY/Attendance-Log-school",
        "https://github.com/RAMADAN-MAHDY/Attendance-Log-school-api",
        "https://attendance-log-school.vercel.app",
      ];
    case 3:
      return [
        "https://github.com/RAMADAN-MAHDY/olive-oil-store-api",
        "https://github.com/RAMADAN-MAHDY/olive-oil-store",
        "https://olive-oil-store-tau.vercel.app",
      ];
    case 4:
      return [
        "https://github.com/RAMADAN-MAHDY/olive-oil-store-api",
        "https://github.com/RAMADAN-MAHDY/olive-oil-store",
        " https://nazafaa.com",
      ];
    case 5:
      return [
        "https://github.com/RAMADAN-MAHDY/down-syndrome-Api",
        "https://github.com/dina-abaza/down-syndrome",
        "https://down-syndrome-one.vercel.app",
        "https://portofilio-l9ls.vercel.app",
      ];
    case 6:
      return [
        "https://github.com/RAMADAN-MAHDY/Iraqi-EStore-api",
        "https://github.com/dina-abaza/grocy-web",
        "https://grocy-web.vercel.app/",
        "https://portofilio-l9ls.vercel.app",
      ];
    default:
      return "bg-[#222322]";
  }
};
