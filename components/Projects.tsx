import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = ["Exercise Tracker App","Pomodoro Timer","URL Shortener","Simon Game","Crypto List"];
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}

    className='h-screen relative flex overflow-hidden flex-col text-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        
        <h3 className='absolute top-24 text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgb(33, 33, 33)] opacity-70 px-10'>Projects</h3>


        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-32  sm:p-24 md:p-44 xl:p-72 mt-10 h-screen'>
                    <motion.img 
                    initial={{ 
                        y: -300,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true}}
                    src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" alt="" />

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-1xl font-semibold text-center'>{i+1} of {projects.length} – {project}</h4>

                    <p className='text-lg text-center md:text-left overflow-y-scroll'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum mollitia.
                    </p>
                </div>
                
                </div>
            ))}
            {/* projects */}
            {/* projects */}
        </div>
                  


        <div className=' absolute top-[30%] bg-[#fffade]/70 inset-x-24 md:inset-x-32 xl:inset-x-56  h-[300px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects