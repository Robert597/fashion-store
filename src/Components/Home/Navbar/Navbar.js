import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
      let elem = document.querySelector(id);

      scroll.scrollTo(elem, {
          offset: "-100",
          duration: '1000',
          easing: [0.25, 0.0,0.35,1.0]
      })
  }
  let width = window.innerWidth;

  return (
    <motion.div 
    initial={{
      y:"-100%"
    }}
    animate={{
      y: 0
    }}
    transition={{
      duration: 2,
      delay: 7
    }}
    className='navbarContainer' style={{top: click ? 0 : width > 600 ? "-4rem" : "-10rem"}}>
      <motion.ul className='menuItems'
      drag= "y"
      dragConstraints={{
        top: 0,
        bottom: 100
      }}
      dragElastic={0.05}
      dragSnapToOrigin>
      <li className='menuBtn' onClick={() => setClick(click ? false : true)
      }>Menu</li>
      <motion.li className='menuItem' whileHover={{scale: 1.1, y: -5}}
      whileTap={{
        scale: 0.9, y: -0.5
      }}
      onClick={() => {setClick(false);handleScroll('#home')}}>Home</motion.li>
      <motion.li whileHover={{scale: 1.1, y: -5}}
      whileTap={{
        scale: 0.9, y: -0.5
      }}className='menuItem'
      onClick={() => {setClick(false);handleScroll('#about')}}>About</motion.li>
      <motion.li 
      whileHover={{scale: 1.1, y: -5}}
      whileTap={{
        scale: 0.9, y: -0.5
      }} className='menuItem'
      onClick={() => {setClick(false);handleScroll('#shop')}}>Shop</motion.li>
      <motion.li
      whileHover={{scale: 1.1, y: -5}}
      whileTap={{
        scale: 0.9, y: -0.5
      }} className='menuItem'
      onClick={() => {setClick(false);handleScroll('#newarrival')}}>New Arrivals</motion.li>
      </motion.ul>
    </motion.div>
  )
}

export default Navbar