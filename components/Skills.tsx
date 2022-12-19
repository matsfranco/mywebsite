import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import { SkillDataType } from "../typings"

type Props = { 
    skills: SkillDataType[]
}

function Skills({ skills }: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5 }}
        className='min-h-screen flex relative flex-col text-center md:text-left
        max-w-[2000px] justify-center mx-auto items-center
        xl:flex-row xl:px-10 xl:space-y-0'
    >
        <h3 className='sectionTitle'>
            Skills
        </h3>
        <h3 className='absolute mx-2 top-36  text-gray-500 text-sm'>
            Algumas das principais habilidades que possuo em tecnologia da informação e engenharia
        </h3>
        <div>
        <div className='grid grid-cols-4 gap-4 md:grid-cols-4 md:gap-5 xl:grid-cols-5 xl:gap-10 bg-black bg-opacity-30 p-4 rounded-lg'>
            {skills?.slice(0,skills.length/2).map((skill,i) => (
                <Skill key={skill.id} skill={skill} directionLeft={true}/> 
            ))}
            {skills?.slice(skills.length/2, skills.length)?.map((skill,i) => (
                <Skill key={skill.id} skill={skill} directionLeft={false}/> 
            ))}
        </div>
        </div>
    </motion.div>
  )
}

export default Skills