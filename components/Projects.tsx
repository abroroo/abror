import React, { useEffect, useRef } from 'react'
import { animate, motion, useAnimation, useInView, useScroll, useSpring  } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
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

 

function Projects({projects}: Props) {
   
    const ref = useRef(null);
    const isInView = useInView(ref);
    const control = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        control.start("visible");
      }
    }, [isInView]);

  // const { scrollXProgress } = useScroll();
  // const scaleX = useSpring(scrollXProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

 

  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}

    className='h-screen relative flex overflow-hidden flex-col text-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
        
        {/* <motion.div className='progress-bar fixed bottom-10 right-0 left-0 ' style={{ scaleX }} /> */}

        <h3 className='absolute top-16  md:top-24 xl:top-24 text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgb(33, 33, 33)] opacity-70 px-10'>Projects</h3>

        <motion.svg 
initial="hidden"
ref={ref}
animate={control}
className='absolute flex items-center justify-center mx-auto h-10 top-20 md:top-28 xl:top-28 scale-[1.5] scale-x-[.5]' >

<motion.line
x1="130"
y1="23"
x2="170"
y2="17"
stroke="#fffade"
variants={draw}
custom={0.1} 
className=''/>
</motion.svg>




        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 '>
        
      
            {projects?.map((project, i) => (
              
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-32  sm:p-24 md:p-44 xl:p-72 mt-10 h-screen  '>
                
                  <a href={project?.linkToBuild} target="_blank" rel="noopener noreferrer" >
                  <motion.img 
                   initial={{ 
                    y: -300,
                    opacity: 0
                }}
                transition={{ duration: 1.2}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true}}
                    src={urlFor(project?.image).url()} alt="" 
                    className='h-64 w-96 mt-10 xl:h-[400px] xl:w-[500px] rounded'
                    />
                    </a>
                
                <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-1xl font-semibold text-center'>{i+1} of {projects.length } – {project.title}</h4>

<div className='flex items-center space-x-2 justify-center '> 
{project?.technologies.map((tech) => (
                            <img className="h-10 w-10 rounded bg-[#fffade]"
                            key={tech._id} src={urlFor(tech.image).url()} alt="" />
                        ))}
</div>
                       



                    <p className=' text-center md:text-left overflow-y-scroll font-regular font-sans text-[16px] '>
                    {project?.summary}
                    </p>
                </div>
                
                </div>
                
            ))}
             
             </div>
              
           
       
                  
        

        {/* <div className='absolute top-[30%] md:top-[25%] xl:top-[19%] bg-[#f1f5f5] inset-x-12 h-[200px] md:h-[400px] xl:h-[510px] -skew-y-12 -mx-32 xl:-mx-56 z-[-10]' /> */}
    </motion.div>
  )
}

export default Projects