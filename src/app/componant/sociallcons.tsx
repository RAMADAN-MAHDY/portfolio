'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook , faLinkedin ,faGithub} from '@fortawesome/free-brands-svg-icons';
import styleAnimation from './style/sociallcon.module.css';

const SocialIcons = () => {
  return (
    <div className="fixed top-1/2 left-4 flex flex-col space-y-4 sm:p-4 p-2 rounded-lg shadow-lg z-[1000] bg-gradient-to-b from-transparent via-white/10 to-transparent backdrop-blur-[10px] border border-white/20">

      <span className={`absolute inset-0 border-2 border-transparent animate-spin-light bg-[#00ff2a] w-2 h-2 ${styleAnimation.spinLight}`}></span>

      <a
        href="https://www.facebook.com/profile.php?id=100006831971569"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-110 text-gray-600 dark:text-gray-300"
      >
        <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 sm:w-8 sm:h-8 text-[#0145ff]" />
      </a>
      <a
        href="https://wa.me/201556299599"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-110 text-gray-600 dark:text-gray-300"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 sm:w-8 sm:h-8 text-[#00ff15]" />
      </a>
      <a
        href="https://www.linkedin.com/in/ramadan-mahdy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-110 text-gray-600 dark:text-gray-300"
      >
        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 sm:w-8 sm:h-8 text-[#001aff]" />
      </a>
      <a
        href="https://github.com/RAMADAN-MAHDY?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-110 text-gray-600 dark:text-gray-300"
      >
        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 sm:w-8 sm:h-8 text-[#ffffff]" />
      </a>
      {/* <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-110 text-gray-600 dark:text-gray-300"
      >
        <FontAwesomeIcon icon={faTelegram} className="w-8 h-8 text-[#258fd6]" />
      </a> */}
    </div>
  );
};

export default SocialIcons;