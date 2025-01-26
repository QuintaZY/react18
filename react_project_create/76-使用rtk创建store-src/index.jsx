import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

document.documentElement.style.fontSize = 100 / 750 + 'vw'

createRoot(document.getElementById('root')).render(
    <App />
)
