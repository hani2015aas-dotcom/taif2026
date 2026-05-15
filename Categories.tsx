import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useStore } from '../context/StoreContext'

export default function Categories() {
  const { t, isRTL } = useLanguage()
  const { categories } = useStore()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const defaultCategories = [
    { icon: '🛋️', nameAr: 'الكنب والصوفات', nameEn: 'Sofas & Couches', color: 'from-amber-400 to-amber-600' },
    { icon: '🏠', nameAr: 'غرف المعيشة', nameEn: 'Living Room', color: 'from-orange-400 to-orange-600' },
    { icon: '🛏️', nameAr: 'غرف النوم', nameEn: 'Bedrooms', color: 'from-rose-400 to-rose-600' },
    { icon: '🍽️', nameAr: 'طاولات الطعام', nameEn: 'Dining Tables', color: 'from-emerald-400 to-emerald-600' },
    { icon: '🎨', nameAr: 'الديكورات', nameEn: 'Decorations', color: 'from-purple-400 to-purple-600' },
    { icon: '💡', nameAr: 'الإضاءة', nameEn: 'Lighting', color: 'from-yellow-400 to-yellow-600' },
    { icon: '💼', nameAr: 'الأثاث المكتبي', nameEn: 'Office Furniture', color: 'from-blue-400 to-blue-600' },
    { icon: '🌿', nameAr: 'الأثاث الخارجي', nameEn: 'Outdoor Furniture', color: 'from-teal-400 to-teal-600' },
  ]

  const allCategories = [...defaultCategories, ...categories.map(cat => ({
    icon: cat.icon,
    nameAr: cat.nameAr,
    nameEn: cat.nameEn,
    color: 'from-gray-400 to-gray-600'
  }))]

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
            {isRTL ? 'تسوق بسهولة' : 'Easy Shopping'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('categoriesTitle')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('categoriesSubtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {allCategories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'shadow-2xl shadow-amber-500/10 -translate-y-2' 
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                {category.icon}
              </div>
              
              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 text-center group-hover:text-amber-600 transition-colors">
                {isRTL ? category.nameAr : category.nameEn}
              </h3>
              
              {/* Arrow */}
              <div className={`absolute ${isRTL ? 'left-4' : 'right-4'} bottom-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                <svg className={`w-4 h-4 text-gray-600 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}