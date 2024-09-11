import React from 'react';
import Logo from './Logo';
import { companyLink } from '../data';
import { navlinks } from '../data';

const Footer = () => {
  return (
    <footer className='max-w-7xl w-10/12 py-8 mt-8 mx-auto flex flex-col md:flex-row justify-center gap-8'>
      <div className='flex flex-col md:flex-row gap-12'>
        <div className='flex  justify-center items-start md:justify-start'>
          <Logo />
        </div>
        <nav className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          <div className='flex flex-col text-center md:text-left'>
            <h3 className='font-bold text-white text-lg'>Shop</h3>
            <div className='flex flex-col gap-2'>
              {companyLink.map((item, i) => (
                <a key={i} href={item.link} className='text-white'>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col text-center md:text-left'>
            <h3 className='font-bold text-white text-lg'>Company</h3>
            <div className='flex flex-col gap-2'>
              {navlinks.map((item, i) => (
                <a key={i} href={item.link} className='text-white'>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className='text-white font-light text-sm mt-12 md:mt-0 ml-40'>
        Copyright © 2023 devstyle.com
      </div>
    </footer>
  );
};

export default Footer;
