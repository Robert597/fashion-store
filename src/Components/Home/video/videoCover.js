import React, {useEffect} from 'react'
import "./videocover.css";
import coverVideo from "../../../Assets/sweatshirt.jpg";
import { motion } from "framer-motion";


const CoverVideo = () => {

    
    const titleVariants = {
        hidden: {
            opacity: 0
        }, 
        show: {
            opacity: 1,
            transition: {
               delayChildren: 5,
               staggerChildren: 0.3
            }
        }
    }

    const item ={
        hidden:{
            opacity: 0
        },show:{
            opacity: 1
        }
    }
    const item1 ={
        hidden:{
            opacity: 0,
        },show:{
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }
  return (
    <div className='videoContainer'>
        <motion.div variants={titleVariants} 
       initial="hidden" animate="show" className='titleContainer'>
           <div className='shiftUp'>
            <div className='Alphabets'>
                <motion.h1 variants={item} data-scroll data-scroll-delay="0.20" data-scroll-speed="4">
                    R
                </motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.18" data-scroll-speed="4">
                    0
                </motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.16" data-scroll-speed="4">
                    B
                </motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.14" data-scroll-speed="4" className='and'>
                    &
                </motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay = "0.12" data-scroll-speed="4">
                   D
                </motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.10" data-scroll-speed="4">
                    A
                </motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.08" data-scroll-speed="4">
                    N
                </motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay = "0.06" data-scroll-speed="4">
                    T
                </motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
                    E
                </motion.h1>
            </div>
          <motion.h2 data-scroll variants={item1}  data-scroll-delay="0.5" data-scroll-speed="2">Inspire.Create.Believe</motion.h2>
          </div>
        </motion.div>
      <img src={coverVideo} alt="loaderImage" className="video"/>
    </div>
  )
}

export default CoverVideo;
/*
  <video  autoPlay loop muted playsInline className='video'>
        <source src={coverVideo} type="video/mp4"/>
        </video>
*/