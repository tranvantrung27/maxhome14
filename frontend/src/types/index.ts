// Contact form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

// Property types
export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  area: number
  bedrooms: number
  bathrooms: number
  images: string[]
  features: string[]
  status: 'available' | 'sold' | 'pending'
  createdAt: string
  updatedAt: string
}

export interface PropertyFilters {
  location?: string
  minPrice?: number
  maxPrice?: number
  minArea?: number
  maxArea?: number
  bedrooms?: number
  status?: Property['status']
  page?: number
  limit?: number
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// User types
export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  avatar?: string
}

// Navigation types
export interface NavItem {
  label: string
  path: string
  icon?: string
}
