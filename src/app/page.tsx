import SkillsSection from "@/app/componant/SkillsSection";
import Vismeforms from "@/app/componant/vismeforms";
import Footer from "@/app/componant/footer";
// import Chat from "@/app/componant/chat";
import SpiderWeb from '@/app/componant/SpiderWeb';
import AboutUs from "@/app/componant/aboutus";
import GetLanguageFromLocalStor from "@/app/componant/getLanguagefromLocalStor";
import ClientStyle from "@/app/componant/ClientStyle"; // هننقل الستايلات هنا
import FancyLoader from "@/app/componant/FancyLoader";
import SocialIcons from "@/app/componant/sociallcons";
export default function Home() {
  return (
    <>
      <FancyLoader />
      <GetLanguageFromLocalStor />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative mt-[120px] p-0 sm:p-8 w-full max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-[3rem] bg-white/20 dark:bg-slate-800/20 backdrop-blur-2xl border border-white/40 dark:border-slate-700/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-black/20">
          <SpiderWeb />
          <div className="relative z-20 px-6 py-16 sm:px-16 sm:py-24">
            <AboutUs />
            <div className="mt-20">
              <Vismeforms />
            </div>
          </div>
        </div>
      </main>
 <SocialIcons />

      <section className="mt-24 rounded-[3rem] max-w-7xl mx-auto overflow-hidden relative bg-white/20 dark:bg-slate-800/20 backdrop-blur-2xl border border-white/40 dark:border-slate-700/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-black/10">
        <div className="relative">
          <SpiderWeb />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl -z-10" />
          <div className="px-0 sm:px-8">
            <SkillsSection />
          </div>
        </div>
      </section>

      <div className="mt-24 px-8 opacity-20 dark:opacity-10">
        <hr className="border-t-2 border-dashed border-white/20 dark:border-slate-700/50 w-full" />
      </div>

      <Footer />

      <ClientStyle />
    </>
  );
}
