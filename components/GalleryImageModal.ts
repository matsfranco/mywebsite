import React, { useState } from 'react'
import GalleryItem from './GalleryItem';
import GalleryItemFull from './GalleryItemFull';
import { ImageData } from '../typings';
import Modal from 'react-modal';


type Props = {
  image: ImageData;
}

const GalleryImageModal = ( {image} : Props) => {

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        console.log('openModal')
        setIsOpen(true)
    }

    function closeModal() {
        console.log('closeModal')
        setIsOpen(false)
    }

    return (
        <div>
            <div>
                <div onClick={openModal}>
                    <GalleryItem image={image} />
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='teste'
                    overlayClassName='modal-overlay'
                    className='modal-content'
                >
                    <div onClick={closeModal}>
                        <GalleryItemFull image={image} />
                    </div>
                    <button onClick={closeModal}>Fechar</button>
                </Modal>
            </div>
        </div>
    );
}

export default GalleryImageModal;