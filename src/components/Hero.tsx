import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { Button } from './ui/button'
import Form from './Form'


const Hero = () => {
  return (
   <main className='bg-[#E5E5E5]'>
   <section className="bg-bannerImg bg-cover bg-repeat bg-botom w-full h-screen p-10 max-w-[1336px] mx-auto">
   <Navbar/>
   <div className='grid grid-cols-2 place-items-center'>
   <div className=''>
    <p className='text-[#F7A52E] text-7xl text-left ml-20'>Szlachetny smak,na który warto czekać.</p>
   </div>
    <div>
        <Image
        src="/images/Group 1.svg"
        alt="image"
        height={675.3}
        width={659.41} />
    </div>
    </div>
   </section>

   <section className='max-w-[1336px] h-[427px] bg-[#FFFFFF] border border-b-white rounded-b-[50px] mx-auto'>

    <div>
        <p className='text-4xl flex justify-center font-bold text-[#F7A52E] p-10'>POZNAJ NASZE PRODUKTY</p>
    </div>
    <div className='flex flex-row gap-10'>
        <div> 
            <Image
        src="/images/image 13.svg"
        alt="image"
        height={106.4}
        width={100.86} />
        </div>
        <div>
        <Image
        src="/images/image 10.svg"
        alt="image"
        height={159.6}
        width={151.29} />
        </div>
        <div>
        <Image
        src="/images/image 11.svg"
        alt="image"
        height={212.8}
        width={201.73} />
        </div>
        <div>
        <Image
        src="/images/image 8.svg"
        alt="image"
        height={265.65}
        width={252.16} />
        </div>
        <div>
        <Image
        src="/images/image 9.svg"
        alt="image"
        height={212.93}
        width={201.73} />
        </div>
        <div> <Image
        src="/images/image 4.svg"
        alt="image"
        height={159.21}
        width={151.29} />
        </div>
        <div>
        <Image
        src="/images/image 12.svg"
        alt="image"
        height={106.51}
        width={100.86} />
        </div>
        
    </div>
    <div className='flex justify-center'><Button className='bg-[#F7A52E]'>WYSWIETL WSZYSTKIE PRODUKTY</Button></div>

   </section>
   
    <Form/>
    
   

   </main>
  )
}

export default Hero