import React, { useEffect, useRef } from 'react'
import { animate, motion, useAnimation, useInView  } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience, PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experiences: Experience[];
  pageInfo: PageInfo;
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const Experience = ({experiences, pageInfo}: Props) => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div 
    initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1}}
      transition={{duration: 1.5}}
    className='h-screen flex relative flex-col overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center  overflow-y-hidden'>
        
        <div className='realative flex flex-col items-center justify-center '>

       
        <h3 className='relative  text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgb(33, 33, 33)] opacity-70 px-10 '>
        Experience
       </h3>
       <motion.svg 
initial="hidden"
ref={ref}
animate={control}
className='relative flex items-center justify-center mx-auto h-10 scale-[1.5] scale-x-[.5] mb-10' >

<motion.line
x1="130"
y1="20"
x2="170"
y2="14"
stroke="#fffade"
variants={draw}
custom={0.1} 
className=''/>
</motion.svg>
       
    

       <div className='w-full h-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory'>
       
       

        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
            
       </div>
      
       
       </div>
        
       </motion.div>
  )
}

export default Experience