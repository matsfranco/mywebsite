import moment from 'moment';
import Image from 'next/image';
import React, {useState} from 'react';
import  { Equipment } from '../typings';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
  
export default function EquipmentCardModal( {equipment} : { equipment : Equipment } ) {
    const [isLoading, setLoading] = useState(true);
    return(
      <>
        <a href="#" className="group">
          <div className='grid grid-cols-1 md:grid-cols-2 w-[100%]'>
            <div className="col-span-1 aspect-w-3 aspect-h-4 xl:aspect-w-3 xl:aspect-h-4 overflow-hidden rounded-lg">
              <Image
                alt=""
                src={equipment?.photo.url}
                objectFit="cover"
                layout="fill" 
                className=''
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
            <div className='col-span-1 bg-black bg-opacity-40 m-2 md:my-0 md:mx-2 py-1 rounded'>
              <div className='mx-2 border-b border-primary-red'>
                <h3 className="mt-4 mx-4 text-medium text-bold text-white">{equipment?.manufacturer} {equipment?.model}</h3>
              </div>
              <div className='mx-6'>
                <p className="mt-2 text-sm text-white text-justify"><b>Fabricante: </b>{equipment?.manufacturer}</p>         
                <p className="mt-2 text-sm text-white text-justify"><b>Modelo: </b>{equipment?.model}</p>
                <p className="mt-2 text-sm text-white text-justify"><b>Utilização: </b>{equipment?.role}</p>
                <p className="mt-2 text-sm text-white text-justify"><b></b>{equipment?.description}</p>
              </div>
            </div>
          </div>
        </a>
      </>
    );
}