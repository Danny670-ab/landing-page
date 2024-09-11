import React from 'react'
import Header from './Components/Header';
import Hero from './Containers/Hero';
import About from './Containers/About';
import Products from './Containers/Products';
import Product from './Components/Product';
import Sales from './Containers/Sales';
import Banner from './Containers/Banner';
import Contact from './Containers/Contact';
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='bg-primary w-full relative '>
      <Header />
      <Hero />
      <About />
      <Products />
      <Sales />
      <Banner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App