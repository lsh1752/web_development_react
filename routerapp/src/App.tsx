import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom'
// 만든 컴포넌트들을 import
import Home from './components/Home'
import Contact from './components/Contact'

import './App.css'
import PageNotFound from './components/PageNotFound'
import London from './components/ContactLondon'
import Seoul from './components/ContactSeoul'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> {" | "}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />}>
            <Route path='seoul' element={<Seoul />} />
            <Route path='london' element={<London />} />
          </Route>
          // 새 페이지를 찾을 수 없음 경로 추가
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
