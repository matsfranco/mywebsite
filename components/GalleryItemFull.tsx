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
          <div className="aspect-w-4 aspect-h-3 xl:aspect-w-4 xl:aspect-h-3 overflow-hidden rounded-lg">
            <Image
              alt=""
              src={image?.href}
              objectFit="cover"
              layout="fill" 
              className=''
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
          <h3 className="mt-4 mx-4 text-medium text-bold text-white">{image?.name}</h3>
          <p className="mt-2 mx-4 text-xs text-white">{moment(image.date).format('DD/MMM/YYYY')}</p>         
          <p className="mt-2 mx-4 text-xs text-white"><b>Objeto: </b>{image?.object}</p>
          <p className="mt-2 mx-4 text-xs text-white"><b>OTA: </b>{image?.ota}</p>
          <p className="mt-2 mx-4 text-xs text-white"><b>Câmeras: </b>{image?.cameras}</p>
          <p className="mt-2 mx-4 text-xs text-white"><b>Softwares: </b>{image?.softwares}</p>
          <p className="mt-2 mx-4 text-xs text-white">{image?.description}</p>
        </a>
      </>
    );
}