import React from 'react'

const Sales = () => {
  return (
    <div className='max-w-7xl w-10/12 mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
      <div className=' flex flex-col  items-center bg-color2 text-white rounded-3xl text-center'>
       <h3 className='text-2xl font-bold mb-2'>12531+</h3>
       <span>unit</span> <span>Delivered</span> 
      </div>
      <div className=' flex flex-col  items-center bg-color1 text-white rounded-3xl text-center'>
       <h3 className='text-2xl font-bold mb-2'>54+</h3>
       <span>Countries</span> <span>Server</span> 
      </div>
      <div className=' flex flex-col  items-center bg-color3 text-white rounded-3xl text-center'>
       <h3 className='text-2xl font-bold mb-2'>200+</h3>
       <span>Worldwide</span> <span>Shops</span> 
      </div>
      <div className=' flex flex-col  items-center bg-color4 text-white rounded-3xl text-center'>
       <h3 className='text-2xl font-bold mb-2'>5+</h3>
       <span>Years</span> <span>Excellence</span> 
      </div>
    </div>
  )
}

export default Sales