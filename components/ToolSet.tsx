import { motion } from 'framer-motion'
import React from 'react'
import { SkillDataType } from "../typings"
import Tool from './Tool'

type Props = { 
    skills: SkillDataType[]
    setName: string
    directionLeft: boolean
}



function SkillSet({ skills,setName,directionLeft }: Props) {

    return(
        <div className='m-2 p-1 px-3 sm:p-4 bg-black bg-opacity-30 rounded-lg'>
            <div className='border-b border-primary-red sm:text-xl text-center mx-4'>{setName}</div>
            <div className='p-1 col-span-1 grid grid-cols-6 gap-1 md:grid-cols-5 md:gap-5 xl:grid-cols-5 xl:gap-10'>
                {skills?.map((skill : SkillDataType) => (
                    <Tool key={skill.id} skill={skill} directionLeft={directionLeft}/> 
                ))}
            </div>
        </div>
    );
}

export default SkillSet