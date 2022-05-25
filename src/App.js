import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import React, { useEffect, useRef, useState } from 'react';
import Home from './Components/Home/Home';
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import About from './Components/About/about';
import Shop from './Components/shop/shop';
import ScrollTriggerr from './Components/shop/scrollTrigger';
import Banner from './Components/banner/banner';
import Arrival from './Components/NewArrival/newArrival';
import Footer from './Components/Footer/footer';
import Loader from './Components/preLoader/preloader';
function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000);
  }, [])
  
  return (
    <LocomotiveScrollProvider
    options={
      {
        smooth: true,
        smartphone: {
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
        
      ]
    }
    containerRef={containerRef}
  >
    <AnimatePresence>
      {!loaded && <Loader/>}
    </AnimatePresence>
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
