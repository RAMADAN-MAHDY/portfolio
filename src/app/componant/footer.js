import { FaFacebook, FaGithub , FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="mb-4 flex flex-wrap justify-center">
        <a href="/projects" className="mx-2 hover:text-gray-400">Projects</a>
        <a href="/ContactMe" className="mx-2 hover:text-gray-400">Contact Me</a>
        <a href="/" className="mx-2 hover:text-gray-400">Home</a>
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
        &copy; {new Date().getFullYear()} Ramadan Mahdy . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
