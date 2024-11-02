import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Shopping from './Pages/Shopping'

import './App.css'
import Cart from './Pages/Cart'

const App = () => {
  return <>
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Shopping" element={< Shopping/>} />
         <Route path="/Cart" element={<Cart />} />
      </Routes>
    
    </BrowserRouter>
  </>
}

export default App