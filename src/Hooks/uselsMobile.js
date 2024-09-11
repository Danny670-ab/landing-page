import React, { useEffect, useState } from 'react'

const uselsMobile = () => {

const [isMobile, setisMobile] = useState(window.innerWidth < 1024)
const [isNavActive, setlsNavActive] = useState(false);

const checkScreen = () =>{
  setisMobile(window.innerWidth < 1024)
}

 const toggleNavigation = () => {
  setlsNavActive(window.innerWidth <1024);
 };

useEffect(() => {

if(isNavActive){
  document.body.style.overflowY = 'hidden';
}else{
   document.body.style.overflowY = 'unset';
}

  window.addEventListener("resize", checkScreen);
  return () => {
    window.removeEventListener("resize", checkScreen);
  };

}, [isNavActive]);


  return { isMobile, isNavActive, toggleNavigation};
  
}

export default uselsMobile