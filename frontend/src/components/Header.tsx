import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '../utils/constants'
import './Header.css'

// Helper function để lấy icon cho từng nav item
const getIconForNavItem = (label: string): string => {
  switch (label) {
    case 'Trang chủ': return 'fa-home'
    case 'Công trình thiết kế': return 'fa-drafting-compass'
    case 'Công trình thi công': return 'fa-hard-hat'
    case 'Nội thất': return 'fa-couch'
    case 'Giới thiệu': return 'fa-info-circle'
    case 'Liên hệ': return 'fa-phone-alt'
    default: return 'fa-circle'
  }
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null)
  const location = useLocation()
  
  // DEBUG: Log NAV_ITEMS
  console.log('DEBUG NAV_ITEMS:', NAV_ITEMS)
  console.log('DEBUG item có submenu:', NAV_ITEMS.filter(item => item.submenu))
  console.log('DEBUG current location:', location.pathname)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const handleDropdownClose = () => {
    setActiveDropdown(null)
  }

  // Hover delay functions
  const handleDropdownEnter = (label: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay
    setHoverTimeout(timeout as unknown as number)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Function để check active state
  const isActiveRoute = (path: string) => {
    const currentPath = location.pathname
    
    // Trang chủ chỉ active khi đúng '/'
    if (path === '/') {
      return currentPath === '/'
    }
    
    // Các trang khác active khi exact match
    return currentPath === path
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hiện/ẩn header dựa trên hướng scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll xuống - ẩn header
        setIsHeaderVisible(false)
        setIsMobileMenuOpen(false) // Đóng mobile menu khi scroll
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Scroll lên hoặc ở đầu trang - hiện header
        setIsHeaderVisible(true)
      }
      
      // Hiện/ẩn back to top button
      setShowBackToTop(currentScrollY > 300)
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Cleanup timeout
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [lastScrollY, hoverTimeout])

  return (
    <>
    <header className={`header ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`}>
      {/* Thanh trên: Logo + Search + Phone numbers */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <img src="/public/assets/logo/maxhome14.png" alt="MAXHOME14 Logo" />
            </Link>

            {/* Search Bar */}
            <div className="search-container">
              <div className="search-wrapper">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm..." 
                  className="search-input"
                />
                <button className="search-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="phone-numbers">
              <div className="phone-item">
                <i className="fas fa-phone"></i>
                <div className="phone-info">
                  <span className="phone-label">24/7</span>
                  <a href="tel:0979808278" className="phone-number">0979 808 278</a>
                </div>
              </div>
              <div className="phone-item">
                <i className="fas fa-phone"></i>
                <div className="phone-info">
                  <span className="phone-label">Hotline</span>
                  <a href="tel:0979808278" className="phone-number">0979 808 278</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Debug UI removed: test navigation and debug widgets were here */}
      
             {/* Thanh dưới: Menu chức năng */}
       <div className="header-bottom">
         <div className="container">
           <div className="nav-container">
             {/* Desktop Navigation */}
             <nav className="desktop-nav">
               {NAV_ITEMS.map((item, index) => {
                 console.log('Rendering item:', item.label, 'Has submenu:', !!item.submenu)
                 return (
                   <div key={index} className="nav-item">
                     {item.submenu ? (
                       <div 
                         className="dropdown-container"
                         onMouseEnter={() => handleDropdownEnter(item.label)}
                         onMouseLeave={handleDropdownLeave}
                       >
                         <Link 
                           to={item.path}
                           className={`nav-link dropdown-toggle ${isActiveRoute(item.path) ? 'active' : ''}`}
                           onClick={(e) => {
                             // KHÔNG prevent default - cho phép navigate đến trang cha
                             // Chỉ toggle dropdown khi cần thiết
                             handleDropdownToggle(item.label)
                           }}
                         >
                           <i className={`fas ${getIconForNavItem(item.label)}`}></i>
                           {item.label}
                           <i className="fas fa-chevron-down"></i>
                         </Link>
                         
                         {activeDropdown === item.label && (
                           <ul className="dropdown-menu">
                             {item.submenu.map((subItem, subIndex) => (
                               <li key={subIndex}>
                                 <Link
                                   to={subItem.path}
                                   className="dropdown-item"
                                   onClick={handleDropdownClose}
                                 >
                                   {subItem.label}
                                 </Link>
                               </li>
                             ))}
                           </ul>
                         )}
                       </div>
                     ) : (
                       <Link 
                         to={item.path} 
                         className={`nav-link ${isActiveRoute(item.path) ? 'active' : ''}`}
                       >
                         <i className={`fas ${getIconForNavItem(item.label)}`}></i>
                         {item.label}
                       </Link>
                     )}
                   </div>
                 )
               })}
             </nav>
             
             {/* Mobile Hamburger Menu Button */}
             <button 
               className="mobile-menu-toggle"
               onClick={toggleMobileMenu}
               aria-label="Toggle mobile menu"
             >
               <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                 <span></span>
                 <span></span>
                 <span></span>
               </span>
             </button>
           </div>
           
           {/* Mobile Navigation */}
           <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
             <div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>
             <div className="mobile-nav-content">
               {/* Close Button */}
               <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">
                 <i className="fas fa-times"></i>
               </button>
               
                             {NAV_ITEMS.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path} 
                  className={`mobile-nav-link ${isActiveRoute(item.path) ? 'active' : ''}`} 
                  onClick={closeMobileMenu}
                >
                  <i className={`fas ${getIconForNavItem(item.label)}`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
               
               {/* Phone CTA trong mobile menu */}
               <a href="tel:0979808278" className="mobile-phone-cta" onClick={closeMobileMenu}>
                 <i className="fas fa-phone"></i>
                 <div className="phone-info">
                   <span className="phone-label">Hotline</span>
                   <span className="phone-number">0979 808 278</span>
                 </div>
               </a>
             </div>
           </nav>
         </div>
       </div>
    </header>
    
    {/* Back to Top Button */}
    {showBackToTop && (
      <button 
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    )}
    </>
  )
}

export default Header
