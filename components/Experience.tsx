import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1}}
      transition={{duration: 1.5}}
    className='h-screen flex relative flex-col overflow-hidden text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center top-24'>
        
        <h3 className='absolute top-10 text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgb(33, 33, 33)] opacity-70 px-10'>
        Experience
       </h3>
      
       <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-10 md:mt-20 xl:mt-36 mb-28 md:mb-32 xl:mb-40'>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
       </div>
      
       
        
        
       </motion.div>
  )
}

export default Experience