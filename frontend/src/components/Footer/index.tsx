import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top - Company Info */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/assets/logo/maxhome14.png" alt="MAXHOME14 Logo" />
              </div>
              <p className="footer-description">
                Chuyên thiết kế và thi công nhà ở chất lượng cao, 
                mang đến không gian sống hoàn hảo cho gia đình bạn.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="social-link" aria-label="Zalo">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">Thông tin liên hệ</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <span className="contact-label">Địa chỉ:</span>
                    <p>123 Đường ABC, Quận XYZ, TP.HCM</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <span className="contact-label">Hotline:</span>
                    <a href="tel:0927748888">092.774.8888</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <span className="contact-label">Điện thoại:</span>
                    <a href="tel:0929245555">092.924.5555</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <span className="contact-label">Email:</span>
                    <a href="mailto:info@maxhome14.vn">info@maxhome14.vn</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <span className="contact-label">Giờ làm việc:</span>
                    <p>Thứ 2 - Chủ nhật: 8:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 MAXHOME14. Tất cả quyền được bảo lưu.</p>
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy">Chính sách bảo mật</Link>
              <Link to="/terms">Điều khoản sử dụng</Link>
              <Link to="/sitemap">Sơ đồ trang web</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
