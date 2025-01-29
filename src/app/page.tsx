"use client";
import { useEffect, useState } from 'react';
import SkillsSection from '@/app/componant/SkillsSection';
import Vismeforms from '@/app/componant/vismeforms';
import { loadTranslations } from '@/utils/loadTranslations';
import { useDispatch } from 'react-redux';
import { setLanguage, setTranslations } from '@/lib/slices/languageSlice';
import AboutMyself from "@/app/componant/AboutMyself";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      const getLanguageFromLocal = localStorage.getItem('language') || 'en';
      const newLanguage = getLanguageFromLocal === 'en' ? 'en' : 'ar';
      const translations = await loadTranslations(newLanguage);
      
      dispatch(setLanguage(newLanguage));
      dispatch(setTranslations(translations));
      
      setLoading(false);
    };
    fetchTranslations();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="relative mt-[150px] h-[10%] sm:h-[30%] w-[100%] sm:w-[50%] sm:ml-[20%] bg-[#3544c738] z-10 rounded-full">
        <Vismeforms />
      </main>

      <div className="container mt-[-250px] sm:mt-[-350px] mr-0 sm:ml-[0%] sm:mr-[10%] pt-[0px] w-[100%]">
        <main className="flex items-center justify-center min-h-screen z-100 overflow-hidden pl-6 ml-[-70px]">
          <AboutMyself />
        </main>
      </div>

      <section className="sm:mt-[-350px] mt-[-200px]">
        <SkillsSection />
      </section>

      <hr className="border-solid border-indigo-700 border-[2px] w-full"></hr>
    </>
  );
}

export default Home;