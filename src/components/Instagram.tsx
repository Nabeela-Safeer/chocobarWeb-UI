import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import Image from 'next/image';


const Instagram = () => {
  return (
    <div className='max-w-[1336px] mx-auto h-[694px] bg-white border rounded-t-[60px] '>
        <div className='flex justify-center text-2xl p-10'>
            <p className='flex gap-3'>
                <FaInstagram size="30" style={{color: '#F7A52E'}}/>
                Obserwuj<span className='text-[#F7A52E]'>@wawel_slodycze</span> na Instagramie
            </p>
        </div>

        <div className='grid grid-cols-4 w-[1112px] mx-auto p-20 -mt-20 gap-5'>
            <div>
                <Image
                src="/images/image 16.svg"
                alt="image"
                height={273}
                width={281} />
            </div>
            <div className='col-span-2 row-span-2 flex justify-center items-center'>
                <Image
                src="/images/image 20.svg"
                alt="image"
                height={572}
                width={490} className='mb-20'/>
            </div>
            <div>
            <Image
                src="/images/image 17.svg"
                alt="image"
                height={273}
                width={281} />
            </div>
            <div>
            <Image
                src="/images/image 19.svg"
                alt="image"
                height={273}
                width={281} />
            </div>
            <div>
            <Image
                src="/images/image 21.svg"
                alt="image"
                height={273}
                width={281} />
            </div>
            
        </div>
        <div className=''>
        </div>
    </div>
  )
}

export default Instagram