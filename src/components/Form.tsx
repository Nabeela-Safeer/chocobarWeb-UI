import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Form = () => {
  return (
    <main className='bg-[#E5E5E5] max-w-[1334px] mx-auto container'>
        <div className='bg-white w-[983.54px] h-[1100.17px] border rounded-[60px] mx-auto my-24'>
            <div className='grid grid-cols-2'>
                <div>
                    <Image
                    src="/images/image 25.svg"
                    alt="image"
                    height={635}
                    width={508.5}  className='-ml-12 -mt-10'/>
                </div>
                <div className='flex flex-col justify-center p-20 text-center'>
                    <h1 className='text-[#612B1A] text-xl '>DOBRE SKLADNIKI</h1>
                    <p className='text-base'><i>Nasze produkty tworzymy ze szczególną dbałością o jakość i skład, bo wierzymy, że dobre składniki mają wpływ na nasz humor. To proste - gdy czujemy się dobrze, chcemy czynić dobrze, a suma szczęśliwych dni to dobre życie.</i></p>
                    <Button className='bg-white text-[#612B1A] border border-[#612B1A] w-1/2 ml-20'>SPRAWDŹ</Button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                <div className='flex flex-col justify-center p-20 text-center'>
                    <h1 className='text-[#612B1A] text-xl '>HISTORIA FIRMY</h1>
                    <p className='text-base'><i>Pod koniec XIX wieku pewien chłopiec, Adaś Piasecki, marzy o zawodzie cukiernika. Kilka lat później rozpoczyna naukę i jako dwudziestoletni młodzieniec, znając już tajniki sztuki, zdaje egzamin czeladniczy. Tak rozpoczyna się historia dzisiejszej marki Wawel.</i></p>
                    <Button className='bg-white text-[#612B1A] border border-[#612B1A] w-1/2 ml-20'>SPRAWDŹ</Button>
                    <Image
                    src="/images/image 7.svg"
                    alt="image"
                    height={300}
                    width={255.82}  className='-ml-44'/>
                </div>
                <div>
                    <Image
                    src="/images/image 15.svg"
                    alt="image"
                    height={635.41}
                    width={583.24}  className='mt-10 ml-10'/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Form