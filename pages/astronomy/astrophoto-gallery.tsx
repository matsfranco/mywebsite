import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Menu from '../../components/Menu';
import ImageGrid from '../../components/ImageGrid';
import { createClient } from '@supabase/supabase-js';
import type { GetStaticProps } from 'next'
import  { ImageData } from '../../typings';
import ImageCard from '../../components/ImageCard';
import PageTitle from '../../components/PageTitle';
import moment from 'moment';

type Props = {
    images: ImageData[];
}

const pageTitle = {
    title: "Galeria de Astrofotografias",
    subtitle: "Galeria de astrofotografias de minha autoria. Você pode clicar nas imagens para ampliá-las e ver detalhes sobre as fotos."
}

const AstrophotoGalery = ( {images} : Props) => {
    return (
        <div className='bg-secondary-grey text-white overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            <Menu />
            <PageTitle titleData={pageTitle}/>
            <div className='container mx-auto max-w-4xl m-8 py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='grid grid-cols-3 gap-4'>
                    {images.map((image) => (
                        <ImageCard key={image.id} image={image}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AstrophotoGalery




export const getStaticProps: GetStaticProps<Props> = async () => {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )
    const { data, error} = await supabaseAdmin.from('astro-image').select('*').order('id').eq('show','true').order('date', { ascending: false })
    const images = data as ImageData[];
    return {
        props: {
            images
        },
        revalidate: 300,
    }
  }