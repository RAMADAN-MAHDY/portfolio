'use client';
import { useState, useEffect, useCallback } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://portfolio-api-production-452b.up.railway.app/api';

interface Category {
  _id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export default function CategoriesAdmin() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ name: '', description: '' });
  const [addForm, setAddForm] = useState({ name: '', description: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch {
      showMessage('فشل تحميل الفئات', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addForm),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add category');
      }
      setAddForm({ name: '', description: '' });
      setShowAddForm(false);
      fetchCategories();
      showMessage('تمت إضافة الفئة بنجاح', 'success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'فشل إضافة الفئة';
      showMessage(errorMessage, 'error');
    }
  };

  const handleEdit = (category: Category) => {
    setEditingId(category._id);
    setEditForm({ name: category.name, description: category.description || '' });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;
    try {
      const response = await fetch(`${API_BASE_URL}/categories/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update category');
      }
      setEditingId(null);
      fetchCategories();
      showMessage('تم تحديث الفئة بنجاح', 'success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'فشل تحديث الفئة';
      showMessage(errorMessage, 'error');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذه الفئة؟')) return;
    try {
      const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete category');
      }
      fetchCategories();
      showMessage('تم حذف الفئة بنجاح', 'success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'فشل حذف الفئة';
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
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">إدارة الفئات</h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"
          >
            <Plus size={20} />
            إضافة فئة جديدة
          </button>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-xl ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message.text}
          </div>
        )}

        {showAddForm && (
          <div className="mb-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">إضافة فئة جديدة</h2>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">اسم الفئة</label>
                <input
                  type="text"
                  required
                  value={addForm.name}
                  onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="أدخل اسم الفئة"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">وصف الفئة (اختياري)</label>
                <textarea
                  value={addForm.description}
                  onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="أدخل وصف الفئة"
                  rows={3}
                />
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

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700 dark:text-slate-300">اسم الفئة</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700 dark:text-slate-300">الوصف</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700 dark:text-slate-300">تاريخ الإنشاء</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 dark:text-slate-300">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {categories.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500 dark:text-slate-400">
                      لا توجد فئات بعد
                    </td>
                  </tr>
                ) : (
                  categories.map((category) => (
                    <tr key={category._id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                      {editingId === category._id ? (
                        <td colSpan={4} className="px-6 py-4">
                          <form onSubmit={handleUpdate} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">اسم الفئة</label>
                                <input
                                  type="text"
                                  required
                                  value={editForm.name}
                                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">الوصف</label>
                                <input
                                  type="text"
                                  value={editForm.description}
                                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <button
                                type="submit"
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition-colors"
                              >
                                <Save size={16} />
                                حفظ
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingId(null)}
                                className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-white px-4 py-2 rounded-xl transition-colors"
                              >
                                <X size={16} />
                                إلغاء
                              </button>
                            </div>
                          </form>
                        </td>
                      ) : (
                        <>
                          <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">{category.name}</td>
                          <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{category.description || '-'}</td>
                          <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                            {new Date(category.createdAt).toLocaleDateString('ar-EG')}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleEdit(category)}
                                className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                              >
                                <Edit size={18} />
                              </button>
                              <button
                                onClick={() => handleDelete(category._id)}
                                className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
