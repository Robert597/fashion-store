import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import React, { useRef } from 'react';
import Home from './Components/Home/Home';
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import About from './Components/About/about';
import Shop from './Components/shop/shop';
import ScrollTriggerr from './Components/shop/scrollTrigger';
import Banner from './Components/banner/banner';
import Arrival from './Components/NewArrival/newArrival';
import Footer from './Components/Footer/footer';
function App() {
  const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
    options={
      {
        smooth: true,
        mobile: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
        // ... all available Locomotive Scroll instance options 
      }
    }
    watch={
      [
        //..all the dependencies you want to watch to update the scroll.
        //  Basicaly, you would want to watch page/location changes
        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      ]
    }
    containerRef={containerRef}
  >
    <ScrollTriggerr/>
    <AnimatePresence>
    <main className="App" data-scroll-container ref={containerRef}>
        <Home/>
        <About/>
        <Shop/>
        <Banner/>
        <Arrival/>
        <Footer/>
    </main>

    </AnimatePresence>
  </LocomotiveScrollProvider>
  );
}

export default App;
