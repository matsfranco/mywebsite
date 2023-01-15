import React from 'react'
import { motion } from 'framer-motion'
import { HeroInfo, PageFlow } from '../typings'
import PageFlowControl from './PageFlowControl'
import { FaRobot } from 'react-icons/fa'
import { IoIosPlanet } from 'react-icons/io'
import { MdOutlineDirectionsBike } from 'react-icons/md'
import { VscRocket } from 'react-icons/vsc'
import { GiAirplane,GiGrandPiano } from 'react-icons/gi'

type Props = {
    heroInfo: HeroInfo
    nextSection: PageFlow
    backSection: PageFlow
  }

export default function About({ heroInfo,nextSection,backSection }: Props) {
  return (
    
    <div className='flex relative flex-col items-center py-12'>
        <h3 className='sectionTitle'>
            Sobre Mim   
        </h3>
    
        <motion.div     initial={{ opacity: 0}} 
                        whileInView={{ opacity: 1}} 
                        transition={{ duration: 1.5 }}
                        className='py-2 md:py-12 flex flex-col relative text-center 
                                    md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly 
                                    mx-auto items-center'>
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
                className='m-2 my-8 flex-shrink-0 w-36 h-36 rounded-lg object-cover md:w-72 md:h-72'
            /> 
            <div className='m-3 p-3 space-y-10  bg-black bg-opacity-30 rounded-lg'>
                <p className='text-sm font-light md:text-xl m-2 text-justify'>
                    {heroInfo.backgroundInformation}
                </p>
                <div className='flex flex-row gap-2 md:gap-8 justify-center'>
                    <div className='border rounded'>
                        <GiGrandPiano color="white" size="2em"/>
                    </div>
                    <div className='border rounded'>
                        <IoIosPlanet color="white" size="2em"/>
                    </div>
                    <div className='border rounded'>
                        <MdOutlineDirectionsBike color="white" size="2em"/>
                    </div>
                    <div className='border rounded'>
                        <FaRobot color="white" size="2em"/>
                    </div>
                    <div className='border rounded'>
                        <VscRocket color="white" size="2em"/>
                    </div>
                    <div className='border rounded'>
                        <GiAirplane color="white" size="2em"/>
                    </div >
                </div>
            </div>
        </motion.div>
    </div>

  )
}