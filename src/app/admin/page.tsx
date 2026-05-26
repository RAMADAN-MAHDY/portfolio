'use client';
import Link from 'next/link';
import { BookOpen, Folder, ChevronRight, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 100
    }
  })
};

export default function AdminDashboard() {
  const adminItems = [
    {
      title: 'إدارة الفئات',
      description: 'إضافة، تعديل وحذف فئات الكتب',
      icon: Folder,
      href: '/admin/categories',
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'إدارة الكتب',
      description: 'إضافة، تعديل وحذف الكتب والموارد',
      icon: BookOpen,
      href: '/admin/books',
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-8 pb-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <LayoutDashboard className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">لوحة التحكم</h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            إدارة الفئات والكتب في مكتبتك الرقمية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <Link href={item.href} className="block">
                  <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:-translate-y-2">
                    <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`bg-gradient-to-r ${item.color} p-3 rounded-xl`}>
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                      <span>اذهب إلى الصفحة</span>
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800/50"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">عرض الكتب للزوار</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                يمكنك عرض جميع الكتب المنشورة للزوار من خلال صفحة الكتب في البورتفوليو
              </p>
              <Link
                href="/books"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                عرض الكتب
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
