import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./newArrival.css";
import image1 from "../../Assets/double.jpg";
import image2 from "../../Assets/nigga.jpg";
import image3 from "../../Assets/seconddouble.jpg";
import image4 from "../../Assets/thomas.webp";
import image5 from "../../Assets/asian.jpg";

const Arrival = () => {
    gsap.registerPlugin(ScrollTrigger);
  let collection = useRef(null);
  let clothes = useRef(null);
  useEffect(() => {
    let element = collection;
    let scrollingElement = clothes;
    let tl = gsap.timeline()
   console.log(element);
    setTimeout(() => {
         tl.to(element, {
           scrollTrigger: {
             trigger: element,
             start:'top top',
             end: 'bottom+=100% top-=100%',
             scroller: '.App',
             scrub: true,
             pin: true,
           },
           ease: 'none'
         })
         tl.fromTo(scrollingElement,
            {
                y:'0'
            },
             {
                 y:'-100%',
           scrollTrigger: {
             trigger: scrollingElement,
             start:'top top',
             end: 'bottom top',
             scroller: '.App',
             scrub: true,
            
           }
         })
         ScrollTrigger.refresh()
    }, 1000)
      return () => {
       tl.kill();
      };
    }, [])
  return (
    <div className='arrivalContainer' id='newarrival' ref={el => collection = el}>
        <h1 data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal"className='arrivalTitle'>New Arrivals</h1>
    <div className='contentContainer'>
    <div className='arrivalSlider' >
        <div className='arrivalSliderContainer' ref={el => clothes = el}>
    <div className='arrivalclothesContainer'>
              <img src={image1} alt="clothes"/>
              <p>Collection</p>
              </div>
            <div className='arrivalclothesContainer'>
              <img src={image2} alt="clothes"/>
              <p>Collection</p>
              </div>
            <div className='arrivalclothesContainer'>
              <img src={image3} alt="clothes"/>
              <p>Collection</p>
              </div>
            <div className='arrivalclothesContainer'>
              <img src={image4} alt="clothes"/>
              <p>Collection</p>
              </div>
            <div className='arrivalclothesContainer'>
              <img src={image5} alt="clothes"/>
              <p>Collection</p>
              </div>
              <div className='arrivalclothesContainer'>
              <img src={image3} alt="clothes"/>
              <p>Collection</p>
              </div>
            <div className='arrivalclothesContainer'>
              <img src={image4} alt="clothes"/>
              <p>Collection</p>
              </div>
            <div className='arrivalclothesContainer'>
              <img src={image5} alt="clothes"/>
              <p>Collection</p>
              </div>
              </div>
    </div>
    <div className='arrivalContent'>
       There is a new collection available for clothes in all sizes. 
       <br/>This collection is a great way to find a new look for you.<br/>
       It offers a variety of cool apparel styles for your tatste, while you can also find some cool clothes that suits you.
        <br/>
        <br/>
        We also design unique jewellery pieces.<br/>
        Fashion is an art that can be grasped by everyone.
        <br/>
        <br/>
       The first line of clothing you will see  on this collection is for men.<br/>
       The collection also includes three new styles for women.
       <br/>
       Give it a try and experience new look. 
    </div>
    
    </div>
       
    </div>
  )
}

export default Arrival;