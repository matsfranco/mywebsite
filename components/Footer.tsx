import Link from 'next/link'
import { FaLinkedin, FaSalesforce, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { VscGithubInverted } from 'react-icons/vsc'

type Props = {
  showSocials: boolean;
}

export default function Footer({ showSocials }: Props) {
  return (
    <div className='container mx-auto px-3 border-t border-primary-red p-2'>
        <div className="grid grid-cols-1 place-items-center gap-2 ">
            {showSocials &&
            <div className="col-span-1">
                <div className="grid place-items-center">        
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                        <div className="cursor-pointer">
                            <Link href="https://www.linkedin.com/in/matsfranco/">
                                <FaLinkedin color="white" size="2em"/>
                            </Link>
                        </div>
                        <div className="cursor-pointer">
                            <Link href="https://github.com/matsfranco/">
                            <VscGithubInverted color="white" size="2em"/>
                          </Link>
                        </div>
                        <div className="cursor-pointer">  
                          <Link href="https://trailblazer.me/id/matsfranco">
                            <FaSalesforce color="white" size="2em"/>
                          </Link>
                        </div>
                        <div className="cursor-pointer">
                          <Link href="https://www.youtube.com/user/mateussfranco">
                            <FaYoutube color="white" size="2em"/> 
                          </Link>
                        </div>
                        <div className="cursor-pointer">

                          <Link href="https://www.instagram.com/mateussfranco/">
                            <FaInstagram color="white" size="2em"/>
                          </Link>
                        </div>
                        <div className="cursor-pointer">                     
                          <Link href="https://twitter.com/matsfranco">
                            <FaTwitter color="white" size="2em"/> 
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
}
            <div className="col-span-1 noselect">
                <p className="text-white text-sm md:text-lg">Mateus Franco &copy; 2023</p>
            </div>
            <div className="text-white text-sm hover:text-primary-red noselect ">
              <a href="https://forms.gle/pL4PE6JRuENuksYZ9">Deixe aqui o seu feedback!</a>
            </div>
        </div>
    </div>          

  )
}
