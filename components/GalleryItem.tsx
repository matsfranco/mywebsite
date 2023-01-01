import Image from 'next/image';
import React, {useState} from 'react';
import  { ImageData } from '../typings';
import Modal from 'react-modal';
import GalleryItemFull from './ImageCardModal';
import moment from 'moment';


function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
  
export default function GalleryImage( {image} : { image : ImageData } ) {
    const [isLoading, setLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
      setIsOpen(true)
    }

    function closeModal() {
      setIsOpen(false)
    }

    return(
      <>
        <div className="">
          <div className="w-[15em] aspect-w-4 aspect-h-3 rounded bg-secondary-grey" onClick={openModal}>
            <Image
              alt=""
              src={image?.href}
              objectFit="cover"
              layout="fill" 
              className={cn(
                'group-hover:opacity-75 duration-700 easy-in-out rounded-lg',
                isLoading
                  ? 'grayscale blur-2xl scale-110'
                  : 'grayscale-0 blur-0 scale-100'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
          <div className='bg-black bg-opacity-40 mt-2 py-1 rounded text-center'>
            <div className='mx-2 border-b border-primary-red'>            
              <h3 className="text-sm text-white">{image?.name}</h3>
            </div>
            <div className=''>
              <p className="mx-2 mt-1 text-xs text-white">{moment(image?.date).format('DD/MMM/YYYY')}</p>  
            </div>
          </div>       
          <div onClick={closeModal}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel='teste'
              overlayClassName='modal-overlay bg-secondary-grey '
              className='w-[100%] max-w-[1200px] m-6'
            >
                <div>
                  <button className='text-md text-bold text-white text-justify-left' onClick={closeModal}>Fechar</button>
                  <GalleryItemFull  image={image} />
                </div>        
            </Modal>
          </div>
        </div>
      </>
    );
}