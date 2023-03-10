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
    <div className='flex relative flex-col items-center'>
      <h3 className='sectionTitle'>    
        Experiências
      </h3>
      <h3 className='sectionSubtitle'>
        Clique ou passe o mouse ver mais detalhes
      </h3>
      <motion.div 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1.0 }}
          className='flex relative overflow-hidden flex-col text-center md:flex-row 
                      max-w-full px-4 justify-evenly mx-auto items-center'
          >
        <div className='grid grid-cols-1 container justify-center'>
          <div className="relative pt-4 flex w-full overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-[#E5383B]/80 ">               
            {experiences?.map((experience, i) => (
              <TimelineItem key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experiences;