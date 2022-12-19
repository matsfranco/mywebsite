import type { GetStaticProps,NextPage } from 'next'
import Head from 'next/head'
//import Link from 'next/link'
import About from '../components/About'
import Hero from '../components/Hero'
import LinkTree from '../components/LinkTree'
import Skills from '../components/Skills'
import Menu from '../components/Menu'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'

//import { Experience, PageInfo, Project, Social, Skill } from '../typings'
import { getHeroInfo } from '../services/getHeroInfo'
import { getSkills } from '../services/getSkills'
import { getExperiences } from '../services/getExperiences'
import { getProjects } from '../services/getProjects'
import { HeroInfo,SkillDataType,Experience,Project } from "../typings"
//import { fetchSkills } from '../utils/fetchSkills'
//import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  heroInfo: HeroInfo;
  skills: SkillDataType[];
  experiences: Experience[];
  projects: Project[];
}

const Home = ({heroInfo, skills, experiences, projects}: Props) => {
  return (
    <>

    <div className='bg-[#212329] text-white h-screen snap-y snap-mandatory 
    overflow-x-hidden overflow-y-scroll z-0  scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
      <Head>
        <title>Mateus Franco</title>
      </Head>

      <Menu />

      <section id='hero' className='snap-center'>
        <Hero heroInfo={heroInfo}/>
      </section>
      
      <section id='about' className='snap-center'>
        <About heroInfo={heroInfo}/>
      </section>

      <section id='skills' className='snap-center'>
        <Skills skills={skills}/>
      </section>

      <section id='experience' className='snap-center'>
        <Experiences experiences={experiences}/>
      </section>

      <section id='projects'  className='snap-center'>
        <Projects projects={projects}/>
      </section>

      <section id='contact' className='snap-center'>
        <LinkTree />
      </section>

    </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const heroInfo: HeroInfo = await getHeroInfo();
  const skills: SkillDataType[] = await getSkills();
  const experiences: Experience[] = await getExperiences();
  const projects: Project[] = await getProjects();
  //const socials: Social[] = await fetchSocials();

  return {
    props: {
      heroInfo,
      skills,
      experiences,
      projects
    },
    revalidate: 300,
  };
}