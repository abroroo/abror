import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { SocialIcon } from 'react-social-icons';
import { animate, motion, useAnimation, useInView  } from 'framer-motion'
import { PageInfo, Social } from '../typings';
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import ContactToggle from './ContactToggle';
import { urlFor } from '../sanity';

type Props = {
    socials: Social[];
    pageInfo: PageInfo;
    shown: boolean;
    close: any;
    children: any;
    
}



{/* ShowModel start */}

export function Modal( { children, shown, close, pageInfo, socials}: Props) {
    return shown ? (
        <div
       
        onClick={() => {
            // close modal when outside of modal is clicked
            close();
          }}
          >
             <ContactToggle close={close} pageInfo={pageInfo} socials={socials}/>
        </div>
       
    ) : null;
};




{/* ShowModel end */}






// Main Function
function Header({socials, pageInfo}: Props) {

  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    if (isOpen) {
      document.body.style.display = 'hidden'
    }
  }, [isOpen])

  return (
    <header className= 'relative top-5 xl:top-12 p-auto flex items-start justify-center mx-auto max-w-screen z-20 xl:items-center'>
        
            {/* Social Icons */}
            <div className='absolute flex flex-row items-center left-5 xl:left-10 md:left-10 '>
     
       {/* {socials.map((social, i) => ( */}
                        {/* Social 1 */}
                        <a
                        key={socials[2]?._id} 
                        className='hover-underline-animation'
                        href={socials[2]?.url}
                        target="_blank" rel="noopener noreferrer"
                        >
                        <motion.img
                        initial={{
                            y: -20,
                            opacity: 0,
                            // scale: 0.5
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            // scale: 1
                        }}
                        transition={{
                        delay: 3,
                        duration: 0.6,
                            ease: [0.33, 1, 0.68, 1],
                            //type: "spring", stiffness: 200, damping: 13
                        }} 
                        
                        className=' h-8 w-8 xl:h-10 xl:w-10'
                        src={urlFor(socials[2]?.image).url()} alt="" />
                            </a>

                        {/* Social 2 */}
                        <a
                        key={socials[1]?._id} 
                        className='hover-underline-animation'
                        href={socials[1]?.url}
                        target="_blank" rel="noopener noreferrer"
                        >
                        <motion.img
                        initial={{
                            y: -20,
                            opacity: 0,
                            // scale: 0.5
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            // scale: 1
                        }}
                        transition={{
                        delay: 3.2,
                        duration: 0.6,
                            ease: [0.33, 1, 0.68, 1],
                            //type: "spring", stiffness: 200, damping: 13
                        }} 
                        
                        className=' h-8 w-8 xl:h-10 xl:w-10'
                        src={urlFor(socials[1]?.image).url()} alt="" />
                            </a>

                            {/* Social 3 */}
                            <a
                        key={socials[0]?._id} 
                        className='hover-underline-animation'
                        href={socials[0]?.url}
                        target="_blank" rel="noopener noreferrer"
                        >
                        <motion.img
                        initial={{
                            y: -20,
                            opacity: 0,
                            // scale: 0.5
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            // scale: 1
                        }}
                        transition={{
                        delay: 3.4,
                        duration: 0.6,
                            ease: [0.33, 1, 0.68, 1],
                            //type: "spring", stiffness: 200, damping: 13
                        }} 
                        
                        className=' h-8 w-8 xl:h-10 xl:w-10'
                        src={urlFor(socials[0]?.image).url()} alt="" />
                            </a>

                            {/* Social 4 */}
                            <a
                        key={socials[3]?._id} 
                        className='hover-underline-animation'
                        href={socials[3]?.url}
                        target="_blank" rel="noopener noreferrer"
                        >
                        <motion.img
                        initial={{
                            y: -20,
                            opacity: 0,
                            // scale: 0.5
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            // scale: 1
                        }}
                        transition={{
                        delay: 3.6,
                        duration: 0.6,
                            ease: [0.33, 1, 0.68, 1],
                            //type: "spring", stiffness: 200, damping: 13
                        }} 
                        
                        className=' h-8 w-8 xl:h-10 xl:w-10'
                        src={urlFor(socials[3]?.image).url()} alt="" />
                            </a>

{/* ))} */}
            </div>
           
            
            
           
        
           
          

<motion.div 
        initial={{
            y: -20,
            opacity: 0,
            // scale: 0.5
        }}
        animate={{
            y: 0,
            opacity: 1,
            // scale: 1
        }}
        transition={{
            delay: 3.8,
            duration: 0.6,
         ease: [0.33, 1, 0.68, 1],
            //type: "spring", stiffness: 200, damping: 15
        }}
        data-isopen={isOpen}
           onClick={() => {
            setIsOpen(!isOpen) 
           }}

        className={ isOpen ? 'absolute flex-row text-[rgb(33,33,33)] cursor-pointer right-5 md:right-10 xl:right-10 z-0' : 'fixed flex-row text-[rgb(33,33,33)] cursor-pointer right-10 z-30' }>
            <img 
            alt="image"
            className='visible md:hidden xl:hidden cursor-pointer h-9 w-9 relative -right-5'
        src={urlFor(pageInfo?.burgerPic).url()}
            />
         
            <p className='hidden md:inline-flex text-sm tracking-[-0.2px] text-[rgb(33,33,33)] opacity-90 hover:opacity-100 hover-underline-animation py-1 font-semibold text-[11px] md:text-[12px] xl:text-[13px]'>CONTACT</p>

            
        </motion.div>

        <motion.div
           layout
           data-isopen={isOpen}
           transition= {{
            duration: 0.6,
            ease: [0.85, 0, 0.15, 1]
           }}
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           exit={{ opacity: 0}}
           className={ isOpen ? 'contact-scaler z-30 overflow-hidden w-[96vw] xl:w-[97vw]' : 'top-96 w-[96vw] xl:w-[97vw] h-[0px]  bg-[#fff] fixed -z-[100]'}>
 
 {/* ContactMe start */}
<div className=''>
<Modal socials={socials} pageInfo={pageInfo} shown={isOpen} close={() => {
    setIsOpen(false)
}}>
</Modal>

{/* <div className={ isOpen ? 'absolute top-32 xl:-bottom-56 bg-[#f1f5f5] inset-x-0 h-[250px] md:h-[300px] xl:h-[430px] -skew-y-[16deg] -mx-32 xl:-mx-56 -z-10' : 'hidden'} /> */}

</div>



 

 {/* ContactMe end */}


           </motion.div>
        
        
    </header>
  )
}

export default Header









 {/* <SocialIcon 
        key={social._id}
        url={social.url}
        fgColor='rgb(33,33,33)' bgColor="transparent"  
        style={{ height: 45, width: 45 }} 
        className='hover-underline-animation '>

        </SocialIcon> */}