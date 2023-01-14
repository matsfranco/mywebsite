import type { GetStaticProps,NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import LinkTree from '../components/LinkTree'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import { getHeroInfo } from '../services/getHeroInfo'
import { getSkills } from '../services/getSkills'
import { getExperiences } from '../services/getExperiences'
import { getProjects } from '../services/getProjects'
import { getCertifications } from '../services/getCertifications'
import { HeroInfo,SkillDataType,Experience,Project,Certification } from "../typings"
import Menu from '../components/Menu'

type Props = {
  heroInfo: HeroInfo;
  skills: SkillDataType[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
}

const aboutFlowControl = {
  next : {
    label : "Skills",
    href : "#skills"
  },
  back : {
    label : "Home",
    href : "#hero"
  }
}

const skillFlowControl = {
  next : {
    label : "Experiências",
    href : "#experience"
  },
  back : {
    label : "Sobre mim",
    href : "#about"
  }
}

const experienceFlowControl = {
  next : {
    label : "Projetos",
    href : "#projects"
  },
  back : {
    label : "Skills",
    href : "#skills"
  }
}

const projectsFlowControl = {
  next : {
    label : "Formação",
    href : "#academic"
  },
  back : {
    label : "Experiências",
    href : "#experience"
  },
}

const academicFlowControl = {
  next : {
    label : "Contatos",
    href : "#contact"
  },
  back : {
    label : "Projetos",
    href : "#projects"
  },
}

const contactFlowControl = {
  next : {
    label : "Home",
    href : "#hero"
  },
  back : {
    label : "Formação",
    href : "#academic"
  },
}


const Home = ({heroInfo, skills, experiences, projects, certifications}: Props) => {
  
  let academicExp = experiences.filter(function(experience) {
    return experience.type.includes('Academic')
  })
  let professionalExp = experiences.filter(function(experience) {
    return experience.type.includes('Professional')
  })

  return (
    <>

    <div className='bg-secondary-grey text-white h-screen overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
      <Head>
        <title>Mateus Franco</title>
      </Head>
      <Menu />
      <section id='hero' className=''>
        <Hero heroInfo={heroInfo}/>
      </section>
      
      <section id='about' className='aboutSection'>
        <About heroInfo={heroInfo} nextSection={aboutFlowControl.next} backSection={aboutFlowControl.back}/>
      </section>

      <section id='skills' className='aboutSection'>
        <Skills skills={skills} certifications={certifications} nextSection={skillFlowControl.next} backSection={skillFlowControl.back}/>
      </section>

      <section id='experience' className='aboutSection'>
        <Experiences experiences={professionalExp} nextSection={experienceFlowControl.next} backSection={experienceFlowControl.back}/>
      </section>

      <section id='projects'  className='aboutSection'>
        <Projects projects={projects} nextSection={projectsFlowControl.next} backSection={projectsFlowControl.back}/>
      </section>

      <section id='academic' className='aboutSection'>
        <Education academicExps={academicExp} nextSection={academicFlowControl.next} backSection={academicFlowControl.back}/>
      </section>

      <section id='contact' className='aboutSection'>
        <LinkTree nextSection={contactFlowControl.next} backSection={contactFlowControl.back}/>
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
  const certifications: Certification[] = await getCertifications();

  return {
    props: {
      heroInfo,
      skills,
      experiences,
      projects,
      certifications
    },
    revalidate: 300,
  };
}