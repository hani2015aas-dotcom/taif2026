import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {language === 'ar' ? 'طيف الأمين' : 'Tayf Al-Ameen'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-900 hover:text-amber-600 transition-colors">{t('home')}</a>
            <a href="#categories" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">{t('categories')}</a>
            <a href="#products" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">{t('products')}</a>
            <a href="#featured" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">{t('featuredTitle')}</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">{t('contact')}</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            {/* Cart */}
            <button className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs font-medium rounded-full flex items-center justify-center">3</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search')}
                className={`w-full px-4 py-3 ${isRTL ? 'pr-12' : 'pl-12'} bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all`}
              />
              <svg className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fadeIn">
            <nav className="flex flex-col gap-2">
              <a href="#" className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-xl transition-colors">{t('home')}</a>
              <a href="#categories" className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">{t('categories')}</a>
              <a href="#products" className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">{t('products')}</a>
              <a href="#featured" className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">{t('featuredTitle')}</a>
              <a href="#contact" className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">{t('contact')}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}