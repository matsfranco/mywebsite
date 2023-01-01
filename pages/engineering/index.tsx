import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import UnderDevelopment from '../../components/UnderDevelopment';
import Menu from '../../components/Menu';

type Props = {
    images: ImageData[];
}


const Engineering = ( {images} : Props) => {
    return (
      <>
        <Head>
            <title>MF | Galeria Astronômica</title>
        </Head>
        <div className='bg-secondary-grey text-white h-screen snap-y snap-mandatory 
    overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            <Menu />
            <section id='engineering-content' className='pt-24'>
                <UnderDevelopment />
            </section>
        </div>
            </>
    );
}

export default Engineering;