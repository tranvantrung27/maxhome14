import axios from 'axios'
import { ContactFormData, PropertyFilters } from '../types'

// Cấu hình API base URL
const API_BASE_URL = 'https://api.maxhome14.vn'

// Tạo instance axios với cấu hình mặc định
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor để xử lý request
apiClient.interceptors.request.use(
  (config) => {
    // Thêm token nếu có
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor để xử lý response
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Xử lý lỗi chung
    if (error.response?.status === 401) {
      // Unauthorized - xóa token và redirect
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API services
export const contactService = {
  submitContact: (data: ContactFormData) => 
    apiClient.post('/contact', data),
}

export const propertyService = {
  getProperties: (params?: PropertyFilters) => 
    apiClient.get('/properties', { params }),
  getPropertyById: (id: string) => 
    apiClient.get(`/properties/${id}`),
}

export default apiClient
