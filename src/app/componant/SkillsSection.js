import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faGit, faGithub, faLinux ,faNext } from '@fortawesome/free-brands-svg-icons';

const SkillsSection = () => {
    return (
        <section className="py-10 bg-gray-900 sm:w-[100%] w-[190%] mt-[-250px] sm:mt-[-390px]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">My skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Frontend Skills */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">front end  </h3>
                        <div className="flex flex-col items-center">
                            <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faHtml5} className="w-16 h-16 text-orange-600 mb-2" />
                                <h4 className="text-white text-center">HTML5</h4>
                            </div>
                            <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faCss3Alt} className="w-16 h-16 text-blue-600 mb-2" />
                                <h4 className="text-white text-center">CSS3</h4>
                            </div> 
                            <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faJs} className="w-16 h-16 text-yellow-400 ml-2 mb-2" />
                                <h4 className="text-white text-center">JavaScript</h4>
                            </div>
                            <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faReact} className="w-16 h-16 text-blue-400 mb-2" />
                                <h4 className="text-white text-center">React</h4>
                            </div>
  
                    <div class="skill-card  p-6 rounded-lg">
                        <div class="skill-icon text-white text-5xl mb-4">
                            <svg class="w-16 h-16 mx-auto" viewBox="0 0 128 128">
                                <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
                            </svg>
                        </div>
                        <h4 class="text-white text-center">Next.js</h4>
                    </div>
              
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center"> Backend</h3>
                        <div className="flex flex-col items-center">
                            <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faNode} className="w-16 h-16 text-green-600 mb-2" />
                                
                            </div>
                            <div className="skill-card mb-4">
                               
                                <img src='pngwing.com.png' alt='MongoDb' className="w-16 h-16 text-green-600 mb-2"/>
                                
                            </div>
                            <div className="skill-card mb-4">
                               
                            
                               <p className='text-[20px] text-[#43b343] text-center font-extralight mt-6'> Express.js</p>
                           </div>
                            {/* <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faDatabase} className="w-16 h-16 text-blue-700 mb-2" />
                                <h4 className="text-white">PostgreSQL</h4>
                            </div> */}
                            {/* <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faDatabase} className="w-16 h-16 text-yellow-500 mb-2" />
                                <h4 className="text-white">Firebase</h4>
                            </div> */}
                        </div>
                    </div>

                    {/* Other Skills Section */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4"> Other</h3>
                        <div className="flex flex-col items-center">
                            <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faGit} className="w-16 h-16 text-orange-600 mb-2" />
                                
                            </div>
                            <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faGithub} className="w-16 h-16 text-gray-700 mb-2" />
                                <h4 className="text-white">GitHub</h4>
                            </div>
                            {/* <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faDocker} className="w-16 h-16 text-blue-600 mb-2" />
                                <h4 className="text-white">Docker</h4>
                            </div> */}
                            <div className="skill-card mb-4">
                                <FontAwesomeIcon icon={faLinux} className="w-16 h-16 text-green-800 mb-2" />
                                <h4 className="text-white">Linux (wsl)</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
