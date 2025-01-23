'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname  } from 'next/navigation';
import {useTranslations} from 'next-intl';

const Navbar = () => {

    const t = useTranslations();


    const pathname = usePathname();

    // dealing with the translation condtion

    let newPathToTranclate = pathname.slice(3) ;
    let newPathToChangeTextButton = pathname.slice(1,3) ;
   
    if(newPathToChangeTextButton == 'en'){
        newPathToChangeTextButton = 'ar' ;
    }else{
        newPathToChangeTextButton = 'en'
    }

   let urlTranslate =  `/${newPathToChangeTextButton}${newPathToTranclate}` ;










    // console.log(urlTranslate);
    // console.log('params------------------111111111111---------');

    // console.log(newPathToChangeTextButton);
    // console.log('params---------------------------');
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(true);


  // handle closing the animation
  const toggleMenu = () => {

    if (isOpen == false) {
    setIsOpen(true);

    //   setIsClosing(true); 
      
    } else {
        setIsClosing(false);
      setTimeout(() => {
          setIsOpen(false);
        setIsClosing(true);

      }, 900); 
    }
  };





  return (
    <nav className="bg-gray-800 text-white shadow-lg sm:mt-0 pt-11 z-20 fixed top-0 right-0 left-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <p>{t('Navpar.Description')}</p>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 z-20">
          <Link href="/en" className='px-2 hover:text-yellow-400'>
            <p className="hover:text-yellow-400 ">{t('Navpar.Home')}</p>
          </Link>
          <Link href="/en/projects" className='px-2 hover:text-yellow-400'>
            <p className="hover:text-yellow-400 ">{t('Navpar.Projects')}</p>
          </Link>
          <Link href={`${urlTranslate}`} className=' px-2 hover:text-yellow-400'>
            <p className="hover:text-yellow-400 ">
                {
                newPathToChangeTextButton != "en" ? "ترجمة" : "translate"
                }</p>
          </Link>
          {/* <Link href="#about" className='hover:text-[13px] px-2 hover:text-yellow-400'>
            <p className="hover:text-yellow-400 hover:text-[13px]">About Me</p>
          </Link> */}
          <Link href="/en/ContactMe" className=' px-2 hover:text-yellow-400'>
            <p className="hover:text-yellow-400">{t('Navpar.Contact')}</p>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-20">
          <button onClick={toggleMenu} className="text-white focus:outline-none z-20">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
       (
  <div className={`md:hidden fixed z-30 bg-gray-800 text-white px-4 pb-4  ${isClosing? "animate-slide-in": "animate-slide-out"}`}>
    <Link href="/en">
      <p className="block py-5 px-5 hover:text-yellow-400">{t('Navpar.Home')}</p>
    </Link>
    <Link href="/en/projects">
      <p className="block py-5 px-5 hover:text-yellow-400">{t('Navpar.Projects')}</p>
    </Link>
    <Link href={`${urlTranslate}`}>
      <p type="button"
        className="block py-5 px-5 hover:text-yellow-400"> {
                newPathToChangeTextButton !== "en" ? "ترجمة" : "translate"
               } 
                </p>
    </Link>
    {/* <Link href="#about">
      <p className="block py-5 px-5 hover:text-yellow-400">About Me</p>
    </Link> */}
    <Link href="/en/ContactMe">
      <p className="block py-5 px-5 hover:text-yellow-400">{t('Navpar.Contact')}</p>
    </Link>
  </div>
) }

    </nav>
  );
};

export default Navbar;
