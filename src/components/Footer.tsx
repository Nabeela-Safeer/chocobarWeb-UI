import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-bannerImg mx-auto max-w-[1336px]'>
        <div className='grid grid-cols-5 p-16 gap-10 text-left'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-bold text-[#F7A52E]'>WAWEL SA</h1>
                <p className='text-sm text-white'>Historia Firmy</p>
                <p className='text-sm text-white'>Certyfikaty i nagrody</p>
                <p className='text-sm text-white'>Polityka prywatności</p>
                <p className='text-sm text-white'>Relacje inwestorskie</p>
            </div>
            <div className='flex flex-col gap-3'> <h1 className='text-xl font-bold text-[#F7A52E]'>SKLEPY FIRMOWE</h1>
                <p className='text-sm text-white'>Kawiarnia Słodki Wawel</p>
                <p className='text-sm text-white'>Adresy sklepów</p>
                <p className='text-sm text-white'>Sklep online</p>
            </div>
            <div className='flex flex-col gap-3'>
            <h1 className='text-xl font-bold text-[#F7A52E]'>ODPOWIEDZIALNOŚĆ</h1>
                <p className='text-sm text-white'>Fundacja Wawel z Rodziną</p>
                <p className='text-sm text-white'>Serce rośnie</p>
                <p className='text-sm text-white'>Dobre składniki</p>
            </div>
            <div className='flex flex-col gap-3'>
            <h1 className='text-xl font-bold text-[#F7A52E]'>KONTAKT</h1>
                <p className='text-sm text-white'>Biuro Obsługi Klienta</p>
                <p className='text-sm text-white'>Aktualności</p>
                <p className='text-sm text-white'>Biuro Prasowe</p>
                <h2 className='text-xl font-bold text-[#F7A52E] mt-10'>KARIERA</h2>
                <p className='text-sm text-white'>Oferty pracy</p>
            </div>
            <div className='flex flex-col gap-28 items-center'>
                <Image
                src="/images/wovel.svg"
                alt="logo"
                width={179}
                height={61}/>
                <div className='flex'>
                <FaFacebookSquare size={40} style={{color:'white'}}/><FaInstagram size={40} style={{color:'white'}}/><FaYoutube size={40} style={{color:'white'}}/>
                </div>
            </div>
        </div>
        <div className='ml-16'>
            <p className='text-xl text-[#F7A52E]'>© 2019 Wawel. Wszystkie prawa zastrzeżone. </p>
        </div>
    </div>
  )
}

export default Footer