'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BookOpen, Download, ArrowLeft, Calendar, User, Folder, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setTranslations } from '../../../lib/slices/languageSlice';
import { loadTranslations } from '../../../utils/loadTranslations';

interface RootState {
  language: {
    currentLanguage: string;
    translations: any;
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
  fileSize?: number;
}

export default function BookDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
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

  useEffect(() => {
    if (id) {
      fetchBook();
    }
  }, [id]);

  const fetchBook = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/pdfs/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(translations?.BookDetail?.BookNotFound || 'Book not found');
        }
        throw new Error(translations?.BookDetail?.FailedToLoad || 'Failed to load book details');
      }
      const data = await response.json();
      setBook(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleView = () => {
    if (book) {
      window.open(`${API_BASE_URL}/pdfs/download/${book._id}`, '_blank');
    }
  };

  const handleDownload = () => {
    if (book) {
      const downloadLink = document.createElement('a');
      downloadLink.href = `${API_BASE_URL}/pdfs/direct-download/${book._id}`;
      downloadLink.download = book.fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return translations?.BookDetail?.Unknown || 'Unknown';
    const megabytes = bytes / (1024 * 1024);
    return `${megabytes.toFixed(2)} MB`;
  };

  const isRTL = currentLanguage === 'ar';

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-3xl mx-auto text-center py-20">
          <BookOpen className="w-16 h-16 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {error || translations?.BookDetail?.BookNotFound || 'Book not found'}
          </h2>
          <button
            onClick={() => router.push('/books')}
            className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"
          >
            <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
            {translations?.BookDetail?.BackToBooks || 'Back to Books'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="relative">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-0 md:px-6 relative z-10">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.push('/books')}
            className="inline-flex items-center gap-2 mb-8 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
            {translations?.BookDetail?.BackToBooks || 'Back to Books'}
          </motion.button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-black/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1 bg-slate-100 dark:bg-slate-700 p-8 flex items-center justify-center">
                <div className="relative w-full max-w-xs">
                  {book.coverImageUrl ? (
                    <motion.img
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      src={book.coverImageUrl}
                      alt={book.fileName}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  ) : (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="w-full aspect-[3/4] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center shadow-2xl"
                    >
                      <BookOpen size={80} className="text-blue-400/50" />
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-2 p-3 md:p-8 lg:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-blue-500/10 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                      <Folder size={14} />
                      {book.category.name}
                    </span>
                    {!book.isPublished && (
                      <span className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold">
                        {translations?.BookDetail?.Unpublished || 'Unpublished'}
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">
                    {book.fileName}
                  </h1>

                  <div className={`flex flex-wrap items-center gap-6 mb-8 text-slate-600 dark:text-slate-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="flex items-center gap-2">
                      <User size={18} />
                      <span className="font-semibold">{book.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{new Date(book.uploadDate).toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    {book.fileSize && (
                      <div className="flex items-center gap-2">
                        <FileText size={18} />
                        <span>{formatFileSize(book.fileSize)}</span>
                      </div>
                    )}
                  </div>

                  {book.description && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mb-10"
                    >
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                        {translations?.BookDetail?.AboutBook || 'About the Book'}
                      </h2>
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl md:p-6 p-2">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                          {book.description}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-2 flex-wrap"
                  >
                    <button
                      onClick={handleView}
                      className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-4 py-2.5 rounded-lg font-medium shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 transition-all"
                    >
                      <ExternalLink size={16} />
                      {translations?.BookDetail?.ViewInBrowser || 'View in Browser'}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-2.5 rounded-lg font-medium shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 transition-all"
                    >
                      <Download size={16} />
                      {translations?.BookDetail?.DownloadNow || 'Download Now'}
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => router.push('/books')}
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
              {translations?.BookDetail?.ExploreMoreBooks || 'Explore more books'}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
