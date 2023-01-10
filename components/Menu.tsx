import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Footer from '../components/Footer'

const pages = [  
                    {name: 'Início', slug: '#hero'},
                    {name: 'Sobre mim', slug: '#about'},
                    {name: 'Astronomia', slug: 'astronomy'},  
                    {name: 'Engenharia', slug: 'engineering'},  
                    {name: 'Contatos', slug: '#contact'},  
                  ];

export default function Menu() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
          
          <div className="">
          {showSidebar ? (
            <button className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50" onClick={() => setShowSidebar(!showSidebar)}>
              x
            </button>
          ) : (
            <svg
              onClick={() => setShowSidebar(!showSidebar)}
              className="fill-white bg-secondary-grey rounded border border-primary-red  fixed z-40 flex items-center cursor-pointer right-8 md:right-16 top-6 p-1"
              viewBox="0 0 100 80"
              width="40"
              height="40">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
          )}
        
        <div className={`border border-primary-red border ease-in-out duration-100 top-0 right-0 w-[70vw] md:w-[40vw] bg-secondary-grey bg-opacity-80 p-10 md:p-20 text-white fixed h-full z-40 ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
            <div className="pt-12 grid grid-cols-1 gap-2" onClick={() => setShowSidebar(!showSidebar)}>
            
            {pages.map((page, index) => (
                <Link key={index} href={`/${page.slug}`}><span className="loat-rightcursor-pointer col-span-1 p-2 align-middle text-white font-semibold text-xl cursor-pointer">{page.name}</span></Link>
              ))}
            </div>
            <div className='relative mt-32'>
              <Footer />
            </div>
        </div>
        </div>     
        </>
    )
}