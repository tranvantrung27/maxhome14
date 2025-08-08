import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Chào mừng đến với MAXHOME14</h1>
            <p>Website chính thức của MAXHOME14 - Nơi bạn tìm thấy những giải pháp bất động sản tốt nhất</p>
            <button className="btn btn-primary">Tìm hiểu thêm</button>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2 className="text-center">Tại sao chọn MAXHOME14?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Chất lượng</h3>
              <p>Cam kết chất lượng cao nhất cho mọi dự án</p>
            </div>
            <div className="feature-card">
              <h3>Uy tín</h3>
              <p>Được tin tưởng bởi hàng nghìn khách hàng</p>
            </div>
            <div className="feature-card">
              <h3>Dịch vụ</h3>
              <p>Dịch vụ chuyên nghiệp, tận tâm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
