import React from 'react'
import { motion } from 'framer-motion'
import TimelineItem from './TimelineItem';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[]
}

function Experiences({ experiences }: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.0 }}
        className='h-screen flex relative overflow-hidden flex-col text-center md:flex-row 
                    max-w-full px-4 justify-evenly mx-auto items-center'
        >
      <h3 className='sectionTitle'>    
        Experiência
      </h3>
      <h3 className='absolute mx-2 top-36  text-gray-500 text-sm'>
        Linha do tempo com todas as atividades profissionais e formações acadêmicas
      </h3>
      <div className="relative pt-12 flex w-full overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-300 scrollbar-thumb-[#E5383B]/80 ">               
        {experiences?.map((experience, i) => (
          <TimelineItem key={experience.id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experiences;