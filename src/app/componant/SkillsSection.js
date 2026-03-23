'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNode, faGit, faGithub, faLinux } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Server, Settings, Zap } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative bg-white/40 backdrop-blur-xl border border-slate-900/10 p-8 rounded-[2rem] hover:bg-white/60 transition-all duration-500 overflow-hidden shadow-xl"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -z-10 group-hover:bg-blue-500/10 transition-all duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-900/10 flex items-center justify-center border border-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-blue-900" size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight [text-shadow:_0_1px_1px_rgba(255,255,255,0.5)]">{title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-3 group/skill"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-white/20 border border-slate-900/5 flex items-center justify-center group-hover/skill:bg-white/40 group-hover/skill:border-blue-900/30 transition-all duration-300 shadow-sm">
                            {skill.icon ? (
                                <FontAwesomeIcon icon={skill.icon} className={`w-8 h-8 ${skill.color.replace('400', '700').replace('text-white', 'text-slate-900')} transition-all duration-300`} />
                            ) : skill.lucide ? (
                                <skill.lucide className={`w-8 h-8 ${skill.color.replace('400', '700')} transition-all duration-300`} />
                            ) : skill.svg ? (
                                <div className={`w-8 h-8 ${skill.color.replace('white', 'slate-900')} transition-all duration-300`}>{skill.svg}</div>
                            ) : (
                                <Image src={skill.img} width={32} height={32} alt={skill.name} className="object-contain" />
                            )}
                        </div>
                        <span className="text-[10px] font-black text-slate-800 group-hover/skill:text-blue-900 transition-colors uppercase tracking-widest text-center [text-shadow:_0_1px_1px_rgba(255,255,255,0.5)]">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const SkillsSection = () => {
    const { translations } = useSelector((state) => state.language);

    const skillGroups = [
        {
            title: translations?.SkillsSection?.Frontend || "Frontend",
            icon: Code2,
            skills: [
                { name: "React", icon: faReact, color: "text-cyan-700" },
                { name: "Next.js", color: "text-slate-900", svg: (
                    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-current">
                        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                    </svg>
                )},
                { name: "Tailwind", color: "text-sky-700", svg: (
                    <svg viewBox="0 0 122.88 73.29" className="w-8 h-8 fill-current">
                        <path d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z" />
                    </svg>
                )},
                { name: "TypeScript", img: "/pngTs.png" },
                { name: "JavaScript", icon: faJs, color: "text-yellow-700" },
                { name: "Redux", color: "text-purple-700", svg: (
                    <svg viewBox="0 0 333333 316450" className="w-8 h-8 fill-current">
                        <path d="M230965 221006c12301-1273 21633-11878 21209-24604-423-12725-11029-22906-23754-22906h-848c-13151 424-23331 11453-22906 24603 424 6363 2969 11878 6786 15695-14422 28422-36479 49207-69565 66599-22482 11878-45811 16120-69141 13151-19089-2546-33935-11029-43269-25029-13573-20785-14845-43268-3392-65750 8060-16120 20784-27997 28844-33936-1696-5515-4242-14846-5514-21633-61507 44541-55143 104776-36480 133197 13998 21211 42418 34361 73807 34361 8483 0 16966-849 25450-2969 54296-10606 95442-42845 118771-90779zm74656-52600c-32238-37754-79746-58539-134042-58539h-6786c-3818-7635-11878-12727-20785-12727h-849c-13148 424-23328 11453-22905 24604 424 12725 11028 22906 23754 22906h848c9332-425 17392-6363 20785-14423h7635c32238 0 62779 9332 90352 27573 21208 13999 36479 32239 44962 54297 7211 17817 6787 35208-849 50056-11876 22482-31813 34784-58112 34784-16967 0-33086-5091-41570-8909-4665 4242-13150 11028-19088 15272 18241 8483 36905 13150 54720 13150 40722 0 70839-22483 82292-44965 12301-24604 11452-67023-20361-103079z" />
                    </svg>
                )},
            ]
        },
        {
            title: translations?.SkillsSection?.Backend || "Backend",
            icon: Server,
            skills: [
                { name: "Node.js", icon: faNode, color: "text-green-700" },
                { name: "Express", color: "text-slate-900", svg: (
                    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-current">
                        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                    </svg>
                )},
                { name: "MongoDB", img: "/pngwing.com.png" },
                { name: "API Design", icon: faLinux, color: "text-blue-700" },
            ]
        },
        {
            title: translations?.SkillsSection?.Other || "Tools",
            icon: Settings,
            skills: [
                { name: "Git", icon: faGit, color: "text-orange-700" },
                { name: "GitHub", icon: faGithub, color: "text-slate-900" },
                { name: "VS Code", lucide: Code2, color: "text-blue-700" },
                { name: "Postman", lucide: Zap, color: "text-orange-700" },
            ]
        }
    ];

    return (
        <section className="py-20 bg-transparent text-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900 [text-shadow:_0_2px_2px_rgba(255,255,255,0.8)]">
                        {translations?.SkillsSection?.Skills || "My Skills"}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-indigo-900 mx-auto rounded-full shadow-sm" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {skillGroups.map((group, index) => (
                        <SkillCard 
                            key={index} 
                            {...group} 
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
