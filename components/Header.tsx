import Link from 'next/link'

export default function Header() {
  return (
    <div className='container mx-auto px-10 mb-8 py-8 pb-8'>
            <div className="border-b w-full inline-block border-primary-red">
                <nav className="flex items-center justify-between flex-wrap bg-secondary-gray pb-2  noselect">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Link href="/">
                            <span className="noselect cursor-pointer font-bold md:text-3xl text-2xl text-white">Mateus Franco</span>
                        </Link>
                    </div>
              </nav>
          </div>
      </div>

  )
}
