import { motion } from 'framer-motion';
import React from 'react'
import { Project } from '../typings';
import ProjectCard from '../components/ProjectCard'

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    
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
            <div className='mt-0 md:mt-24 w-full flex space-x-4 overflow-x-scroll p-8 snap-x snap-mandatory scrollbar scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
                {projects?.map((project, i) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </motion.div>
    )
}

export default Projects