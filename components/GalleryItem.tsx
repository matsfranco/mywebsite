import Image from 'next/image';
import React, {useState} from 'react';
import  { ImageData } from '../typings';
import Modal from 'react-modal';
import GalleryItemFull from './GalleryItemFull';


function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
  
export default function GalleryImage( {image} : { image : ImageData } ) {
    const [isLoading, setLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
      console.log('openModal')
      setIsOpen(true)
    }

    function closeModal() {
      console.log('closeModal')
      setIsOpen(false)
    }

    return(
      <>
        <a href="#" className="group">
          <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-secondary-grey" onClick={openModal}>
            <Image
              alt=""
              src={image?.href}
              objectFit="cover"
              layout="fill" 
              className={cn(
                'group-hover:opacity-75 duration-700 easy-in-out',
                isLoading
                  ? 'grayscale blur-2xl scale-110'
                  : 'grayscale-0 blur-0 scale-100'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
          <h3 className="mt-4 text-sm text-white">{image?.name}</h3>
          <p className="mt-1 text-lg font-medium text-white">{image?.name}</p>
          <div onClick={closeModal}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel='teste'
              overlayClassName='modal-overlay bg-secondary-grey '
              className='w-[90%] max-w-[1200px] m-12'
            >
                <div>
                  <button className='text-md text-bold text-white text-justify-left' onClick={closeModal}>Fechar</button>
                  <GalleryItemFull  image={image} />
                </div>        
            </Modal>
          </div>
          
        </a>
      </>
    );
}