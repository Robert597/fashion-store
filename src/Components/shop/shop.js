import React, { useRef, useEffect } from 'react';
import "./shop.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import image1 from "../../Assets/double.jpg";
import image2 from "../../Assets/shirt.jpg";
import image3 from "../../Assets/ethnic.jpg";
import image4 from "../../Assets/blazer.jpg";
import image5 from "../../Assets/sweatshirt.jpg";
import image6 from "../../Assets/jewellery.jpg";
import image7 from "../../Assets/watches.jpg";


const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  let collection = useRef(null);
  let clothes = useRef(null);
  const mainClothes = useRef(null);
 useEffect(() => {
   console.log("this");
   console.log(clothes);
 let element = collection;
 let scrollingElement = clothes;
 console.log(scrollingElement);
 let pinWrapWidth = scrollingElement.offsetWidth;
 console.log(pinWrapWidth);
 let tl = gsap.timeline();


 setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start:'top top',
          end: 'bottom top',
          scroller: '.App',
          scrub: true,
          pin: true,
        },
        height: `${pinWrapWidth}px`,
        ease: 'none'
      })
      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: element,
          start:'top top',
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
         
        },
        width: `${pinWrapWidth}px`,
        x: -pinWrapWidth,
        ease: 'power1.inOut'
      })
      ScrollTrigger.refresh()
 }, 1000)
   return () => {
    tl.kill();
   };
 }, [])
  

  return (
    <div className='shopContainer' id='shop' ref={el => collection = el}>
         <h1 data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal"className='shopTitle'>New Collections</h1>
          <div className='shopleft'>
           <p>
          The brand new collection is currently being developed in USA. We create our products using best quality material, including the use odf some of the best pure fabrics to make our products.
          <br/>
          <br/>
          We have lots of different clothing options like shoes, jackets and dresses. Not only clothes but we also provide unique jewellery as well. It is great for us to carry  our new clothes all around the country and look different.</p>
         </div>
         <div className='shopright' ref={el => clothes = el}>
            <div className='clothesContainer'>
              <img src={image1} alt="clothes"/>
              <p>Denim Jackets</p>
              </div>
            <div className='clothesContainer'>
              <img src={image2} alt="clothes"/>
              <p>Shirts</p>
              </div>
            <div className='clothesContainer'>
              <img src={image3} alt="clothes"/>
              <p>Ethnic wears</p>
              </div>
            <div className='clothesContainer'>
              <img src={image4} alt="clothes"/>
              <p>Blazers</p>
              </div>
            <div className='clothesContainer'>
              <img src={image5} alt="clothes"/>
              <p>Sweatshirt</p>
              </div>
            <div className='clothesContainer'>
              <img src={image6} alt="clothes"/>
              <p>Jewellries</p>
              </div>
            <div className='clothesContainer'>
              <img src={image7} alt="clothes"/>
              <p>Watches</p>
              </div>
         </div>
        
    </div>
  )
}

export default Shop