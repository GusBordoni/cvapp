import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CompleteCV from './CompleteCV'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompleteCV />
  </StrictMode>,
)
