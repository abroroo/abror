import React, {useState} from 'react';
import { Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link  from 'next/link';
import { LazyMotion, domAnimation, motion } from "framer-motion"
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import { round } from "mathjs";

type Props = {
  pageInfo: PageInfo
}



function Hero({pageInfo}: Props) {

  const [xval, setXval] = useState(0);
  const [yval, setYval] = useState(0);



  return (
    <div className='h-screen relative flex flex-col space-y-5 items-center justify-center text-center overflow-hidden '>
        

        {/* <BackgroundCircles /> */}
        <motion.div
        whileHover={{
          
          x: xval > 100 ? xval / 10 : xval / -10,
          y: yval > 100 ? yval / 10 : yval / -10
        }}
        onHoverStart={(e) => {
          setXval(round(e.offsetX.valueOf()));
          setYval(round(e.offsetY.valueOf()));
        }}
        transition={{type: "spring", stiffness: 100, damping: 50}}
        className='relative z-10'
        > 
        <motion.div
        initial={{ opacity: 0, scale:1.1}}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{once: true}}
        transition={{duration: 2,
          delay: 1,
          ease: [0, 0.31, 0.2, 1.01]}}
          >
        <img 
        alt="heroImage"
        draggable="false"
        className='h-72 w-96 md:h-[350px] md:w-[450px] xl:h-[500px] xl:w-[650px] mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()} />
        <motion.h1 
        initial={{opacity: 0, }}
        animate={{opacity: 1, }}
        transition={{ duration: 1}}
        className='absolute text-[13px] top-12 left-56 md:top-20 md:right-5 xl:top-28 xl:-right-5  z-30  xl:text-[16px] px-1 delay-1000 text-[rgb(33,33,33)] opacity-90 font-light tracking-[1px] font-patrick'>
       <Typewriter 
            words={[`                                         Hi, I'am ${pageInfo?.name}`]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={100}
            
     /> 
      </motion.h1>
       
        </motion.div>
       
        
  
        </motion.div>
        
        
        

    <div className='z-10 hidden md:block xl:block'>
    
   
      <LazyMotion features={domAnimation}>
   
  
      <motion.div
      initial={{
        opacity: 0,
        y: 500
      }}
      animate={{ 
        opacity: 1,
        y: 0
        }} 
        transition={{
          duration: 3,
        }}
      className='pb-10 space-x-2 flex flex-col md:flex-row xl:flex-row md:space-x-4 xl:space-x-6 font-bold md:font-semibold xl:font-semibold text-[15px] md:text-[12px] xl:text-[13px] space-y-10 md:space-y-0 xl:space-y-0 '>
        
       <Link href='#who'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation tracking-[3px] md:tracking-[2px] xl:tracking-[2px] font-jost '>Who</button></Link>
       <Link href='#experience'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation tracking-[3px] md:tracking-[2px] xl:tracking-[2px] font-jost '>Expereience</button></Link>
       <Link href='#skills'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation tracking-[3px] md:tracking-[2px] xl:tracking-[2px] font-jost'>Skills</button></Link>
       <Link href='#projects'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation tracking-[3px] md:tracking-[2px] xl:tracking-[2px] font-jost '>Projects</button></Link>
       <Link href='#resume'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation tracking-[3px] md:tracking-[2px] xl:tracking-[2px] font-jost'>Résumé</button></Link>
        
       
       
        
      </motion.div>
      </LazyMotion>
      
      
     
    </div> 
    
    <motion.a 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1, delay: 2}}
    href="#who" className='flex items-center justify-center bottom-8 absolute z-10 w-10 h-10 rotate-180 scale-[1.5] scale-x-[2.5]'>
    <div className='relative  flex items-center justify-center'>
    

    <motion.img 
    initial={{ y: 10, opacity: .3}}
    transition={{ repeat: Infinity, duration: 2, repeatDelay: 0, type: "spring", stiffness: 100}}
    animate={{ y: 2, opacity: 0}}
    exit={{opacity: 0}}
    className='h-3 w-3 absolute z-0'
    src="./images/icons/chevron-up.svg" alt="Up" />
    <motion.img 
    initial={{ y: 10, opacity: 0}}
    transition={{ repeat: Infinity, duration: 2, repeatDelay: 0, type: "spring", stiffness: 100}}
    animate={{ y: 9, opacity: 1}}
    exit={{opacity: 0}}
    className='h-3 w-3 absolute z-0'
    src="./images/icons/chevron-up.svg" alt="Up" />
    </div>

</motion.a>

    </div>
  )
}

export default Hero