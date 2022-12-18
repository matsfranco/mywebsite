/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Experience } from '../typings'
import moment from 'moment';
import { motion } from 'framer-motion';

type Props = {
    experience: Experience;
}

const TimelineItem = ({ experience } : Props) => {
    return (
    <>
        
        <div className="group relative flex cursor-pointer noselect">
            
            <article className="flex flex-col items-center space-y-2 flex-shrink-0 
                snap-center bg-black bg-opacity-30 opacity-100 cursor-pointer transition-opacity 
                duration-200 overflow-hidden h-[500px] w-[290px] md:h-[500px] md:w-[400px] 
                ">
                <motion.div 
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='relative flex flex-col items-center object-cover object-center filter group-hover:grayscale trasition duration-300'
                >           
                <div className='absolute w-full border-t border-primary-red mt-[38px] md:mt-[47px] z-0' ></div> 
                <div className="grid grid-cols-1 200 cursor-pointer pt-4 z-20">
                    <div className="flex justify-center">
                        <img 
                            src={experience.organization.logo?.url}
                            className="rounded-full col-span-1 w-12 h-12 md:w-16 md:h-16 bg-secondary-grey rounded-full border border-primary-red"
                        />
                    </div>
                    <div className="grid grid-cols-1 content-start">
                        <div className="col-span-1 py-1 flex justify-center">
                            <h3 className="text-xl font-semibold text-white transition hover:text-primary-red duration-" >{experience?.jobTitle}</h3>
                        </div>
                        <p className="col-span-1 text-base font-normal text-white">{experience?.organization.name}</p>   
                        <p className='m-1 font-light text-sm text-gray-300 '> 
                            {moment(experience.startDate).format('MMM/YYYY')} - {" "}
                            {experience.isCurrentlyWorkingHere ? 'Atualmente' : moment(experience.endDate).format('MMM/YYYY')}
                        </p>
                        <div className="my-4 mx-2 col-span-1 flex justify-center">
                            <img src={experience?.image.url} 
                                className="rounded-lg w-[90%] aspect-[16/9] rounded-lg bg-secondary-grey border border-primary-red" 
                            />
                        </div>
                        <div className='flex p-2 gap-2 items-center justify-center'>
                            {experience.skills.map(skill => (
                                <img key={skill.id}
                                     className='h-8 w-8 md:h-10 md:w-10 rounded-full bg-white border-2 border-[#E5383B]'
                                     src={skill.image.url}
                                />
                            ))}
                        </div>  
                    </div>
                </div>
                </motion.div>  
            </article>
            <div className='w-full h-full absolute opacity-0 z-0 rounded-lg group-hover:opacity-95 group-hover:bg-black transition duration-300 ease-in-out border border-primary-red'>
                <div className=''>
                    <p className='p-2 my-1 mx-12 font-bold text-white text-base md:text-lg lg:text-xl border-b border-primary-red'>
                        {experience?.jobTitle}
                    </p>
                    <p className="col-span-1 text-xs md:text-base font-normal text-white">{experience?.organization.name}</p> 
                    <div className="col-span-1">
                        <div className="grid grid-col-1">
                            <div className="col-span-1">
                                <div className='mx-4 p-2 lg:p-4 text-white text-justify opacity-100 text-xs md:text-sm'>
                                    {experience.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default TimelineItem