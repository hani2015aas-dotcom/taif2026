import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} space-y-8`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-amber-700">
                {isRTL ? 'مجموعة 2024 الجديدة' : 'New 2024 Collection'}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('heroTitle')}
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              {t('heroSubtitle')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}>
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300">
                {t('shopNow')}
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                {t('exploreMore')}
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500">{isRTL ? 'منتج فاخر' : 'Premium Products'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-500">{isRTL ? 'عميل سعيد' : 'Happy Clients'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500">{isRTL ? 'علامة تجارية' : 'Brands'}</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                alt="Luxury Sofa"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Floating Card 1 */}
              <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-white rounded-2xl p-4 shadow-xl`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{isRTL ? 'جودة عالية' : 'Premium Quality'}</div>
                    <div className="text-xs text-gray-500">{isRTL ? 'ضمان 5 سنوات' : '5 Years Warranty'}</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className={`absolute -top-4 ${isRTL ? '-right-4' : '-left-4'} bg-white rounded-2xl p-3 shadow-xl`}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-xs font-medium">م</div>
                    <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-xs font-medium">أ</div>
                    <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center text-xs font-medium">س</div>
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="font-semibold">+2.5K</span> {isRTL ? 'تقييم' : 'Reviews'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}