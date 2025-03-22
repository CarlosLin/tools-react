import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import DialogPage from './pages/DialogPage'
import './App.css'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>工具集</h1>
      <div className="feature-buttons">
        <Link to="/dialog" className="btn">
          對話功能
        </Link>
        {/* 未來可以添加更多功能按鈕 */}
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dialog" element={<DialogPage />} />
      </Routes>
    </Router>
  )
}

export default App
