'use client'
import Link from 'next/link';
import { useState ,useEffect} from 'react';
import {loadTranslations} from '../../utils/loadTranslations';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setTranslations } from '../../lib/slices/languageSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const { translations } = useSelector((state) => state.language);

    useEffect(() => {
        const fetchTranslations = async () => {
            const getLanguageFromLocal = localStorage.getItem('language') || localStorage.setItem('language', 'en');
            const newLanguage = getLanguageFromLocal === 'en' ? 'en' : 'ar';
            const translations = await loadTranslations(newLanguage);

            dispatch(setLanguage(newLanguage));
            dispatch(setTranslations(translations));
            console.log("Navpar Home:", translations.Navpar.Home);
        };
        fetchTranslations();
    }, []); // يتم تحميل الترجمات فقط مرة واحدة عند تحميل المكون.

    const handleLanguageChange = async () => {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        const translations = await loadTranslations(newLanguage);

        dispatch(setLanguage(newLanguage));
        dispatch(setTranslations(translations));
        console.log("Navpar Home:", translations.Navpar.Home);
        localStorage.setItem('language', newLanguage);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(true);

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsClosing(false);
            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(true);
            }, 900);
        }
    };

    return (
        <nav className="bg-gray-800 text-white shadow-lg sm:mt-0 pt-11 fixed top-0 right-0 left-0 z-30">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <p>{translations?.Navpar?.Description || 'Description'}</p>
                    </Link>
                </div>

                {/* Menu Items */}
                <div className="hidden md:flex space-x-6 z-20">
                    <Link href="/" className='px-2 hover:text-yellow-400'>
                        <p className="hover:text-yellow-400">{translations?.Navpar?.Home || 'Home'}</p>
                    </Link>
                    <Link href="/projects" className='px-2 hover:text-yellow-400'>
                        <p className="hover:text-yellow-400">{translations?.Navpar?.Projects || 'Projects'}</p>
                    </Link>
                    <div className='px-2 hover:text-yellow-400'>
                        <button onClick={handleLanguageChange}
                                className=" hover:text-yellow-400">
                            {currentLanguage === "en" ? "ترجمة" : "translate"}
                        </button>
                    </div>
                    <Link href="/ContactMe" className='px-2 hover:text-yellow-400'>
                        <p className="hover:text-yellow-400">{translations?.Navpar?.Contact || 'Contact'}</p>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-20">
                    <button onClick={toggleMenu} className="text-white focus:outline-none z-20">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden fixed z-30 bg-gray-800 text-white px-4 pb-4 ${isClosing ? "animate-slide-in" : "animate-slide-out"}`}>
                    <Link href="/">
                        <p className="block py-5 px-5 hover:text-yellow-400">{translations?.Navpar?.Home || 'Home'}</p>
                    </Link>
                    <Link href="/projects">
                        <p className="block py-5 px-5 hover:text-yellow-400">{translations?.Navpar?.Projects || 'Projects'}</p>
                    </Link>
                    <p>
                        <button onClick={handleLanguageChange} className="block py-5 px-5 hover:text-yellow-400">
                            {currentLanguage === "en" ? "ترجمة" : "translate"}
                        </button>
                    </p>
                    <Link href="/ContactMe">
                        <p className="block py-5 px-5 hover:text-yellow-400">{translations?.Navpar?.Contact || 'Contact'}</p>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
