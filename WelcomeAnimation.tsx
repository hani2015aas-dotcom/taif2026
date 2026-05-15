import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function WelcomeAnimation() {
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 300)
    const timer2 = setTimeout(() => setAnimationPhase(2), 800)
    const timer3 = setTimeout(() => setAnimationPhase(3), 1300)
    const timer4 = setTimeout(() => setIsVisible(false), 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative text-center text-white px-4">
        {/* Logo Animation */}
        <div className={`transform transition-all duration-700 ${animationPhase >= 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        </div>

        {/* Title Animation */}
        <div className={`transform transition-all duration-700 delay-300 ${animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            {isRTL ? 'طيف الأمين' : 'Tayf Al-Ameen'}
          </h1>
        </div>

        {/* Subtitle Animation */}
        <div className={`transform transition-all duration-700 delay-500 ${animationPhase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            {t('welcomeSubtitle')}
          </p>
        </div>

        {/* Decorative Line Animation */}
        <div className={`mt-8 transform transition-all duration-700 delay-700 ${animationPhase >= 3 ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-0.5 bg-white/50 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-white/50 rounded-full"></div>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-500 ${animationPhase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 text-white/70">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}