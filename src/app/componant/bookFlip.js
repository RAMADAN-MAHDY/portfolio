"use client";
import { useState, useEffect } from "react";
import { setLanguage, setTranslations } from "../../lib/slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadTranslations } from "../../utils/loadTranslations";
import AOS from "aos";
import "aos/dist/aos.css";
import FlipBookItem from "./bookFlip/FlipBookItem";
import { getPageBackground, getProjectsImage, getProjectsLinkes } from "./bookFlip/helpers";

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
        div5: 0,
        div6: 0,
        div7: 0,
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

    const totalPages = 6;

    const flipNext = (id) => {
        setPages((prevPages) => {
            const newPage = prevPages[id] < totalPages ? prevPages[id] + 1 : 0;

            // console.log(newPage)
            return { ...prevPages, [id]: newPage };
        });
    };

    const flipPrev = (id) => {
        setPages((prevPages) => {
            const newPage = prevPages[id] > 0 ? prevPages[id] - 1 : 0;

            // console.log(newPage)

            return { ...prevPages, [id]: newPage };
        });
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
        {
            countPage: [1, 2, 3, 4, 5],
            id: "div5", // Changed from div4 to div5 to be unique
            SiteDefinition: {
                Title: translations?.Project_Kharji_Cleaning_Services?.Title || "Default Title",
                Description: translations?.Project_Kharji_Cleaning_Services?.Description || "Default Description",
            },
            ImportantPoints: {
                Title: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.Title || "",

                ModernUI: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.ModernUI || "",

                GalleryCarousel: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.GalleryCarousel || "",

                ChatBot: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.ChatBot || "",
                Security: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.Security || "",

                SessionManagement: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.SessionManagement || "",

                Analytics: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.Analytics || "",

                ResponsiveDesign: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.ResponsiveDesign || "",
                ContentUs: translations?.Project_Kharji_Cleaning_Services?.MainFeatures?.Content || "",
            },

            ProjectDetails: {
                Title: translations?.Project_Kharji_Cleaning_Services?.TechnologiesUsed?.Title || "Default Title",
                Technologies: {
                    _1: translations?.Project_Kharji_Cleaning_Services?.TechnologiesUsed?.Frontend?._1,
                    _2: translations?.Project_Kharji_Cleaning_Services?.TechnologiesUsed?.Frontend?._2,
                    _3: translations?.Project_Kharji_Cleaning_Services?.TechnologiesUsed?.Frontend?._3,
                    _4: translations?.Project_Kharji_Cleaning_Services?.TechnologiesUsed?.Backend?._1,
                    _5: translations?.Project_Kharji_Cleaning_Services?.TechnologiesUsed?.Backend?._2,
                    _6: translations?.Project_Kharji_Cleaning_Services?.TechnologiesUsed?.Backend?._3,
                    _7: translations?.Project_Kharji_Cleaning_Services?.TechnologiesUsed?.AI?._1,
                },
                ProjectImages: {
                    Title1: translations?.Project_Kharji_Cleaning_Services?.ProjectImages?.Title1 || "Default Title",
                    Link1: translations?.Project_Kharji_Cleaning_Services?.ProjectImages?.Link1 || "Default Link1",
                    Link2: translations?.Project_Kharji_Cleaning_Services?.ProjectImages?.Link2 || "Default Link2",
                    Link3: translations?.Project_Kharji_Cleaning_Services?.ProjectImages?.Link3 || "Default Link2",
                },
            },
        },
        {
            countPage: [1, 2, 3, 4],
            id: "div6", // unique id for this project
            SiteDefinition: {
                Title: translations?.Down_Syndrome_Support_Platform?.Title || "Default Title",
                Description: translations?.Down_Syndrome_Support_Platform?.Description || "Default Description",
            },
            ImportantPoints: {
                Title: translations?.Down_Syndrome_Support_Platform?.MainFeatures?.Title || "",

                Dashboard: translations?.Down_Syndrome_Support_Platform?.MainFeatures?.Dashboard || "",
                AIChat: translations?.Down_Syndrome_Support_Platform?.MainFeatures?.AIChat || "",
                Authentication: translations?.Down_Syndrome_Support_Platform?.MainFeatures?.Authentication || "",
                FileUpload: translations?.Down_Syndrome_Support_Platform?.MainFeatures?.FileUpload || "",
                Security: translations?.Down_Syndrome_Support_Platform?.MainFeatures?.Security || "",
                TokenManagement: translations?.Down_Syndrome_Support_Platform?.MainFeatures?.TokenManagement || "",
            },

            ProjectDetails: {
                Title: translations?.Down_Syndrome_Support_Platform?.TechnologiesUsed?.Title || "Default Title",
                Technologies: {
                    _1: translations?.Down_Syndrome_Support_Platform?.TechnologiesUsed?.Backend?._1,
                    _2: translations?.Down_Syndrome_Support_Platform?.TechnologiesUsed?.Backend?._2,
                    _3: translations?.Down_Syndrome_Support_Platform?.TechnologiesUsed?.Backend?._3,
                    _4: translations?.Down_Syndrome_Support_Platform?.TechnologiesUsed?.Backend?._4,
                    _5: translations?.Down_Syndrome_Support_Platform?.TechnologiesUsed?.Backend?._5,
                    _6: translations?.Down_Syndrome_Support_Platform?.TechnologiesUsed?.Backend?._6,
                    _7: translations?.Down_Syndrome_Support_Platform?.TechnologiesUsed?.AI?._1,
                },
                ProjectImages: {
                    Title1: translations?.Down_Syndrome_Support_Platform?.ProjectLinks?.Title1 || "Default Title",
                    Link1: translations?.Down_Syndrome_Support_Platform?.ProjectLinks?.Link1 || "Default Link1",
                    Link2: translations?.Down_Syndrome_Support_Platform?.ProjectLinks?.Link2 || "Default Link2",
                    Link3: translations?.Down_Syndrome_Support_Platform?.ProjectLinks?.Link3 || "Default Link3",
                    Link4: translations?.Down_Syndrome_Support_Platform?.ProjectLinks?.Link4 || "Default Link4",
                },
            },
        },
        {
            countPage: [1, 2, 3, 4, 5],
            id: "div7",
            SiteDefinition: {
                Title: translations?.Project_7_Ecommerce?.Title || "Default Title",
                Description: translations?.Project_7_Ecommerce?.Description || "Default Description",
            },
            ImportantPoints: {
                Title: translations?.Project_7_Ecommerce?.MainFeatures?.Title || "",
                MultiChannelAuth: translations?.Project_7_Ecommerce?.MainFeatures?.MultiChannelAuth || "",
                CoreModules: translations?.Project_7_Ecommerce?.MainFeatures?.CoreModules || "",
                AdvancedReviews: translations?.Project_7_Ecommerce?.MainFeatures?.AdvancedReviews || "",
                Notifications: translations?.Project_7_Ecommerce?.MainFeatures?.Notifications || "",
                ImageUploads: translations?.Project_7_Ecommerce?.MainFeatures?.ImageUploads || "",
            },
            ProjectDetails: {
                Title: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Title || "Default Title",
                Technologies: {
                    Backend: {
                        _1: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Backend?._1 || "",
                        _2: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Backend?._2 || "",
                        _3: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Backend?._3 || "",
                        _4: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Backend?._4 || "",
                        _5: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Backend?._5 || "",
                    },
                    Services: {
                        _1: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Services?._1 || "",
                        _2: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Services?._2 || "",
                        _3: translations?.Project_7_Ecommerce?.TechnologiesUsed?.Services?._3 || "",
                    },
                },
                ProjectGoal: {
                    Title: translations?.Project_7_Ecommerce?.ProjectGoal?.Title || "Default Title",
                    Description: translations?.Project_7_Ecommerce?.ProjectGoal?.Description || "Default Description",
                },
                Integration: {
                    Title: translations?.Project_7_Ecommerce?.Integration?.Title || "Default Title",
                    Description: translations?.Project_7_Ecommerce?.Integration?.Description || "Default Description",
                },
                ProjectImages: {
                    Title1: translations?.Project_7_Ecommerce?.ProjectImages?.Title1 || "Default Title",
                    Link1: translations?.Project_7_Ecommerce?.ProjectImages?.Link1 || "Default Link1",
                    Link2: translations?.Project_7_Ecommerce?.ProjectImages?.Link2 || "Default Link2",
                    Link3: translations?.Project_7_Ecommerce?.ProjectImages?.Link3 || "Default Link3",
                    Link4: translations?.Project_7_Ecommerce?.ProjectImages?.Link4 || "Default Link3",
                },
            },
        },

    ];

    return (
        isClient && (
            <>
                <style>
                    {
                        `
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
                        `
                    }
                </style>
                <section
                    className="w-full h-full bg-gradient-to-r from-[#0c3541] to-[#0e2ee6] text-white mt-[110px]"
                >
                    <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10 sm:ml-[50%] md:ml-[40%] ml-[25%] w-[250px] pt-[60px]">
                        {translations?.Projects?.Projects}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">{projectContent?.map((content, index) => (
                        
                        <FlipBookItem
                            key={content.id}
                            content={content}
                            index={index}
                            isRTL={isRTL}
                            pages={pages}
                            totalPages={totalPages}
                            flipNext={flipNext}
                            flipPrev={flipPrev}
                            translations={translations}
                            getPageBackground={getPageBackground}
                            getProjectsImage={getProjectsImage}
                            getProjectsLinkes={getProjectsLinkes}
                        />
                    ))}

                    </div>
                </section>
            </>
        )
    );
};

export default BookFlip;
