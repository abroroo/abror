import React from 'react';
import { Parallax } from 'react-parallax';
import { Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link  from 'next/link';
import { LazyMotion, domAnimation, m } from "framer-motion"

type Props = {}

function Hero({}: Props) {

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        

        <BackgroundCircles />
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-2078467.jpg&fm=jpg' />

    <div className='z-20'>
    
    <h1 className='font-semibold font-sans text-lg px-10 delay-700 text-[rgb(33,33,33)] opacity-90'>
      <Typewriter 
            words={["Hi, I'm Abror"]}
            loop={1}
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={10000}
            
     />
      </h1>
      <LazyMotion features={domAnimation}>
   
  
      <m.div
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
      className='pt-5'>
        
       <Link href='#who'><button className='heroButton text-[rgb(33,33,33)] opacity-60 hover:opacity-100'>Who</button></Link>
       <Link href='#experience'><button className='heroButton text-[rgb(33,33,33)] opacity-60 hover:opacity-100'>Expereience</button></Link>
       <Link href='#skills'><button className='heroButton text-[rgb(33,33,33)] opacity-60 hover:opacity-100'>Skills</button></Link>
       <Link href='#projects'><button className='heroButton text-[rgb(33,33,33)] opacity-60 hover:opacity-100'>Projects</button></Link>
        
       
       
        
      </m.div>
      </LazyMotion>
    </div> 
    </div>
  )
}

export default Hero