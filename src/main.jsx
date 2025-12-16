// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ← Importe BrowserRouter
import './index.css'
import App from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/projeto-phrima"> {/* ← Adicione basename */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)