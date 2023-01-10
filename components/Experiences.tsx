import React from 'react'
import { motion } from 'framer-motion'
import TimelineItem from './TimelineItem';
import { Experience,PageFlow } from '../typings';
import PageFlowControl from './PageFlowControl';

type Props = {
  experiences: Experience[]
  nextSection: PageFlow
  backSection: PageFlow
}

function Experiences({ experiences,nextSection,backSection }: Props) {
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
      <h3 className='absolute mx-2 top-24 text-gray-500 text-sm'>
        Linha do Tempo da minha atuação profissional. Clique ou passe o mouse ver mais ter detalhes.
      </h3>
      <div className='grid grid-cols-1 container justify-center'>
        <div className="relative pt-12 flex w-full overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-[#E5383B]/80 ">               
          {experiences?.map((experience, i) => (
            <TimelineItem key={experience.id} experience={experience} />
          ))}
        </div>
        <div className='col-span-1 pt-4'>
          <PageFlowControl next={nextSection} back={backSection}/>
        </div>
      </div>
    </motion.div>
  )
}

export default Experiences;