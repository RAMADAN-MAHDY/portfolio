import SkillsSection from "@/app/componant/SkillsSection";
import Vismeforms from "@/app/componant/vismeforms";
import Footer from "@/app/componant/footer";
import Chat from "@/app/componant/chat";
import SpiderWeb from '@/app/componant/SpiderWeb';
import AboutUs from "@/app/componant/aboutus";
import GetLanguageFromLocalStor from "@/app/componant/GetLanguageFromLocalStor";
import ClientStyle from "@/app/componant/ClientStyle"; // هننقل الستايلات هنا
import FancyLoader from "@/app/componant/FancyLoader";
export default function Home() {
  return (
    <>
        <FancyLoader />
      <GetLanguageFromLocalStor />
      <main className="relative mt-[120px] p-4 sm:p-8 w-full bg-gradient-to-r from-[#0c3541] to-[#0f47ff] z-10 rounded-3xl overflow-hidden shadow-2xl border border-[#1e2a4a]/30">
        <SpiderWeb />
        <div className="relative bg-gradient-to-t from-[#0c354100] via-[#3d3b9b] to-[#0f47ff00] rounded-xl p-4 sm:p-10 z-20 shadow-[0_8px_40px_0_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <AboutUs />
          <Vismeforms />
        </div>
      </main>

      <Chat />

      <section className="mt-[50px]">
        <SkillsSection />
      </section>

      <hr className="border-solid border-indigo-700 border-[2px] w-full"></hr>

      <Footer />

      <ClientStyle />
    </>
  );
}
