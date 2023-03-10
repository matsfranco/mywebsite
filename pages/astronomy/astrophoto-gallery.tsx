import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Menu from '../../components/Menu';
import { createClient } from '@supabase/supabase-js';
import type { GetStaticProps } from 'next'
import  { ImageData } from '../../typings';
import ImageCard from '../../components/ImageCard';
import PageTitle from '../../components/PageTitle';
import moment from 'moment';
import Footer from '../../components/Footer';

type Props = {
    images: ImageData[];
}

const pageTitle = {
    title: "Galeria de Astrofotografias",
    subtitle: "Você pode utilizar a busca digitando o nome de objetos astronômicos e clicar nas imagens para ver mais detalhes"
}


const AstrophotoGalery = ( {images} : Props) => {
    
    const [text, setText] = useState('');
    
    let filtered = images.filter(function(image) {
        return image.tags.includes(text) || image.name.includes(text)
    })

    return (
        <div className='bg-secondary-grey text-white overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            
            <Menu />
            <div className='m-6 flex relative flex-col items-center'>
                <h3 className='sectionTitle'>
                    {pageTitle.title}
                </h3>
                <h3 className='sectionSubtitle'>
                    {pageTitle.subtitle}
                </h3>
            
                <div className='container mx-auto max-w-4xl m-8 py-2 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
                        <form className='w-full max-w-sm pt-2 md:pt-4'>
                            <div className='flex items-center border-b border-primary-red py-1'>
                                <input 
                                    onChange={e => setText(e.target.value)}
                                    onFocus={(e) => e.target.placeholder = ""} 
                                    onBlur={(e) => e.target.placeholder = "Digite para buscar..."}
                                    className='appearence-nono bg-transparent border-none w-full
                                        text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
                                    type='text' 
                                    placeholder='Digite para buscar...'   
                                />
                            </div>
                        </form>                
                    </div>

                    {filtered.length === 0 && 
                        <div className='h-screen'>
                            <p>Nenhuma imagem encontrada...</p>
                            <p>Talvez esta imagem não exista na minha galeria ou o termo não foi digitado corretamente.</p>
                        </div>
                    }
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {filtered.map((image) => (
                            <ImageCard key={image.id} image={image}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer showSocials={true} />
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