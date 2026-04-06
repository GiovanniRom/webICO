import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import './index.css'
import './App.css'
import App from './App.tsx'
import favicon from './assets/images/ligas/biblioteca/fes.png'

const faviconLink = document.querySelector<HTMLLinkElement>('#favicon')
if (faviconLink) {
  faviconLink.href = favicon
} else {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  link.href = favicon
  document.head.appendChild(link)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
