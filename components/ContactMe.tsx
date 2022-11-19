import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";



type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

function ContactMe({}: Props) {

const { register, handleSubmit } = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:abror_iskandarov@yahoo.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message}.  (${formData.email})`;
}



  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>


<a href="#hero" className='flex items-center justify-center top-10 absolute cursor-pointer animate-bounce z-30'>
    <img src="./images/icons/chevrons-up.svg" alt="Up" />
</a>




         <h3 className='absolute top-24 text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgb(33, 33, 33)] opacity-70 px-10'>Contact Me</h3>

        <div className='flex flex-col space-y-10 mt-44'>
            <h4 className='text-2xl font-bold text-center'>
                I've got just what you need. {" "}
                <span className='underline underline-offset-4 decoration-[#fffade]'>Let's Talk</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-start space-x-5 justify-start'>
                    <PhoneIcon className=' h-5 w-5 animate-pulse'/>
                    <p className=''>+82 (10) 7281 1099</p>
                </div>
                <div className='flex items-start space-x-5 justify-start'>
                    <EnvelopeIcon className=' h-5 w-5 animate-pulse'/>
                    <p className=''>abror_iskandarov@yahoo.com</p>
                </div>
                <div className='flex items-start space-x-5 justify-start'>
                    <MapPinIcon className=' h-5 w-5 animate-pulse'/>
                    <p className=''>Jeonju, South Korea</p>
                </div>
                
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput focus:border-[rgb(33,33,33)] hover:border-[#fffade]' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput focus:border-[rgb(33,33,33)] hover:border-[#fffade]' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput focus:border-[rgb(33,33,33)] hover:border-[#fffade]' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput focus:border-[rgb(33,33,33)] hover:border-[#fffade]' />
                <button type='submit' className='bg-[rgb(33,33,33)] py-5 px-10 rounded-md text-white font-bold'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe


