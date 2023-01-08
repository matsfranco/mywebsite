import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import CertificationItem from './CertificationItem'
import { SkillDataType,Certification } from "../typings"

type Props = { 
    skills: SkillDataType[]
    certifications: Certification[]
}


function Skills({ skills, certifications }: Props) {

    const skillsByGroup = skills.reduce(function (skillsByGroup, skill) {
        skillsByGroup[skill.group] = skillsByGroup[skill.group] || [];
        skillsByGroup[skill.group].push(skill);
        return skillsByGroup;
    }, Object.create(null));

    console.log(skillsByGroup);


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
            Skills & Certificações
        </h3>
        <h3 className='absolute mx-2 top-32 text-gray-500 text-sm'>
            Algumas das principais habilidades e certificações que possuo em tecnologias e engenharia
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>

            <div className='col-span-1 grid grid-cols-5 gap-4 md:grid-cols-5 md:gap-5 xl:grid-cols-5 xl:gap-10 bg-black bg-opacity-30 p-4 rounded-lg'>
                {skills?.slice(0,skills.length/2).map((skill,i) => (
                    <Skill key={skill.id} skill={skill} directionLeft={true}/> 
                ))}
                {skills?.slice(skills.length/2, skills.length)?.map((skill,i) => (
                    <Skill key={skill.id} skill={skill} directionLeft={false}/> 
                ))}
            </div>
            
            <div className='col-span-1 grid grid-cols-1 gap-2 bg-black bg-opacity-30 p-4 rounded-lg'>
                    {certifications?.map((certification,i) => (
                        <CertificationItem key={certification.id} certification={certification} /> 
                    ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Skills