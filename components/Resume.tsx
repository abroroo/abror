import React, { useEffect, useRef, useState } from 'react'
import { animate, motion, useAnimation, useInView } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo, Social } from '../typings';
import { urlFor } from '../sanity';
import { round, rydbergDependencies } from "mathjs";


type Props = {
  pageInfo: PageInfo;
  socials: Social[];
}



const draw = {
  visible: () => {
    return {
      y: 0,
    };
  }
};






function Resume({pageInfo, socials}: Props) {

  const [xval, setXval] = useState(0);
  const [yval, setYval] = useState(0);
 

  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();


  
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);



  // resume download function
  // console.log(pageInfo.resume)

 const [objectUrl, setObjectUrl] = useState("");
 const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
 const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
 const [type, fileId, extension ] = pageInfo?.resume?.asset?._ref.split("-");
 const resumeUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}.${extension}`
 


useEffect(() => {
  async function downloadFile() {
    const response = await fetch(resumeUrl);
    const blob = await response.blob();
    const objectUrl1 = URL.createObjectURL(blob);
    setObjectUrl(objectUrl1);
  }

  downloadFile();
}, [resumeUrl]);





  return (
    <div  className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center will-change-scroll'>


<motion.a 
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 1, delay: 2}}
href="#hero" className='flex items-center justify-center top-8 absolute cursor-pointer w-10 h-10 scale-[1.5] scale-x-[2.5] z-10 '>
    <div className='realtive flex items-center justify-center '>
    <motion.img 
    initial={{ y:2, opacity: 0}}
    
    transition={{ repeat: Infinity, duration: 2, repeatDelay: 0, delay: 0.1, type: "spring", stiffness: 100}}
    animate={{ y: 0, opacity: 1}}
    exit={{opacity: 0}}
    className='h-3 w-3 z-0 absolute'
    src="./images/icons/chevron-up.svg" alt="Up" />

<motion.img 
    initial={{ y: 0, opacity: 0.6}}
    
    transition={{ repeat: Infinity, duration: 2, delay:0.1, repeatDelay: 0, type: "spring", stiffness: 100}}
    animate={{ y: -6, opacity: 0}}
    exit={{ opacity: 0}}
    
    className='h-3 w-3 z-0 absolute'
    src="./images/icons/chevron-up.svg" alt="Up" />
    </div>
    
</motion.a>



         <motion.div
        whileHover={{
          
          x: xval > 100 ? xval / 8 : xval / 10,
        
        }}
        onHoverStart={(e) => {
          setXval(round(e.offsetX.valueOf()));
          
        }}
        transition={{type: "spring", stiffness: 100, damping: 50}}
        className='absolute z-10 flex items-end justify-center bottom-0 '
        > 
        <motion.div
        initial={{  opacity: 0}}
      
        whileInView={{ opacity: 1}}
  
        transition={{duration: 1,
          ease: [0, 0.31, 0.2, 1.01]
        }}
          className=''
          >
        <img 
        alt="rock"
      draggable="false"
        className='h-64 w-44 md:h-[300px] md:w-[150px] xl:h-[350px] xl:w-[200px] mx-auto object-contain'
        src={urlFor(pageInfo?.aboutPic).url()} />
      
      
        </motion.div>
       
        
  
        </motion.div>

       

         <motion.div 
         whileHover={{ scale: 1.05, color: ["#212121", "#fff"]  }}
         whileTap={{ scale: 0.9 }}
         transition={{duration: 0.2}}
         className='realtive items-center justify-center mb-44 cursor-hand '>
          <a href={objectUrl}  download="resume_abror.pdf" target="__blank" className='text-[50px] md:text-[60px] xl:text-[70px] font-bold font-sans cursor-hand '>
          Résumé
          </a>
         </motion.div>
         <h4 className='absolute -mt-16 items-center justify-center uppercase tracking-[3px] text-[rgb(33,33,33)] text-[9px] md:text-[10px] xl:text-[10px] '>Click to download</h4>
         
         

<div className='absolute bottom-[3%] xl:bottom-[2%] bg-[#f1f5f5] h-[250px] md:h-[300px] xl:h-[350px] w-[100vw] ' />
<div className='absolute bottom-0 bg-[#fff] h-[50px] w-[100vw] flex flex-row items-center justify-between' >

<div className='relative items-center justify-center z-10 ml-5'>

{socials.map((social, i) => (

<a
key={social?._id} 
className='hover-underline-animation hover:scale-110'
href={social?.url}
target="_blank" rel="noopener noreferrer"
>
<motion.img
initial={{
    y: -10,
    opacity: 0,
    // scale: 0.5
}}
whileInView={{
    y: 0,
    opacity: 1,
    // scale: 1
}}
transition={{
delay: 0,
duration: 0.6,
    ease: [0.33, 1, 0.68, 1],
    //type: "spring", stiffness: 200, damping: 13
}} 

className=' h-6 w-6 xl:h-7 xl:w-7'
src={urlFor(social?.image).url()} alt="" />

    </a>
   
))} 
 
</div>


<p className='relative text-[12px] font-semibold  text-[rgb(33, 33, 33)] opacity-70  z-10 mr-5'><a href='https://github.com/abroroo' target="__blank">@abroroo</a> – Jeonju-si, South Korea, 54899</p>

</div>

       

    </div>
  )
}

export default Resume









