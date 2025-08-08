import { ContactFormData } from '../types'

// Format price
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price)
}

// Format date
export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+84|84|0)[0-9]{9}$/
  return phoneRegex.test(phone)
}

// Validate contact form
export const validateContactForm = (data: ContactFormData): string[] => {
  const errors: string[] = []

  if (!data.name.trim()) {
    errors.push('Họ và tên là bắt buộc')
  }

  if (!data.email.trim()) {
    errors.push('Email là bắt buộc')
  } else if (!isValidEmail(data.email)) {
    errors.push('Email không hợp lệ')
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Số điện thoại không hợp lệ')
  }

  if (!data.message.trim()) {
    errors.push('Nội dung là bắt buộc')
  }

  return errors
}

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Local storage helpers
export const storage = {
  get: (key: string) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  },
  set: (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },
  remove: (key: string) => {
    localStorage.removeItem(key)
  },
}

// Generate random ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

// Capitalize first letter
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
