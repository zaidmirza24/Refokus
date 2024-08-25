import React from 'react'
import Navbar from './component/Navbar'
import Work from './component/Work'
import Stripes from './component/Stripes'
import Products from './component/Products'
import Marquees from './component/Marquees'
import Cards from './component/Cards'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='h-max-screen w-full text-white font-bold bg-zinc-900'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />

    </div>
  )
}

export default App