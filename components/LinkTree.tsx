import Head from 'next/head'
import Link from 'next/link'
import { FaLinkedin, FaSalesforce, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { VscGithubInverted } from 'react-icons/vsc'
import Footer from './Footer';
import PageFlowControl from './PageFlowControl';
import { PageFlow } from '../typings';
import { motion } from 'framer-motion';

type Props = {
  nextSection: PageFlow
  backSection: PageFlow
}

export default function LinkTree({ nextSection,backSection }: Props) {
  return (
    <div className='flex relative flex-col items-center pb-24'>
      <h3 className='sectionTitle'>
        Contatos
      </h3>
      <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.0 }}
            className='pt-8 flex relative overflow-hidden flex-col text-center md:flex-row 
                        max-w-full px-4 justify-evenly mx-auto items-center'
            >
        <div className='grid grid-cols-1 gap-1'>
          <div className=''>
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
        </div>
      </motion.div>          
    </div>
  )
}
