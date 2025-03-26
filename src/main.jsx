import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { TokenContext } from './Componants/TokenContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <StrictMode>
    <TokenContext>  <App /></TokenContext>
    </StrictMode>,
 </BrowserRouter>
)
