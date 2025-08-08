import './About.css'
import { 
  FaBuilding, 
  FaIdCard, 
  FaUserTie, 
  FaMapMarkerAlt, 
  FaPhone,
  FaDraftingCompass,
  FaHammer,
  FaTools,
  FaCouch,
  FaShieldAlt,
  FaEye,
  FaBullseye,
  FaHeart
} from 'react-icons/fa'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>Về MAXHOME14</h1>
          <p>Công Ty TNHH MTV Đầu Tư Và Xây Dựng MAXHOME 14</p>
          <p>Thành viên của hệ thống MAXHOME</p>
        </div>
      </section>
      
      <section className="company-info">
        <div className="container">
          <h2>Thông tin công ty</h2>
          <div className="info-list">
            <div className="info-row">
              <div className="info-label">
                <FaBuilding className="info-icon" />
                <span>Tên công ty</span>
              </div>
              <div className="info-value">
                Công Ty TNHH MTV Đầu Tư Và Xây Dựng MAXHOME 14
              </div>
            </div>
            
            <div className="info-row">
              <div className="info-label">
                <FaIdCard className="info-icon" />
                <span>Giấy phép kinh doanh</span>
              </div>
              <div className="info-value">
                3703093765 – Cấp ngày 11/11/2022
              </div>
            </div>
            
            <div className="info-row">
              <div className="info-label">
                <FaUserTie className="info-icon" />
                <span>Người đại diện</span>
              </div>
              <div className="info-value">
                Ông Nguyễn Kim Hùng
              </div>
            </div>
            
            <div className="info-row">
              <div className="info-label">
                <FaMapMarkerAlt className="info-icon" />
                <span>Địa chỉ</span>
              </div>
              <div className="info-value">
                <div><strong>Trụ sở:</strong> 51/4/8, Đường Châu Thới, Khu phố Bình Thung 2, Phường Đông Hòa, TP. Hồ Chí Minh, Việt Nam</div>
                <div><strong>Liên hệ:</strong> 51/4/8, Đường Châu Thới, Khu phố Bình Thung 2, Phường Bình An, TP. Dĩ An, Tỉnh Bình Dương, Việt Nam</div>
              </div>
            </div>
            
            <div className="info-row">
              <div className="info-label">
                <FaPhone className="info-icon" />
                <span>Liên hệ</span>
              </div>
              <div className="info-value">
                <div><strong>Điện thoại:</strong> 0979 808 278</div>
                <div><strong>Loại hình:</strong> Công ty trách nhiệm hữu hạn một thành viên ngoài nhà nước</div>
                <div><strong>Ngành nghề:</strong> Xây dựng nhà để ở</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Giới thiệu về MAXHOME14</h2>
              <p><strong>MAXHOME14</strong> được thành lập với sứ mệnh mang đến các giải pháp xây dựng và hoàn thiện nhà ở toàn diện cho khách hàng tại Bình Dương, TP. Hồ Chí Minh và các tỉnh thành lân cận.</p>
              
              <p>Chúng tôi cung cấp dịch vụ trọn gói từ tư vấn, thiết kế, thi công phần thô, hoàn thiện nội thất đến bảo hành dài hạn.</p>
              
              <h3>Điểm khác biệt của MAXHOME14</h3>
              <ul>
                <li>Quy trình làm việc rõ ràng, minh bạch từ báo giá đến nghiệm thu</li>
                <li>Sử dụng vật liệu chất lượng, được kiểm định từ nguồn cung uy tín</li>
                <li>Đội ngũ kỹ sư, kiến trúc sư và công nhân lành nghề, tận tâm</li>
              </ul>
              
              <h3>Thành viên của Hệ thống MAXHOME</h3>
              <p>MAXHOME14 là công ty thành viên thuộc hệ thống <strong>Công Ty Cổ Phần Kiến Trúc & Xây Dựng MAXHOME</strong> – thương hiệu hàng đầu trong lĩnh vực thiết kế và thi công trọn gói tại Việt Nam.</p>
              
              <h4>Vài nét về Công ty mẹ – MAXHOME:</h4>
              <ul>
                <li><strong>Tên giao dịch:</strong> Maxhome Architecture & Construction Joint Stock Company</li>
                <li><strong>Ngày thành lập:</strong> 08/08/2016</li>
                <li><strong>Giấy phép kinh doanh:</strong> 0107532007 – Cấp ngày 08/08/2016</li>
                <li><strong>Chủ tịch HĐQT:</strong> Ông Lê Duy Tuấn</li>
                <li><strong>Trụ sở chính:</strong> Miền Bắc: Tòa nhà MAXHOME, 180 Vạn Phúc, P. Vạn Phúc, Q. Hà Đông, TP. Hà Nội | Miền Nam: Tòa nhà MAXHOME Building, 162-164 Cộng Hòa, P. 12, Q. Tân Bình, TP. Hồ Chí Minh</li>
                <li><strong>Hệ thống chi nhánh:</strong> Trải dài khắp cả nước với đội ngũ hơn 300 nhân sự, có xưởng sản xuất nội thất riêng</li>
                <li><strong>Giải thưởng:</strong> Thương hiệu mạnh dẫn đầu Việt Nam 2015–2016, nhiều giải thưởng uy tín trong ngành kiến trúc và xây dựng</li>
                <li><strong>Dịch vụ:</strong> Tư vấn thiết kế, thi công trọn gói, cải tạo công trình, hoàn thiện nội thất, cung cấp vật liệu xây dựng</li>
              </ul>
              
              <h3>Dịch vụ của MAXHOME14</h3>
              <div className="services-grid">
                <div className="service-item">
                  <h4><FaDraftingCompass className="service-icon" /> Tư vấn & Thiết kế</h4>
                  <ul>
                    <li>Tư vấn thiết kế kiến trúc, kết cấu, điện nước</li>
                    <li>Bóc tách khối lượng và báo giá thi công</li>
                  </ul>
                </div>
                <div className="service-item">
                  <h4><FaHammer className="service-icon" /> Thi công trọn gói</h4>
                  <ul>
                    <li>Thi công phần thô</li>
                    <li>Hoàn thiện nội thất</li>
                    <li>Bàn giao chìa khóa trao tay</li>
                  </ul>
                </div>
                <div className="service-item">
                  <h4><FaTools className="service-icon" /> Sửa chữa & Cải tạo</h4>
                  <ul>
                    <li>Đề xuất phương án cải tạo tối ưu</li>
                    <li>Thi công cải tạo đảm bảo thẩm mỹ và kết cấu</li>
                  </ul>
                </div>
                <div className="service-item">
                  <h4><FaCouch className="service-icon" /> Hoàn thiện nội thất</h4>
                  <ul>
                    <li>Khảo sát, thiết kế, cung cấp vật liệu và thi công nội thất</li>
                  </ul>
                </div>
                <div className="service-item">
                  <h4><FaShieldAlt className="service-icon" /> Bảo hành & Bảo trì</h4>
                  <ul>
                    <li>Chế độ bảo hành lên tới 5 năm</li>
                    <li>Kiểm tra định kỳ 3–6 tháng/lần</li>
                  </ul>
                </div>
              </div>
              
              <h3>Tầm nhìn – Sứ mệnh – Giá trị cốt lõi</h3>
              <div className="vision-mission">
                <div className="vision-item">
                  <h4><FaEye className="vision-icon" /> Tầm nhìn</h4>
                  <p>Trở thành đơn vị xây dựng uy tín hàng đầu tại khu vực phía Nam, là lựa chọn số một của khách hàng khi xây dựng và cải tạo nhà ở.</p>
                </div>
                <div className="vision-item">
                  <h4><FaBullseye className="vision-icon" /> Sứ mệnh</h4>
                  <p>Mang đến những công trình bền vững, thẩm mỹ, đúng tiến độ, tối ưu chi phí cho khách hàng.</p>
                </div>
                <div className="vision-item">
                  <h4><FaHeart className="vision-icon" /> Giá trị cốt lõi</h4>
                  <p>Chất lượng – Uy tín – Minh bạch – Sáng tạo – Tận tâm.</p>
                </div>
              </div>
              
              <h3>Lời cam kết</h3>
              <p>MAXHOME14 cam kết đồng hành cùng khách hàng từ bản vẽ đầu tiên đến khi bàn giao công trình hoàn thiện. Chúng tôi không chỉ xây dựng nhà, mà còn xây dựng niềm tin và sự hài lòng trọn vẹn.</p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>2022</h3>
                <p>Năm thành lập</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Năm bảo hành</p>
              </div>
              <div className="stat-item">
                <h3>Trọn gói</h3>
                <p>Dịch vụ từ A-Z</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
