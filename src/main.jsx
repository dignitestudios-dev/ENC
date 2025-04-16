import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToasterContainer } from './component/global/Toaster.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ToasterContainer/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
