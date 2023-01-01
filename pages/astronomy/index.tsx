import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';

const pageTitle = {
    title: "Astronomia",
    subtitle: "Aqui você encontrará vários assuntos que fazem parte da minha carreira de Astronomo Amador como informações sobre equipamentos, projetos, publicações e astrofotografias."
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