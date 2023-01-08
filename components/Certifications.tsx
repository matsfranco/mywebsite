import { motion } from 'framer-motion'
import React from 'react'
import CertificationItem from './CertificationItem'
import SkillSet from './SkillSet'
import { Certification } from "../typings"

type Props = { 
    certifications: Certification[]
}

function Certifications({ certifications }: Props) {

    return (
        <div className='col-span-1 grid grid-cols-1 gap-2 bg-black bg-opacity-30 px-2 py-1 sm:p-4 rounded-lg'>
            <div className='border-b border-primary-red sm:text-xl'>Certificações</div>
            <div>
                {certifications?.map((certification,i) => (
                    <CertificationItem key={certification.id} certification={certification} /> 
                ))}
            </div>
        </div>
   
    )
}

export default Certifications