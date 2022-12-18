//import type { GetStaticProps,NextPage } from 'next'
import Head from 'next/head'
//import Link from 'next/link'
//import About from '../components/About'
//import LinkTree from '../components/LinkTree'
import Hero from '../components/Hero'
//import Projects from '../components/Projects'
//import Skills from '../components/Skills'
//import Experiences from '../components/Experiences'
//import Menu from '../components/Menu'
import { Experience, PageInfo, Project, Social, Skill } from '../typings'
//import { fetchExperiences } from '../utils/fetchExperiences'
//import { fetchPageInfos } from '../utils/fetchPageInfos'
//import { fetchProjects } from '../utils/fetchProjects'
//import { fetchSkills } from '../utils/fetchSkills'
//import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
}

const Home = ({pageInfo, experiences, skills, projects}: Props) => {
  return (
    <>
    <div className='bg-[#212329] text-white h-screen snap-y snap-mandatory 
    overflow-x-hidden overflow-y-scroll z-0 scrollbar'>
      <Head>
        <title>Mateus Franco</title>
      </Head>

      <section id='hero' className='snap-center'>
        <Hero pageInfo={pageInfo}/>
      </section>


    </div>
    </>
  )
}

export default Home
/*
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfos();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 60,
  };

}
*/