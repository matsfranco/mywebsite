import { motion } from 'framer-motion'
import React from 'react'
import Certifications from './Certifications'
import SkillSet from './SkillSet'
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

    return (
        <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.5 }}
            className='min-h-screen flex relative flex-col text-center md:text-left
            max-w-[2000px] justify-center mx-auto items-center
            xl:flex-row xl:px-10 xl:space-y-0 noselect'
        >
            <h3 className='sectionTitle'>
                Skills
            </h3>
            <h3 className='sectionSubtitle'>
                Habilidades & Certificações
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
                <div className='col-span-1 grid grid-cols-1 gap-1'>
                    <SkillSet skills={skillsByGroup['Language/Systems']} setName='Engenharia de Software' directionLeft={false}/>
                    <SkillSet skills={skillsByGroup['Product/Platform']} setName='Produtos & Plataformas' directionLeft={true}/>
                    <SkillSet skills={skillsByGroup['Hardware/Engineering']} setName='Hardware & Embarcados' directionLeft={false}/>
                </div>
                <div className='col-span-1'>
                    <Certifications certifications={certifications}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills