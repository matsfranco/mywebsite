import type { GetStaticProps,NextPage } from 'next'
import Head from 'next/head'

import { getBuiltWithSkills } from '../services/getBuiltWithSkills'

import { SkillDataType } from "../typings"
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import ToolSet from '../components/ToolSet'
import { GiNotebook } from 'react-icons/gi'
import Link from 'next/link'

type Props = { 
  skills: SkillDataType[],
}

const references = [
  { 
      name: 'Como Eu Programo e Hospedo Sites da Forma Mais Moderna que Existe [GUIA DEFINITIVO]',
      href: 'https://youtu.be/EW7m2WIvFgQ'
  },{ 
      name: 'FlatIcon',
      href: 'https://www.flaticon.com/'
  },{ 
      name: 'Responsive Image gallery in React js',
      href: 'https://youtu.be/cDwa_JwuC-w'
  },{ 
      name: 'Building an Image Gallery with Next.js, Supabase, and Tailwind CSS',
      href: 'https://youtu.be/BSoRXk1FIw8'
  },{ 
      name: 'React & Tailwind CSS Image Gallery',
      href: 'https://youtu.be/FiGmAI5e91M'
  },{ 
      name: 'Let\'s build a Modern Portfolio with NEXT.JS',
      href: 'https://youtu.be/urgi2iz9P6U'
  },{ 
      name: 'Code and Deploy A React Portfolio',
      href: 'https://youtu.be/x7mwVn2z3Sk'
  },{ 
      name: 'React Portfolio Website Tutorial From Scratch',
      href: 'https://youtu.be/G-Cr00UYokU'
  }
]

const BuiltWith = ({skills}: Props) => {

  return (
    <>

    <div className='h-screen bg-secondary-grey text-white overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary-red/80 noselect'>
      <Head>
        <title>Mateus Franco</title>
      </Head>
      <Header />
      <Menu />
      <div className='flex relative flex-col items-center pb-8'>
            <h3 className='sectionTitle'>
                Sobre o site
            </h3>
            <h3 className='sectionSubtitle'>
                Algumas informações sobre as tecnologias e ferramentas utilizadas na construção deste site
            </h3>
            <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1.5 }}
                className='flex relative flex-col mx-auto text-center md:text-left
                max-w-[2000px] justify-center mx-auto items-center
                xl:flex-row xl:px-10 xl:space-y-0 noselect'
            >
                <div className=''>
                    <div className='p-2'>
                      <ToolSet skills={skills} setName='Plataformas e Ferramentas' directionLeft={false}/>
                    </div>    
                </div>
                
                <div className='m-4 p-4 flex flex-col items-center bg-black bg-opacity-30 '>
                <div className='border-b border-primary-red sm:text-xl text-center mx-4'>Referências e Tutoriais</div>
                <div>
                  {references?.map((reference) => (
                    <div key={reference.name} className='h-8 flex items-center transition hover:-translate-y-1 
                          hover:text-primary-red duration-200 inline-block text-sm text-white cursor-pointer noselect'> 
                      <GiNotebook color="white" size="2em"/>              
                      <Link href={reference.href}>
                        <span className="p-1 text-xs">
                          {reference.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
                </div>
            </motion.div>
      </div>
      <Footer showSocials={true} />
    </div>
    </>
  )
}

export default BuiltWith


export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: SkillDataType[] = await getBuiltWithSkills();

  return {
    props: {
      skills
    },
    revalidate: 900,
  };
}