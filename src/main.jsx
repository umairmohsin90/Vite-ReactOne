import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hello from './Components/Hello'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Hello name="Umair mohsin"/> */}
    <App />
  </StrictMode>,
)
