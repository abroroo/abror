import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-[30px] flex items-start justify-between max-w-8xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1
        }}
        className='flex flex-row items-center'>
            {/* Social Icons */}
           
            
            <SocialIcon url="https://telegram.org/abroro" fgColor='rgb(33,33,33)' bgColor="transparent"  style={{ height: 43, width: 43 }} />
            <SocialIcon url="https://github.com/abroroo" fgColor='rgb(33,33,33)' bgColor="transparent"  style={{ height: 45, width: 45 }}  />
            <SocialIcon url="https://instagram.com/iskandarovabror" fgColor='rgb(33,33,33)' bgColor="transparent" style={{ height: 45, width: 45 }} />
            <SocialIcon url="https://linkedin.com/in/abroro" fgColor='rgb(33,33,33)' bgColor="transparent" style={{ height: 50, width: 50 }}  />
           
        </motion.div>
           
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1
        }}
        className='flex flex-row items-center text-navy-300 cursor-pointer'>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='rgb(33,33,33)'
            bgColor='transparent'
            style={{ height: 50, width: 50 }}
            />
            <a href="#contact" className='uppercase hidden md:inline-flex text-sm tracking-[-0.2px] text-[rgb(33,33,33)] opacity-60 hover:opacity-100'>Get In Touch</a>
        </motion.div>
        
    </header>
  )
}

export default Header