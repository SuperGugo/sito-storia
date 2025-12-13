import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TopicPage from './Pages/TopicPage.jsx';
import Credits from './components/Credits.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:argoment/:part" element={<TopicPage />} />
      </Routes>
    </Router>
    <Credits />
  </StrictMode>,
)
