import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TopicPage from './Pages/TopicPage.jsx';
import Credits from './components/Credits.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
    <link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet"></link>


    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:argoment/:part" element={<TopicPage />} />
      </Routes>
    </Router>
    <Credits />
  </StrictMode>,
)
