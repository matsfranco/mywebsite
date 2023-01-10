import { motion } from 'framer-motion';
import React from 'react'
import { Project,PageFlow } from '../typings';
import ProjectCard from '../components/ProjectCard'
import PageFlowControl from './PageFlowControl';

type Props = {
    projects: Project[]
    nextSection: PageFlow
    backSection: PageFlow
  }

function Projects({ projects,nextSection,backSection }: Props) {
    
    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.0 }}
        className='h-screen flex relative overflow-hidden flex-col text-center md:flex-row 
                    max-w-full px-4 justify-evenly mx-auto items-center'
        >
            <h3 className='sectionTitle'>    
                Projetos
            </h3>
            <h3 className='absolute mx-2 top-36  text-gray-500 text-sm'>
                Clique e veja informações sobre alguns dos projetos mais relevantes em que trabalhei
            </h3>
            <div className='grid grid-cols-1 container justify-center'>
                <div className='col-span-1 mt-0 md:mt-24 w-full flex space-x-4 overflow-x-scroll p-8 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
                    {projects?.map((project, i) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className='col-span-1 mt-4'>
                    <PageFlowControl next={nextSection} back={backSection}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects