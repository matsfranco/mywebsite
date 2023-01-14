import React from 'react'
import { motion } from 'framer-motion'
import EducationItem from './EducationItem';
import { Experience,PageFlow } from '../typings';
import PageFlowControl from './PageFlowControl';

type Props = {
  academicExps: Experience[]
  nextSection: PageFlow
  backSection: PageFlow
}

function Education({ academicExps,nextSection,backSection }: Props) {
  return (
    <div className='flex relative flex-col items-center'>
        <h3 className='sectionTitle'>    
          Formação
        </h3>
        <h3 className='sectionSubtitle'>
          Linha do tempo com as minhas formações
        </h3>
      <motion.div 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1.0 }}
          className='flex relative overflow-hidden flex-col text-center md:flex-row 
                      max-w-full px-4 justify-evenly mx-auto items-center'
          >

        <div className='grid grid-cols-1 container justify-center'>
          <div className="pt-4 col-span-1 relative flex items-stretch w-full overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-[#E5383B]/80 ">               
            {academicExps?.map((academicExp, i) => (
              <EducationItem key={academicExp.id} experience={academicExp} />
            ))}
          </div>
          <div>
            <div className='col-span-1 pt-4'>
              <PageFlowControl next={nextSection} back={backSection}/>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Education;