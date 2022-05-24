import React from 'react';
import "./footer.css";
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
const Footer = () => {
    const { scroll } = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);

        scroll.scrollTo(elem, {
            offset: "-100",
            duration: '1000',
            easing: [0.25, 0.0,0.35,1.0]
        })
    }
  return (
    <div className='footerContainer'>
        <div className='footerLogoContainer'>
      <svg data-scroll data-scroll-speed="2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="100" height="100"
viewBox="0 0 50 50"
style={{fill:"white"}}><path 

d="M 11.986328 0 C 11.815078 0.002 11.645188 0.048671875 11.492188 0.13867188 C 11.188188 0.31867188 11 0.646 11 1 L 11 13.353516 C 11 13.737516 11.219406 14.089859 11.566406 14.255859 L 29.566406 22.900391 C 29.703406 22.966391 29.853 23 30 23 C 30.194 23 30.387688 22.943031 30.554688 22.832031 L 39.554688 16.832031 C 39.844687 16.639031 40.013047 16.307984 39.998047 15.958984 C 39.984047 15.610984 39.789375 15.295953 39.484375 15.126953 L 12.484375 0.12695312 C 12.329375 0.040953125 12.157578 -0.002 11.986328 0 z M 12.025391 17 C 11.850016 16.9955 11.674625 17.038453 11.515625 17.126953 C 11.197625 17.302953 11 17.636 11 18 L 11 48.998047 C 11 49.758047 11.813469 50.241953 12.480469 49.876953 L 40.496094 33.867188 C 40.808094 33.689188 41 33.359 41 33 L 41 20 C 41 19.592 40.753 19.225266 40.375 19.072266 C 39.995 18.920266 39.562297 19.011688 39.279297 19.304688 L 13 47 L 20.955078 23.294922 C 21.088078 22.861922 20.913297 22.392344 20.529297 22.152344 L 12.529297 17.152344 C 12.374797 17.055844 12.200766 17.0045 12.025391 17 z"/>
</svg>
<h1 data-scroll data-scroll-speed="-2" >Rob & Dante</h1>
</div>
<motion.div 
initial={{
    y: "-400px"
}}
whileInView={{
y:0
}}
viewport={{
    once:false
}}
transition={{
    duration:1.5
}}>
    <div className='footerNav'>
        <ul>
            <li onClick={() => handleScroll('#home')}>home</li>
            <li onClick={() => handleScroll('#about')}>About</li>
            <li onClick={() => handleScroll('#shop')}>shop</li>
            <li onClick={() => handleScroll('#newarrival')}>new arrivals</li>
        </ul>
    </div>
    <div className='footerBottom'>
        <span>&copy; {new Date().getFullYear()}. All rights reserved.</span> 
        <span>Made by: Robert Oluwaseun &hearts;</span> 
    </div>
    </motion.div>
    </div>
  )
}

export default Footer