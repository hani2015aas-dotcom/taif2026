import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations = {
  ar: {
    // Header
    home: 'الرئيسية',
    products: 'المنتجات',
    categories: 'الأقسام',
    about: 'من نحن',
    contact: 'اتصل بنا',
    admin: 'لوحة التحكم',
    search: 'بحث...',
    
    // Hero
    heroTitle: 'أثاث فاخر يُعيد تعريف أناقتك',
    heroSubtitle: 'اكتشف مجموعة مميزة من الأثاث والديكورات العصرية لمنزلك',
    welcomeTitle: 'مرحباً بكم في طيف الأمين',
    welcomeSubtitle: 'شريككم الموثوق في عالم الأثاث والديكور الفاخر',
    
    // About
    aboutTitle: 'نظرة عن الشركة',
    aboutSubtitle: 'قصتنا ورؤيتنا ورسالتنا',
    ourStory: 'قصتنا',
    ourStoryText: 'تأسست شركة طيف الأمين عام 2010 بهدف تقديم أثاث فاخر يجمع بين الأصالة والمعاصرة. نحن نؤمن بأن كل منزل يستحق أن يكون مكاناً استثنائياً يعكس شخصية أصحابه.',
    ourVision: 'رؤيتنا',
    ourVisionText: 'أن نكون الخيار الأول لكل من يبحث عن الأثاث الراقي والتصاميم المبتكرة في المملكة العربية السعودية والمنطقة.',
    ourMission: 'رسالتنا',
    ourMissionText: 'تقديم منتجات عالية الجودة بتصاميم عصرية وأسعار تنافسية مع خدمة عملاء استثنائية.',
    whyUs: 'لماذا نحن',
    qualityProducts: 'جودة عالية',
    qualityProductsDesc: 'نختار أفضل المواد والخامات',
    expertDesign: 'تصاميم احترافية',
    expertDesignDesc: 'فريق من المصممين المحترفين',
    fastDelivery: 'توصيل سريع',
    fastDeliveryDesc: 'خدمة توصيل لجميع المناطق',
    support24: 'دعم متواصل',
    support24Desc: 'فريق خدمة عملاء على مدار الساعة',
    shopNow: 'تسوق الآن',
    exploreMore: 'اكتشف المزيد',
    
    // Categories
    categoriesTitle: 'تسوق حسب القسم',
    categoriesSubtitle: 'اختر من مجموعة واسعة من الأقسام',
    sofas: 'الكنب والصوفات',
    livingRoom: 'غرف المعيشة',
    bedrooms: 'غرف النوم',
    dining: 'طاولات الطعام',
    decor: 'الديكورات',
    lighting: 'الإضاءة',
    office: 'الأثاث المكتبي',
    outdoor: 'الأثاث الخارجي',
    
    // Products
    featuredTitle: 'منتجات مميزة',
    featuredSubtitle: 'أحدث المنتجات المضافة',
    allProducts: 'جميع المنتجات',
    viewAll: 'عرض الكل',
    addToCart: 'أضف للسلة',
    quickView: 'عرض سريع',
    new: 'جديد',
    sale: 'تخفيض',
    addToWishlist: 'أضف للمفضلة',
    
    // Admin
    adminPanel: 'لوحة التحكم',
    addCategory: 'إضافة قسم جديد',
    addProduct: 'إضافة منتج جديد',
    manageCategories: 'إدارة الأقسام',
    manageProducts: 'إدارة المنتجات',
    categoryName: 'اسم القسم',
    categoryNameEn: 'اسم القسم (إنجليزي)',
    categoryIcon: 'أيقونة القسم',
    save: 'حفظ',
    cancel: 'إلغاء',
    delete: 'حذف',
    edit: 'تعديل',
    close: 'إغلاق',
    
    // Footer
    footerDesc: 'متجرك المفضل للأثاث والديكورات الفاخرة. نقدم لك أفضل التصاميم العصرية والكلاسيكية.',
    quickLinks: 'روابط سريعة',
    customerService: 'خدمة العملاء',
    newsletter: 'النشرة البريدية',
    newsletterDesc: 'اشترك للحصول على آخر العروض والتخفيضات',
    emailPlaceholder: 'بريدك الإلكتروني',
    subscribe: 'اشترك',
    allRightsReserved: 'جميع الحقوق محفوظة',
    
    // Products Data
    modernSofa: 'كنبة عصرية فاخرة',
    modernSofaDesc: 'كنبة ثلاثية المقاعد بتصميم عصري وأنيق',
    diningTable: 'طاولة طعام كلاسيكية',
    diningTableDesc: 'طاولة طعام خشبية فاخرة لـ 6 أشخاص',
    bedroomSet: 'طقم غرفة نوم راقي',
    bedroomSetDesc: 'طقم كامل يشمل السرير والتسريحة والخزانة',
    floorLamp: 'مصباح أرضي مودرن',
    floorLampDesc: 'إضاءة دافئة بتصميم عصري أنيق',
    wallDecor: 'لوحة جدارية فنية',
    wallDecorDesc: 'لوحة فنية بتصميم هندسي عصري',
    armchair: 'كرسي استرخاء',
    armchairDesc: 'كرسي مريح بتصميم سكandinافي',
    bookshelf: 'مكتبة عصرية',
    bookshelfDesc: 'مكتبة بتصميم مفتوح وأنيق',
    coffeeTable: 'طاولة قهوة رخامية',
    coffeeTableDesc: 'طاولة قهوة بتصميم رخام فاخر',
    
    // Currency
    currency: 'د.ع',
    price: 'السعر',
  },
  en: {
    // Header
    home: 'Home',
    products: 'Products',
    categories: 'Categories',
    about: 'About Us',
    contact: 'Contact',
    admin: 'Admin Panel',
    search: 'Search...',
    
    // Hero
    heroTitle: 'Luxury Furniture Redefining Your Elegance',
    heroSubtitle: 'Discover our exclusive collection of modern furniture and decorations for your home',
    welcomeTitle: 'Welcome to Tayf Al-Ameen',
    welcomeSubtitle: 'Your trusted partner in the world of luxury furniture and decor',
    
    // About
    aboutTitle: 'About Our Company',
    aboutSubtitle: 'Our story, vision, and mission',
    ourStory: 'Our Story',
    ourStoryText: 'Tayf Al-Ameen was founded in 2010 with the goal of providing luxury furniture that combines authenticity with modernity. We believe that every home deserves to be an exceptional place that reflects the personality of its owners.',
    ourVision: 'Our Vision',
    ourVisionText: 'To be the first choice for everyone looking for elegant furniture and innovative designs in Saudi Arabia and the region.',
    ourMission: 'Our Mission',
    ourMissionText: 'Providing high-quality products with modern designs and competitive prices with exceptional customer service.',
    whyUs: 'Why Choose Us',
    qualityProducts: 'High Quality',
    qualityProductsDesc: 'We select the best materials and resources',
    expertDesign: 'Expert Designs',
    expertDesignDesc: 'Team of professional designers',
    fastDelivery: 'Fast Delivery',
    fastDeliveryDesc: 'Delivery service to all regions',
    support24: '24/7 Support',
    support24Desc: 'Customer service team around the clock',
    shopNow: 'Shop Now',
    exploreMore: 'Explore More',
    
    // Categories
    categoriesTitle: 'Shop by Category',
    categoriesSubtitle: 'Choose from a wide range of categories',
    sofas: 'Sofas & Couches',
    livingRoom: 'Living Room',
    bedrooms: 'Bedrooms',
    dining: 'Dining Tables',
    decor: 'Decorations',
    lighting: 'Lighting',
    office: 'Office Furniture',
    outdoor: 'Outdoor Furniture',
    
    // Products
    featuredTitle: 'Featured Products',
    featuredSubtitle: 'Latest additions to our collection',
    allProducts: 'All Products',
    viewAll: 'View All',
    addToCart: 'Add to Cart',
    quickView: 'Quick View',
    new: 'New',
    sale: 'Sale',
    addToWishlist: 'Add to Wishlist',
    
    // Admin
    adminPanel: 'Admin Panel',
    addCategory: 'Add New Category',
    addProduct: 'Add New Product',
    manageCategories: 'Manage Categories',
    manageProducts: 'Manage Products',
    categoryName: 'Category Name',
    categoryNameEn: 'Category Name (English)',
    categoryIcon: 'Category Icon',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    
    // Footer
    footerDesc: 'Your favorite store for luxury furniture and decorations. We offer the best modern and classic designs.',
    quickLinks: 'Quick Links',
    customerService: 'Customer Service',
    newsletter: 'Newsletter',
    newsletterDesc: 'Subscribe to get latest offers and discounts',
    emailPlaceholder: 'Your email',
    subscribe: 'Subscribe',
    allRightsReserved: 'All Rights Reserved',
    
    // Products Data
    modernSofa: 'Modern Luxury Sofa',
    modernSofaDesc: 'Three-seater sofa with modern elegant design',
    diningTable: 'Classic Dining Table',
    diningTableDesc: 'Luxury wooden dining table for 6 people',
    bedroomSet: 'Elegant Bedroom Set',
    bedroomSetDesc: 'Complete set including bed, dresser, and wardrobe',
    floorLamp: 'Modern Floor Lamp',
    floorLampDesc: 'Warm lighting with elegant modern design',
    wallDecor: 'Artistic Wall Decor',
    wallDecorDesc: 'Art piece with modern geometric design',
    armchair: 'Relaxation Armchair',
    armchairDesc: 'Comfortable chair with Scandinavian design',
    bookshelf: 'Modern Bookshelf',
    bookshelfDesc: 'Open design bookshelf with elegant style',
    coffeeTable: 'Marble Coffee Table',
    coffeeTableDesc: 'Luxury marble coffee table',
    
    // Currency
    currency: 'IQD',
    price: 'Price',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key
  }
  
  const isRTL = language === 'ar'
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}