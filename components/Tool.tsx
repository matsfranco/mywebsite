import { motion } from 'framer-motion'
import React from 'react'
import { SkillDataType } from '../typings';

type Props = {
    skill: SkillDataType;
    directionLeft?: boolean;
};

function Skill({ skill,directionLeft }: Props) {
  return (
    <div className='pt-1 sm:pt-4 group relative flex flex-col cursor-pointer items-center'>
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
            className='rounded-full border border-primary-red object-cover 
            w-10 h-10 md:h-16 md:w-16 xl:h-20 xl:w-20 bg-white'
            src={skill.image.url}
        />
        <div className=''>
            <p className='text-xs sm:text-sm  text-white text-center noselect '>{skill?.name}</p>
        </div>
    </div>
  )
}

export default Skill