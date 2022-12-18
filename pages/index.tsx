import type { GetStaticProps,NextPage } from 'next'
import Head from 'next/head'
//import Link from 'next/link'
import About from '../components/About'
import Hero from '../components/Hero'
import LinkTree from '../components/LinkTree'
import Skills from '../components/Skills'

//import Projects from '../components/Projects'
//import Experiences from '../components/Experiences'
//import Menu from '../components/Menu'
//import { Experience, PageInfo, Project, Social, Skill } from '../typings'
import { getHeroInfo } from '../services/getHeroInfo'
import { getSkills } from '../services/getSkills'
import { HeroInfo,SkillDataType } from "../typings"
//import { fetchExperiences } from '../utils/fetchExperiences'
//import { fetchProjects } from '../utils/fetchProjects'
//import { fetchSkills } from '../utils/fetchSkills'
//import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  heroInfo: HeroInfo;
  skills: SkillDataType[];
}

const Home = ({heroInfo, skills}: Props) => {
  console.log(heroInfo.heroImage.url)
  return (
    <>
    <div className='bg-[#212329] text-white h-screen snap-y snap-mandatory 
    overflow-x-hidden overflow-y-scroll z-0 scrollbar'>
      <Head>
        <title>Mateus Franco</title>
      </Head>

      <section id='hero' className='snap-center'>
        <Hero heroInfo={heroInfo}/>
      </section>
      
      <section id='about' className='snap-center'>
        <About heroInfo={heroInfo}/>
      </section>

      <section id='skills' className='snap-center'>
        <Skills skills={skills}/>
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
  //const experiences: Experience[] = await fetchExperiences();
  //const skills: Skill[] = await fetchSkills();
  //const projects: Project[] = await fetchProjects();
  //const socials: Social[] = await fetchSocials();

  return {
    props: {
      heroInfo,
      skills
      //skills,
      //projects,
      //socials
    },
    revalidate: 1,
  };
}