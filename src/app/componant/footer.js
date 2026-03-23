"use client";
import { FaFacebook, FaGithub, FaWhatsapp ,FaLinkedin } from 'react-icons/fa';
import { setLanguage, setTranslations } from '../../lib/slices/languageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loadTranslations } from '../../utils/loadTranslations';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const dispatch = useDispatch();
  const { translations } = useSelector((state) => state.language);
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const [loading, setLoading] = useState(true);
  const [currentYear, setCurrentYear] = useState(null);  // لحل مشكلة تغيير التاريخ
   const isRTL = currentLanguage !== "en";
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
    <footer className="relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-700 to-indigo-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-lg italic">R</span>
              </div>
              <span className="text-slate-900 dark:text-white font-black tracking-tight text-xl">
                {translations?.Navpar?.Description?.split('|')[0] || 'Ramadan'}
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs font-bold">
              {isRTL 
                ? "مطور ويب متكامل متخصص في بناء تطبيقات عصرية ومبتكرة تهدف لتحقيق أفضل تجربة للمستخدم."
                : "Full-stack developer specialized in building modern and innovative applications focused on the best user experience."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs border-b border-blue-700/20 pb-2">{isRTL ? "روابط سريعة" : "Quick Links"}</h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 font-black transition-all hover:translate-x-1">{translations?.Navpar?.Home}</Link>
              <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 font-black transition-all hover:translate-x-1">{translations?.Navpar?.Projects}</Link>
              <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 font-black transition-all hover:translate-x-1">{translations?.Navpar?.About_me}</Link>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs border-b border-blue-700/20 pb-2">{isRTL ? "تواصل اجتماعي" : "Social Media"}</h4>
            <div className="flex gap-4">
              {[
                { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100006831971569", color: "hover:bg-blue-600", shadow: "hover:shadow-blue-600/40" },
                { icon: FaGithub, href: "https://github.com/RAMADAN-MAHDY?tab=repositories", color: "hover:bg-slate-900", shadow: "hover:shadow-slate-900/40" },
                { icon: FaWhatsapp, href: "https://wa.me/201556299599", color: "hover:bg-green-500", shadow: "hover:shadow-green-500/40" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/ramadan-mahdy", color: "hover:bg-blue-700", shadow: "hover:shadow-blue-700/40" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 ${social.color} ${social.shadow} hover:text-white transition-all duration-500 hover:-translate-y-2 shadow-sm`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            &copy; {currentYear} {translations?.Footer?.Copyright || "All rights reserved."}
          </p>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">
              {isRTL ? "متاح للعمل الآن" : "Status: Open for Work"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
