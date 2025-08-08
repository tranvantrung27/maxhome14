// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://api.maxhome14.vn',
  TIMEOUT: 10000,
}

// Navigation
export const NAV_ITEMS = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Giới thiệu', path: '/about' },
  { label: 'Liên hệ', path: '/contact' },
]

// Contact form
export const CONTACT_FIELDS = {
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  MESSAGE: 'message',
} as const

// Property status
export const PROPERTY_STATUS = {
  AVAILABLE: 'available',
  SOLD: 'sold',
  PENDING: 'pending',
} as const

// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
} as const

// Theme colors
export const THEME_COLORS = {
  PRIMARY_WHITE: '#ffffff',
  PRIMARY_GOLD: '#ffd700',
  SECONDARY_GOLD: '#ffed4e',
  DARK_GOLD: '#b8860b',
  TEXT_DARK: '#333333',
  TEXT_LIGHT: '#666666',
  BACKGROUND_LIGHT: '#fafafa',
  BORDER_LIGHT: '#e0e0e0',
} as const

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200,
} as const
