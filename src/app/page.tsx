
import AboutMyself from '@/app/componant/AboutMyself';
import Navbar from '@/app/componant/navbar';
import BookFlip from '@/app/componant/bookFlip';
import SkillsSection from '@/app/componant/SkillsSection';
import Vismeforms from '@/app/componant/vismeforms' ;

export default function Home() {

    return (
        <>
                    <Navbar />
                     <main className="relative mt-[0px] h-[20%] sm:h-[30%]  w-[100%] sm:w-[100%] sm-mt-3 bg-[#121431] z-10">
                     
                        <Vismeforms />
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
                              <BookFlip/>
             
                </>

    );
}
