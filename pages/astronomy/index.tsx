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
        <div className='bg-secondary-grey text-white h-screen snap-mandatory 
    overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            <Menu />
            <PageTitle titleData={pageTitle}/>
            <section id='astro-gallery'>
                <div className="grid place-items-center">
                    <div className="ml-8 grid grid-cols-1 gap-4">
                        <div className="col-span-1 h-16 flex items-center transition hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect ">
                            <Link href="/astronomy/astrophoto-gallery">
                                <span className="p-2">
                                    Galeria de Astrofotografias
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            </>
    );
}

export default Astronomy