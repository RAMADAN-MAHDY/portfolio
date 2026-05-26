'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { loadTranslations } from '../../utils/loadTranslations';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setTranslations } from '../../lib/slices/languageSlice';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X as CloseIcon, Globe, Home, Briefcase, User, BookOpen } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const { translations } = useSelector((state) => state.language);
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchTranslations = async () => {
            const getLanguageFromLocal = localStorage.getItem('language') || 'en';
            const newLanguage = getLanguageFromLocal === 'en' ? 'en' : 'ar';
            const translations = await loadTranslations(newLanguage);
            dispatch(setLanguage(newLanguage));
            dispatch(setTranslations(translations));
        };
        fetchTranslations();
    }, [dispatch]);

    const handleLanguageChange = async () => {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        const translations = await loadTranslations(newLanguage);
        dispatch(setLanguage(newLanguage));
        dispatch(setTranslations(translations));
        localStorage.setItem('language', newLanguage);
        setIsOpen(false);
    };

    const navLinks = [
        { href: '/', label: translations?.Navpar?.Home || 'Home', icon: Home },
        { href: '/books', label: translations?.Navpar?.Books || 'Books', icon: BookOpen },
        { href: '/projects', label: translations?.Navpar?.Projects || 'Projects', icon: Briefcase },
        { href: '/about', label: translations?.Navpar?.About_me || 'About Me', icon: User },
        // { href: '/admin', label: translations?.Navpar?.Admin || 'Admin', icon: LayoutDashboard },
    ];

    const isRTL = currentLanguage === 'ar';

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-[2000] transition-all duration-500 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl dark:shadow-black/20`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="group flex items-center gap-3">
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-12 h-12 bg-gradient-to-tr from-blue-700 to-indigo-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-900/50 transition-all duration-300"
                        >
                            <span className="text-white font-black text-xl italic">R</span>
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white font-black tracking-tight text-lg leading-tight group-hover:text-blue-700 transition-colors [text-shadow:_0_1px_1px_rgba(255,255,255,0.5)]">
                                {translations?.Navpar?.Description?.split('|')[0] || 'Ramadan'}
                            </span>
                            <span className="text-slate-900/60 dark:text-white/60 text-[10px] uppercase tracking-[0.3em] font-black">
                                {translations?.Navpar?.Description?.split('|')[1] || 'Developer'}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 bg-slate-900/5 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-900/10 dark:border-white/10 backdrop-blur-md">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            return (
                                <Link 
                                    key={link.href} 
                                    href={link.href}
                                    className={`relative px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-300 group ${
                                        isActive ? 'text-white' : 'text-slate-900/70 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="nav-active"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl -z-10 shadow-lg shadow-blue-900/20"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <Icon size={18} className={`${isActive ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
                                    <span className="font-black text-sm tracking-wide">{link.label}</span>
                                </Link>
                            );
                        })}
                        
                        <div className="w-px h-6 bg-slate-900/10 dark:bg-white/10 mx-1" />
                        
                        <button 
                            onClick={handleLanguageChange}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-900/70 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5 transition-all group"
                        >
                            <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                            <span className="font-black text-sm">{currentLanguage === 'en' ? 'العربية' : 'English'}</span>
                        </button>

                        <div className="w-px h-6 bg-slate-900/10 dark:bg-white/10 mx-1" />
                        
                        <ThemeSwitcher />
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900/5 border border-slate-900/10 text-slate-900 dark:text-[#fff] transition-all hover:bg-slate-900/10 active:scale-90"
                    >
                        {isOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Navigation Drawer - MOVED OUTSIDE motion.nav */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[3000] md:hidden"
                        />
                        <motion.div
                            initial={{ x: !isRTL ? -300 : 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: !isRTL ? -300 : 300, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className={`fixed top-0 bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-[280px] bg-white dark:bg-slate-900 border-l border-slate-900/10 dark:border-white/10 z-[3001] md:hidden p-8 flex flex-col gap-8 shadow-2xl`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-slate-900/40 dark:text-white/40 text-[10px] uppercase tracking-widest font-black">Ramadan</span>
                                <button onClick={() => setIsOpen(false)} className="text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    <CloseIcon size={20} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link 
                                            key={link.href} 
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                                                isActive 
                                                ? 'bg-blue-700 text-white shadow-lg shadow-blue-900/20' 
                                                : 'text-slate-900/60 dark:text-white/60 hover:bg-slate-900/5 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                            }`}
                                        >
                                            <Icon size={20} />
                                            <span className="font-black text-lg">{link.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="mt-auto pt-8 border-t border-slate-900/10 dark:border-white/10 flex flex-col gap-4">
                                <button 
                                    onClick={handleLanguageChange}
                                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900/5 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 transition-all border border-slate-900/5 dark:border-white/5"
                                >
                                    <div className="flex items-center gap-3">
                                        <Globe size={20} className="text-blue-700 dark:text-blue-400" />
                                        <span className="font-black">{currentLanguage === 'en' ? 'اللغة العربية' : 'Switch to English'}</span>
                                    </div>
                                    <span className="text-[10px] bg-slate-900/10 dark:bg-white/10 px-2 py-1 rounded-md uppercase font-black text-slate-900 dark:text-white">
                                        {currentLanguage === 'en' ? 'AR' : 'EN'}
                                    </span>
                                </button>
                                <div className="flex justify-center pt-2">
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
