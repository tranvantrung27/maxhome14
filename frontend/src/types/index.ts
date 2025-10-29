// Common types for the application
export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: 'design' | 'construction'
  status: 'completed' | 'ongoing' | 'planned'
  createdAt: string
  updatedAt: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export interface NavItem {
  label: string
  path: string
  submenu?: NavItem[]
}

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}
