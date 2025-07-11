"use client";
import { useState, useEffect } from "react";
import { setLanguage, setTranslations } from "../../lib/slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadTranslations } from "../../utils/loadTranslations";
import AOS from "aos";
import "aos/dist/aos.css";

const BookFlip = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const { translations } = useSelector((state) => state.language);

    const [isClient, setIsClient] = useState(false);
    const [pages, setPages] = useState({
        div1: 0,
        div2: 0,
        div3: 0,
        div4: 0,
    });

    const isRTL = currentLanguage !== "en";

    useEffect(() => {
        const fetchTranslations = async () => {
            const languageFromLocal = localStorage.getItem("language") || "en";
            const translations = await loadTranslations(languageFromLocal);
            dispatch(setLanguage(languageFromLocal));
            dispatch(setTranslations(translations));
        };
        fetchTranslations();
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsClient(true);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            AOS.init({ duration: 500 });
            return () => AOS.refresh();
        }
    }, [isClient]);

    const totalPages = 5;

    const flipNext = (id) => {
        setPages((prevPages) => {
            const newPage = prevPages[id] < totalPages ? prevPages[id] + 1 : 0;
            return { ...prevPages, [id]: newPage };
        });
    };

    const flipPrev = (id) => {
        setPages((prevPages) => {
            const newPage = prevPages[id] > 0 ? prevPages[id] - 1 : 0;
            return { ...prevPages, [id]: newPage };
        });
    };

    const getPageBackground = (index) => {
        switch (index) {
            case 0:
                return "bg-[url('https://i.postimg.cc/FzWZxWJy/Screenshot-2024-11-01-210001.png')]";
            case 1:
                return "bg-[url('https://i.postimg.cc/wvT730Ct/Screenshot-2025-02-05-201211.png')]";
            case 2:
                return "bg-[url('https://i.postimg.cc/W4T9hr3R/Whats-App-Image-2025-05-02-at-15-48-17-04ec0411.jpg')]";
            case 3:
                return "bg-[url('https://i.ibb.co/zhMD3x9F/Screenshot-2025-06-30-233600.png')]";
            default:
                return "bg-[#222322]";
        }
    };

    const getProjectsImage = (index) => {
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
                return [
                    "https://i.ibb.co/SXP5YkTy/Screenshot-2025-07-01-010412.png",

                ];
            default:
                return "bg-[#222322]";
        }
    };

    const getProjectsLinkes = (index) => {
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
            default:
                return "bg-[#222322]";
        }
    };

    const projectContent = [
        {
            countPage: [1, 2, 3, 4, 5],
            id: "div1",
            SiteDefinition: {
                Title: translations?.SiteDefinition?.Title || "Default Title",
                Description: translations?.SiteDefinition?.Description || "Default Description",
            },
            ImportantPoints: {
                Title: translations?.ImportantPoints?.Title || "Default Title",
                ControlPanel: translations?.ImportantPoints?.ControlPanel || "Default Control Panel",
                ProductManagement: translations?.ImportantPoints?.ProductManagement || "Default Product Management",
                OrderManagement: translations?.ImportantPoints?.OrderManagement || "Default Order Management",
                ShoppingCart: translations?.ImportantPoints?.ShoppingCart || "Default Shopping Cart",
                Support: translations?.ImportantPoints?.Support || "Default Support",
                OrderForm: translations?.ImportantPoints?.OrderForm || "Default Order Form",
                DetailsPage: translations?.ImportantPoints?.DetailsPage || "Default Details Page",
            },
            ProjectDetails: {
                Title: translations?.ProjectDetails?.Title || "Default Title",
                Description: translations?.ProjectDetails?.Description || "Default Description",
                Technologies: {
                    _1: translations?.ProjectDetails?.Technologies._1,
                    _2: translations?.ProjectDetails?.Technologies._2,
                    _3: translations?.ProjectDetails?.Technologies._3,
                    _4: translations?.ProjectDetails?.Technologies._4,
                    _5: translations?.ProjectDetails?.Technologies._5,
                },
                ProjectImages: {
                    Title1: translations?.ProjectDetails?.ProjectImages?.Title1 || "Default Title",
                    Link1: translations?.ProjectDetails?.ProjectImages?.Link1 || "Default Link1",
                    Link2: translations?.ProjectDetails?.ProjectImages?.Link2 || "Default Link2",
                    Link3: translations?.ProjectDetails?.ProjectImages?.Link3 || "Default Link2",
                },
            },
        },
        {
            countPage: [1, 2, 3, 4, 5],
            id: "div2",
            SiteDefinition: {
                Title: translations?.SiteDefinition_2?.Title || "",
                Description: translations?.SiteDefinition_2?.Description || "Default Description",
            },
            ImportantPoints: {
                Title: translations?.ImportantPoints_2?.Title || "",
                ControlPanel: translations?.ImportantPoints_2?.AdminPage || "Default Control Panel",
                ProductManagement: translations?.ImportantPoints_2?.SupervisorPage || "Default Product Management",
                OrderManagement: translations?.ImportantPoints_2?.SearchFunctionality || "Default Order Management",
            },
            ProjectDetails: {
                Title: translations?.Project_2_Details?.Title || "Default Title",
                Description: translations?.Project_2_Details?.Description || "Default Description",
                Technologies: {
                    _1: translations?.Project_2_Details?.Technologies._1,
                    _2: translations?.Project_2_Details?.Technologies._2,
                    _3: translations?.Project_2_Details?.Technologies._3,
                    _4: translations?.Project_2_Details?.Technologies._4,
                    _5: translations?.Project_2_Details?.Technologies._5,
                },
                ProjectImages: {
                    Title1: translations?.Project_2_Details?.ProjectImages?.Title1 || "Default Title",
                    Link1: translations?.Project_2_Details?.ProjectImages?.Link1 || "Default Link1",
                    Link2: translations?.Project_2_Details?.ProjectImages?.Link2 || "Default Link2",
                    Link3: translations?.Project_2_Details?.ProjectImages?.Link3 || "Default Link2",
                },
            },
        },
        {
            countPage: [1, 2, 3, 4, 5, 6],
            id: "div3",
            SiteDefinition: {
                Title: translations?.Project_3_Attendance?.Title || "Default Title",
                Description: translations?.Project_3_Attendance?.Description || "Default Description",
            },
            ImportantPoints: {
                Title: translations?.Project_3_Attendance?.MainFeatures?.Title || "",
                AttendanceManagement: translations?.Project_3_Attendance?.MainFeatures?.AttendanceManagement || "Default Attendance Management",
                AttendanceReports: translations?.Project_3_Attendance?.MainFeatures?.AttendanceReports || "Default Attendance Reports",
                StudentPromotion: translations?.Project_3_Attendance?.MainFeatures?.StudentPromotion || "Default Student Promotion",
                AdminPanel: translations?.Project_3_Attendance?.MainFeatures?.AdminPanel || "Default Admin Panel",
                SecureAuthentication: translations?.Project_3_Attendance?.MainFeatures?.SecureAuthentication || "Default Secure Authentication",
                ResponsiveDesign: translations?.Project_3_Attendance?.MainFeatures?.ResponsiveDesign || "Default Responsive Design",
            },
            ProjectDetails: {
                Title: translations?.Project_3_Attendance?.TechnologiesUsed?.Title || "Default Title",
                Description: translations?.Project_3_Attendance?.ProjectGoal?.Description || "Default Description",
                Technologies: {
                    Frontend: {
                        _1: translations?.Project_3_Attendance?.TechnologiesUsed?.Frontend?._1 || "Default Frontend 1",
                        _2: translations?.Project_3_Attendance?.TechnologiesUsed?.Frontend?._2 || "Default Frontend 2",
                        _3: translations?.Project_3_Attendance?.TechnologiesUsed?.Frontend?._3 || "Default Frontend 3",
                    },
                    Backend: {
                        _1: translations?.Project_3_Attendance?.TechnologiesUsed?.Backend?._1 || "Default Backend 1",
                        _2: translations?.Project_3_Attendance?.TechnologiesUsed?.Backend?._2 || "Default Backend 2",
                        _3: translations?.Project_3_Attendance?.TechnologiesUsed?.Backend?._3 || "Default Backend 3",
                        _4: translations?.Project_3_Attendance?.TechnologiesUsed?.Backend?._4 || "Default Backend 4",
                        _5: translations?.Project_3_Attendance?.TechnologiesUsed?.Backend?._5 || "Default Backend 5",
                    },
                },
                ProjectGoal: {
                    Title: translations?.Project_3_Attendance?.ProjectGoal?.Title || "Default Title",
                    Description: translations?.Project_3_Attendance?.ProjectGoal?.Description || "Default Description",
                },
                Integration: {
                    Title: translations?.Project_3_Attendance?.Integration?.Title || "Default Title",
                    Description: translations?.Project_3_Attendance?.Integration?.Description || "Default Description",
                },
                PromotionFeatures: {
                    Title: translations?.Project_3_Attendance?.PromotionFeature?.Title || "Default Title",
                    Description: translations?.Project_3_Attendance?.PromotionFeature?.Description || "Default Description",
                },
                ProjectImages: {
                    Title1: translations?.Project_2_Details?.ProjectImages?.Title1 || "Default Title",
                    Link1: translations?.Project_2_Details?.ProjectImages?.Link1 || "Default Link1",
                    Link2: translations?.Project_2_Details?.ProjectImages?.Link2 || "Default Link2",
                    Link3: translations?.Project_2_Details?.ProjectImages?.Link3 || "Default Link3",
                },
            },
        },
        {
            countPage: [1, 2, 3, 4, 5, 6],
            id: "div4",
            SiteDefinition: {
                Title: translations?.Project_Olive_Oil_Store?.Title || "Default Title",
                Description: translations?.Project_Olive_Oil_Store?.Description || "Default Description",
            },
            ImportantPoints: {
                Title: translations?.Project_Olive_Oil_Store?.MainFeatures?.Title || "Default Title",
                DynamicProductManagement: translations?.Project_Olive_Oil_Store?.MainFeatures?.DynamicProductManagement || "Default DynamicProductManagement",
                OrderTracking: translations?.Project_Olive_Oil_Store?.MainFeatures?.OrderTracking || "Default OrderTracking",
                ReviewSystem: translations?.Project_Olive_Oil_Store?.MainFeatures?.ReviewSystem || "Default ReviewSystem",
                SecureAuthentication: translations?.Project_Olive_Oil_Store?.MainFeatures?.SecureAuthentication || "Default SecureAuthentication",
                CentralizedAPISettings: translations?.Project_Olive_Oil_Store?.MainFeatures?.CentralizedAPISettings || "Default CentralizedAPISettings",
                ResponsiveDesign: translations?.Project_Olive_Oil_Store?.MainFeatures?.ResponsiveDesign || "Default ResponsiveDesign",
                CodeSeparation: translations?.Project_Olive_Oil_Store?.MainFeatures?.CodeSeparation || "Default CodeSeparation",
            },
            ProjectDetails: {
                Title: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Title || "Default Title",
                Technologies: {
                    Frontend: {
                        _1: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Frontend?._1 || "Default Frontend 1",
                        _2: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Frontend?._2 || "Default Frontend 2",
                        _3: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Frontend?._3 || "Default Frontend 3",
                    },
                    Backend: {
                        _1: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Backend?._1 || "Default Backend 1",
                        _2: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Backend?._2 || "Default Backend 2",
                        _3: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Backend?._3 || "Default Backend 3",
                        _4: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Backend?._4 || "Default Backend 4",
                        _5: translations?.Project_Olive_Oil_Store?.TechnologiesUsed?.Backend?._5 || "Default Backend 5",
                    },
                },
                ProjectGoal: {
                    Title: translations?.Project_Olive_Oil_Store?.ProjectGoal?.Title || "Default Title",
                    Description: translations?.Project_Olive_Oil_Store?.ProjectGoal?.Description || "Default Description",
                },
                Integration: {
                    Title: translations?.Project_Olive_Oil_Store?.Integration?.Title || "Default Title",
                    Description: translations?.Project_Olive_Oil_Store?.Integration?.Description || "Default Description",
                },
                ReviewFeature: {
                    Title: translations?.Project_Olive_Oil_Store?.ReviewFeature?.Title || "Default Title",
                    Description: translations?.Project_Olive_Oil_Store?.ReviewFeature?.Description || "Default Description",
                },
                ProjectImages: {
                    Title1: translations?.Project_Olive_Oil_Store?.ProjectImages?.Title1 || "Default Title",
                    Link1: translations?.Project_Olive_Oil_Store?.ProjectImages?.Link1 || "Default Link1",
                    Link2: translations?.Project_Olive_Oil_Store?.ProjectImages?.Link2 || "Default Link2",
                    Link3: translations?.Project_Olive_Oil_Store?.ProjectImages?.Link3 || "Default Link3",
                },
            },
        },
    ];

    if (!translations) {
        return <div>Loading...</div>;
    }

    const renderFlipBook = (content, index, countPage) => {
        // console.log("content", countPage)
        return (
            <div
                key={content.id}
                className="perspective relative w-[394px] sm:w-[394px] h-[500px] preserve-3d z-10 mb-[60px] ml-10 sm:ml-[10%] mr-[10px] sm:mr-[0px]"
            >
                {countPage.map((page, pageIndex) => (
                    <div
                        key={pageIndex}
                        className={`page ${pages[content.id] === 0
                            ? getPageBackground(index)
                            : "bg-[url('https://tse3.mm.bing.net/th/id/OIP.eeKEfzNXtn2xW_ZgmjkP7QHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')]"
                            } ${pages[content.id] === 4
                                ? "bg-[rgba(0,0,0,0.57)]"
                                : "bg-[#000000]"
                            } bg-cover bg-center border border-gray-800 flex items-center justify-center text-[#fff] text-2xl font-bold w-[100%] h-[100%]  ${pages[content.id] > pageIndex &&
                            `${pages[content.id] === 1 && "rotate-y-101"} rotate-y-100`
                            }`}
                        style={{ zIndex: totalPages - pages[content.id] }}
                    >
                        <div
                            className={`absolute ${pages[content.id] > pageIndex
                                ? "hidden-text"
                                : "visible-text"
                                }`}
                        >
                            {pages[content.id] === 1 ? (
                                <div
                                    className="text-[4px] whitespace-break-spaces"
                                    data-aos="fade-top"
                                    dir={isRTL ? "rtl" : "ltr"}
                                >
                                    <h3 className="text-xl font-bold mb-2 mr-6 pl-3 text-[24px]  text-[#e69999]">
                                        {content?.SiteDefinition?.Title}
                                    </h3>
                                    <p className="text-[14px] mr-6 pl-5">
                                        {content?.SiteDefinition?.Description}
                                    </p>
                                    <h3 className="text-xl font-bold mr-6 mt-2 pl-3 mb-0 text-[24px] text-[#e69999]">
                                        {content?.ImportantPoints?.Title}
                                    </h3>
                                    {/* محتوي المشروع التالت  الصفحه الاولي */}
                                    {content.id === "div3" &&
                                        <ul className="list-disc mr-6 ml-6 text-[13px] font-sm"
                                            data-aos="fade-top"

                                        >
                                            <li>{content?.ImportantPoints?.AttendanceManagement}</li>
                                            <li>{content?.ImportantPoints?.AttendanceReports}</li>
                                            <li>{content?.ImportantPoints?.StudentPromotion}</li>

                                        </ul>

                                    }

                                    {/* محتوي المشروع الرابع  الصفحه الاولي */}
                                    {content.id === "div4" &&
                                        <ul className="list-disc mr-6 ml-6 text-[13px] font-sm"
                                            data-aos="fade-top"

                                        >
                                            <li>{content?.ImportantPoints?.DynamicProductManagement}</li>
                                            <li>{content?.ImportantPoints?.OrderTracking}</li>

                                        </ul>

                                    }

                                    {/* محتوي المشورع الاول والثاني الصفحه الاولي */}
                                    {(content.id === "div1" || content.id === "div2") && (
                                        <ul className="list-disc mr-6 ml-6 text-[10px]">
                                            <li>{content?.ImportantPoints?.ControlPanel}</li>
                                            <li>{content?.ImportantPoints?.ProductManagement}</li>
                                            {(content.id === "div1") && (
                                                <li>{content?.ImportantPoints?.OrderManagement}</li>

                                            )}
                                        </ul>
                                    )}

                                </div>
                            ) : pages[content.id] === 2 ? (
                                // الصفحه الثانيه
                                <>

                                    {/* محتوي الصفحه التانيه للمشروع الاول والتاني  */}
                                    {(content.id === "div2" || content.id === "div1" || content.id === "div3") &&
                                        <ul
                                            className="list-disc mr-3 ml-6 mt-[-200px] text-[10px]"
                                            dir={isRTL ? "rtl" : "ltr"}
                                        >
                                            {content.id === "div2" && (
                                                <li>{content?.ImportantPoints?.OrderManagement}</li>
                                            )}
                                            {content.id === "div1" && (
                                                <ul dir={isRTL ? "rtl" : "ltr"}>
                                                    <li>{content?.ImportantPoints?.ShoppingCart}</li>
                                                    <li>{content?.ImportantPoints?.Support}</li>
                                                    <li>{content?.ImportantPoints?.OrderForm}</li>
                                                    <li>{content?.ImportantPoints?.DetailsPage}</li>
                                                </ul>
                                            )}

                                            {/* //  محتوي الصفحه التانيه للمشروع الثالث */}

                                            {(content.id === "div3") && (
                                                <>
                                                    {console.log("content", content.id)}

                                                    <ul
                                                        className="list-disc mr-3 ml-6 mt-[-200px] text-[10px]"

                                                        dir={isRTL ? "rtl" : "ltr"}>

                                                        <li>{content?.ImportantPoints?.StudentPromotion}</li>
                                                        <li>{content?.ImportantPoints?.AdminPanel}</li>
                                                        <li>{content?.ImportantPoints?.SecureAuthentication}</li>
                                                        <li>{content?.ImportantPoints?.ResponsiveDesign}</li>
                                                    </ul>
                                                    <div
                                                        className="text-[4px] font-semibold p-2 whitespace-break-spaces mb-[-180px] mt-9"
                                                        data-aos="fade-top"
                                                        dir={isRTL ? "rtl" : "ltr"}
                                                    >
                                                        <h3 className="text-xl  font-bold p-1 mb-2 text-[24px]">
                                                            * {content?.ProjectDetails?.ProjectGoal?.Title}
                                                        </h3>
                                                        <p className="text-[14px] font-sm p-1">
                                                            {content.ProjectDetails?.ProjectGoal?.Description}
                                                        </p>
                                                    </div>

                                                </>

                                            )}


                                        </ul>
                                    }


                                    {/* //  محتوي الصفحه التانيه للمشروع الرابع */}

                                    {content.id === "div4" && (
                                        <>
                                            {console.log("content", content.id)}

                                            <ul
                                                className={`list-disc ${isRTL ? "mr-5 ml-1" : "mr-1 ml-5"
                                                    } mr-5 ml-1 mt-0 text-[14px]`}
                                                dir={isRTL ? "rtl" : "ltr"}
                                            >
                                                <li>{content?.ImportantPoints?.ReviewSystem}</li>
                                                <li>{content?.ImportantPoints?.SecureAuthentication}</li>
                                                <li>{content?.ImportantPoints?.CentralizedAPISettings}</li>
                                                <li>{content?.ImportantPoints?.ResponsiveDesign}</li>
                                                <li>{content?.ImportantPoints?.CodeSeparation}</li>
                                            </ul>
                                        </>
                                    )}


                                </>

                            ) : pages[content.id] === 3 ? (
                                // الصفحه الثالثه
                                <>

                                    {/* المشروع الاول والتاني  */}
                                    {(content.id === "div2" || content.id === "div1") && (

                                        <div
                                            className="text-[4px] whitespace-break-spaces"
                                            data-aos="fade-top"
                                            dir={isRTL ? "rtl" : "ltr"}
                                        >
                                            <h3 className="text-xl font-bold p-5 mb-2 text-[24px]">
                                                {content?.ProjectDetails?.Title}
                                            </h3>
                                            <p className="text-[14px] p-5">
                                                {content.ProjectDetails.Description}
                                            </p>
                                            <ul className="list-disc p-6 text-[13px]">
                                                <li>{content?.ProjectDetails?.Technologies?._1}</li>
                                                <li>{content?.ProjectDetails?.Technologies?._2}</li>
                                                <li>{content?.ProjectDetails?.Technologies?._3}</li>
                                                <li>{content?.ProjectDetails?.Technologies?._4}</li>
                                                <li>{content?.ProjectDetails?.Technologies?._5}</li>
                                            </ul>
                                        </div>
                                    )}

                                    {/* المشروع الثالث */}
                                    {(content.id === "div3" && (
                                        <div
                                            className="text-[4px] font-semibold p-2 whitespace-break-spaces"
                                            data-aos="fade-top"
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

                                    ))
                                    }


                                    {/* المشروع الرابع */}
                                    {(content.id === "div4" && (
                                        <div
                                            className="text-[4px] font-semibold p-1  whitespace-break-spaces"
                                            data-aos="fade-top"
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

                                    ))
                                    }


                                </>
                            ) : (pages[content.id] === 4 && content.id === "div3") ? (
                                // الصفحه الرابعه المشروع الثالث
                                <div
                                    className="text-[4px] whitespace-break-spaces"
                                    // data-aos="fade-top"
                                    dir={isRTL ? "rtl" : "ltr"}
                                >
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



                            ) : pages[content.id] === 4 ? (  // الصفحه الرابعه

                                <>
                                    {/* المشروع الرابع  */}
                                    {(content.id === "div4" && (
                                        <div
                                            className="text-[4px] whitespace-break-spaces"
                                            // data-aos="fade-top"
                                            dir={isRTL ? "rtl" : "ltr"}
                                        >
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

                                    ))
                                    }

                                    {(content.id !== "div4" && (
                                        <section
                                            className="grid grid-cols-3 gap-2 w-[100%] h-[100%] overflow-hidden"
                                            data-aos="fade-top"
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
                                                <div className="relative w-full col-span-2 h-[100%] mt-0 drop-shadow-[0_35px_35px_rgba(24,0,255,0.25)]">
                                                    <img
                                                        className="w-full h-full"
                                                        src={getProjectsImage(index)[0]}
                                                        alt="Nature"
                                                    />
                                                </div>
                                            )}
                                            {content.id === "div1" && (
                                                <div className="relative w-full h-full">
                                                    <img
                                                        src={getProjectsImage(index)[1]}
                                                        alt="City Skyline"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            {content.id === "div1" && (
                                                <div className="relative w-full h-full col-span-3">
                                                    <img
                                                        src={getProjectsImage(index)[2]}
                                                        alt="Forest Mountain"
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            )}
                                            {content.id === "div2" && (
                                                <div className="relative w-full h-full col-span-3 row-span-3">
                                                    <script
                                                        src="https://fast.wistia.com/player.js"
                                                        async
                                                    ></script>
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
                                                    <wistia-player
                                                        media-id="59je9q3snh"
                                                        aspect="1.7777777777777777"
                                                    ></wistia-player>
                                                </div>
                                            )}
                                            {content.id === "div1" && (
                                                <div className="w-full h-full text-[#ffffff] text-center mt-2 text-[12px] col-span-3">
                                                    <a
                                                        href={getProjectsLinkes(index)[2]} // زيارة الموقع
                                                        target="-plank"
                                                        className="bg-[#26458a] p-3 mx-3 rounded-lg  hover:bg-[#2669f8] rounded-tl-[4px] rounded-tr-[50px] rounded-bl-[60px] rounded-br-[9px]"
                                                    >
                                                        {content?.ProjectDetails?.ProjectImages?.Link1}
                                                    </a>

                                                    <a
                                                        href={getProjectsLinkes(index)[0]} // front end   surce code
                                                        target="-plank"
                                                        className="bg-[#26458a] p-3 rounded-tl-[50px] rounded-tr-[4px] rounded-bl-[9px] rounded-br-[60px]  hover:bg-[#2669f8]"
                                                    >
                                                        {content?.ProjectDetails?.ProjectImages?.Link3}
                                                    </a>
                                                </div>
                                            )}
                                        </section>


                                    ))}



                                </>
                            ) :
                                pages[content.id] === 5 ? (
                                    <div dir={isRTL ? "rtl" : "ltr"}>
                                        {content.id === "div4" ? (
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
                                                        href={getProjectsLinkes(index)[2]} // back end   surce code 
                                                        target="-plank"
                                                        className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
                                                    >
                                                        {content?.ProjectDetails?.ProjectImages?.Link1}
                                                    </a>
                                                    <a
                                                        href={getProjectsLinkes(index)[1]} // front end   surce code
                                                        target="-plank"
                                                        className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
                                                    >
                                                        {content?.ProjectDetails?.ProjectImages?.Link2}

                                                    </a>
                                                    <a
                                                        href={getProjectsLinkes(index)[0]}  // زيارة الموقع
                                                        target="-plank"
                                                        className="bg-[#26458a] p-3  hover:bg-[#2669f8]"
                                                    >
                                                        {content?.ProjectDetails?.ProjectImages?.Link3}
                                                    </a>

                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full h-auto overflow-hidden">

                                                    <img
                                                        className="w-full h-48 object-cover rounded-md col-span-3"
                                                        src={getProjectsImage(index)[0]}
                                                        alt="Nature"
                                                    />   <img
                                                        className="w-full h-48 object-cover rounded-md"
                                                        src={getProjectsImage(index)[2]}
                                                        alt="Nature"
                                                    />
                                                    <img
                                                        className="w-full h-48 object-cover rounded-md"
                                                        src={getProjectsImage(index)[4]}
                                                        alt="Nature"
                                                    />
                                                    <img
                                                        className="w-full h-48 object-cover rounded-md"
                                                        src={getProjectsImage(index)[5]}
                                                        alt="Nature"
                                                    />
                                                </div>
                                                <div className="w-full h-full text-[#ffffff] text-center mt-2 text-[12px] col-span-3" dir="ltr">
                                                    <a
                                                        href={getProjectsLinkes(index)[2]} // back end   surce code 
                                                        target="-plank"
                                                        className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
                                                    >
                                                        {content?.ProjectDetails?.ProjectImages?.Link1}
                                                    </a>
                                                    <a
                                                        href={getProjectsLinkes(index)[1]} // front end   surce code
                                                        target="-plank"
                                                        className="bg-[#26458a] p-3 mx-3  hover:bg-[#2669f8]"
                                                    >
                                                    {content?.ProjectDetails?.ProjectImages?.Link3}

                                                    </a>
                                                    <a
                                                        href={getProjectsLinkes(index)[0]}  // زيارة الموقع
                                                        target="-plank"
                                                        className="bg-[#26458a] p-3  hover:bg-[#2669f8]"
                                                    >
                                                        {content?.ProjectDetails?.ProjectImages?.Link2}

                                                    </a>

                                                </div>
                                            </>

                                        )}
                                    </div>
                                ) :
                                    (
                                        <></>
                                    )}
                        </div>
                    </div>
                ))}
                <button
                    onClick={() => flipNext(content.id)}
                    className="fixed bottom-[-40px] right-[10%] mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition z-40"
                >
                    {translations?.Projects?.FlipNext}
                </button>
                <button
                    onClick={() => flipPrev(content.id)}
                    className="fixed bottom-[-40px] left-[10%] mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition z-40"
                >
                    {translations?.Projects?.FlipPrev}
                </button>
            </div>
        );
    };

    return (
        isClient && (
            <>
                <style>
                    {`
                        .perspective {
                            perspective: 2000px;
                        }
                        .page {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            transition: transform 1s ease;
                            transform-origin: left;
                        }
                        .hidden-text {
                            opacity: 0;
                            transition: opacity 0.5s ease;
                        }
                        .visible-text {
                            opacity: 1;
                        }
                    `}
                </style>
                <section
                    data-aos="fade-top"
                    className="w-[494px] sm:w-full h-full bg-gradient-to-r from-[#0c3541] to-[#0e2ee6] text-white mt-[110px]"
                >
                    {/* <div className="container sm:w-[140%] ">    */}
                    <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10 sm:ml-[50%] ml-[25%] w-[250px] pt-[60px]">
                        {translations?.Projects?.Projects}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {projectContent?.map((content, index) =>
                            renderFlipBook(content, index, content.countPage)
                        )}
                        {/* </div> */}
                    </div>
                </section>
            </>
        )
    );
};

export default BookFlip;










