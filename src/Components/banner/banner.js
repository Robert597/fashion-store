import React from 'react';
import "./banner.css"

const Banner = () => {
  return (
    <div className='bannerContainer'>
        <div className='quoteContainer' id='up'>
            <h1><span data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed = "6"
            data-scroll-target = "#up">
                Fashion is the armour
            </span></h1>
            <h1>
                <span data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed = "-6"
            data-scroll-target = "#up">to survive everyday life</span>
            </h1>
            <h1><span data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed = "4"
            data-scroll-target = "#up">
              It is an expression 
            </span></h1>
            <h1>
                <span
                data-scroll data-scroll-direction="horizontal" 
                data-scroll-speed = "-4"
                data-scroll-target = "#up">of what you are feeling.</span>
            </h1>
        </div>
    </div>
  )
}

export default Banner