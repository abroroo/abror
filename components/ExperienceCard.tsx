import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
}

export default function ExperienceCard({experience}: Props) {
  return (
    
      <article className='flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-full snap-center  hover:opacity-100 opacity-90 cursor-pointer transition-opacity duration-200 z-[10]'>
        <a href={experience?.companyWebsite} rel="noopener noreferrer" target="_blank">
        <motion.img 
      initial={{
        y: 100,
        opacity: 0,
      }}
      transition={{ duration: 1.2}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true}}
      className=" overflow-visible w-24 h-24  object-cover object-center"
      src={urlFor(experience?.companyImage).url()} ></motion.img>
        </a>
      

<div className='scroll-y-2 overflow-y-scroll flex items-center justify-center flex-col cursor-text'>
      <div className='px-0 md:px-10 text-center'>
      
        <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-1xl mt-1'>{experience?.company}</p>
       
        <p className='uppercase py-5 text-[rgb(33,33,33)] opacity-60 '>
          {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>
       
      </div>
      <ul className='list-disc space-y-4 h-[120px] ml-4 md:text-[15px] xl:text-[16px] pr-3 font-regular font-jost text-[rgb(33,33,33)] '>
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
        
        
        
      </ul>
      </div>
        </article>
       
  )
}

