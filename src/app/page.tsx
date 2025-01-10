import Navbar from '@/app/componant/navbar';
import BookFlip from '@/app/componant/bookFlip';
import SkillsSection from '@/app/componant/SkillsSection';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Vismeforms = dynamic(()=>import('@/app/componant/vismeforms'), {ssr:false} )
const AboutMyself = dynamic(()=>import('@/app/componant/AboutMyself'), {ssr:false} )

export default function Home() {




if(typeof window !== 'undefined') {
                AOS.init({
                    duration: 3000,
                });
            }
    return (
        <>
                    <Navbar />
                     <main className="relative mt-[0px] h-[10%] sm:h-[30%]  w-[100%] sm:w-[50%]  sm:ml-[20%] bg-[#3544c738] z-10 rounded-full"> 
                    <Vismeforms />
                    </main> 

                    <div className="container mt-[-250px] sm:mt-[-350px]  mr-0 sm:ml-[0%] sm:mr-[10%] pt-[-100] w-[100%]">
                        <main data-aos="fade-top" className={`flex  items-center justify-center min-h-screen z-100 overflow-hidden pl-6  ml-[-70px]`}>
                            <AboutMyself />         
                        </main>

                     </div>
                      <section className='sm:mt-[-350px] mt-[-200px]'>
                        <SkillsSection/>
                        </section>
                        <hr className="border-solid border-indigo-700 border-[2px] w-full"></hr>
                              <BookFlip/>
             
                </>

    );
}
