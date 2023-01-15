import { motion } from 'framer-motion'
import React from 'react'
import Certifications from './Certifications'
import SkillSet from './SkillSet'
import { SkillDataType,Certification,PageFlow } from "../typings"
import PageFlowControl from './PageFlowControl'

type Props = { 
    skills: SkillDataType[]
    certifications: Certification[]
    nextSection: PageFlow
    backSection: PageFlow
}

function Skills({ skills,certifications,nextSection,backSection }: Props) {

    const skillsByGroup = skills.reduce(function (skillsByGroup, skill) {
        skillsByGroup[skill.group] = skillsByGroup[skill.group] || [];
        skillsByGroup[skill.group].push(skill);
        return skillsByGroup;
    }, Object.create(null));

    return (
        <div className='flex relative flex-col items-center'>
            <h3 className='sectionTitle'>
                Skills
            </h3>
            <h3 className='sectionSubtitle'>
                Habilidades & Certificações
            </h3>
            <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1.5 }}
                className='flex relative flex-col text-center md:text-left
                max-w-[2000px] justify-center mx-auto items-center
                xl:flex-row xl:px-10 xl:space-y-0 noselect'
            >
                <div className=''>
                    <div className='p-2'>
                        <SkillSet skills={skillsByGroup['Language/Systems']} setName='Engenharia de Software' directionLeft={false}/>
                        <SkillSet skills={skillsByGroup['Product/Platform']} setName='Produtos & Plataformas' directionLeft={true}/>
                        <SkillSet skills={skillsByGroup['Hardware/Engineering']} setName='Hardware & Embarcados' directionLeft={false}/>
                        <Certifications certifications={certifications}/>
                    </div>    
                </div>
            </motion.div>
        </div>
    )
}

export default Skills