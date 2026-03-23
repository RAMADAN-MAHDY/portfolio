'use client';

import { useSelector } from 'react-redux';
import Footer from '../componant/footer';
import { motion, useInView, useAnimation, AnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const currentLanguage = useSelector((state: any) => state.language.currentLanguage);
  const isEnglish = currentLanguage === 'en';

  const useAnimatedSection = (): [React.RefObject<HTMLDivElement>, AnimationControls] => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

    useEffect(() => {
      if (isInView) {
        controls.start('visible');
      }
    }, [controls, isInView]);

    return [ref, controls];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const [profileRef, profileControls] = useAnimatedSection();
  const [summaryRef, summaryControls] = useAnimatedSection();
  const [experienceRef, experienceControls] = useAnimatedSection();
  const [projectsRef, projectsControls] = useAnimatedSection();
  const [educationRef, educationControls] = useAnimatedSection();

  return (
    <div className="min-h-screen mt-[60px] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      {/* Header Content */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={containerVariants}
        className="pt-[120px] pb-10 px-4 sm:px-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-5xl font-black text-center mb-6 text-slate-800 dark:text-white"
        >
          {isEnglish ? 'About Ramadan Mahdy' : 'عن رمضان مهدي'}
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-center text-lg max-w-3xl mx-auto text-slate-600 dark:text-slate-400 font-medium"
        >
          {isEnglish ? 
            'Full-Stack Web Developer with expertise in modern web technologies' : 
            'مطور ويب متكامل ذو خبرة في تقنيات الويب الحديثة'
          }
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <motion.div 
              ref={profileRef}
              initial="hidden"
              animate={profileControls}
              variants={containerVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg dark:shadow-black/20 border border-white/20 dark:border-slate-700/50 h-full"
            >
              <motion.div variants={scaleUpVariants} className="text-center mb-6">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  src="/ramadan-mahdy-fullstack-developer.jpg" 
                  alt={isEnglish ? 'Ramadan Mahdy - Full Stack Web Developer Portrait' : 'رمضان مهدي - صورة مطور ويب متكامل'} 
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-[#e69999] shadow-lg"
                />
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-black mt-4 text-slate-800 dark:text-white"
                >
                  {isEnglish ? 'Ramadan Mahdy' : 'رمضان مهدي'}
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-[#e69999] mt-2 font-bold"
                >
                  {isEnglish ? 'Full-Stack Web Developer' : 'مطور ويب متكامل'}
                </motion.p>
              </motion.div>

              <motion.div className="space-y-4">
                <motion.div variants={fadeInLeftVariants}>
                  <h3 className="font-bold text-[#e69999] mb-2">
                    {isEnglish ? 'Contact Information' : 'معلومات الاتصال'}
                  </h3>
                  <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>📍 {isEnglish ? 'Zagazig, Sharqia, Egypt' : 'الزقازيق، الشرقية، مصر'}</motion.p>
                    <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>📧 ramadanmahdy45@gmail.com</motion.p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInLeftVariants}>
                  <h3 className="font-bold text-[#e69999] mb-2">
                    {isEnglish ? 'Technical Skills' : 'المهارات التقنية'}
                  </h3>
                  <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {[
                      'React.js', 'Next.js', 'Node.js', 'Express',
                      'MongoDB', 'GraphQL', 'RESTful APIs', 'JavaScript', 'TypeScript',
                      'Tailwind CSS', 'Redux', 'Git', 'Docker'
                    ].map((skill, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center"
                        whileHover={{ x: 5, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#e69999] mr-2"></span>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeInLeftVariants}>
                  <h3 className="font-bold text-[#e69999] mb-2">
                    {isEnglish ? 'Languages' : 'اللغات'}
                  </h3>
                  <ul className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <motion.li 
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{isEnglish ? 'Arabic' : 'العربية'}</span>
                      <span className="text-[#e69999] font-semibold">Native</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{isEnglish ? 'English' : 'الإنجليزية'}</span>
                      <span className="text-[#e69999] font-semibold">Fluent</span>
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Detailed Information */}
          <div className="md:col-span-2 space-y-8">
            {/* Professional Summary */}
            <motion.div 
              ref={summaryRef}
              initial="hidden"
              animate={summaryControls}
              variants={containerVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg dark:shadow-black/20 border border-white/20 dark:border-slate-700/50"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-black text-slate-800 dark:text-white mb-4">
                {isEnglish ? 'Professional Summary' : 'ملخص احترافي'}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {isEnglish ? 
                  'A highly motivated and results-oriented Full-Stack Web Developer with over 5 years of experience in designing, developing, and deploying modern web applications. Proficient in a wide range of technologies, including the MERN stack, Next.js, and GraphQL. Passionate about creating efficient, scalable, and user-friendly solutions.' : 
                  'مطور ويب متكامل يتمتع بحافز عالٍ وموجه نحو تحقيق النتائج، مع أكثر من 5 سنوات من الخبرة في تصميم وتطوير ونشر تطبيقات الويب الحديثة. يتقن مجموعة واسعة من التقنيات، بما في ذلك MERN stack و Next.js و GraphQL. شغوف بإنشاء حلول فعالة وقابلة للتطوير وسهلة الاستخدام.'
                }
              </motion.p>
            </motion.div>

            {/* Experience */}
            <motion.div 
              ref={experienceRef}
              initial="hidden"
              animate={experienceControls}
              variants={containerVariants}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg dark:shadow-black/20 border border-white/20 dark:border-slate-700/50"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-black text-slate-800 dark:text-white mb-6">
                {isEnglish ? 'Work Experience' : 'الخبرة العملية'}
              </motion.h2>
              <div className="space-y-6">
                <motion.div variants={fadeInRightVariants} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-4 h-4 bg-[#e69999] rounded-full border-4 border-white dark:border-slate-800"></div>
                  <p className="font-semibold text-slate-600 dark:text-slate-400 text-sm">{isEnglish ? '2021 - Present' : '2021 - حتى الآن'}</p>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-1">{isEnglish ? 'Full-Stack Web Developer' : 'مطور ويب متكامل'}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mb-2">{isEnglish ? 'Freelancer' : 'مستقل'}</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 font-medium text-sm">
                    <li>{isEnglish ? 'Developed and maintained full-stack web applications for various clients.' : 'تطوير وصيانة تطبيقات ويب متكاملة لعملاء مختلفين.'}</li>
                    <li>{isEnglish ? 'Collaborated with designers and project managers to deliver high-quality products.' : 'التعاون مع المصممين ومديري المشاريع لتقديم منتجات عالية الجودة.'}</li>
                    <li>{isEnglish ? 'Implemented RESTful APIs and integrated with third-party services.' : 'تنفيذ واجهات برمجة التطبيقات (RESTful APIs) والتكامل مع خدمات الطرف الثالث.'}</li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeInRightVariants} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-4 h-4 bg-[#e69999] rounded-full border-4 border-white dark:border-slate-800"></div>
                  <p className="font-semibold text-slate-600 dark:text-slate-400 text-sm">{isEnglish ? '2019 - 2021' : '2019 - 2021'}</p>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-1">{isEnglish ? 'Frontend Developer' : 'مطور واجهات أمامية'}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mb-2">{isEnglish ? 'Tech Solutions Inc.' : 'شركة حلول التقنية'}</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 font-medium text-sm">
                    <li>{isEnglish ? 'Focused on building responsive and interactive user interfaces using React and Next.js.' : 'التركيز على بناء واجهات مستخدم سريعة الاستجابة وتفاعلية باستخدام React و Next.js.'}</li>
                    <li>{isEnglish ? 'Worked closely with the backend team to integrate APIs.' : 'العمل بشكل وثيق مع فريق الواجهات الخلفية لدمج واجهات برمجة التطبيقات.'}</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Projects Overview */}
            <motion.div 
              ref={projectsRef}
              initial="hidden"
              animate={projectsControls}
              variants={containerVariants}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg dark:shadow-black/20 border border-white/20 dark:border-slate-700/50"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-black text-slate-800 dark:text-white mb-4">
                {isEnglish ? 'Projects Overview' : 'نظرة عامة على المشاريع'}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                {isEnglish ? 
                  'A selection of projects that demonstrate my skills and experience. For a detailed view, please visit the portfolio section.' : 
                  'مجموعة مختارة من المشاريع التي توضح مهاراتي وخبرتي. للحصول على عرض تفصيلي، يرجى زيارة قسم معرض الأعمال.'
                }
              </motion.p>
              <motion.a 
                href="/projects" 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#e69999] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
              >
                {isEnglish ? 'View Portfolio' : 'عرض معرض الأعمال'}
              </motion.a>
            </motion.div>

            {/* Education */}
            {/* <motion.div 
              ref={educationRef}
              initial="hidden"
              animate={educationControls}
              variants={containerVariants}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg dark:shadow-black/20 border border-white/20 dark:border-slate-700/50"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-black text-slate-800 dark:text-white mb-6">
                {isEnglish ? 'Education' : 'التعليم'}
              </motion.h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#e69999] rounded-full border-4 border-white dark:border-slate-800"></div>
                <p className="font-semibold text-slate-600 dark:text-slate-400 text-sm">{isEnglish ? '2015 - 2019' : '2015 - 2019'}</p>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-1">{isEnglish ? 'Bachelor of Science in Computer Science' : 'بكالوريوس العلوم في علوم الحاسب'}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">{isEnglish ? 'Zagazig University' : 'جامعة الزقازيق'}</p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
