import moment from 'moment';
import React from 'react'
import  { ImageData } from '../typings';

const ImageCard = ( {image} : { image : ImageData } ) => {

    const tags = image?.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden m-2 shadow-lg shadow-black bg-black bg-opacity-40">
            <img src={image?.href} className='w-full'></img>
            <div className=''>
                <div className='py-1 rounded text-center'>
                    <div className='mx-5 border-b border-primary-red'>            
                        <h3 className="text-sm text-white">{image?.name}</h3>
                    </div>
                    <div className=''>
                        <p className="mx-2 mt-1 text-xs text-white">{moment(image?.date).format('DD/MMM/YYYY')}</p>  
                    </div>
                    <div className='px-4 py-2'>
                        {tags.map( tag => (
                            <span key={image.id} className='inline-block bg-secondary-grey rounded-full px-3 py-1 text-xs text-white mr-2'>
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>            
        </div> 
    )
}

export default ImageCard;