import { motion } from 'framer-motion'
import React from 'react'
import { SkillDataType } from '../typings';

type Props = {
    skill: SkillDataType;
    directionLeft?: boolean;
};

function Skill({ skill,directionLeft }: Props) {
  return (
    <div className='pt-1 sm:pt-4 group relative flex cursor-pointer'>
        <motion.img 
            initial={{ 
                x: directionLeft ? -200 : 200, 
                opacity: 0
            }}
            transition={{ duration: 1 }}
            animate={{ 
                opacity: 1,
                x: 0 
            }}
            className='rounded-lg border border-primary-red object-cover 
            filter group-hover:grayscale trasition duration-300 
            w-10 h-10 md:h-16 md:w-16 xl:h-20 xl:w-20 bg-white'
            src={skill.image.url}
        />
        <div className='absolute opacity-0 rounded-lg z-50 
        group-hover:opacity-90 group-hover:bg-white transition duration-200 ease-in-out
        w-10 h-10 md:h-16 md:w-16 xl:h-20 xl:w-20'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xs sm:text-lg p-2 font-bold text-black opacity-100 text-center bg-white rounded opacity-90 noselect'>{skill?.name}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill