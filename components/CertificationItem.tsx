import { motion } from 'framer-motion'
import React from 'react'
import { SkillDataType,Certification } from '../typings';

type Props = {
    certification: Certification;
};

function CertificationItem({ certification }: Props) {
    
    return (
    <div className='relative flex cursor-pointer m-1 gap-4'>
        <div className=''>
            <img
                alt=""
                className='rounded object-cover 
                filter group-hover:grayscale trasition duration-300 
                w-14 h-14 md:h-16 md:w-16 xl:h-20 xl:w-20 bg-white'
                src={certification.image.url}
            />
        </div>
        <div className=''>
            <div className='text-sm font-bold text-white opacity-100 text-left opacity-90 noselect border-b border-primary-red'>{certification?.name}</div>
            <div className='text-xs text-white opacity-100 text-left noselect'>{certification?.expeditedBy}</div>
            {certification?.number.length > 0 && 
                <div className='text-xs text-white opacity-100 text-left noselect'>
                Id #{certification?.number}
                </div>
            } 
        </div>
    </div>
  )
}

export default CertificationItem;