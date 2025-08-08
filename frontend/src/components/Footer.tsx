import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MAXHOME14</h3>
            <p>Website chính thức của MAXHOME14</p>
          </div>
          <div className="footer-section">
            <h4>Liên hệ</h4>
            <p>Email: info@maxhome14.vn</p>
            <p>Phone: +84 xxx xxx xxx</p>
          </div>
          <div className="footer-section">
            <h4>Theo dõi</h4>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MAXHOME14. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
