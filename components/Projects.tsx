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
        <div className='flex relative flex-col items-center'>
            <h3 className='sectionTitle'>    
                Projetos
            </h3>
            <h3 className='sectionSubtitle'>
                    Clique para mais detalhes sobre projetos em que atuei
            </h3>
            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.0 }}
            className='flex relative overflow-hidden flex-col text-center md:flex-row 
                        max-w-full px-4 justify-evenly mx-auto items-center'
            >

                <div className='grid grid-cols-1 container justify-center'>
                    <div className='pt-4 col-span-1 w-full flex space-x-4 overflow-x-scroll p-8 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
                        {projects?.map((project, i) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects