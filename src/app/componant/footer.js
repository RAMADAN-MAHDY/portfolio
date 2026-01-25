"use client";
import { FaFacebook, FaGithub, FaWhatsapp ,FaLinkedin } from 'react-icons/fa';
import { setLanguage, setTranslations } from '../../lib/slices/languageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loadTranslations } from '../../utils/loadTranslations';
import { useEffect, useState } from 'react';

const Footer = () => {
  const dispatch = useDispatch();
  const { translations } = useSelector((state) => state.language);
  const [loading, setLoading] = useState(true);
  const [currentYear, setCurrentYear] = useState(null);  // لحل مشكلة تغيير التاريخ
  useEffect(() => {
    // تحميل الترجمات عند تحميل العميل
    const fetchTranslations = async () => {
      const getLanguageFromLocal = localStorage.getItem('language') || 'en';
      const newLanguage = getLanguageFromLocal === 'en' ? 'en' : 'ar';
      const translations = await loadTranslations(newLanguage);

      dispatch(setLanguage(newLanguage));
      dispatch(setTranslations(translations));
      setLoading(false);
    };

    fetchTranslations();
    
    // تعيين السنة الحالية بعد تحميل العميل
    setCurrentYear(new Date().getFullYear());

   
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="text-[#d9eca2] py-4 text-center w-full bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-[10px] border-t border-white/20 shadow-lg">
      <div className="mb-4 flex flex-wrap justify-center">
        <a href="/" className="mx-2 hover:text-yellow-400 transition-colors duration-300">{translations?.Navpar?.Home}</a>
        <a href="/projects" className="mx-2 hover:text-yellow-400 transition-colors duration-300">{translations?.Navpar?.Projects}</a>
        <a href="/about" className="mx-2 hover:text-yellow-400 transition-colors duration-300">{translations?.Navpar?.About_me}</a>
        {/* <a href="/ContactMe" className="mx-2 hover:text-yellow-400 transition-colors duration-300">{translations?.Navpar?.Contact}</a> */}
        {/* <a href="#press" className="mx-2 hover:text-yellow-400 transition-colors duration-300"></a> */}
      </div>
      <div className="mb-4 flex justify-center">
        <a href="https://www.facebook.com/profile.php?id=100006831971569" target='-blank' className="mx-2 hover:text-yellow-400 transition-colors duration-300"><FaFacebook /></a>
        {/* <a href="https://instagram.com" className="mx-2 hover:text-yellow-400 transition-colors duration-300"><FaInstagram /></a> */}
        <a href=" https://wa.me/201556299599" target='-blank' className="mx-2 hover:text-yellow-400 transition-colors duration-300"><FaWhatsapp /></a>
        <a href="https://github.com/RAMADAN-MAHDY?tab=repositories" target='-blank' className="mx-2 hover:text-yellow-400 transition-colors duration-300"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ramadan-mahdy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='-blank' className="mx-2 hover:text-yellow-400 transition-colors duration-300"><FaLinkedin /></a>
        {/* <a href="https://youtube.com" className="mx-2 hover:text-yellow-400 transition-colors duration-300"><FaYoutube /></a> */}
      </div>
      <div className="text-sm">
        &copy; {currentYear} {translations?.Footer?.Copyright}
      </div>
    </footer>
  );
};

export default Footer;
