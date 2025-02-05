"use client"
import { useState,useEffect } from 'react'
import { setLanguage, setTranslations } from '../../lib/slices/languageSlice';
import { useDispatch, useSelector } from 'react-redux';
import {loadTranslations} from '../../utils/loadTranslations';


import AOS from 'aos';
import 'aos/dist/aos.css';

const BookFlip = () => {
    const dispatch = useDispatch();

    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const { translations } = useSelector((state) => state.language);

    const [isClient, setIsClient] = useState(false);
    const [pages, setPages] = useState({
        div1: 0,
        div2: 0,
        div3: 0,
    });



    const isRTL = currentLanguage !== 'en';

    
    useEffect(() => {
        const fetchTranslations = async () => {
            const getLanguageFromLocal = localStorage.getItem('language') || localStorage.setItem('language', 'en');
            const newLanguage = getLanguageFromLocal === 'en' ? 'en' : 'ar';
            const translations = await loadTranslations(newLanguage);
            
            dispatch(setLanguage(newLanguage));
            dispatch(setTranslations(translations));
            console.log("Navpar Home:", translations.Navpar.Home);
        };
        fetchTranslations();
    }, []); // يتم تحميل الترجمات فقط مرة واحدة عند تحميل المكون.
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
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
            default:
                return "bg-[#222322]";
        }
    };

    const getProjectsLinkes = (index) => {
        switch (index) {
            case 0:
                return [
                    'https://github.com/RAMADAN-MAHDY/affiliate-app',
                     'https://elmahdy.vercel.app/',
                        ];
            case 1:
                return [
                    'https://github.com/RAMADAN-MAHDY/affiliate-app',
                      'https://elmahdy.vercel.app/',
                                    ];
            default:
                return "bg-[#222322]";
        }
    };

    const projectContent = [
        {
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
                    _5: translations?.ProjectDetails?.Technologies._5
                },
                ProjectImages: {
                    Title1: translations?.ProjectDetails?.ProjectImages?.Title1  || "Default Title",
                    Link1: translations?.ProjectDetails?.ProjectImages?.Link1 || "Default Link1",
                    Link2: translations?.ProjectDetails?.ProjectImages?.Link2 || "Default Link2"
                }
            }
        },
        {
            id: "div2",
            SiteDefinition: {
              Title: translations?.SiteDefinition_2?.Title || "Default Title",
              Description: translations?.SiteDefinition_2?.Description || "Default Description",
            },
            ImportantPoints: {
              Title: translations?.ImportantPoints_2?.Title || "Default Title",
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
                      _5: translations?.Project_2_Details?.Technologies._5
                  },
                  ProjectImages: {
                      Title1: translations?.Project_2_Details?.ProjectImages?.Title1  || "Default Title",
                      Link1: translations?.Project_2_Details?.ProjectImages?.Link1 || "Default Link1",
                      Link2: translations?.Project_2_Details?.ProjectImages?.Link2 || "Default Link2"
                  }
              }
          }



    ];

    if (!translations) {
        return <div>Loading...</div>; // يمكنك عرض شاشة تحميل أو رسالة مؤقتة هنا
      }

    const renderFlipBook = (content, index) => {
        return (
            <div
                key={content.id}
                className="perspective relative w-[294px] sm:w-[374px] h-[500px] preserve-3d z-10 mb-[60px] sm:ml-[10%]">
                {[1, 2, 3, 4 , 5].map((page, pageIndex) => (
                    <div
                        key={pageIndex}
                        className={`page ${pages[content.id] == 0 ? getPageBackground(index) : "bg-[#000000]"} ${pages[content.id] == 4 ? "bg-[rgba(0,0,0,0.43)]" : "bg-[#000000]"} bg-cover bg-center border border-gray-800 flex items-center justify-center text-[#fff] text-2xl font-bold w-[100%] h-[100%]  ${pages[content.id] > pageIndex && `${pages[content.id] == 1 && "rotate-y-101"} rotate-y-100`
                            }`}
                        style={{ zIndex: totalPages - pages[content.id] }}
                    >
                      
                        
                        <div className={`absolute ${pages[content.id] > pageIndex ? "hidden-text" : "visible-text"}`}>
                     
                            {pages[content.id] == 1  ?
                                <div className="  text-[4px] whitespace-break-spaces " data-aos="fade-top" dir={isRTL ? "rtl" : "ltr"}>
                                    <h3 className="text-xl font-bold mb-2 mr-6 pl-3 text-[24px]">
                                        {content?.SiteDefinition?.Title}
                                    </h3>
                                    <p className='text-[14px] mr-6 pl-5'>
                                        {content?.SiteDefinition?.Description}
                                    </p>
                                    <h3 className="text-xl font-bold mr-6 mt-2 pl-3 mb-0 text-[24px]">
                                        {content?.ImportantPoints?.Title}
                                    </h3>
                                    <ul className="list-disc mr-6 ml-6 text-[10px]">
                                        <li>{content?.ImportantPoints?.ControlPanel}</li>
                                        <li>{content?.ImportantPoints?.ProductManagement}</li>
                                        
                                       {content.id == "div1" && <li> {content?.ImportantPoints?.OrderManagement} </li> }
                                    </ul>
                                </div>
                                 : pages[content.id] === 2?

                                 <ul className="list-disc mr-3 ml-6 mt-[-200px] text-[10px]" dir={isRTL ? "rtl" : "ltr"}>
                                 {content.id == "div2" &&  <li> { content?.ImportantPoints?.OrderManagement} </li> }
                                 {content.id == "div1" &&
                                 <ul dir={isRTL ? "rtl" : "ltr"}>
                                 <li>{content?.ImportantPoints?.ShoppingCart}</li>
                                 <li>{content?.ImportantPoints?.Support}</li>
                                 <li>{content?.ImportantPoints?.OrderForm}</li>
                                 <li>{content?.ImportantPoints?.DetailsPage}</li>
                                 </ul>

                                 }
                             </ul>
   


                                : pages[content.id] === 3 ?
                                    <div className="text-[4px] whitespace-break-spaces " data-aos="fade-top" dir={isRTL ? "rtl" : "ltr"}>
                                        <h3 className="text-xl font-bold p-5 mb-2 text-[24px]">
                                            {content?.ProjectDetails?.Title}
                                        </h3>
                                        <p className='text-[14px] p-5'>
                                            {content.ProjectDetails.Description}
                                        </p>
                                        <ul className="list-disc p-6 text-[13px]">
                                            <li>{content?.ProjectDetails?.Technologies._1}</li>
                                            <li>{content?.ProjectDetails?.Technologies._2}</li>
                                            <li>{content?.ProjectDetails?.Technologies._3}</li>
                                            <li>{content?.ProjectDetails?.Technologies._4}</li>
                                            <li>{content?.ProjectDetails?.Technologies._5}</li>
                                        </ul>
                                    </div>
                                    : pages[content.id] === 4 ?
                                        <section className="grid grid-cols-3 gap-2 w-[100%] h-[100%] overflow-hidden" data-aos="fade-top" dir={isRTL ? "rtl" : "ltr"}>
                                            <h1 className=' col-span-3 text-center pt-4' >{content.id == "div1" ? content?.ProjectDetails?.ProjectImages?.Title1 : isRTL ? "فديو سريع عن الموقع " : "Quick video about the site"}</h1>
                                         {content.id == "div1" &&
                                         <div className="relative w-full col-span-2 h-[100%] mt-0 drop-shadow-[0_35px_35px_rgba(24,0,255,0.25)]">
                                         <img className="w-full h-full" src={getProjectsImage(index)[0]} alt="Nature" />
                                      </div>
                                         }
                                         {content.id == "div1" &&
                                         <div className="relative w-full h-full">
                                         <img src={getProjectsImage(index)[1]} alt="City Skyline" className="w-full h-full object-cover" />
                                     </div>
                                        }
                                        {content.id == "div1" &&
                                         <div className="relative w-full h-full col-span-3">
                                         <img src={getProjectsImage(index)[2]} alt="Forest Mountain" className="object-cover w-full h-full " />
                                     </div>
                                        }
                                            
                                            
                                            {content.id == "div2" &&  
                                            <div className="relative w-full h-full col-span-3 row-span-3">
                                                  <script src="https://fast.wistia.com/player.js" async></script>
                                                  <script src="https://fast.wistia.com/embed/59je9q3snh.js" async type="module"></script>
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
                                                  <wistia-player media-id="59je9q3snh" aspect="1.7777777777777777"></wistia-player>
                                            </div>
                                            
                                            
                                            }
                                             {content.id == "div1" &&  
                                                <div className='w-full h-full text-[#ffffff] text-center mt-2 text-[12px] col-span-3'>
                                                    <a href={getProjectsLinkes(index)[1]} target='-plank' className='bg-[#26458a] p-3 mx-3 rounded-lg  hover:bg-[#2669f8] rounded-tl-[4px] rounded-tr-[50px] rounded-bl-[60px] rounded-br-[9px]' >{content?.ProjectDetails?.ProjectImages?.Link1}</a>
                                                
                                                    
                                                    <a href={getProjectsLinkes(index)[0]} target='-plank' className='bg-[#26458a] p-3 rounded-tl-[50px] rounded-tr-[4px] rounded-bl-[9px] rounded-br-[60px]  hover:bg-[#2669f8]'>{content?.ProjectDetails?.ProjectImages?.Link2}</a>
                                                </div>
                                             
                                             }
                                          
                                        </section>
                                        :
                                        <>
                                        </>
                            }
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
                <section data-aos="fade-top" className=' w-[100%] h-full py-10 bg-gradient-to-r from-[#0c3541] to-[#0e2ee6] text-white mt-[110px]'>
                    <div className="container">
                        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10 sm:ml-[50%] ml-[25%] w-[150px]">
                            {translations?.Projects?.Projects}
                        </h2>
                        <div className="container flex-wrap flex justify-around w-[100%]">
                            {projectContent?.map((content, index) => renderFlipBook(content, index))}
                        </div>
                    </div>
                </section>
            </>
        )
    );
};

export default BookFlip;