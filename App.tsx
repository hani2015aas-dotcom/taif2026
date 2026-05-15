import { useState, useEffect } from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { StoreProvider } from './context/StoreContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import ProductGrid from './components/ProductGrid'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import AdminDashboard from './components/AdminDashboard'
import WelcomeAnimation from './components/WelcomeAnimation'

function AppContent() {
  const { isRTL } = useLanguage()
  const [isAdminRoute, setIsAdminRoute] = useState(false)

  useEffect(() => {
    // التحقق من المسار للوحة التحكم
    const checkRoute = () => {
      const hash = window.location.hash
      setIsAdminRoute(hash === '#admin')
    }
    
    checkRoute()
    window.addEventListener('hashchange', checkRoute)
    return () => window.removeEventListener('hashchange', checkRoute)
  }, [])

  // عرض لوحة التحكم إذا كان المسار #admin
  if (isAdminRoute) {
    return <AdminDashboard />
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <WelcomeAnimation />
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ProductGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <StoreProvider>
        <AppContent />
      </StoreProvider>
    </LanguageProvider>
  )
}

export default App