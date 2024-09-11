import React from 'react'

const About = () => {
  return (
    <div id='about'
     className='max-w-7xl w-10/12 mx-auto grid grid-cols-1
     sm:grid-cols-2 lg:grid-cols-4 gap-8'>
       <div className=' flex  sm:col-span-2 rounded-3xl flex-col gap-8 p-8 bg-color3 '>

        <h3 className='text-2xl text-white'>Our Story</h3>
        <p className='text-base text-gray-400  '>
          Founded in <strong>2015</strong>, <strong>DEVSTYLE</strong>
           merges
          style with our community's vibrancy. From concept to 
          creation, we're
          dedicated to sharing stories through fashion
        </p>
       </div>
        <div className='flex bg-color2 p-8 rounded-3xl text-2xl'>
        beyond fashion, a global community supporting artisans and
        self-expression
       </div>
       <div className='flex bg-color1 p-8 rounded-3xl text-2xl' >
        We prioritizes quality, selecting materials for comfort,
        blending
        artisty with precisio
       </div>  

    </div>
  )
}

export default About