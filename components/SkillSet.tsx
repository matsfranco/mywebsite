import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import { SkillDataType } from "../typings"

type Props = { 
    skills: SkillDataType[]
    setName: string
    directionLeft: boolean
}

function SkillSet({ skills,setName,directionLeft }: Props) {

    return(
        <div className='bg-black bg-opacity-30 p-1 px-3 sm:p-4 rounded-lg'>
            <div className='border-b border-primary-red sm:text-xl'>{setName}</div>
            <div className='p-1 col-span-1 grid grid-cols-6 gap-1 md:grid-cols-5 md:gap-5 xl:grid-cols-5 xl:gap-10'>
                {skills?.map((skill : SkillDataType) => (
                    <Skill key={skill.id} skill={skill} directionLeft={directionLeft}/> 
                ))}
            </div>
        </div>
    );
}

export default SkillSet