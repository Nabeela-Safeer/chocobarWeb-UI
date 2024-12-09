import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
// import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  return (
    
        <div className='max-w-[1336] h-[61] flex justify-between max-auto'>
            <div>
                <Image
                src="/images/wovel.svg"
                alt="logo"
                width={179}
                height={61}/>
            </div>
            <div className='text-white'>
                <ul className='flex gap-10 p-5'>
                <li className='hover:text-[#F7A52E] cursor-pointer'><Link href="/">O nas</Link></li>
                <li className='hover:text-[#F7A52E] cursor-pointer'><Link href="/">Produkty</Link></li>
                <li className='hover:text-[#F7A52E] cursor-pointer'><Link href="/">Czynimy dobro</Link></li>
                <li className='hover:text-[#F7A52E] cursor-pointer'><Link href="/">Sklepy firmow</Link></li>
                <li className='hover:text-[#F7A52E] cursor-pointer'><Link href="/">Kariera</Link></li>
                </ul>
            </div>
            {/* <div className='inline-flex hidden'>
                <FiMenu size={50} style={{color:'#F7A52E'}}/>
            </div> */}
            <div className='p-5'>
                <Button className='bg-[#F7A52E] w-[100] h-[40]'>E-SKLEP</Button>
            </div>
        </div>
    
  )
}

export default Navbar