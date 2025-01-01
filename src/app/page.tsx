'use client';
import ImageScroll from '@/app/componant/images';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import SpiderWeb from '@/app/componant/SpiderWeb';
import AboutMyself from '@/app/componant/AboutMyself';
import Navbar from '@/app/componant/navbar';
import { useRouter } from 'next/navigation';
import BookFlip from '@/app/componant/bookFlip';
import SkillsSection from '@/app/componant/SkillsSection';


export default function Home() {

    const router = useRouter()
    const [isClient, setIsClient] = useState(false);
    const [reload , setreload] = useState(false)

    // console.log(router.refresh())

    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);


    useEffect(() => {
    //     router.refresh()
    // console.log(router.refresh())

    // if(!reload){
    //     setreload(true);
    //     window.location.reload();
    // }


        // window.location.reload();
        if (isClient) {
            AOS.init({
                duration: 3000,
            });
        }
    }, [isClient]);

    return (
        <>
            {isClient && (
                <>
                    <Navbar />
                    <main className="relative mt-[0px] h-[20%] sm:h-[30%]  w-[190%] sm:w-[100%] sm-mt-3 bg-[#121431] z-10">
                    <div className="absolute top-0 left-0 w-full h-full -z-10">
                            <SpiderWeb height="100%" />
                        </div>
                        </main>
                     <main className="relative mt-[0px] h-[20%] sm:h-[30%]  w-[100%] sm:w-[100%] sm-mt-3 bg-[#121431] z-10">
                        {/* SpiderWeb as background */}
                         <div className="absolute top-0 left-0 w-full h-full -z-10">
                            <SpiderWeb height="100%" />
                        </div>
                        <div className="visme_d" data-title="Untitled Project" data-url="y4v7xmqg-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="87718"></div>
                        <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js" async></script>
                        <div className="bg-[#0c0c0c93] w-full h-6 sm:mt-[-90px] mt-[-120px]"></div>
                        <div className="bg-[#fa070700] w-full h-full top-0 left-0 z-50 absolute"></div>
                    </main> 

                    
      <hr className="border-solid border-indigo-700 border-[2px] w-full"></hr>
                    <div className="container mt-[-350px] mr-0 sm:ml-[0%] sm:mr-[10%] pt-[-100] w-[100%]">
                        <main data-aos="fade-left" className={`flex  items-center justify-center min-h-screen z-100 overflow-hidden pl-6  ml-[-70px]`}>
                            <AboutMyself />
                            
                        </main>
                    </div>
                    <section className='mt-[-350px]'>
                        <SkillsSection/>
                        </section>
                        <hr className="border-solid border-indigo-700 border-[2px] w-full"></hr>

                    <section data-aos="fade-left" className=' w-[50%]'>
<BookFlip/>
                    </section>
                </>
            )}
        </>
    );
}
