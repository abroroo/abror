import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import { motion } from "framer-motion";
import ScrollAnimate from 'react-scroll-fade-animation';
import { Link } from 'react-router-dom'


const Home: NextPage = () => {

  return (
    <div className="text-[rgba(33, 33, 33, 0.9)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0">

      

      <Head>
        <title>Abror's Portfolio</title>
        
      </Head>
  
      <Header />

    <section id='hero' className='snap-start'>
    
      <Hero />
      
    </section>

  
   
<section id='who' className='snap-center'>

<About />

</section>


    

<section id='experience' className='snap-center'>
  <Experience />
</section>



<section id='skills' className='snap-start' >
<Skills />
</section>

    <section id='projects' className='snap-start'>
    <Projects />
    </section>


   <section id='contact' className='snap-start'>
    <ContactMe />
   </section>


   

    </div>
  )
}

export default Home
