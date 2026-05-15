import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t, isRTL, language } = useLanguage()

  const quickLinks = [
    { nameAr: 'الرئيسية', nameEn: 'Home', href: '#' },
    { nameAr: 'المنتجات', nameEn: 'Products', href: '#products' },
    { nameAr: 'الأقسام', nameEn: 'Categories', href: '#categories' },
    { nameAr: 'من نحن', nameEn: 'About Us', href: '#' },
  ]

  const customerService = [
    { nameAr: 'اتصل بنا', nameEn: 'Contact Us', href: '#' },
    { nameAr: 'الأسئلة الشائعة', nameEn: 'FAQ', href: '#' },
    { nameAr: 'سياسة الإرجاع', nameEn: 'Return Policy', href: '#' },
    { nameAr: 'الشحن والتوصيل', nameEn: 'Shipping', href: '#' },
  ]

  const socialLinks = [
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                {language === 'ar' ? 'طيف الأمين' : 'Tayf Al-Ameen'}
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footerDesc')}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.nameEn}>
                  <a href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors">
                    {language === 'ar' ? link.nameAr : link.nameEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('customerService')}</h3>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.nameEn}>
                  <a href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors">
                    {language === 'ar' ? link.nameAr : link.nameEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('newsletter')}</h3>
            <p className="text-gray-400 mb-4">
              {t('newsletterDesc')}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className={`w-full px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:border-amber-500 focus:outline-none transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              />
              <button className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {language === 'ar' ? 'طيف الأمين' : 'Tayf Al-Ameen'}. {t('allRightsReserved')}.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
              {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}