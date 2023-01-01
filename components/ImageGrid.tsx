import React, { useState} from 'react'
import GalleryItem from './GalleryItem';
import PageTitle from './PageTitle';
import { ImageData } from '../typings';
import { motion } from 'framer-motion'    

type Props = {
    images: ImageData[];
}

const pageTitle = {
  title: "Galeria Astronômica",
  subtitle: "Galeria de astrofotografias de minha autoria. Você pode clicar nas imagens para ampliá-las e ver detalhes sobre as fotos."
}

const ImageGrid = ( {images} : Props ) => {
    return (
    <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
      className='min-h-screen flex relative flex-col text-center md:text-left
      max-w-[2000px] justify-center mx-auto items-center
      xl:flex-row xl:px-10 xl:space-y-0'
    >  
      <PageTitle titleData={pageTitle}/>
      <div className="mt-36 md:mt-8 lg:mt-8 max-w-2xl m-8 py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {images.map((image) => (
              <GalleryItem  key={image.id} image={image} />
            ))}
        </div>
      </div>
    </motion.div> 
    );
}

export default ImageGrid;