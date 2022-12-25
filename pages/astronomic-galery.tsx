import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import { createClient } from '@supabase/supabase-js';
import type { GetStaticProps } from 'next'
import  { ImageData } from '../typings';

type Props = {
    images: ImageData[];
}


const AstronomicGalery = ( {images} : Props) => {
    return (
      <>
        <Head>
            <title>Mateus Franco</title>
        </Head>
        <div className='bg-secondary-grey text-white h-screen snap-y snap-mandatory 
        overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            <Menu />
            <Gallery images={images} />
        </div>
            </>
    );
}

export default AstronomicGalery

export const getStaticProps: GetStaticProps<Props> = async () => {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )
    const { data, error} = await supabaseAdmin.from('image').select('*').order('id')  
    const images = data as ImageData[];
    return {
        props: {
            images
        }
    }
  }