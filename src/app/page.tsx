'use client'
import ImageScroll from '@/app/componant/images';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import SpiderWeb from '@/app/componant/SpiderWeb';
import AboutMyself from '@/app/componant/AboutMyself';
import TechCube from '@/app/componant/techCube';
import Navbar from '@/app/componant/navbar';
// import styles from '@/app/componant/style/spiderWeb.module.css';



export default function Home() {





//    const [width, setWidth] = useState(window.innerWidth);
 
    useEffect(() => {
        AOS.init({
          duration: 3000, // يمكنك ضبط مدة التأثير هنا
        });

 
      }, []);
  return (


<>
<main className="relative mt-[-40px] h-[30%] w-[240%] sm:w-[100%] sm-mt-3 bg-[#121431] z-10">
  {/* SpiderWeb as background */}
  <div className="absolute w-full h-full -z-10">
    <SpiderWeb height="100%"/>
  </div>

  {/* <TechCube /> */}

  <div className="visme_d" data-title="Untitled Project" data-url="y4v7xmqg-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="87718"></div>

  <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js" async></script>

  <div className="bg-[#0c0c0c93] w-full h-6 sm:mt-[-90px] mt-[-120px]"></div>
  <div className="bg-[#fa070700] w-full h-full top-0 left-0 z-50 absolute  "></div>
</main>


        <Navbar/>

        <div className="container mx-0 ml-8 mt-[-200px] ">
          <main data-aos="fade-left" className={`flex flex-col items-center justify-center min-h-screen py-2  z-100 `}>
            <AboutMyself/>
       
          </main>
          {/* <main data-aos="flip-left"  className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-8">Image Scroll</h1>
            <Link className='text-[#fff]' href={'/projects'}>projects</Link>
            <ImageScroll /> 
          </main>
           <main data-aos="fade-zoom-in" className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-8">Image Scroll</h1>
            <ImageScroll />
          </main>
           <main data-aos="fade-right" className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-8">Image Scroll</h1>
            <ImageScroll />
          </main> 
          <main data-aos="fade-up" className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-8">Image Scroll</h1>
            <ImageScroll />
          </main> */}

        </div>
</>
      );
}
