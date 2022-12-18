import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from "framer-motion"; 
import Link from 'next/link';
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [ text, count ] = useTypewriter({
        words: [
            `Olá! Meu nome é Mateus`,
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
        className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className='relative rounded-full h-48 w-48 md:h-72 md:w-72 mx-auto object-cover border border-primary-red'
            src={"teste.com.br"}
        />
        <div className='z-20'>
            <h2 className='text-base uppercase text-gray-400 mx-4 pt-4 pb-2 tracking-[8px]'>
                {"Teste"}
            </h2>
            <h1 className='text-2xl md:text-3xl lg:text-4xl lg:mt-4 font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#E5383B'/>
            </h1>
            <div className='pt-12'>
                <Link href='#about'>
                    <button className='heroButton'>Sobre mim</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experiência</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projetos</button>
                </Link>
                <Link href='#contact'>
                    <button className='heroButton'>Contatos</button>
                </Link>
                <Link href='/astronomic-galery'>
                    <button className='heroButton'>Galeria Astronômica</button>
                </Link>
            </div>
        </div>
    </motion.div>
  )
}