// API service configuration
export const API_ENDPOINTS = {
  PROJECTS: '/api/projects',
  CONTACT: '/api/contact',
  USERS: '/api/users',
  UPLOAD: '/api/upload'
} as const

export const API_CONFIG = {
  BASE_URL: 'https://api.maxhome14.vn',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3
} as const
