import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Product } from './Production/Product'
import { Footer } from './Footer/Footer'
import { Hero } from './Herosection/Hero'

const App = () => {
  return (
    <div className='div'>
    <Navbar />
    <Hero />
    <Product />
    <Footer />
    </div>
  )
}

export default App