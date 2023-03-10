import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Menu from '../../components/Menu';
import type { GetStaticProps } from 'next'
import  { Equipment } from '../../typings';
import EquipmentCard from '../../components/EquipmentCard';
import PageTitle from '../../components/PageTitle';
import moment from 'moment';
import { getEquipments } from '../../services/getEquipments'
import Footer from '../../components/Footer';

type Props = {
    equipments: Equipment[];
}

const pageTitle = {
    title: "Equipamentos Astronômicos",
    subtitle: "Alguns dos equipamentos que utilizo para estudos e astrofotografia."
}


const AstroEquipments = ( {equipments} : Props) => {
    
    const [text, setText] = useState('');
    
    return (
        <div className='bg-secondary-grey text-white overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80'>
            <Menu />
            <div className='m-6 flex relative flex-col items-center'>
                <h3 className='sectionTitle'>
                    {pageTitle.title}
                </h3>
                <h3 className='sectionSubtitle'>
                    {pageTitle.subtitle}
                </h3>
                <div className='mt-8 container mx-auto max-w-4xl m-8 py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {equipments.map((equipment) => (
                            <EquipmentCard key={equipment.id} equipment={equipment}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer showSocials={true} />
        </div>
    );
}

export default AstroEquipments

export const getStaticProps: GetStaticProps<Props> = async () => {
    const equipments: Equipment[] = await getEquipments();  
    return {
      props: {
        equipments,
      },
      revalidate: 360,
    };
  }