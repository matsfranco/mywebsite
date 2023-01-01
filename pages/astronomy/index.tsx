import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';

const pageTitle = {
    title: "Astronomia",
    subtitle: "Galeria de astrofotografias de minha autoria. Você pode clicar nas imagens para ampliá-las e ver detalhes sobre as fotos."
}

const Astronomy = () => {
    return (
      <>
        <Head>
            <title>MF | Astronomia</title>
        </Head>
        <div className='bg-secondary-grey text-white h-screen snap-y snap-mandatory 
    overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            <Menu />
            <PageTitle titleData={pageTitle}/>
            <section id='astro-gallery'>
            </section>
        </div>
            </>
    );
}

export default Astronomy