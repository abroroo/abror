import React, { useEffect, useRef } from 'react'
import { animate, motion, useAnimation, useInView  } from 'framer-motion'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
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

export default function About({pageInfo}: Props) {
  
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
    className='h-screen flex relative text-center max-w-7xl px-10 justify-evenly mx-auto items-center '>
     







<div className='felx-row md:mx-[100px] sm:mx-[50px] max-w-[682px] '>
<h3 

className='relative text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgb(33, 33, 33)] opacity-70 px-10'>Who</h3>
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
custom={0.3} 
className=''/>
</motion.svg>





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
        <h1 className='relative text-[30px] md:text-[40px] px-5 text-[rgb(33, 33, 33)] font-bold font-sans opacity-80 text-center  '>{pageInfo?.role}</h1>
       
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
        <p className='relative md:text-[15px] xl:text-[16px] md:px-20 text-[rgb(33, 33, 33)] font-regular font-jost opacity-80 text-center mt-5 sm:px-5'>{pageInfo?.backgroundInformation}
        </p>
        </motion.div>

       
</div>
       
        
    </motion.div>
  )
}