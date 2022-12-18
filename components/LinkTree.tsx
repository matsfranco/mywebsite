import Head from 'next/head'
import Link from 'next/link'
import { FaLinkedin, FaSalesforce, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { VscGithubInverted } from 'react-icons/vsc'

export default function LinkTree({ }) {
  return (
    <div className='min-h-screen flex relative flex-col text-center md:text-left
    max-w-[2000px] justify-center mx-auto items-center
    xl:flex-row xl:px-10 xl:space-y-0'>
      <h3 className='sectionTitle'>
            Contatos
      </h3>
      <div className="grid place-items-center">
        <div className="ml-8 grid grid-cols-1 gap-4">
            <div className="col-span-1 h-16 flex items-center transition hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect ">
              <FaLinkedin color="white" size="2em"/>
              <Link href="https://www.linkedin.com/in/matsfranco/">
                <span className="p-2">
                Linkedin
                </span>
              </Link>
            </div>
            <div className="col-span-1 h-16 flex items-center transition  hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect">
              <VscGithubInverted color="white" size="2em"/>
              <Link href="https://github.com/matsfranco/">
                <span className="p-2">
                Github
                </span>
              </Link>
            </div>
            <div className="col-span-1 h-16 flex items-center transition hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect">
              <FaSalesforce color="white" size="2em"/>
              <Link href="https://trailblazer.me/id/matsfranco">
                <span className="p-2">
                Trailblazer.me
                </span>
              </Link>
            </div>
            <div className="col-span-1 h-16 flex items-center transition hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect">
              <FaYoutube color="white" size="2em"/>              
              <Link href="https://www.youtube.com/user/mateussfranco">
                <span className="p-2">
                YouTube
                </span>
              </Link>
            </div>
            <div className="col-span-1 h-16 flex items-center transition hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect">
              <FaInstagram color="white" size="2em"/>              
              <Link href="https://www.instagram.com/mateussfranco/">
                <span className="p-2">
                Instagram
                </span>
              </Link>
            </div>
            <div className="col-span-1 h-16 flex items-center transition hover:-translate-y-1 hover:bg-primary-red duration-300 inline-block bg-secondary-grey border border-secondary-grey text-lg font-medium rounded rounded-full text-white p-4 cursor-pointer noselect">
              <FaTwitter color="white" size="2em"/>              
              <Link href="https://twitter.com/matsfranco">
                <span className="p-2">
                Twitter
                </span>
              </Link>
            </div>
        </div>
      </div>
    </div>          

  )
}
