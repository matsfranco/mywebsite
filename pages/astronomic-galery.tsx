import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/Footer'
import UnderDevelopment from '../components/UnderDevelopment';
import Menu from '../components/Menu';

const AstronomicGalery = () => {
    return (
      <>
        <Head>
            <title>Mateus Franco</title>
        </Head>
        <div className='bg-secondary-grey text-white h-screen snap-y snap-mandatory 
        overflow-x-hidden overflow-y-scroll z-0 scrollbar'>
            <Menu />
            <div className='my-36'>
                <UnderDevelopment />
            </div>
            <div>
                <Footer />
            </div>
        </div>
            </>
    );
}

export default AstronomicGalery