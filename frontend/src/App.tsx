import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import {
  TrangchuPage,
  CongTrinhThietKePage,
  CongTrinhThiCongPage,
  GioiThieuPage,
  LienHePage,
  NoiThatPage,
  PrivacyPage
} from './pages'

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<TrangchuPage />} />
          <Route path="/cong-trinh-thiet-ke" element={<CongTrinhThietKePage />} />
          <Route path="/cong-trinh-thi-cong" element={<CongTrinhThiCongPage />} />
          <Route path="/gioi-thieu" element={<GioiThieuPage />} />
          <Route path="/lien-he" element={<LienHePage />} />
          <Route path="/noi-that" element={<NoiThatPage />} />
          <Route path="/nha-vuon" element={<CongTrinhThietKePage />} />
          <Route path="/nha-pho" element={<CongTrinhThietKePage />} />
          <Route path="/biet-thu" element={<CongTrinhThietKePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
