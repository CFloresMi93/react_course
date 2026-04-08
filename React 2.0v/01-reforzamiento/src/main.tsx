import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './bases/11-async-await'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hola Mundo</h1>
  </StrictMode>,
)