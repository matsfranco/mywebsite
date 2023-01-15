import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';

const pageTitle = {
    title: "Astronomia",
    subtitle: "Aqui você encontrará vários assuntos que fazem parte da minha carreira de Astronomo Amador como informações sobre equipamentos, projetos, publicações e astrofotografias",
    page:'astronomy'
}

const Astronomy = () => {
    return (
        <div className='bg-secondary-grey text-white h-screen snap-mandatory 
                        overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            <Head>
                <title>MF | Astronomia</title>
            </Head>
            <Menu />
            <div className='m- flex relative flex-col items-center'>
                <h3 className='sectionTitle'>
                    {pageTitle.title}
                </h3>
                <h3 className='sectionSubtitle text-justify m-8'>
                    {pageTitle.subtitle}
                </h3>
                <div>    
                    <section id='astro-items'>
                        <div className='flex relative flex-col text-center md:text-left
                            max-w-[2000px] justify-center mx-auto items-center
                            xl:flex-row xl:px-10 xl:space-y-0'>
                            <div className="pt-8 grid place-items-center pb-48 md:pb-72">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="col-span-1 h-16 flex items-center transition hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect ">
                                        <Link href="/astronomy/astrophoto-gallery">
                                            <span className="p-2">
                                                Galeria de Astrofotografias
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="col-span-1 h-16 flex items-center transition hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect ">
                                        <Link href="/astronomy/astro-equipments">
                                            <span className="p-2">
                                                Equipamentos Astronômicos
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer showSocials={true} />
        </div>
    );
}

export default Astronomy