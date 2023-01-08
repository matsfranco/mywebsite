import React from 'react'
import { motion } from 'framer-motion'
import EducationItem from './EducationItem';
import { Experience } from '../typings';

type Props = {
  academicExps: Experience[]
}

function Education({ academicExps }: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.0 }}
        className='h-screen flex relative overflow-hidden flex-col text-center md:flex-row 
                    max-w-full px-4 justify-evenly mx-auto items-center'
        >
      <h3 className='sectionTitle'>    
        Formação Acadêmica
      </h3>
      <h3 className='absolute mx-2 top-36  text-gray-500 text-sm'>
        Linha do tempo com as minhas formações
      </h3>
      <div className="relative pt-12 flex items-stretch w-full md:w-[80%] overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-[#E5383B]/80 ">               
        {academicExps?.map((academicExp, i) => (
          <EducationItem key={academicExp.id} experience={academicExp} />
        ))}
      </div>
    </motion.div>
  )
}

export default Education;