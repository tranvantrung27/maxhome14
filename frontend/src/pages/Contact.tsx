import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Liên hệ với chúng tôi</h1>
          <p>Hãy để lại thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</p>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Thông tin liên hệ</h2>
              
                             <div className="contact-item">
                 <h3>Địa chỉ trụ sở</h3>
                 <p>51/4/8, Đường Châu Thới, Khu phố Bình Thung 2, Phường Đông Hòa, TP. Hồ Chí Minh</p>
               </div>
               
               <div className="contact-item">
                 <h3>Địa chỉ liên hệ</h3>
                 <p>51/4/8, Đường Châu Thới, Khu phố Bình Thung 2, Phường Bình An, TP. Dĩ An, Tỉnh Bình Dương</p>
               </div>
               
               <div className="contact-item">
                 <h3>Hotline</h3>
                 <p>0979 808 278</p>
               </div>
               
               <div className="contact-item">
                 <h3>Mã số thuế</h3>
                 <p>3703093765</p>
               </div>
              
              <div className="contact-item">
                <h3>Giờ làm việc</h3>
                <p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                <p>Thứ 7: 8:00 - 12:00</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Gửi tin nhắn</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ và tên *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Nội dung *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
