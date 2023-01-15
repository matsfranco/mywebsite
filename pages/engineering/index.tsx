import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import UnderDevelopment from '../../components/UnderDevelopment';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const pageTitle = {
    title: "Engenharia",
    subtitle: "Aqui você encontrará vários assuntos que fazem parte da minha carreira de Astronomo Amador como informações sobre equipamentos, projetos, publicações e astrofotografias",
    page:'astronomy'
}


const Engineering = ( {} ) => {
    return (
      <>
        <Head>
            <title>MF | Galeria Astronômica</title>
        </Head>
        <div className='bg-secondary-grey text-white h-screen snap-y snap-mandatory 
    overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            <Menu />
            <div className='m- flex relative flex-col items-center'>
                <h3 className='sectionTitle'>
                    {pageTitle.title}
                </h3>
                <h3 className='sectionSubtitle text-justify m-8'>
                    {pageTitle.subtitle}
                </h3>
            

            
                <section id='engineering-content' className='pb-24 sm:pt-56'>
                    <UnderDevelopment />
                </section>
            </div>
            <Footer showSocials={true} />
        </div>
            </>
    );
}

export default Engineering;