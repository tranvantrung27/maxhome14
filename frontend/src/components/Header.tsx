import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      {/* Thanh trên: Logo + Địa chỉ + Gọi ngay */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
                           <Link to="/" className="logo">
                 <img src="/assets/logo/maxhome14.png" alt="MAXHOME14 Logo" />
               </Link>
            <div className="header-info">
                             <div className="address">
                 <i className="fas fa-map-marker-alt"></i>
                 <span>51/4/8, Đường Châu Thới, Khu phố Bình Thung 2, Phường Bình An, TP. Dĩ An, Tỉnh Bình Dương</span>
               </div>
              <a href="tel:0979808278" className="phone-link">
                <i className="fas fa-phone"></i>
                <span>Gọi ngay: 0979 808 278</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
             {/* Thanh dưới: Menu chức năng */}
       <div className="header-bottom">
         <div className="container">
           <div className="nav-container">
             {/* Hamburger Menu Button - chỉ hiện trên mobile */}
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

             {/* Desktop Navigation */}
             <nav className="main-nav desktop-nav">
               <Link to="/" className="nav-link">Trang chủ</Link>
               <Link to="/projects" className="nav-link">Công trình thiết kế</Link>
               <Link to="/construction" className="nav-link">Công trình thi công</Link>
               <Link to="/interior" className="nav-link">Nội thất</Link>
               <Link to="/about" className="nav-link">Giới thiệu</Link>
               <Link to="/contact" className="nav-link">Liên hệ</Link>
             </nav>

             {/* Mobile Navigation */}
             <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
               <div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>
               <div className="mobile-nav-content">
                 <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                   <i className="fas fa-home"></i>
                   <span>Trang chủ</span>
                 </Link>
                 <Link to="/projects" className="mobile-nav-link" onClick={closeMobileMenu}>
                   <i className="fas fa-drafting-compass"></i>
                   <span>Công trình thiết kế</span>
                 </Link>
                 <Link to="/construction" className="mobile-nav-link" onClick={closeMobileMenu}>
                   <i className="fas fa-hard-hat"></i>
                   <span>Công trình thi công</span>
                 </Link>
                 <Link to="/interior" className="mobile-nav-link" onClick={closeMobileMenu}>
                   <i className="fas fa-couch"></i>
                   <span>Nội thất</span>
                 </Link>
                 <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                   <i className="fas fa-info-circle"></i>
                   <span>Giới thiệu</span>
                 </Link>
                 <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                   <i className="fas fa-phone-alt"></i>
                   <span>Liên hệ</span>
                 </Link>
               </div>
             </nav>
           </div>
         </div>
       </div>
    </header>
  )
}

export default Header
