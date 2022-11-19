import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    whileInView={{ opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative text-center max-w-7xl px-10 justify-evenly mx-auto items-center  '>
<div className='felx-row md:mx-[100px] sm:mx-[50px] max-w-2xl '>
<h3 className='relative text-[12px] font-semibold uppercase tracking-[0.12em] mb-20 text-[rgb(33, 33, 33)] opacity-70 px-10'>Web Developer</h3>

        <motion.div
        initial={{
            y: 300
        }}
        whileInView={{y:0}}
        viewport={{once: true}}
        transition={{
            duration: 1.3
        }}
        className='relative'
        >
        <h1 className='relative text-[30px] md:text-[40px] px-5 text-[rgb(33, 33, 33)] font-bold font-sans opacity-80 mt-10 text-center  '>Engineering student specialising in web&nbsp;development</h1>
       
        </motion.div>

        <motion.div
        initial={{
          y: 250,
          opacity: 0
      }}
      whileInView={{y:0}}
      viewport={{once: true}}
      animate={{
        opacity: 1
      }}
      transition={{
          duration: 1.3
      }}
      className='relative'
      >
        <p className='relative md:text-[15px] md:px-20 text-[rgb(33, 33, 33)] font-regular font-sans opacity-80 text-center mt-5 sm:px-5'>
        I aspire to partner with global brands and emerging businesses to create exciting projects and meaningful experiences in software development.
        </p>
        </motion.div>
        
</div>
       
        
    </motion.div>
  )
}