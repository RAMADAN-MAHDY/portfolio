"use client";
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa';
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
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="mb-4 flex flex-wrap justify-center">
        <a href="/en" className="mx-2 hover:text-gray-400">{translations?.Navpar?.Home}</a>
        <a href="/en/projects" className="mx-2 hover:text-gray-400">{translations?.Navpar?.Projects}</a>
        <a href="/en/ContactMe" className="mx-2 hover:text-gray-400">{translations?.Navpar?.Contact}</a>
        {/* <a href="#press" className="mx-2 hover:text-gray-400"></a> */}
      </div>
      <div className="mb-4 flex justify-center">
        <a href="https://www.facebook.com/profile.php?id=100006831971569" target='-blank' className="mx-2 hover:text-gray-400"><FaFacebook /></a>
        {/* <a href="https://instagram.com" className="mx-2 hover:text-gray-400"><FaInstagram /></a> */}
        <a href=" https://wa.me/201556299599" target='-blank' className="mx-2 hover:text-gray-400"><FaWhatsapp /></a>
        <a href="https://github.com/RAMADAN-MAHDY?tab=repositories" target='-blank' className="mx-2 hover:text-gray-400"><FaGithub /></a>
        {/* <a href="https://youtube.com" className="mx-2 hover:text-gray-400"><FaYoutube /></a> */}
      </div>
      <div className="text-sm">
        &copy; {currentYear} {translations?.Footer?.Copyright}
      </div>
    </footer>
  );
};

export default Footer;
