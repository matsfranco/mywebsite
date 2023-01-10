import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from "framer-motion"; 
import Link from 'next/link';
import { HeroInfo } from '../typings';

type Props = {
    heroInfo: HeroInfo
}

const pages = [  
    {name: 'Home', slug: '/'},
    {name: 'Sobre mim', slug: '#about'},
    {name: 'Astronomia', slug: '/astronomy'}, 
    {name: 'Engenharia', slug: '/engineering'},
    {name: 'Contatos', slug: '#contact'},     
  ];

export default function Hero({ heroInfo }: Props) {
    const [ text, count ] = useTypewriter({
        words: [
            `Olá! Meu nome é ${heroInfo.name}`,
            'Salesforce', 
            'Embarcados', 
            'Astronomia',
        ],
        loop: true,
        delaySpeed: 200,
    })
    return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: [0.2,0.4,0.8,1.0]
        }}
        transition={{
            duration: 1,
        }}
        className='h-screen flex flex-col space-y-8 items-center justify-start
            text-center overflow-hidden'>
        
        <div className='container mx-auto px-10 mb-8 py-8 pb-8 md:pb-16'>
            <div className="border-b w-full inline-block border-primary-red">
                <nav className="flex items-center justify-between flex-wrap bg-secondary-gray pb-2  noselect">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Link href="/">
                            <span className="noselect cursor-pointer font-bold md:text-3xl text-2xl text-white">Mateus Franco</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>

        <BackgroundCircles />
        <img 
            className='relative rounded-full h-48 w-48 md:h-72 md:w-72 mx-auto object-cover border border-primary-red'
            src={heroInfo.heroImage.url}
        />
        <div className='z-20'>
            <h2 className='text-base uppercase text-gray-400 mx-4 pt-4 pb-2 tracking-[8px]'>
                {heroInfo.role}
            </h2>
            <h1 className='text-2xl md:text-3xl lg:text-4xl lg:mt-4 font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#E5383B'/>
            </h1>
            <div className='pt-12 grid grid-cols-6 sm:grid-cols-6 gap-2 place-items-center'>
                <div className='col-span-2 sm:col-span-1'>
                    <Link href='#about'>
                        <button className='heroButton'>Sobre mim</button>
                    </Link>
                </div>
                <div className='col-span-2 sm:col-span-1'>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                </div>
                <div className='col-span-2 sm:col-span-1'>
                <Link href='#experience'>
                    <button className='heroButton'>Experiência</button>
                </Link>
                </div>
                <div className='col-span-2 sm:col-span-1'>
                <Link href='#projects'>
                    <button className='heroButton'>Projetos</button>
                </Link>
                </div>
                <div className='col-span-2 sm:col-span-1'>
                <Link href='#academic'>
                    <button className='heroButton'>Formação</button>
                </Link>
                </div>
                <div className='col-span-2 sm:col-span-1'>
                <Link href='#contact'>
                    <button className='heroButton'>Contatos</button>
                </Link>
                </div>
            </div>
        </div>
    </motion.div>
  )
}