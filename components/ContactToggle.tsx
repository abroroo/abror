import React, { useEffect, useRef } from 'react'
import { animate, motion, useAnimation, useInView  } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo, Social } from '../typings';
import { urlFor } from '../sanity';



type Props = {
  pageInfo: PageInfo;
  close: any;
  socials: Social[];
}


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string;
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };


  //Main Toggle
function ContactToggle({pageInfo, close, socials}: Props) {

const { register, handleSubmit } = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:abror_iskandarov@yahoo.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message}.  (${formData.email})`;
}

const ref = useRef(null);
const isInView = useInView(ref);
const control = useAnimation();

useEffect(() => {
  if (isInView) {
    control.start("visible");
  }
}, [isInView]);

const cursorImage = urlFor(pageInfo?.slippersPic).url()


console.log(socials)


  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.4, duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
    onClick={e => {
      // do not close modal if anything inside modal content is clicked
      e.stopPropagation();
    }}
    className='relative flex flex-col text-center md:text-left justify-start items-center h-[95vh] w-[96vw] xl:w-[97vw]'>

{/* <div className='absolute -top-64 xl:-top-96 bg-[#f1f5f5]/50 h-[250px] md:h-[300px] xl:h-[430px] -skew-y-[30deg] w-[1000px] xl:w-[2000px] -left-96 -z-10' /> */}


<div 
className='relative w-[96vw] xl:w-[97vw] h-10 flex items-center justify-end mt-3 mr-6'>
<motion.a 
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{
  duration: 0.6,
  ease: [0.85, 0, 0.15, 1]
}}
onClick={close}

href="#hero" className='cursor-pointer w-10 h-10 '>

<motion.svg 
initial="hidden"
ref={ref}
animate={control}
onHoverStart={() => {
  control.start({
    scale: 1.1
  })}}
  onHoverEnd={() => {
  control.start({scale: 1})
}}
className='h-10 w-10 ' 
>
<motion.line
        x1="20"
        y1="10"
        x2="35"
        y2="25"
        stroke="#212121"
        variants={draw}
        custom={0}
        className='stroke-2'
      />
      <motion.line
        x1="20"
        y1="25"
        x2="35"
        y2="10"
        stroke="#212121"
        variants={draw}
        custom={0.5}
        className='stroke-2'
      />
</motion.svg>
    
</motion.a>
</div>



       
<div className='relative flex items-center justify-center h-screen flex-col'>
        <div className='relative flex flex-col space-y-10 '>
            <h4 className=' text-0xl md:text-2xl xl:text-2xl font-bold text-center '>
            Let&#39;s get in touch{" "}
                <span className='underline underline-offset-4 decoration-[#fff42d]'>...</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className=' h-5 w-5 animate-pulse'/>
                    <p className='text-[16px] md:text-lg xl:text-lg'>{pageInfo?.phoneNumber}</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className=' h-5 w-5 animate-pulse'/>
                    <p className='text-[16px] md:text-lg xl:text-lg'>{pageInfo?.email}</p>
                </div>
                
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex flex-col md:flex-row xl:flex-row space-y-2 md:space-y-0 xl:space-y-0 space-x-0  md:space-x-2 xl:space-x-2'>
                    <input {...register('name')} placeholder="What's your name?" className='contactInput focus:border-[rgb(33,33,33)] hover:border-[rgb(33,33,33)] text-sm' type="text" />
                    <input {...register('email')} placeholder='Type your email' className='contactInput focus:border-[rgb(33,33,33)] hover:border-[rgb(33,33,33)] text-sm' type="email" />
                </div>
                <textarea {...register('message')} placeholder="Anything you want to discuss..." className='contactInput focus:border-[rgb(33,33,33)] hover:border-[rgb(33,33,33)] text-sm' />
                <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type='submit' className='bg-[rgb(33,33,33)] py-5 px-10 rounded-md text-white font-bold cursor-hand'>Submit</motion.button>
            </form>

        </div>


      {/* Socials  */}
        <div className='absolute items-center justify-center z-10 bottom-6 space-x-1'>

          <div className='relative flex flex-col items-center justify-center'>

          



<motion.p 
        initial={{x: 40}}
        whileHover={{x: 0}}
        transition={{duration: 0.2, type: "spring", bounce: 3}}
        className='hidden md:inline-flex tracking-[1px] text-[rgb(33,33,33)] font-semibold text-[9px] md:text-[10px] xl:text-[12px] uppercase'>Social<motion.p 
        initial={{opacity: 0, x: 5}}
        whileHover={{opacity: 1, x: 0}}
        transition={{duration: 0.2, type: "spring", bounce: 3}}
        className=''>ly Awkward</motion.p></motion.p>

        


        <div className='relative flex flex-row mt-2'>

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
    // scale: 1
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

 {/* End Socials  */}
 </div>
 </div>

        </div>
    </motion.div>
  )
}

export default ContactToggle


