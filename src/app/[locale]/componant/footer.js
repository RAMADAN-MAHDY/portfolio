import { FaFacebook, FaGithub , FaWhatsapp } from 'react-icons/fa';
import {useTranslations} from 'next-intl';

const Footer = () => {

const t = useTranslations();

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="mb-4 flex flex-wrap justify-center">
        <a href="/en" className="mx-2 hover:text-gray-400">{t('Navpar.Home')}</a>
        <a href="/en/projects" className="mx-2 hover:text-gray-400">{t('Navpar.Projects')}</a>
        <a href="/en/ContactMe" className="mx-2 hover:text-gray-400">{t('Navpar.Contact')}</a>
        {/* <a href="#press" className="mx-2 hover:text-gray-400"></a> */}
      </div>
      <div className="mb-4 flex justify-center">
        <a href="https://www.facebook.com/profile.php?id=100006831971569" className="mx-2 hover:text-gray-400"><FaFacebook /></a>
        {/* <a href="https://instagram.com" className="mx-2 hover:text-gray-400"><FaInstagram /></a> */}
        <a href=" https://wa.me/201556299599" className="mx-2 hover:text-gray-400"><FaWhatsapp /></a>
        <a href="https://github.com/RAMADAN-MAHDY?tab=repositories" className="mx-2 hover:text-gray-400"><FaGithub /></a>
        {/* <a href="https://youtube.com" className="mx-2 hover:text-gray-400"><FaYoutube /></a> */}
      </div>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} {t('Footer.Copyright')}
      </div>
    </footer>
  );
};

export default Footer;
