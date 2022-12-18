import React from 'react'
import Link from 'next/link';
import { GiGearHammer } from 'react-icons/gi';

const UnderDevelopment = () => {
  return (
    <div className="text-white text-center flex flex-col justify-center items-center">
      <div className="p-2">
        <GiGearHammer className="react-icons" color="white" size="3em"/>
      </div>
      <div className="p-2">
        <p>Ainda em desenvolvimento!</p> 
        <p>Em breve este conteúdo estará disponível.</p>
      </div>
      <div className="p-8">
        <Link href={`/`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-primary-red text-sm font-medium rounded-full text-white px-8 py-2 cursor-pointer noselect">
            Voltar para Homepage
          </span>
        </Link>  
      </div>
    </div>
  )
}

export default UnderDevelopment