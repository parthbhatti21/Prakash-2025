import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Monitoring } from 'react-scan/monitoring'

// import './Components/style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Monitoring
      apiKey="s63lfJ_VgzKxHiJhUJAVgcQI4SnJGDP-" // Safe to expose publically
      url="https://monitoring.react-scan.com/api/v1/ingest"
    />
    <App />
  </StrictMode>,
)
