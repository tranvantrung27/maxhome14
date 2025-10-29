// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://api.maxhome14.vn',
  TIMEOUT: 10000,
}

// Navigation
export const NAV_ITEMS = [
  { label: 'Trang chủ', path: '/' },
  { 
    label: 'Công trình thiết kế', 
    path: '/cong-trinh-thiet-ke',
    submenu: [
      { 
        label: 'Thiết kế nhà vườn', 
        path: '/design/garden-house',
        submenu: [
          { label: 'Nhà vườn cấp 4/nhà 1 tầng', path: '/design/garden-house/single-floor' },
          { label: 'Nhà ở 2 tầng', path: '/design/garden-house/two-floor' },
          { label: 'Nhà ở nhiều tầng', path: '/design/garden-house/multi-floor' }
        ]
      },
      { label: 'Thiết kế nhà phố', path: '/design/townhouse' }
    ]
  },
  { label: 'Công trình thi công', path: '/cong-trinh-thi-cong' },
  { label: 'Giới thiệu', path: '/gioi-thieu' },
  { label: 'Liên hệ', path: '/lien-he' },
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
