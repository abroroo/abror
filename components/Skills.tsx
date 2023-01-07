import React, { useEffect, useRef } from 'react'
import { animate, motion, useAnimation, useInView  } from 'framer-motion'
import SkillCard from './SkillCard'
import { PageInfo, Skill } from '../typings'
import { urlFor } from '../sanity'


type Props = {
  skills: Skill[];
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


function Skills({skills, pageInfo}: Props) {

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
    initial={{opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <div className='flex relative flex-col items-center'> 

    <h3 className='relative  text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgb(33, 33, 33)] opacity-70  px-10'> Skills</h3>

    <motion.svg 
initial="hidden"
ref={ref}
animate={control}
className='relative flex items-center justify-center mx-auto h-10 scale-[1.5] scale-x-[.5]' >

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

    <h4 className='relative uppercase tracking-[3px] text-[rgb(33,33,33)] text-[11px] md:text-[12px] xl:text-[12px] xl:mt-5 '>Hover over a skill for current proficiency</h4>

    

    <div className='grid grid-cols-4 gap-5 mt-10 xl:mt-16'>
      {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
      ))}

      {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillCard key={skill._id} skill={skill} directionLeft />
      ))}
        
     
    </div>
    </div>
    </motion.div>
  )
}

export default Skills