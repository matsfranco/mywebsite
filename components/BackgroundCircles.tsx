import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-[#888888] rounded-full h-[200px] w-[200px] mt-64 md:h-[250px] md:w-[250px] md:mt-[350px]
        animate-ping' />
        <div className='absolute border border-[#AAAAAA] rounded-full h-[300px] w-[300px] mt-64 md:h-[320px] md:w-[320px] md:mt-[350px]
        animate-ping' />
        <div className='absolute border border-[#CCCCCC] rounded-full h-[400px] w-[400px] mt-64 md:h-[550px] md:w-[550px] md:mt-[350px]
        animate-ping' />
        <div className='absolute rounded-full border border-[#E5383B] opacity-20 
        h-[250px] w-[250px] mt-64 md:h-[400px] md:w-[400px] md:mt-[350px] animate-pulse'/>
        <div className='absolute rounded-full border border-[#E5383B] opacity-20 
        h-[300px] w-[300px] mt-64 md:h-[550px] md:w-[550px] md:mt-[350px] animate-pulse'/>
    </div>
  )
}

export default BackgroundCircles