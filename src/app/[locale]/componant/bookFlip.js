"use client"
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BookFlip = () => {
    const [isClient, setIsClient] = useState(false);
    const [pages, setPages] = useState({
        div1: 0,
        div2: 0,
        div3: 0,
    });
    const t = useTranslations();
    const pathname = usePathname();
    const isRTL = pathname.slice(1, 3) !== 'en';

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
    

    const totalPages = 4;

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
            default:
                return "bg-[#222322]";
        }
    };

    const projectContent = [
        {
            id: "div1",
            SiteDefinition: {
                Title: t('SiteDefinition.Title'),
                Description: t('SiteDefinition.Description')
            },
            ImportantPoints: {
                Title: t('ImportantPoints.Title'),
                ControlPanel: t('ImportantPoints.ControlPanel'),
                ProductManagement: t('ImportantPoints.ProductManagement'),
                OrderManagement: t('ImportantPoints.OrderManagement'),
                ShoppingCart: t('ImportantPoints.ShoppingCart'),
                Support: t('ImportantPoints.Support'),
                OrderForm: t('ImportantPoints.OrderForm'),
                DetailsPage: t('ImportantPoints.DetailsPage')
            },
            ProjectDetails: {
                Title: t('ProjectDetails.Title'),
                Description: t('ProjectDetails.Description'),
                Technologies: {
                    _1: t('ProjectDetails.Technologies.1'),
                    _2: t('ProjectDetails.Technologies.2'),
                    _3: t('ProjectDetails.Technologies.3'),
                    _4: t('ProjectDetails.Technologies.4'),
                    _5: t('ProjectDetails.Technologies.5')
                },
                ProjectImages: {
                    Title1: t('ProjectDetails.ProjectImages.Title1'),
                    Link1: t('ProjectDetails.ProjectImages.Link1'),
                    Link2: t('ProjectDetails.ProjectImages.Link2')
                }
            }
        },
        {
            id: "div2",
            SiteDefinition: {
                Title: "t('SiteDefinition.Title')",
                Description: t('SiteDefinition.Description')
            },
            ImportantPoints: {
                Title: "t('ImportantPoints.Title')",
                ControlPanel: t('ImportantPoints.ControlPanel'),
                ProductManagement: t('ImportantPoints.ProductManagement'),
                OrderManagement: t('ImportantPoints.OrderManagement'),
                ShoppingCart: t('ImportantPoints.ShoppingCart'),
                Support: t('ImportantPoints.Support'),
                OrderForm: t('ImportantPoints.OrderForm'),
                DetailsPage: t('ImportantPoints.DetailsPage')
            },
            ProjectDetails: {
                Title: "t('ProjectDetails.Title')",
                Description: t('ProjectDetails.Description'),
                Technologies: {
                    _1: t('ProjectDetails.Technologies.1'),
                    _2: t('ProjectDetails.Technologies.2'),
                    _3: t('ProjectDetails.Technologies.3'),
                    _4: t('ProjectDetails.Technologies.4'),
                    _5: t('ProjectDetails.Technologies.5')
                },
                ProjectImages: {
                    Title1: "t('ProjectDetails.ProjectImages.Title1')",
                    Link1: t('ProjectDetails.ProjectImages.Link1'),
                    Link2: t('ProjectDetails.ProjectImages.Link2')
                }
            }
        }
    ];

    if (!projectContent || !Array.isArray(projectContent) || projectContent.length === 0) {
        return <div>{t('Errors.NoContent')}</div>;
    }

    const renderFlipBook = (content, index) => {
        return (
            <div
                key={content.id}
                className="perspective relative w-[574px] h-[550px] sm:h-[450px] preserve-3d z-10 mb-[60px] sm:ml-[10%]">
                {[7, 9, 3, 4].map((page, pageIndex) => (
                    <div
                        key={pageIndex}
                        className={`page ${pages[content.id] == 0 ? getPageBackground(index) : "bg-[#e4ebe4]"} bg-cover bg-center border border-gray-800 flex items-center justify-center text-2xl font-bold w-[100%] h-[100%]  ${pages[content.id] > pageIndex && `${pages[content.id] == 1 && "rotate-y-101"} rotate-y-100`
                            }`}
                        style={{ zIndex: totalPages - pages[content.id] }}
                    >
                      
                        
                        <div className={`absolute ${pages[content.id] > pageIndex ? "hidden-text" : "visible-text"}`}>
                     
                            {pages[content.id] == 1  ?
                                <div className=" text-gray-800 text-[4px] whitespace-break-spaces " data-aos="fade-top" dir={isRTL ? "rtl" : "ltr"}>
                                    <h3 className="text-xl font-bold mb-2 pl-3 text-[24px]">
                                        {content.SiteDefinition.Title}
                                    </h3>
                                    <p className='text-[14px] pl-5'>
                                        {content.SiteDefinition.Description}
                                    </p>
                                    <h3 className="text-xl font-bold mt-2 pl-3 mb-0 text-[24px]">
                                        {content.ImportantPoints.Title}
                                    </h3>
                                    <ul className="list-disc ml-6 text-[10px]">
                                        <li>{content.ImportantPoints.ControlPanel}</li>
                                        <li>{content.ImportantPoints.ProductManagement}</li>
                                        <li>{content.ImportantPoints.OrderManagement}</li>
                                        <li>{content.ImportantPoints.ShoppingCart}</li>
                                        <li>{content.ImportantPoints.Support}</li>
                                        <li>{content.ImportantPoints.OrderForm}</li>
                                        <li>{content.ImportantPoints.DetailsPage}</li>
                                    </ul>
                                </div>
                                : pages[content.id] === 2 ?
                                    <div className=" text-gray-800 text-[4px] whitespace-break-spaces " data-aos="fade-top" dir={isRTL ? "rtl" : "ltr"}>
                                        <h3 className="text-xl font-bold p-5 mb-2 text-[24px]">
                                            {content.ProjectDetails.Title}
                                        </h3>
                                        <p className='text-[14px] p-5'>
                                            {content.ProjectDetails.Description}
                                        </p>
                                        <ul className="list-disc p-6 text-[13px]">
                                            <li>{content.ProjectDetails.Technologies._1}</li>
                                            <li>{content.ProjectDetails.Technologies._2}</li>
                                            <li>{content.ProjectDetails.Technologies._3}</li>
                                            <li>{content.ProjectDetails.Technologies._4}</li>
                                            <li>{content.ProjectDetails.Technologies._5}</li>
                                        </ul>
                                    </div>
                                    : pages[content.id] === 3 ?
                                        <section className="grid grid-cols-3 bg-[rgba(24,0,255,0.25)] gap-2 w-[570px] h-[450px] overflow-hidden" data-aos="fade-top" dir={isRTL ? "rtl" : "ltr"}>
                                            <h1 className='text-[#000] col-span-3 text-center pt-3' >{content.ProjectDetails.ProjectImages.Title1}</h1>
                                            <div className="relative w-full col-span-2 h-[100%] mt-0 drop-shadow-[0_35px_35px_rgba(24,0,255,0.25)]">
                                                <img className="w-full h-full" src={getProjectsImage(index)[0]} alt="Nature" />
                                            </div>
                                            <div className="relative w-full h-full">
                                                <img src={getProjectsImage(index)[1]} alt="City Skyline" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="relative w-full h-full col-span-2">
                                                <img src={getProjectsImage(index)[2]} alt="Forest Mountain" className="object-cover w-full h-full " />
                                            </div>
                                            <div className="relative w-full h-full">
                                                <div className='w-full h-full text-[#000000] text-center mt-10'>
                                                    <a href={getProjectsLinkes(index)[1]} target='-plank' className='underline decoration-sky-500'>{content.ProjectDetails.ProjectImages.Link1}</a>
                                                    <br />
                                                    <br />
                                                    <a href={getProjectsLinkes(index)[0]} target='-plank' className='underline decoration-sky-500'>{content.ProjectDetails.ProjectImages.Link2}</a>
                                                </div>
                                            </div>
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
                    {t('Projects.FlipNext')}
                </button>
                <button
                    onClick={() => flipPrev(content.id)}
                    className="fixed bottom-[-40px] left-[10%] mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition z-40"
                >
                    {t('Projects.FlipPrev')}
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
                            {t('Projects.Projects')}
                        </h2>
                        <div className="container flex-wrap flex justify-around w-[100%]">
                            {projectContent.map((content, index) => renderFlipBook(content, index))}
                        </div>
                    </div>
                </section>
            </>
        )
    );
};

export default BookFlip;