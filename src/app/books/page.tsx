'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { BookOpen, Search, Filter, Download, ChevronRight, Eye, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setTranslations } from '../../lib/slices/languageSlice';
import { loadTranslations } from '../../utils/loadTranslations';

interface RootState {
  language: {
    currentLanguage: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    translations: Record<string, any>;
  };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://portfolio-api-production-452b.up.railway.app/api';

interface Category {
  _id: string;
  name: string;
  description?: string;
}

interface Book {
  _id: string;
  fileName: string;
  description?: string;
  fileUrl: string;
  coverImageUrl?: string;
  category: Category;
  author: string;
  isPublished: boolean;
  uploadDate: string;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
  const { translations } = useSelector((state: RootState) => state.language);

  useEffect(() => {
    const fetchTranslations = async () => {
      const getLanguageFromLocal = localStorage.getItem('language') || 'en';
      const newLanguage = getLanguageFromLocal === 'en' ? 'en' : 'ar';
      const trans = await loadTranslations(newLanguage);
      dispatch(setLanguage(newLanguage));
      dispatch(setTranslations(trans));
    };
    fetchTranslations();
  }, [dispatch]);

  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      let url = `${API_BASE_URL}/pdfs?page=${currentPage}&limit=12`;
      if (searchTerm) url += `&search=${encodeURIComponent(searchTerm)}`;
      if (selectedCategory) url += `&category=${encodeURIComponent(selectedCategory)}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch books');
      const data = await response.json();
      setBooks((data.files || []).filter((book: Book) => book.isPublished));
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchTerm, selectedCategory]);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, [fetchBooks, fetchCategories]);

  const handleView = (book: Book) => {
    window.open(`${API_BASE_URL}/pdfs/download/${book._id}`, '_blank');
  };

  const handleDownload = (book: Book) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = `${API_BASE_URL}/pdfs/direct-download/${book._id}`;
    downloadLink.download = book.fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const isRTL = currentLanguage === 'ar';

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="relative">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                {translations?.Books?.MyDigitalLibrary || 'My Digital Library'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              {translations?.Books?.Title || 'My Books & Resources'}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {translations?.Books?.Subtitle || 'Discover a collection of books and resources that I share with you. You can read and download them for free.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-6 mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-black/20"
          >
            <div className={`flex flex-col lg:flex-row gap-4 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`flex-1 relative ${isRTL ? 'lg:order-2' : ''}`}>
                <Search className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400`} />
                <input
                  type="text"
                  placeholder={translations?.Books?.SearchPlaceholder || 'Search for a book...'}
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                  className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                />
              </div>
              <div className={`flex items-center gap-2 ${isRTL ? 'lg:order-1' : ''}`}>
                <Filter className="w-5 h-5 text-slate-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                  className="px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                  <option value="">{translations?.Books?.AllCategories || 'All Categories'}</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : books.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {translations?.Books?.NoBooks || 'No books'}
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                {searchTerm || selectedCategory 
                  ? (translations?.Books?.NoBooksFound || 'No books matching your search were found') 
                  : (translations?.Books?.BooksComingSoon || 'Books will be added soon')}
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {books.map((book) => (
                  <motion.div
                    key={book._id}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                      <Link href={`/books/${book._id}`} className="block">
                      <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-700 cursor-pointer">
                        {book.coverImageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={book.coverImageUrl}
                            alt={book.fileName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                            <BookOpen size={64} className="text-blue-400/50" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-bold">
                            {book.category.name}
                          </span>
                        </div>
                      </div>
                      </Link>
                      <div className="p-6">
                        <Link href={`/books/${book._id}`} className="block">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {book.fileName}
                          </h3>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 mb-3">
                          <span className="font-semibold">{translations?.Books?.Author || 'Author'}:</span> {book.author}
                        </p>
                        {book.description && (
                          <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                            {book.description}
                          </p>
                        )}
                        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                              {new Date(book.uploadDate).toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex gap-1.5">
                            <Link
                              href={`/books/${book._id}`}
                              className="flex-1 flex items-center justify-center gap-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            >
                              <Eye size={12} />
                              {translations?.Books?.ViewDetails || 'Details'}
                            </Link>
                            <button
                              onClick={() => handleView(book)}
                              className="flex-1 flex items-center justify-center gap-1 bg-green-600 text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-green-700 transition-colors"
                            >
                              <ExternalLink size={12} />
                              {translations?.Books?.View || 'View'}
                            </button>
                            <button
                              onClick={() => handleDownload(book)}
                              className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors"
                            >
                              <Download size={12} />
                              {translations?.Books?.Download || 'Download'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center justify-center gap-3 mt-12"
                >
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={20} className={isRTL ? 'rotate-180' : ''} />
                    {translations?.Books?.Prev || 'Prev'}
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum = i + 1;
                      if (totalPages > 5) {
                        if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-12 h-12 rounded-2xl font-bold transition-all ${
                            currentPage === pageNum
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-900/20'
                              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {translations?.Books?.Next || 'Next'}
                    <ChevronRight size={20} className={isRTL ? '' : 'rotate-180'} />
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
