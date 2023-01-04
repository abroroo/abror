import React, { useEffect, useRef } from 'react'
import { animate, motion, useAnimation, useInView  } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';




type Props = {
  pageInfo: PageInfo;
}

// type Inputs = {
//     name: string,
//     email: string,
//     subject: string,
//     message: string
//   };

//   const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i) => {
//       const delay = 1 + i * 0.5;
//       return {
//         pathLength: 1,
//         opacity: 1,
//         transition: {
//           pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//           opacity: { delay, duration: 0.01 }
//         }
//       };
//     }
//   };

function ContactMe({pageInfo}: Props) {

// const { register, handleSubmit } = useForm<Inputs>();
// const onSubmit: SubmitHandler<Inputs> = formData => {
//     window.location.href = `mailto:abror_iskandarov@yahoo.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message}.  (${formData.email})`;
// }

// const ref = useRef(null);
// const isInView = useInView(ref);
// const control = useAnimation();

// useEffect(() => {
//   if (isInView) {
//     control.start("visible");
//   }
// }, [isInView]);


//   return (
//     <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>


// <motion.a 
// initial={{opacity: 0}}
// whileInView={{opacity: 1}}
// transition={{duration: 1, delay: 2}}
// href="#hero" className='flex items-center justify-center top-2 absolute cursor-pointer w-5 h-10 scale-[1.5] scale-x-[2.5] z-20 '>
//     <div className='realtive flex items-center justify-center '>
//     <motion.img 
//     initial={{ y:2, opacity: 0}}
    
//     transition={{ repeat: Infinity, duration: 2, repeatDelay: 0, delay: 0.1, type: "spring", stiffness: 100}}
//     animate={{ y: 0, opacity: 1}}
//     exit={{opacity: 0}}
//     className='h-3 w-3 z-0 absolute'
//     src="./images/icons/chevron-up.svg" alt="Up" />

// <motion.img 
//     initial={{ y: 0, opacity: 0.6}}
    
//     transition={{ repeat: Infinity, duration: 2, delay:0.1, repeatDelay: 0, type: "spring", stiffness: 100}}
//     animate={{ y: -6, opacity: 0}}
//     exit={{ opacity: 0}}
    
//     className='h-3 w-3 z-0 absolute'
//     src="./images/icons/chevron-up.svg" alt="Up" />
//     </div>
    
// </motion.a>




//          <h3 className='absolute top-32 text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgb(33, 33, 33)] opacity-70 px-10'>Contact</h3>

//          <motion.svg 
// initial="hidden"
// ref={ref}
// animate={control}
// className='absolute flex items-center justify-center mx-auto h-10 top-36' 
// >

// <motion.line
// x1="135"
// y1="20"
// x2="160"
// y2="10"
// stroke="#fffade"
// variants={draw}
// custom={0.7} 
// className=''/>
// </motion.svg>

//         <div className='flex flex-col space-y-10 mt-44 xl:mt-32'>
//             <h4 className='text-2xl font-bold text-center'>
//                 Interested? Drop me a.. {" "}
//                 <span className='underline underline-offset-4 decoration-[#fffade]'>Hi!</span>
//             </h4>

//             <div className='space-y-10'>
//                 <div className='flex items-start space-x-5 justify-start'>
//                     <PhoneIcon className=' h-5 w-5 animate-pulse'/>
//                     <p className=''>{pageInfo?.phoneNumber}</p>
//                 </div>
//                 <div className='flex items-start space-x-5 justify-start'>
//                     <EnvelopeIcon className=' h-5 w-5 animate-pulse'/>
//                     <p className=''>{pageInfo?.email}</p>
//                 </div>
//                 <div className='flex items-start space-x-5 justify-start'>
//                     <MapPinIcon className=' h-5 w-5 animate-pulse'/>
//                     <p className=''>{pageInfo?.address}</p>
//                 </div>
                
//             </div>


//             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
//                 <div className='flex space-x-2'>
//                     <input {...register('name')} placeholder="What's your name?" className='contactInput focus:border-[rgb(33,33,33)] hover:border-[#fffade]' type="text" />
//                     <input {...register('email')} placeholder='Type your email' className='contactInput focus:border-[rgb(33,33,33)] hover:border-[#fffade]' type="email" />
//                 </div>
//                 <textarea {...register('message')} placeholder="Message me..." className='contactInput focus:border-[rgb(33,33,33)] hover:border-[#fffade]' />
//                 <button type='submit' className='bg-[rgb(33,33,33)] py-5 px-10 rounded-md text-white font-bold'>Submit</button>
//             </form>

//         </div>
//     </div>
 // )
}

export default ContactMe


