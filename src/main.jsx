import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './styles/site.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Interactive controls (tabs, toggles, reel arrows) only appear once scripts run;
// the static HTML shows every instrument and price instead.
document.documentElement.classList.add('js')

const app = (
  <StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </StrictMode>
)

const root = document.getElementById('root')
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
