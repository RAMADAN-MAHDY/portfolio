'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faGit, faGithub, faLinux } from '@fortawesome/free-brands-svg-icons';
import {useTranslations} from 'next-intl';
const SkillsSection = () => {
    const t = useTranslations();


  return (
    <section className="py-10 bg-gradient-to-r from-[#0c3541] to-[#0e40e6] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10"> {t('SkillsSection.Skills')} </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-6">{t('SkillsSection.Frontend')}</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className=" text-center">
                <FontAwesomeIcon icon={faHtml5} className="w-16 h-16 text-orange-800 mb-4 hover:text-orange-600 " />
                <h4 className="text-lg">HTML5</h4>
              </div>
              <div className=" text-center">
                <FontAwesomeIcon icon={faCss3Alt} className="w-16 h-16 text-blue-800 mb-4 hover:text-blue-600" />
                <h4 className="text-lg">CSS3</h4>
              </div>
              <div className=" text-center">
                <FontAwesomeIcon icon={faJs} className="w-16 h-16 text-yellow-600 hover:text-yellow-400 mb-4" />
                <h4 className="text-lg">JavaScript</h4>
              </div>
              <div className=" text-center">
                <FontAwesomeIcon icon={faReact} className="w-16 h-16 text-blue-800 mb-4 hover:text-blue-400"  />
                <h4 className="text-lg">React</h4>
              </div>
              <div className=" text-center">
              <div class="skill-icon text-black hover:text-[#fff] text-5xl mb-4">
                            <svg class="w-16 h-16 mx-auto" viewBox="0 0 128 128">
                                <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
                            </svg>
                        </div>
                    
                <h4 className="text-lg">Next.js</h4>
                
              </div>
              <div className=" text-center">
              <div class="skill-icon text-black hover:text-[#ca5454] text-5xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 316450" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M230965 221006c12301-1273 21633-11878 21209-24604-423-12725-11029-22906-23754-22906h-848c-13151 424-23331 11453-22906 24603 424 6363 2969 11878 6786 15695-14422 28422-36479 49207-69565 66599-22482 11878-45811 16120-69141 13151-19089-2546-33935-11029-43269-25029-13573-20785-14845-43268-3392-65750 8060-16120 20784-27997 28844-33936-1696-5515-4242-14846-5514-21633-61507 44541-55143 104776-36480 133197 13998 21211 42418 34361 73807 34361 8483 0 16966-849 25450-2969 54296-10606 95442-42845 118771-90779zm74656-52600c-32238-37754-79746-58539-134042-58539h-6786c-3818-7635-11878-12727-20785-12727h-849c-13148 424-23328 11453-22905 24604 424 12725 11028 22906 23754 22906h848c9332-425 17392-6363 20785-14423h7635c32238 0 62779 9332 90352 27573 21208 13999 36479 32239 44962 54297 7211 17817 6787 35208-849 50056-11876 22482-31813 34784-58112 34784-16967 0-33086-5091-41570-8909-4665 4242-13150 11028-19088 15272 18241 8483 36905 13150 54720 13150 40722 0 70839-22483 82292-44965 12301-24604 11452-67023-20361-103079zM90137 228216c424 12726 11029 22906 23754 22906h849c13150-423 23330-11453 22905-24603-423-12726-11029-22906-23754-22906h-848c-849 0-2122 0-2969 423-17392-28845-24603-60234-22057-94170 1695-25452 10180-47510 25026-65751 12301-15695 36055-23331 52174-23754 44962-849 64050 55144 65323 77628 5515 1272 14846 4242 21210 6363C246659 35633 204241 0 163521 0c-38177 0-73384 27573-87383 68296-19512 54297-6786 106472 16968 147620-2120 2969-3393 7635-2969 12302v-1z" fill="#764abc"/></svg>
                        </div>
                    
                <h4 className="text-lg">Redux</h4>
                
              </div>
                 <div className=" text-center">
              <div class="skill-icon  hover:text-[#fff] text-5xl mb-4">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.29" style = {{fill: "#06b6d4" , fillRule: "evenodd" }}> <path class="cls-1" d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"/></svg>
                        </div>
                    
                        <h4 className="Tailwind">tailwind-css</h4>
                
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-6">{t('SkillsSection.Backend')}</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className=" text-center">
                <FontAwesomeIcon icon={faNode} className="w-16 h-16 hover:text-[#34ff3e] text-[#418a44] mb-4" />
                <h4 className="text-lg">Node.js</h4>
              </div>
              <div className=" text-center">
                <img src='pngwing.com.png' alt='MongoDb' className="w-16 h-16 mb-4 hover: " />
                <h4 className="text-lg">MongoDB</h4>
              </div>
              <div className=" text-center">
                <p className="text-lg text-[#43b343ce] hover:text-[#55f855]">Express.js</p>
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-6">{t('SkillsSection.Other')}</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className=" text-center">
                <FontAwesomeIcon icon={faGit} className="w-16 h-16 text-red-800 hover:text-red-600 mb-4" />
                <h4 className="text-lg">Git</h4>
              </div>
              <div className=" text-center">
                <FontAwesomeIcon icon={faGithub} className="w-16 h-16 text-gray-700 hover:text-[#000]  mb-4" />
                <h4 className="text-lg">GitHub</h4>
              </div>
              <div className=" text-center">
                <FontAwesomeIcon icon={faLinux} className="w-16 h-16 text-green-800 hover:text-[#49d349]  mb-4" />
                <h4 className="text-lg">Linux (WSL)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
