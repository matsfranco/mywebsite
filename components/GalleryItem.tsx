import Image from 'next/image';
import React, {useState} from 'react';
import  { ImageData } from '../typings';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
  
export default function GalleryImage( {image} : { image : ImageData } ) {
    const [isLoading, setLoading] = useState(true);
    return(
      <a href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
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
      <h3 className="mt-4 text-sm text-gray-700">{image?.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image?.name}</p>
    </a>
    );
}