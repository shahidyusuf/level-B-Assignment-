import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
import Product from './pages/Product'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='products/:id' element={<Product  />} />
      </Routes>
    </div>
  )
}

export default App