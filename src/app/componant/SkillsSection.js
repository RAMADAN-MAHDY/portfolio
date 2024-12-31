import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faGit, faGithub, faLinux } from '@fortawesome/free-brands-svg-icons';

const SkillsSection = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-indigo-800 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-6">Frontend Development</h3>
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
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-6">Backend Development</h3>
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
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-6">Other Skills</h3>
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
