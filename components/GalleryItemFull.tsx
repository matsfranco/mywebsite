import moment from 'moment';
import Image from 'next/image';
import React, {useState} from 'react';
import  { ImageData } from '../typings';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
  
export default function GalleryImageFull( {image} : { image : ImageData } ) {
    const [isLoading, setLoading] = useState(true);
    return(
      <>
        <a href="#" className="group">
          <div className='grid grid-cols-1 md:grid-cols-3 w-[100%]'>
            <div className="col-span-1 md:col-span-2 aspect-w-4 aspect-h-3 xl:aspect-w-4 xl:aspect-h-3 overflow-hidden rounded-lg">
              <Image
                alt=""
                src={image?.href}
                objectFit="cover"
                layout="fill" 
                className=''
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
            <div className='col-span-1 bg-black bg-opacity-40 m-2 md:my-0 md:mx-2 py-1 rounded'>
              <div className='mx-2 border-b border-primary-red'>
                <h3 className="mt-4 mx-4 text-medium text-bold text-white">{image?.name}</h3>
              </div>
              <div className='mx-6'>
                <p className="mt-2 text-sm text-white"><b>Data: </b>{moment(image.date).format('DD/MMM/YYYY')}</p>         
                <p className="mt-2 text-sm text-white"><b>Objeto: </b>{image?.object}</p>
                <p className="mt-2 text-sm text-white"><b>OTA: </b>{image?.ota}</p>
                <p className="mt-2 text-sm text-white"><b>Câmeras: </b>{image?.cameras}</p>
                <p className="mt-2 text-sm text-white"><b>Softwares: </b>{image?.softwares}</p>
                <p className="mt-2 text-sm text-white">{image?.description}</p>
              </div>
            </div>
          </div>
        </a>
      </>
    );
}