import moment from 'moment';
import React, {useState} from 'react';
import Image from 'next/image';
import  { Equipment } from '../typings';
import Modal from 'react-modal';
import EquipmentCardModal from './EquipmentCardModal';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const EquipmentCard = ( {equipment} : { equipment : Equipment } ) => {

    const [isLoading, setLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }
  
    function closeModal() {
        setIsOpen(false)
    }

    const tags = equipment?.tags.split(',');

    return (
        <div>
        <div className="rounded overflow-hidden m-4 shadow-lg shadow-black bg-black bg-opacity-40">
            <div className="w-full aspect-w-3 aspect-h-4 rounded bg-secondary-grey" onClick={openModal}>
                <Image
                  alt=""
                  src={equipment?.photo.url}
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
            <div className=''>
                <div className='py-1 rounded text-center'>
                    <div className='mx-5 border-b border-primary-red'>            
                        <h3 className="text-sm text-white">{equipment?.manufacturer} {equipment?.model}</h3>
                    </div>
                    <div className=''>
                        <p className="mx-2 mt-1 text-xs text-white">{equipment?.role}</p>  
                    </div>
                    <div className='px-4 py-2'>
                        {tags.map( tag => (
                            <span key={equipment.id} className='inline-block bg-secondary-grey rounded-full px-3 py-1 text-xs text-white mr-2'>
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
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
                  <EquipmentCardModal  equipment={equipment} />
                </div>        
            </Modal>
        </div>
        </div> 
    )
}

export default EquipmentCard;