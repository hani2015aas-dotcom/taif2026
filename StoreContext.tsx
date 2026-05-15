import { createContext, useContext, useState, ReactNode } from 'react'

interface Category {
  id: number
  nameAr: string
  nameEn: string
  icon: string
}

interface Product {
  id: number
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
  rating: number
  reviews: number
}

interface StoreContextType {
  categories: Category[]
  products: Product[]
  addCategory: (category: Omit<Category, 'id'>) => void
  removeCategory: (id: number) => void
  addProduct: (product: Omit<Product, 'id'>) => void
  removeProduct: (id: number) => void
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

const initialProducts: Product[] = [
  {
    id: 1,
    nameAr: 'كنبة عصرية فاخرة',
    nameEn: 'Modern Luxury Sofa',
    descriptionAr: 'كنبة ثلاثية المقاعد بتصميم عصري وأنيق',
    descriptionEn: 'Three-seater sofa with modern elegant design',
    price: 750000,
    originalPrice: 950000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    category: 'sofas',
    isNew: true,
    isSale: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    nameAr: 'طاولة طعام كلاسيكية',
    nameEn: 'Classic Dining Table',
    descriptionAr: 'طاولة طعام خشبية فاخرة لـ 6 أشخاص',
    descriptionEn: 'Luxury wooden dining table for 6 people',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop',
    category: 'dining',
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    nameAr: 'طقم غرفة نوم راقي',
    nameEn: 'Elegant Bedroom Set',
    descriptionAr: 'طقم كامل يشمل السرير والتسريحة والخزانة',
    descriptionEn: 'Complete set including bed, dresser, and wardrobe',
    price: 1250000,
    originalPrice: 1600000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop',
    category: 'bedrooms',
    isSale: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 4,
    nameAr: 'مصباح أرضي مودرن',
    nameEn: 'Modern Floor Lamp',
    descriptionAr: 'إضاءة دافئة بتصميم عصري أنيق',
    descriptionEn: 'Warm lighting with elegant modern design',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop',
    category: 'lighting',
    isNew: true,
    rating: 4.5,
    reviews: 45
  },
  {
    id: 5,
    nameAr: 'لوحة جدارية فنية',
    nameEn: 'Artistic Wall Decor',
    descriptionAr: 'لوحة فنية بتصميم هندسي عصري',
    descriptionEn: 'Art piece with modern geometric design',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&h=400&fit=crop',
    category: 'decor',
    rating: 4.7,
    reviews: 32
  },
  {
    id: 6,
    nameAr: 'كرسي استرخاء',
    nameEn: 'Relaxation Armchair',
    descriptionAr: 'كرسي مريح بتصميم سكandinافي',
    descriptionEn: 'Comfortable chair with Scandinavian design',
    price: 275000,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop',
    category: 'living',
    rating: 4.8,
    reviews: 98
  },
  {
    id: 7,
    nameAr: 'مكتبة عصرية',
    nameEn: 'Modern Bookshelf',
    descriptionAr: 'مكتبة بتصميم مفتوح وأنيق',
    descriptionEn: 'Open design bookshelf with elegant style',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=400&fit=crop',
    category: 'living',
    isNew: true,
    rating: 4.4,
    reviews: 56
  },
  {
    id: 8,
    nameAr: 'طاولة قهوة رخامية',
    nameEn: 'Marble Coffee Table',
    descriptionAr: 'طاولة قهوة بتصميم رخام فاخر',
    descriptionEn: 'Luxury marble coffee table',
    price: 320000,
    originalPrice: 400000,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&h=400&fit=crop',
    category: 'living',
    isSale: true,
    rating: 4.9,
    reviews: 143
  }
]

export function StoreProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const addCategory = (category: Omit<Category, 'id'>) => {
    setCategories(prev => [...prev, { ...category, id: Date.now() }])
  }

  const removeCategory = (id: number) => {
    setCategories(prev => prev.filter(cat => cat.id !== id))
  }

  const addProduct = (product: Omit<Product, 'id'>) => {
    setProducts(prev => [...prev, { ...product, id: Date.now() }])
  }

  const removeProduct = (id: number) => {
    setProducts(prev => prev.filter(prod => prod.id !== id))
  }

  return (
    <StoreContext.Provider value={{ categories, products, addCategory, removeCategory, addProduct, removeProduct }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}