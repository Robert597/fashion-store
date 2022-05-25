import React from 'react'
import "./about.css";
import image1 from "../../Assets/females.webp"
import image2 from "../../Assets/thomas.webp"
import image3 from "../../Assets/curled.jpg"; 

const About = () => {
  return (
    <div className='aboutContainer' id='about'>
        <h1 data-scroll data-scroll-speed="-5" data-scroll-direction="horizontal"className='aboutTitle'>About Us</h1>
        <div className='left' data-scroll data-scroll-sticky data-scroll-target="#about">
          <p>
            we're fashion studio based in california.
            we create unique designs that will blow your mind. we also dessign unique jewellery pieces. fashion is an art that cannot be grasped by everyone.
            <br/>
            <br/>
            We are very dedicated to making our products.
            We offer unique and creative products of wide range of people.
            we have a variety of styles, but for most people, all of the options are in the box.
            we specialize in making things that make you happy.
            <br/>
            <br/>
            We strive to build on our vision.As a fashion label, we do our best to create amazing experiences for all people.
            we are always looking to make something that is easy for everyone.
            </p>
        </div>
        <div className='right'>
            <img src={image1} alt="models" className='mainImg'/>
            <img src={image2} alt="models" className='small-image1'
            data-scroll data-scroll-speed="3"
            data-scroll-direction="horizontal"/>
            <img src={image3} alt="models" className='small-image'
             data-scroll data-scroll-speed="5"/>
    </div>
    </div>
  )
}

export default About