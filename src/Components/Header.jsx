import React from 'react';
import Logo from './Logo';
import { navlinks } from '../data';
import uselsMobile from '../Hooks/useLsMobile';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

 const { isMobile, isNavActive, toggleNavigation } = uselsMobile();

  return (
    <div className='h-20 w-full bg-primary'>
       <div className='max-w-7xl mx-auto h-full w-10/12 flex justify-between items-center'>
          <Logo />
          <div className='hidden lg:flex gap-8'>
           {navlinks.map((item, i) => (
            <a key={i} className='text-white text-base' href={item.link}>{item.text}</a>
           ))}
          </div>
          <div className='border-2 border-color1 py-2 px-4 rounded-3xl bg-transparent text-white text-sm font-bold hidden lg:flex'>
            Make an order
          </div>
          <button 
           onClick={toggleNavigation}   
           className='z-30 text-white lg:hidden'
           aria-label={isNavActive ? "Close navigation menu" : "Open navigation menu"}
          >
           {isNavActive ? <GrClose size={35} /> : <GiHamburgerMenu size={35} />}
          </button>
          
          <div className={`flex lg:hidden absolute top-0 right-0 h-screen w-72 bg-color3 z-20 flex-col justify-around items-center py-12 transition-all duration-300 ${isNavActive ? "translate-x-0" : "translate-x-72"}`}>
           {navlinks.map((item, i) => (
            <a key={i} className='text-white text-base' href={item.link}>{item.text}</a>
           ))}
          </div>
       </div>
    </div>
  );
}

export default Header;
