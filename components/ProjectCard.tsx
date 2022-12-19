import { motion } from 'framer-motion'
import React from 'react'
import { Project } from '../typings'

type Props = {
    project: Project;
}

function ProjectCard({ project }: Props) {
    return(
        <div className='group relative flex cursor-pointer noselect'>
            <article className='p-2 flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 
                snap-center bg-black bg-opacity-30 opacity-100 cursor-pointer transition-opacity 
                duration-200 overflow-hidden 
                w-[300px] h-[400px] md:w-[380px] md:h-[500px]'
            >
                <motion.div 
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='relative flex flex-col items-center object-cover object-center filter group-hover:grayscale trasition duration-300'
                >
                    
                    <div className='p-2'>
                        <h4 className='font-bold text-base md:text-lg lg:text-xl'>{project?.title}</h4>
                        <p className='font-light text-xs md:text-base lg:text-md my-2'>{project?.organization.name}</p>
                         
                    </div>
                    <img 
                        className='object-cover object-center my-4 w-[90%] aspect-[16/9] rounded-lg border border-primary-red'
                        src={project.image.url}
                    />
                    <div className='flex p-2 gap-2 items-center justify-center'>
                            {project.skills.map(skill => (
                                <img key={skill.id}
                                     className='h-8 w-8 md:h-10 md:w-10 rounded-full bg-white border-2 border-primary-red'
                                     src={skill.image.url}
                                />
                            ))}
                        </div> 
                </motion.div>    
            </article>
            <div className='w-full h-full absolute opacity-0 z-0 rounded-lg group-hover:opacity-95 group-hover:bg-black transition duration-300 ease-in-out border border-primary-red'>
                <p className='p-2 my-1 mx-12 font-bold text-white text-base md:text-lg lg:text-xl border-b border-primary-red'>
                    {project?.title}
                </p>
                <p className='font-light text-xs md:text-base my-2'>{project?.organization.name}</p>
                <p className='p-4 lg:p-8 text-white text-justify opacity-100 text-xs md:text-base'>
                    {project.description}
                </p>
            </div>
    </div>
    )
}

export default ProjectCard