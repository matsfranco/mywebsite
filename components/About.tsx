import React from 'react'
import { motion } from 'framer-motion'
import { HeroInfo, PageFlow } from '../typings'
import PageFlowControl from '../components/PageFlowControl'

type Props = {
    heroInfo: HeroInfo
    nextSection: PageFlow
    backSection: PageFlow
  }

export default function About({ heroInfo,nextSection,backSection }: Props) {
  return (
    <div className=''>
        <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center 
                md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
                mx-auto items-center'
        >
            <h3 className='sectionTitle'>
                Sobre Mim   
            </h3>
            <div className='grid grid-cols-1 container justify-center'>
                <div className='col-span-1 flex flex-row'>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0 
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        src={heroInfo.profilePicture.url}
                        className='-mb-32 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
                            md:rounded-lg md:w-64 md:h-95 md:w-[300px] md:h-[400px]'
                    /> 
                    <div className='m-3 px-3 space-y-10 bg-black bg-opacity-30 rounded-lg'>
                        <p className='text-sm font-light md:text-xl m-2'>
                            {heroInfo.backgroundInformation}
                        </p>    
                    </div>
                </div>
                <div className='col-span-1 pt-4'>
                    <PageFlowControl next={nextSection} back={backSection}/>
                </div> 
            </div>
        </motion.div>
    </div>
  )
}