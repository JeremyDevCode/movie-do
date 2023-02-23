import Image from 'next/image';
import React from 'react';
import next from '../images/nextlogo.png';
import tailwind from '../images/tailwindlogo.png';

function Footer() {
  return (
    <div className='w-screen h-[100px] bg-black flex items-center justify-center text-white'>
        <p className='flex items-center'>
            Built with <Image src={next} className='w-[30px]'/> <Image src={tailwind} className='w-[30px] mr-1'/> ▲ & ❤️
        </p>
    </div>
  )
}

export { Footer }