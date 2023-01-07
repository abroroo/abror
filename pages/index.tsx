import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import { Experience, PageInfo, Skill, Project, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import { Modal } from '../components/Header'
import { ParsedUrlQuery } from 'querystring';


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  // shown: boolean;
  // close: any;
  // children: typeof Modal;
  
}


const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {

  return (
    <div className="text-[rgba(33, 33, 33, 0.9)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 font-jost">

      

      <Head>
        <title>abror – iskandarov.me</title>
        
      </Head>
  
      <Header socials={socials} pageInfo={pageInfo}></Header>

    <section id='hero' className='snap-start'>
    
      <Hero pageInfo={pageInfo}/>
      
    </section>

  
   
<section id='who' className='snap-center'>

<About pageInfo={pageInfo}/>

</section>


    

<section id='experience' className='snap-center'>
  <WorkExperience experiences={experiences} pageInfo={pageInfo} />
</section>



<section id='skills' className='snap-start' >
<Skills skills={skills} pageInfo={pageInfo}/>
</section>

    <section id='projects' className='snap-start'>
    <Projects projects={projects} />
    </section>


   <section id='resume' className='snap-start'>
    <Resume pageInfo={pageInfo} socials={socials}/>
   </section>


   

    </div>
  )
}

export default Home;





// eslint-disable-next-line no-use-before-define
export const getStaticProps: GetStaticProps<Props> = async () => {
  
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
  
    
    // console.log(`pageInfo in getStaticProp: ${typeof pageInfo}`) 
    // console.log(`experiences in getStaticProp: ${JSON.stringify(experiences)}`) 
    // console.log(`skills in getStaticProp: ${JSON.stringify(skills)}`) 
    // console.log(`projects in getStaticProp: ${JSON.stringify(projects)}`) 
    // console.log(`socials in getStaticProp: ${JSON.stringify(socials)}`) 

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // re-generate the page every 100 seconds
    revalidate: 100,
  };
};

