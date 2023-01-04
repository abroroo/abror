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
        className='absolute text-[13px] top-12 left-56 md:top-20 md:right-5 xl:top-28 xl:-right-5  z-30  xl:text-[14px] px-1 delay-1000 text-[rgb(33,33,33)] opacity-90 font-light font-mono'>
       <Typewriter 
            words={[`                                         Hi, I'am ${pageInfo?.name}`]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={100}
            
     /> 
      </motion.h1>
        {/* <motion.img 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        viewport={{once: true}}
        transition={{
        duration: 1,
          delay: 6
      }}
        className='absolute h-32 w-44 md:h-40 md:w-56 top-[-40px] right-0 md:top-[-50px] md:right-3 xl:top-0 xl:right-24'
        src={urlFor(pageInfo?.profilePic).url()}
        /> */}
        </motion.div>
       
        
  
        </motion.div>
        
        
        

    <div className='z-10'>
    
    {/* <h1 className='font-semibold font-sans text-lg px-10 delay-700 text-[rgb(33,33,33)] opacity-90'>
      <Typewriter 
            words={[`Hi, my name is ${pageInfo?.name}`]}
            loop={1}
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={10000}
            
     />
      </h1> */}
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
      className='pb-10 space-x-2 md:space-x-4 xl:space-x-6 font-semibold text-[11px] md:text-[12px] xl:text-[13px]'>
        
       <Link href='#who'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation'>Who</button></Link>
       <Link href='#experience'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation'>Expereience</button></Link>
       <Link href='#skills'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation'>Skills</button></Link>
       <Link href='#projects'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation'>Projects</button></Link>
       <Link href='#resume'><button className='heroButton text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation'>Résumé</button></Link>
        
       
       
        
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