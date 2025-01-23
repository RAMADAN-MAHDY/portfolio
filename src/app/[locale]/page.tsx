"use client"
// import { useState, useEffect } from 'react'
import SkillsSection from '@/app/[locale]/componant/SkillsSection';
// import dynamic from 'next/dynamic';
import Vismeforms from '@/app/[locale]/componant/vismeforms';
import AboutMyself from '@/app/[locale]/componant/AboutMyself';
   

// const Vismeforms = dynamic(()=>import('@/app/[locale]/componant/vismeforms'), {ssr:false} )
// const AboutMyself = dynamic(()=>import('@/app/[locale]/componant/AboutMyself'), {ssr:false} )


 function Home() {

   

    return (
        <>
                  
                     <main className="relative mt-[150px] h-[10%] sm:h-[30%]  w-[100%] sm:w-[50%]  sm:ml-[20%] bg-[#3544c738] z-10 rounded-full"> 
                    <Vismeforms />
                    </main> 

                    <div className="container mt-[-250px] sm:mt-[-350px]  mr-0 sm:ml-[0%] sm:mr-[10%] pt-[0px] w-[100%]">
                        <main  className={`flex  items-center justify-center min-h-screen z-100 overflow-hidden pl-6 ml-[-70px]`}>
                    <AboutMyself />         
                        </main>

                     </div>
                    <section className='sm:mt-[-350px] mt-[-200px]'>
                    <SkillsSection/>
                    </section>
                        <hr className="border-solid border-indigo-700 border-[2px] w-full"></hr>
                        
                </>

    );
}
export default Home;
