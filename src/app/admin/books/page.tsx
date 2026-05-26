'use client';
import { useState, useEffect, useCallback } from 'react';
import { Plus, Edit, Trash2, Save, X, Upload, FileText, BookOpen } from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://portfolio-api-production-452b.up.railway.app/api';

interface Category {
  _id: string;
  name: string;
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
  createdAt: string;
  uploadDate: string;
}

export default function BooksAdmin() {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [addForm, setAddForm] = useState({
    fileName: '',
    description: '',
    category: '',
    author: '',
    isPublished: 'true',
    pdfFile: null as File | null,
    coverImage: null as File | null,
  });

  const [editForm, setEditForm] = useState({
    fileName: '',
    description: '',
    category: '',
    author: '',
    isPublished: 'true',
    coverImage: null as File | null,
  });

  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/pdfs?page=${currentPage}&limit=10`);
      if (!response.ok) throw new Error('Failed to fetch books');
      const data = await response.json();
      setBooks(data.files || []);
      setTotalPages(data.totalPages || 1);
    } catch {
      showMessage('فشل تحميل الكتب', 'error');
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

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

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (addForm.pdfFile) formData.append('pdfFile', addForm.pdfFile);
      if (addForm.coverImage) formData.append('coverImage', addForm.coverImage);
      formData.append('fileName', addForm.fileName);
      formData.append('description', addForm.description);
      formData.append('category', addForm.category);
      formData.append('author', addForm.author);
      formData.append('isPublished', addForm.isPublished);

      const response = await fetch(`${API_BASE_URL}/pdfs`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add book');
      }
      setAddForm({
        fileName: '',
        description: '',
        category: '',
        author: '',
        isPublished: 'true',
        pdfFile: null,
        coverImage: null,
      });
      setShowAddForm(false);
      fetchBooks();
      showMessage('تمت إضافة الكتاب بنجاح', 'success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'فشل إضافة الكتاب';
      showMessage(errorMessage, 'error');
    }
  };

  const handleEdit = (book: Book) => {
    setEditingId(book._id);
    setEditForm({
      fileName: book.fileName,
      description: book.description || '',
      category: book.category._id,
      author: book.author,
      isPublished: book.isPublished ? 'true' : 'false',
      coverImage: null,
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;
    try {
      const formData = new FormData();
      if (editForm.coverImage) formData.append('coverImage', editForm.coverImage);
      formData.append('fileName', editForm.fileName);
      formData.append('description', editForm.description);
      formData.append('category', editForm.category);
      formData.append('author', editForm.author);
      formData.append('isPublished', editForm.isPublished);

      const response = await fetch(`${API_BASE_URL}/pdfs/${editingId}`, {
        method: 'PUT',
        body: formData,
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update book');
      }
      setEditingId(null);
      fetchBooks();
      showMessage('تم تحديث الكتاب بنجاح', 'success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'فشل تحديث الكتاب';
      showMessage(errorMessage, 'error');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا الكتاب؟')) return;
    try {
      const response = await fetch(`${API_BASE_URL}/pdfs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete book');
      }
      fetchBooks();
      showMessage('تم حذف الكتاب بنجاح', 'success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'فشل حذف الكتاب';
      showMessage(errorMessage, 'error');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 px-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">إدارة الكتب</h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"
          >
            <Plus size={20} />
            إضافة كتاب جديد
          </button>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-xl ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message.text}
          </div>
        )}

        {showAddForm && (
          <div className="mb-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">إضافة كتاب جديد</h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">اسم الكتاب</label>
                <input
                  type="text"
                  required
                  value={addForm.fileName}
                  onChange={(e) => setAddForm({ ...addForm, fileName: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="أدخل اسم الكتاب"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">المؤلف</label>
                <input
                  type="text"
                  required
                  value={addForm.author}
                  onChange={(e) => setAddForm({ ...addForm, author: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="أدخل اسم المؤلف"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">الفئة</label>
              <select
                required
                value={addForm.category}
                onChange={(e) => setAddForm({ ...addForm, category: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">اختر فئة</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">وصف الكتاب (اختياري)</label>
              <textarea
                value={addForm.description}
                onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="أدخل وصف الكتاب"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">ملف PDF</label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 dark:border-slate-600 border-dashed rounded-xl cursor-pointer bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-3 text-slate-400" />
                    <p className="mb-1 text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold">اضغط للرفع</span> أو اسحب وأفلت</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{addForm.pdfFile ? addForm.pdfFile.name : 'PDF (مطلوب)'}</p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    required
                    className="hidden"
                    onChange={(e) => setAddForm({ ...addForm, pdfFile: e.target.files?.[0] || null })}
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">صورة الغلاف (اختياري)</label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 dark:border-slate-600 border-dashed rounded-xl cursor-pointer bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <BookOpen className="w-8 h-8 mb-3 text-slate-400" />
                    <p className="mb-1 text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold">اضغط للرفع</span> أو اسحب وأفلت</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{addForm.coverImage ? addForm.coverImage.name : 'PNG, JPG, JPEG'}</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setAddForm({ ...addForm, coverImage: e.target.files?.[0] || null })}
                  />
                </label>
              </div>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={addForm.isPublished === 'true'}
                  onChange={(e) => setAddForm({ ...addForm, isPublished: e.target.checked ? 'true' : 'false'})}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-slate-700 dark:text-slate-300">نشر الكتاب</span>
              </label>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition-colors"
              >
                <Save size={18} />
                إضافة
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-white px-6 py-2 rounded-xl transition-colors"
              >
                <X size={18} />
                إلغاء
              </button>
            </div>
          </form>
        </div>
      )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length === 0 ? (
            <div className="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
              لا توجد كتب بعد
            </div>
          ) : (
            books.map((book) => (
              <div key={book._id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
                {editingId === book._id ? (
                  <div className="p-6">
                    <form onSubmit={handleUpdate} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">اسم الكتاب</label>
                        <input
                          type="text"
                          required
                          value={editForm.fileName}
                          onChange={(e) => setEditForm({ ...editForm, fileName: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">المؤلف</label>
                        <input
                          type="text"
                          required
                          value={editForm.author}
                          onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">الفئة</label>
                        <select
                          required
                          value={editForm.category}
                          onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                          {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>{cat.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">الوصف</label>
                        <textarea
                          value={editForm.description}
                          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">صورة غلاف جديدة (اختياري)</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setEditForm({ ...editForm, coverImage: e.target.files?.[0] || null })}
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={editForm.isPublished === 'true'}
                            onChange={(e) => setEditForm({ ...editForm, isPublished: e.target.checked ? 'true' : 'false'})}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">منشور</span>
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition-colors"
                        >
                          <Save size={16} />
                          حفظ
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingId(null)}
                          className="flex-1 flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-white px-4 py-2 rounded-xl transition-colors"
                        >
                          <X size={16} />
                          إلغاء
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <>
                    <div className="h-48 bg-slate-100 dark:bg-slate-700 relative overflow-hidden">
                      {book.coverImageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={book.coverImageUrl}
                          alt={book.fileName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText size={48} className="text-slate-400" />
                        </div>
                      )}
                      {!book.isPublished && (
                        <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                          غير منشور
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-lg">
                        {book.category.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{book.fileName}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">المؤلف: {book.author}</p>
                    {book.description && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{book.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {new Date(book.uploadDate).toLocaleDateString('ar-EG')}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(book)}
                          className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(book._id)}
                          className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white rounded-xl disabled:opacity-50"
            >
              السابق
            </button>
            <span className="px-4 py-2 text-slate-700 dark:text-white">
              {currentPage} من {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white rounded-xl disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
