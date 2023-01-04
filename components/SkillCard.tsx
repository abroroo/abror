import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className='group relative top-20 md:top-28 xl:top-28 flex cursor-pointer'>

        <motion.img
    initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0
    }}
    transition={{ duration: 0.5}}
    whileInView={{ opacity: 1, x: 0}}
    viewport={{once: true}}
    src={urlFor(skill?.image).url()}
    className='rounded-full object-cover w-16 h-16 xl:w-24 xl:h-24 filter bg-[#FEDB39] group-hover:bg-amber-400 group-active:bg-amber-500 group-focus:outline-none group-focus:ring group-focus:ring-amber-100 transition duration-300 ease-in-out'
        />
        
      <motion.div 
      initial={{
        x: directionLeft ? -100 : 100,
      }}
      transition={{ duration: 0.5}}
      whileInView={{ x: 0}}
      viewport={{once: true}}
        className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-[#fffade] w-16 h-16 xl:w-24 xl:h-24 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-1xl font-bold text-[rgb-33,33,33] opacity-100'>
              {skill.progress}%
            </p>
          </div>
        </motion.div>
        
    </div>
  )
}

export default Skill