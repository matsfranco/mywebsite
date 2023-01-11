import React from 'react';
import { TitleData } from '../typings';

type Props = {
    titleData: TitleData;
}


export default function PageTitle( {titleData} : Props  ) {
  return (
    <div className='flex flex-cols justify-center items-center'>
        <h3 className='sectionTitle'>
            {titleData.title}
        </h3>
        <h3 className='sectionSubtitle mt-8 md:mt-0 mx-6 text-justify text-white bg-black bg-opacity-30 p-3
        rounded-lg'>
            {titleData.subtitle}
        </h3>
    </div>    
  )
}
