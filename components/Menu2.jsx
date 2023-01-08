import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const pages = [  
                    {name: 'Home', slug: '/'},
                    {name: 'Sobre mim', slug: '#about'},
                    {name: 'Astronomia', slug: '/astronomy'}, 
                    {name: 'Engenharia', slug: '/engineering'},
                    {name: 'Contatos', slug: '#contact'},     
                  ];

export default function Menu() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
        <div className='container mx-auto px-10 mb-8 py-8 pb-8 md:pb-16'>
        <div className="border-b w-full inline-block border-primary-red">
          <nav className="flex items-center justify-between flex-wrap bg-secondary-gray pb-2  noselect">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <Link href="/">
                <span className="noselect cursor-pointer font-bold md:text-3xl text-2xl text-white">Mateus Franco</span>
              </Link>
            </div>
            <div className="hidden w-full block flex lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <div className="">
                  {pages.map((page, index) => (
                    <Link key={index} href={`/${page.slug}`}><span className="p-2 cursor-pointer align-middle text-white font-semibold hover:text-primary-red duration-200">{page.name}</span></Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <div className="lg:hidden">
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
        
        <div className={`border border-primary-red border ease-in-out duration-100 top-0 right-0 w-[70vw] md:w-[40vw] bg-secondary-grey bg-opacity-90 p-10 md:p-20 text-white fixed h-full z-40 ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
            <div className="pt-12 grid grid-cols-1" onClick={() => setShowSidebar(!showSidebar)}>
            {pages.map((page, index) => (
                <Link key={index} href={`/${page.slug}`}><span className="loat-rightcursor-pointer col-span-1 p-2 align-middle text-white font-semibold text-xl cursor-pointer">{page.name}</span></Link>
              ))}
            </div>
        </div>
          </div>
        </div>
        </div>
        </>
    )
}