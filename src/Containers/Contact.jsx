import React from 'react'
import {FaPhone, FaPhoneSlash} from 'react-icons/fa';
import {FaLocationDot} from 'react-icons/fa6';
import {MdEmail} from 'react-icons/md';

const Contact = () => {
  return (
    <div className=' max-w-7xl w-10/12 mt-8 grid grid-cols-1 md:grid-cols-3 mx-auto gap-8'>
     <div className='grid grid-cols-1 gap-8 '>
      <div className='p-8 rounded-3xl bg-color1 text-color3 text-3xl flex justify-center items-center'>
         Contact
      </div>
      <div className='p-8 rounded-3xl bg-color4 text-color3 text-3xl flex flex-col items-center justify-center'>
        <FaLocationDot size={30} className='text-color3'/>
        <span className='text-lg text- color3 font-bold'>
          No 55, Fake Street, USA
        </span>
      </div>
      <div className='p-8 rounded-3xl bg-color2 text-color3 text-3xl flex flex-col items-center justify-center gap-x-4'>
        <div className='flex flex-col gap-2 justify-center  items-center'>
        <MdEmail size={30} className='text-color3'/>
        <span className='text-lg text- color3 font-bold'>
          contact@devstyle.com
        </span>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
        <FaPhoneSlash size={30} className='text-color3'/>
        <span className='text-lg text- color3 font-bold'>
         +11 555 555 555
        </span>
        </div>
      </div>
     </div>
     <div className='md:col-span-2 bg-color3 rounded-3xl p-8'>
      <form className='w-full flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <label htmlFor='name' className='ml-2 text-white text-sm'>
            Name
          </label>
          <input type='text' className='p-4 rounded-lg outline-none border-none bg-primary text-white text-sm' />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor='email' className='ml-2 text-white text-sm'>
            Email
          </label>
          <textarea type='email' className='p-4 rounded-lg outline-none border-none bg-primary text-white text-sm' ></textarea>
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor='message' className='ml-2 text-white text-sm'>
            Message
          </label>
          <input type='text' className='p-4 rounded-lg outline-none border-none bg-primary text-white text-sm' />
        </div>
        <botton className='bg-color1 text-color3 font-bold p-3 rounded-lg flex flex-col items-center'>Send</botton>
      </form>
     </div>
    </div>
  )
}

export default Contact