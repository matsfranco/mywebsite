import React, { useState } from 'react'

const ImageSearch = ( ) => {
    const [text, setText] = useState('');

    

    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form className='w-full max-w-sm'>
                <div className='flex items-center border-b border-b-2 border-primary-red py-2'>
                    <input 
                        onChange={e => setText(e.target.value)} 
                        className='appearence-nono bg-transparent border-none w-full
                            text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                        type='text' 
                        placeholder='Busque na galeria...' />
                    <button 
                        className='flex-shrink-0  hover:bg-primary-red
                            border-primary-red hover:border-primary-red text-sm border text-white
                            py-1 px-2 rounded' 
                        type='submit'>
                        Buscar
                    </button>
                </div>
            </form>                
        </div> 
    )
}

export default ImageSearch;