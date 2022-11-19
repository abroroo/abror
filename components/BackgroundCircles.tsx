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
    className='relative flex justify-center items-center'>
        
       
        <div className='rounded-full border border-800 border-[#fff] absolute h-[500px] w-[500px] mt-52  animate-pulse delay-1000' /> 
       
        <div className='rounded-full border border-800 border-[#fff] absolute h-[600px] w-[600px] mt-52  animate-pulse delay-2000' />
        <div className='rounded-full border border-800 border-[#fff] absolute h-[700px] w-[700px] mt-52 animate-none delay-3000 '/>
    </motion.div>
  )
}

export default BackgroundCircles