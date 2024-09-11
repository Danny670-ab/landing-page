import React from 'react'
import {LuPackageCheck} from "react-icons/lu";
import product1 from '../assets/Hoodie.jpg';
const Banner = () => {
  return (
    <div className='max-w-7xl w-10/12 mx-auto mt-8'>
     <div className='ronded-3xl grid grid-cols-1 lg:grid-cols-8 row-auto gap-8'>
       <div className='p-8 rounded-3xl flex flex-col gap-4 bg-color4 lg:col-span-5'>
        <h2 className='text-4xl md:text-6xl lg:text-7xl'>Grab our limited edition</h2>
         <p className='text-base'>Only 99 will be ever made from this design. Grab your on
         right now
          with 21% winter discount
        </p>
       <span className='flex gap-8 items-center flex-grow'>
        <span className='text-2xl sm:text-4xl font-bold text-color3 w-fit relative flex justify-center items-center'>
          <span>31.00 $</span>
          <span className='w-full h-[4px] bg-red-500 absolute opacity-70 rotate-[12deg]'></span>
        </span>
        <span className='text-4xl sm:text-6xl font-bold text-color3'>
          24.49 ${""}
        </span>
       </span>
       <span className='text-sm'>Only 51 left</span>
       <button className='w-fit flex gap-4 py-4 px-8 bg-color3 text-white items-center'>
        Order now
        <LuPackageCheck size={25} />
       </button>
       </div>
       <div className='relative rounded-3xl lg:col-span-3 aspect-auto overflow-hidden'>
       <img src={product1} alt="Hoodie.jpg" className='h-full w-full object-cover' />
       <div className='absolute top-2 right-2 w-28 shadow-md aspect-square rounded-full flex flex-col justify-center items-center text-center text-color1 bg-color3 '>
        <div className='flex items-center justify-center'>
         <span className='text-5xl'>21</span>
         <span className='text-lg'>%</span> 
         <span className='text-base'>off</span>
       </div>
      </div>
     </div>


     </div>
    </div>
  )
}

export default Banner