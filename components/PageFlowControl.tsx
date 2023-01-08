import Link from 'next/link'
import { RxDoubleArrowDown,RxDoubleArrowUp } from 'react-icons/rx';
import { PageFlow } from '../typings';

type Props = {
    next: PageFlow
    back: PageFlow
}


export default function PageFlowControl({next,back } : Props) {
  return (
    <div className='container flex justify-center'>
        <Link href={back.href}>
            <div className='px-2 flex flex-start'>
                <div className='p-1'>
                    <RxDoubleArrowUp />
                </div>
                <div className='p-1'>
                    {back.label}
                </div>
            </div>
        </Link>
        <Link href={next.href}>
            <div className='px-2 flex flex-start'>
            
                <div className='p-1'>
                    {next.label}
                </div>
                <div className='p-1'>
                    <RxDoubleArrowDown />
                </div>
            </div>
        </Link>
    </div>
  )
}
