import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className='group relative top-28 flex cursor-pointer'>

        <motion.img
    initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
    }}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, x: 0}}
    viewport={{once: true}}
    src='https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png'
    className='rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 filter bg-[#FEDB39] group-hover:bg-amber-400 group-active:bg-amber-500 group-focus:outline-none group-focus:ring group-focus:ring-amber-100 transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#fffade] w-20 h-20 xl:w-24 xl:h-24 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-1xl font-bold text-[rgb-33,33,33] opacity-100'>
              80%
            </p>
          </div>
        </div>
    </div>
  )
}

export default Skill