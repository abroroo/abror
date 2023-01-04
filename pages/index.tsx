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


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  shown: boolean;
  close: any;
  children: typeof Modal;
  
}


const Home = ({pageInfo, experiences, skills, projects, socials, shown, close, children}: Props) => {

  return (
    <div className="text-[rgba(33, 33, 33, 0.9)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0">

      

      <Head>
        <title>abror – iskandarov.me</title>
        
      </Head>
  
      <Header socials={socials} pageInfo={pageInfo} shown={shown} close={close}>{children}</Header>

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






export const getStaticProps: GetStaticProps<Props> = async () => {
  
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
  

    console.log(`pageInfo in getStaticProp: ${pageInfo}`) // [object Object]
    console.log(`experiences in getStaticProp: ${experiences}`) // [object Object]
    console.log(`skills in getStaticProp: ${skills}`) // [object Object]
    console.log(`projects in getStaticProp: ${projects}`) // [object Object]
    console.log(`socials in getStaticProp: ${socials}`) // [object Object],[object Object],[object Object],[object Object]

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





// export const getStaticProps: GetStaticProps<Props, ParsedUrlQuery, { preview: boolean }> = async (context: GetStaticPropsContext<ParsedUrlQuery, { preview: boolean }>) => {
//   const preview = context.preview;
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();


//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials,
//     },
//     // re-generate the page every 100 seconds
//     revalidate: 100,
//   };
// };






// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials,
//     },
//     // re-generate the page every 100 seconds
//     revalidate: 100,
//   };
// };
