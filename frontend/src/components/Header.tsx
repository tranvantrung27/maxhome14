import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      {/* Thanh trên: Logo + Địa chỉ + Gọi ngay */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <Link to="/" className="logo">
              <img src="assets/logo/maxhome14.png" alt="MAXHOME14 Logo" />
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
          <nav className="main-nav">
            <Link to="/" className="nav-link">Trang chủ</Link>
            <Link to="/projects" className="nav-link">Công trình thiết kế</Link>
            <Link to="/construction" className="nav-link">Công trình thi công</Link>
            <Link to="/interior" className="nav-link">Nội thất</Link>
            <Link to="/about" className="nav-link">Giới thiệu</Link>
            <Link to="/contact" className="nav-link">Liên hệ</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
