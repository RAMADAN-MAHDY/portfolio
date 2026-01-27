'use client';

import { useSelector } from 'react-redux';
import Footer from '../componant/footer';
import { motion, useScroll, useInView, useAnimation, AnimationControls } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  // Add type assertion to handle Redux state type
  const currentLanguage = useSelector((state: any) => state.language.currentLanguage);
  const isEnglish = currentLanguage === 'en';

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      mirror: false
    });
  }, []);

  // Animation helper hook
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

  // Animation variants
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

  // Get animation references and controls
  const [profileRef, profileControls] = useAnimatedSection();
  const [summaryRef, summaryControls] = useAnimatedSection();
  const [experienceRef, experienceControls] = useAnimatedSection();
  const [projectsRef, projectsControls] = useAnimatedSection();

  return (
    <div className="min-h-screen mt-[60px] bg-gradient-to-r from-[#0c3541] to-[#0f47ff] text-white">
      {/* Header */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={containerVariants}
        className="pt-[120px] pb-10 px-4 sm:px-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-5xl font-bold text-center mb-6"
        >
          {isEnglish ? 'About Ramadan Mahdy' : 'عن رمضان مهدي'}
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-center text-lg max-w-3xl mx-auto opacity-80"
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
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
            >
              <motion.div variants={scaleUpVariants} className="text-center mb-6">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  src="/ramadan-mahdy-fullstack-developer.jpg" 
                  alt={isEnglish ? 'Ramadan Mahdy' : 'رمضان مهدي'} 
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-[#60e6ff] shadow-lg"
                />
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-bold mt-4"
                >
                  {isEnglish ? 'Ramadan Mahdy' : 'رمضان مهدي'}
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-[#60e6ff] mt-2"
                >
                  {isEnglish ? 'Full-Stack Web Developer' : 'مطور ويب متكامل'}
                </motion.p>
              </motion.div>

              <motion.div className="space-y-4">
                <motion.div variants={fadeInLeftVariants}>
                  <h3 className="font-semibold text-[#60e6ff] mb-2">
                    {isEnglish ? 'Contact Information' : 'معلومات الاتصال'}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>📍 {isEnglish ? 'Zagazig, Sharqia, Egypt' : 'الزقازيق، الشرقية، مصر'}</motion.p>
                    <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>📧 ramadanmahdy45@gmail.com</motion.p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInLeftVariants}>
                  <h3 className="font-semibold text-[#60e6ff] mb-2">
                    {isEnglish ? 'Technical Skills' : 'المهارات التقنية'}
                  </h3>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    {
                    // isEnglish ? (
                    //   [
                    //     'React.js', 'Next.js', 'Node.js', 'Express',
                    //     'MongoDB', 'GraphQL', 'JavaScript', 'TypeScript',
                    //     'Tailwind CSS', 'Redux', 'Git', 'Docker'
                    //   ]
                    // ) :
                     (
                      [
                        'React.js', 'Next.js', 'Node.js', 'Express',
                        'MongoDB', 'GraphQL', 'RESTful APIs', 'JavaScript', 'TypeScript',
                        'Tailwind CSS', 'Redux', 'Git', 'Docker'
                      ]
                    ).map((skill, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center"
                        whileHover={{ x: 5, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#60e6ff] mr-2"></span>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeInLeftVariants}>
                  <h3 className="font-semibold text-[#60e6ff] mb-2">
                    {isEnglish ? 'Languages' : 'اللغات'}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <motion.li 
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{isEnglish ? 'Arabic' : 'العربية'}</span>
                      <span className="text-[#60e6ff]">Native</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{isEnglish ? 'English' : 'الإنجليزية'}</span>
                      <span className="text-[#60e6ff]">Fluent</span>
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
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
            >
              <motion.h2 
                variants={fadeInRightVariants}
                className="text-2xl font-bold mb-4 flex items-center"
              >
                <span className="w-8 h-8 rounded-full bg-[#60e6ff]/30 flex items-center justify-center mr-3">
                  💼
                </span>
                {isEnglish ? 'Professional Summary' : 'ملخص المهني'}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg leading-relaxed"
              >
                {isEnglish ? 
                  'Ramadan Mahdy is a passionate Full-Stack Web Developer with expertise in building modern, scalable, and interactive web applications. With a strong foundation in both front-end and back-end technologies, Ramadan specializes in creating seamless user experiences that combine beautiful design with robust functionality.' : 
                  'رمضان مهدي هو مطور ويب متكامل شغوف ذو خبرة في بناء تطبيقات ويب حديثة، قابلة للتوسع وتفاعلية. مع أساس قوي في كل من تقنيات الواجهة الأمامية والخلفية، يختص رمضان بإنشاء تجارب مستخدم سلسة تجمع بين التصميم الجميل والوظائف القوية.'
                }
              </motion.p>
            </motion.div>

            {/* Experience */}
            <motion.div 
              ref={experienceRef}
              initial="hidden"
              animate={experienceControls}
              variants={containerVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
            >
              <motion.h2 
                variants={fadeInRightVariants}
                className="text-2xl font-bold mb-4 flex items-center"
              >
                <span className="w-8 h-8 rounded-full bg-[#60e6ff]/30 flex items-center justify-center mr-3">
                  🚀
                </span>
                {isEnglish ? 'Experience' : 'الخبرة'}
              </motion.h2>
              <div className="space-y-6">
                <motion.div 
                  variants={fadeInRightVariants}
                  className="border-l-4 border-[#60e6ff] pl-4"
                >
                  <motion.h3 
                    variants={itemVariants}
                    className="text-xl font-semibold"
                  >{isEnglish ? 'Freelance Web Developer' : 'مطور ويب مستقل'}</motion.h3>
                  <motion.p 
                    variants={itemVariants}
                    className="text-[#60e6ff] mb-2"
                  >{isEnglish ? 'July 2022 - Present' : ' يوليو 2022 - حتى الآن'}</motion.p>
                  <motion.ul 
                    variants={containerVariants}
                    className="list-disc pl-5 space-y-2 text-lg"
                  >
                    {isEnglish ? (
                      [
                        'Developed and maintained multiple full-stack web applications using React, Next.js, Node.js, and MongoDB',
                        'Created responsive designs that work seamlessly across all devices',
                        'Implemented secure authentication and authorization systems',
                        'Optimized web applications for performance and scalability',
                        'Collaborated with clients to understand their requirements and deliver customized solutions'
                      ]
                    ) : (
                      [
                        'طور وصيانة العديد من تطبيقات الويب الكاملة باستخدام React، Next.js، Node.js، و MongoDB',
                        'إنشاء تصميمات استجابة تعمل بسلاسة عبر جميع الأجهزة',
                        'تنفيذ أنظمة مصادقة وتفويض آمنة',
                        'تحسين تطبيقات الويب للاداء والتوسع',
                        'التعاون مع العملاء لفهم احتياجاتهم وتقديم حلول مخصصة'
                      ]
                    ).map((item, index) => (
                      <motion.li 
                        key={index} 
                        // variants={itemVariants}
                        whileHover={{ x: 10, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >{item}</motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div 
              ref={projectsRef}
              initial="hidden"
              animate={projectsControls}
              variants={containerVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
            >
              <motion.h2 
                variants={fadeInRightVariants}
                className="text-2xl font-bold mb-4 flex items-center"
              >
                <span className="w-8 h-8 rounded-full bg-[#60e6ff]/30 flex items-center justify-center mr-3">
                  📁
                </span>
                {isEnglish ? 'Featured Projects' : 'المشاريع المميزة'}
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Featured Projects */}
                {[0, 1, 2, 3].map((index) => {
                  // Define project data inside the map function
                  const projects = isEnglish ? [
                    { name: 'E-commerce Platform', desc: 'Full-featured online store with admin panel and payment integration' },
                    { name: 'Smart Attendance System', desc: 'School attendance management system with reporting features' },
                    { name: 'Olive Oil Store', desc: 'Specialized e-commerce platform for olive oil products' },
                    { name: 'Down Syndrome Support Platform', desc: 'Supportive community platform with AI-powered chatbot' },
                    { name :'Customer Service Platform with AI', desc: 'Customer service platform with AI-powered chatbot and customer support features'}
                  ] : [
                    { name: 'منصة التجارة الإلكترونية', desc: 'متجر عبر الإنترنت كامل الميزات مع لوحة تحكم للمدير وتكامل الدفع' },
                    { name: 'نظام الحضور الذكي', desc: 'نظام إدارة حضور الطلاب في المدرسة مع ميزات التقرير' },
                    { name: 'متجر الزيت الزيتوني', desc: 'منصة تجارة إلكترونية متخصصة لمنتجات الزيت الزيتوني' },
                    { name: 'منصة دعم متلازمة داون', desc: 'منصة مجتمعية داعمة مع محادثة مدعومة بالذكاء الاصطناعي' },
                    { name :'منصة لخدمة العملاء بالذكاء الاصطناعي', desc: 'منصة خدمة العملاء متكاملة مع الذكاء الاصطناعي'}
                  ];
                  
                  const project = projects[index];
                  return (
                    <motion.div 
                      key={index} 
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: "0 10px 25px rgba(96, 230, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#60e6ff]/50 transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                      <p className="opacity-80">{project.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Education
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#60e6ff]/30 flex items-center justify-center mr-3">
                  🎓
                </span>
                {isEnglish ? 'Education' : 'التعليم'}
              </h2>
              <div className="border-l-4 border-[#60e6ff] pl-4">
                <h3 className="text-xl font-semibold">{isEnglish ? 'Bachelor of Computer Science' : 'بكالوريوس في علوم الحاسوب'}</h3>
                <p className="text-[#60e6ff] mb-2">{isEnglish ? 'Zagazig University, 2018 - 2022' : 'جامعة الزقازيق، 2018 - 2022'}</p>
                <p className="text-lg">{isEnglish ? 'Graduated with honors, focusing on software engineering and web development.' : 'تخرج بتقدير مرموق، مع التركيز على هندسة البرمجيات وتطوير الويب.'}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}