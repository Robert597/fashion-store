import React from 'react'
import Logo from './logo/logo';
import CoverVideo from './video/videoCover';
import "./Home.css";
import Navbar from './Navbar/Navbar';
const Home = () => {
  return (
    <div className='sectionContainer' id='home'>
      <div className='overlay'></div>
       <CoverVideo/>
      <Logo/>
      <Navbar/>
    </div>
  )
}

export default Home