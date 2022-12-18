import { motion } from 'framer-motion'
import React from 'react'
import { SkillDataType } from '../typings';

type Props = {
    skill: SkillDataType;
    directionLeft?: boolean;
};

function Skill({ skill,directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
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
            className='w-10 h-10 rounded-full border-2 border-[#E5383B] object-cover 
            filter group-hover:grayscale trasition duration-300 md:h-16 md:w-16 xl:h-20 xl:w-20 bg-white'
            src={skill.image.url}
        />
        <div className='absolute opacity-0  rounded-full z-0
        group-hover:opacity-90 group-hover:bg-white transition duration-100 ease-in-out
        h-10 w-10 md:h-20 md:w-20'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm font-bold text-black opacity-100 text-center'>{skill?.name}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill