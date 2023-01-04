import React from 'react'
import {motion} from 'framer-motion'


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1,1.5,1],
      opacity: [.1, .2, .4, .8, .3, .1],
      transitionEnd: {
        display: "none",
      },
    }}
    transition={{
      duration: 5,
    }}
    className='relative flex justify-center items-center top-12'>
        
       
        <div className='rounded-full border border-800 border-[#fff] absolute h-56 w-56 md:h-80 md:w-80 xl:h-[500px] xl:w-[500px] mt-64 animate-pulse delay-1000' /> 
       
        <div className='rounded-full border border-800 border-[#fff] absolute h-72 w-72 md:h-96 md:w-96 xl:h-[600px] xl:w-[600px] mt-64  animate-pulse delay-2000' />
        <div className='rounded-full border border-800 border-[#fff] absolute h-96 w-96 md:h-[450px] md:w-[450px] xl:h-[700px] xl:w-[700px] mt-64 animate-none delay-3000 '/>
    </motion.div>
  )
}

export default BackgroundCircles