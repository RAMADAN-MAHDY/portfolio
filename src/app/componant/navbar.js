'use client'
import Link from 'next/link';
import { useState ,useEffect} from 'react';
import {loadTranslations} from '../../utils/loadTranslations';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setTranslations } from '../../lib/slices/languageSlice';
import { FaHome, FaProjectDiagram, FaEnvelope, FaLanguage } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const { translations } = useSelector((state) => state.language);
    const pathname = usePathname();

    useEffect(() => {
        const fetchTranslations = async () => {
            const getLanguageFromLocal = localStorage.getItem('language') || localStorage.setItem('language', 'en');
            const newLanguage = getLanguageFromLocal === 'en' ? 'en' : 'ar';
            const translations = await loadTranslations(newLanguage);

            dispatch(setLanguage(newLanguage));
            dispatch(setTranslations(translations));
            // console.log("Navpar Home:", translations.Navpar.Home);
        };
        fetchTranslations();
    }, []); // يتم تحميل الترجمات فقط مرة واحدة عند تحميل المكون.

    const handleLanguageChange = async () => {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        const translations = await loadTranslations(newLanguage);

        dispatch(setLanguage(newLanguage));
        dispatch(setTranslations(translations));
        // console.log("Navpar Home:", translations.Navpar.Home);
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
                    <Link href="/" className={`px-2 flex items-center ${pathname === '/' ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}`}> 
                        <FaHome className="mr-2" />
                        <p>{translations?.Navpar?.Home || 'Home'}</p>
                    </Link>
                    <Link href="/projects" className={`px-2 flex items-center ${pathname === '/projects' ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}`}> 
                        <FaProjectDiagram className="mr-2" />
                        <p>{translations?.Navpar?.Projects || 'Projects'}</p>
                    </Link>
                    <div className='px-2 flex items-center'>
                        <FaLanguage className="mr-2" />
                        <button onClick={handleLanguageChange} className="hover:text-yellow-400">
                            {currentLanguage === "en" ? "عربي " : "English"}
                        </button>
                    </div>
                    <Link href="/ContactMe" className={`px-2 flex items-center ${pathname === '/ContactMe' ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}`}> 
                        <FaEnvelope className="mr-2" />
                        <p>{translations?.Navpar?.Contact || 'Contact'}</p>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-20">
                    <button
                        onClick={toggleMenu}
                        className={`text-white focus:outline-none z-20 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden fixed z-30 bg-gray-800 text-white px-4 pb-4 ${isClosing ? "animate-slide-in" : "animate-slide-out"}`}>
                    <Link href="/" className={`flex items-center py-5 px-5 ${pathname === '/' ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}`} onClick={() => setIsOpen(false)}>
                        <FaHome className="mr-2" />
                        <p>{translations?.Navpar?.Home || 'Home'}</p>
                    </Link>
                    <Link href="/projects" className={`flex items-center py-5 px-5 ${pathname === '/projects' ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}`} onClick={() => setIsOpen(false)}>
                        <FaProjectDiagram className="mr-2" />
                        <p>{translations?.Navpar?.Projects || 'Projects'}</p>
                    </Link>
                    <div className="flex items-center py-5 px-5 hover:text-yellow-400">
                        <FaLanguage className="mr-2" />
                        <button onClick={() => { handleLanguageChange(); setIsOpen(false); }}>
                            {currentLanguage === "en" ? "ترجمة" : "translate"}
                        </button>
                    </div>
                    <Link href="/ContactMe" className={`flex items-center py-5 px-5 ${pathname === '/ContactMe' ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}`} onClick={() => setIsOpen(false)}>
                        <FaEnvelope className="mr-2" />
                        <p>{translations?.Navpar?.Contact || 'Contact'}</p>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
