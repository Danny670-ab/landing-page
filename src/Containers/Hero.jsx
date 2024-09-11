import React from 'react'
import product1 from '../assets/Hoodie.jpg'
const Hero = () => {
  return (
    <div className='max-w-7xl w-10/12 mx-auto'>
    <div className='bg-color1 w-full rounded-3xl py-16 my-8 px-12
    flex flex-col justify-start gap-10 relative text-center
    sm:text-left'>
    <img src={product1} alt=''className='absolute top-0 right-0 h-full object-contain 0pacity-50' />
    
    <h3 className='relativet text-2xl'>Wecome to DevStyle</h3>
    <h1 className='relative text-4xl md:text-6xl lg:text-7xl
    text-primary font-bold sm:w-full md:w-9/12'>Where Style Meets Comfort </h1>
    
      <button className='relative text-base w-fit px-8 py-4
      bg-primary text-white rounded-lg flex gap-4 items-center
       mx-auto sm:ml-0'>See Our Latest Collection</button>
    </div>
</div>

  )
}

export default Hero