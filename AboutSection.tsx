import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function AboutSection() {
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      titleAr: 'جودة عالية',
      titleEn: 'High Quality',
      descAr: 'نختار أفضل المواد والخامات',
      descEn: 'We select the best materials and resources',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      titleAr: 'تصاميم احترافية',
      titleEn: 'Expert Designs',
      descAr: 'فريق من المصممين المحترفين',
      descEn: 'Team of professional designers',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titleAr: 'توصيل سريع',
      titleEn: 'Fast Delivery',
      descAr: 'خدمة توصيل لجميع المناطق',
      descEn: 'Delivery service to all regions',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      titleAr: 'دعم متواصل',
      titleEn: '24/7 Support',
      descAr: 'فريق خدمة عملاء على مدار الساعة',
      descEn: 'Customer service team around the clock',
      color: 'from-emerald-400 to-emerald-600'
    }
  ]

  const stats = [
    { value: '15+', labelAr: 'سنة خبرة', labelEn: 'Years Experience' },
    { value: '10K+', labelAr: 'عميل سعيد', labelEn: 'Happy Clients' },
    { value: '500+', labelAr: 'منتج فاخر', labelEn: 'Premium Products' },
    { value: '50+', labelAr: 'علامة تجارية', labelEn: 'Brand Partners' }
  ]

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
            {isRTL ? 'تعرف علينا' : 'Get to Know Us'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video/Image Section */}
          <div className={`relative transform transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : (isRTL ? 'translate-x-10' : '-translate-x-10') + ' opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Animated Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 relative">
                {/* Furniture Store Interior Image */}
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop"
                  alt="Furniture Store"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <svg className={`w-8 h-8 text-amber-500 ${isRTL ? 'mr-1' : 'ml-1'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Animated Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-bounce">
                  <span className="text-2xl">🏠</span>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl -z-10 blur-xl"></div>
            </div>

            {/* Floating Stats Card */}
            <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-white rounded-2xl p-4 shadow-xl`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-500">{isRTL ? 'سنة من التميز' : 'Years of Excellence'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-8 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : (isRTL ? '-translate-x-10' : 'translate-x-10') + ' opacity-0'}`}>
            {/* Story */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600">📖</span>
                </span>
                {t('ourStory')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('ourStoryText')}
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600">👁️</span>
                </span>
                {t('ourVision')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('ourVisionText')}
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600">🎯</span>
                </span>
                {t('ourMission')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('ourMissionText')}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {isRTL ? stat.labelAr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            {t('whyUs')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {isRTL ? feature.titleAr : feature.titleEn}
                </h4>
                <p className="text-gray-600 text-sm">
                  {isRTL ? feature.descAr : feature.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}