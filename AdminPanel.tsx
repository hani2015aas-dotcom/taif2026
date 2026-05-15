import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useStore } from '../context/StoreContext'

interface AdminPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const { t, isRTL } = useLanguage()
  const { categories, products, addCategory, removeCategory, addProduct, removeProduct } = useStore()
  const [activeTab, setActiveTab] = useState<'categories' | 'products'>('categories')
  
  // Category Form
  const [categoryForm, setCategoryForm] = useState({
    nameAr: '',
    nameEn: '',
    icon: '📦'
  })

  // Product Form
  const [productForm, setProductForm] = useState({
    nameAr: '',
    nameEn: '',
    descriptionAr: '',
    descriptionEn: '',
    price: '',
    originalPrice: '',
    image: '',
    category: 'sofas',
    isNew: false,
    isSale: false,
    rating: '4.5',
    reviews: '0'
  })

  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [showProductForm, setShowProductForm] = useState(false)

  const icons = ['🛋️', '🏠', '🛏️', '🍽️', '🎨', '💡', '💼', '🌿', '📦', '🎁', '🪑', '🪴']

  const handleAddCategory = () => {
    if (categoryForm.nameAr && categoryForm.nameEn) {
      addCategory(categoryForm)
      setCategoryForm({ nameAr: '', nameEn: '', icon: '📦' })
      setShowCategoryForm(false)
    }
  }

  const handleAddProduct = () => {
    if (productForm.nameAr && productForm.nameEn && productForm.price) {
      addProduct({
        ...productForm,
        price: Number(productForm.price),
        originalPrice: productForm.originalPrice ? Number(productForm.originalPrice) : undefined,
        image: productForm.image || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
        rating: Number(productForm.rating),
        reviews: Number(productForm.reviews)
      })
      setProductForm({
        nameAr: '',
        nameEn: '',
        descriptionAr: '',
        descriptionEn: '',
        price: '',
        originalPrice: '',
        image: '',
        category: 'sofas',
        isNew: false,
        isSale: false,
        rating: '4.5',
        reviews: '0'
      })
      setShowProductForm(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Panel */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-scaleIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">{t('adminPanel')}</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('categories')}
            className={`flex-1 py-4 text-sm font-medium transition-colors ${
              activeTab === 'categories'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('manageCategories')}
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 py-4 text-sm font-medium transition-colors ${
              activeTab === 'products'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('manageProducts')}
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {activeTab === 'categories' && (
            <div className="space-y-6">
              {/* Add Category Button */}
              <button
                onClick={() => setShowCategoryForm(!showCategoryForm)}
                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-amber-500 hover:text-amber-600 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {t('addCategory')}
              </button>

              {/* Category Form */}
              {showCategoryForm && (
                <div className="bg-gray-50 rounded-2xl p-6 space-y-4 animate-fadeIn">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('categoryName')} (عربي)</label>
                      <input
                        type="text"
                        value={categoryForm.nameAr}
                        onChange={(e) => setCategoryForm({ ...categoryForm, nameAr: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        placeholder="اسم القسم بالعربي"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('categoryNameEn')} (English)</label>
                      <input
                        type="text"
                        value={categoryForm.nameEn}
                        onChange={(e) => setCategoryForm({ ...categoryForm, nameEn: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        placeholder="Category name in English"
                      />
                    </div>
                  </div>
                  
                  {/* Icon Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('categoryIcon')}</label>
                    <div className="flex flex-wrap gap-2">
                      {icons.map((icon) => (
                        <button
                          key={icon}
                          onClick={() => setCategoryForm({ ...categoryForm, icon })}
                          className={`w-12 h-12 text-2xl rounded-xl border-2 transition-all ${
                            categoryForm.icon === icon
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-gray-200 hover:border-amber-300'
                          }`}
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleAddCategory}
                      className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                    >
                      {t('save')}
                    </button>
                    <button
                      onClick={() => setShowCategoryForm(false)}
                      className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-colors"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </div>
              )}

              {/* Categories List */}
              <div className="space-y-3">
                {categories.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p>{isRTL ? 'لا توجد أقسام مضافة بعد' : 'No categories added yet'}</p>
                  </div>
                ) : (
                  categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{category.icon}</span>
                        <div>
                          <div className="font-medium text-gray-900">{category.nameAr}</div>
                          <div className="text-sm text-gray-500">{category.nameEn}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => removeCategory(category.id)}
                          className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center hover:bg-red-200 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6">
              {/* Add Product Button */}
              <button
                onClick={() => setShowProductForm(!showProductForm)}
                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-amber-500 hover:text-amber-600 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {t('addProduct')}
              </button>

              {/* Product Form */}
              {showProductForm && (
                <div className="bg-gray-50 rounded-2xl p-6 space-y-4 animate-fadeIn">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">اسم المنتج (عربي)</label>
                      <input
                        type="text"
                        value={productForm.nameAr}
                        onChange={(e) => setProductForm({ ...productForm, nameAr: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        placeholder="اسم المنتج"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Name (English)</label>
                      <input
                        type="text"
                        value={productForm.nameEn}
                        onChange={(e) => setProductForm({ ...productForm, nameEn: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        placeholder="Product name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الوصف (عربي)</label>
                      <textarea
                        value={productForm.descriptionAr}
                        onChange={(e) => setProductForm({ ...productForm, descriptionAr: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all resize-none"
                        rows={3}
                        placeholder="وصف المنتج"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description (English)</label>
                      <textarea
                        value={productForm.descriptionEn}
                        onChange={(e) => setProductForm({ ...productForm, descriptionEn: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all resize-none"
                        rows={3}
                        placeholder="Product description"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">السعر</label>
                      <input
                        type="number"
                        value={productForm.price}
                        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">السعر الأصلي (اختياري)</label>
                      <input
                        type="number"
                        value={productForm.originalPrice}
                        onChange={(e) => setProductForm({ ...productForm, originalPrice: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">القسم</label>
                      <select
                        value={productForm.category}
                        onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                      >
                        <option value="sofas">كنب</option>
                        <option value="living">معيشة</option>
                        <option value="bedrooms">نوم</option>
                        <option value="dining">طعام</option>
                        <option value="decor">ديكور</option>
                        <option value="lighting">إضاءة</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رابط الصورة</label>
                    <input
                      type="url"
                      value={productForm.image}
                      onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                      placeholder="https://..."
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={productForm.isNew}
                        onChange={(e) => setProductForm({ ...productForm, isNew: e.target.checked })}
                        className="w-5 h-5 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
                      />
                      <span className="text-sm text-gray-700">{t('new')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={productForm.isSale}
                        onChange={(e) => setProductForm({ ...productForm, isSale: e.target.checked })}
                        className="w-5 h-5 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
                      />
                      <span className="text-sm text-gray-700">{t('sale')}</span>
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleAddProduct}
                      className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                    >
                      {t('save')}
                    </button>
                    <button
                      onClick={() => setShowProductForm(false)}
                      className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-colors"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </div>
              )}

              {/* Products List */}
              <div className="space-y-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.nameAr}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{product.nameAr}</div>
                        <div className="text-sm text-gray-500">{product.nameEn}</div>
                        <div className="text-amber-600 font-semibold">{product.price.toLocaleString('ar-IQ')} {t('currency')}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center hover:bg-red-200 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}