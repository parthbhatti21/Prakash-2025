import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client'

const App = React.lazy(()=>import('./App.jsx'))
const LoadingScreen = () => (
  <div className="loading-screen">
    <div className="loader"></div>
    <p>Loading...</p>
  </div>
);

// import './Components/style.css'
createRoot(document.getElementById('root')).render(
    <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
  ,
)
