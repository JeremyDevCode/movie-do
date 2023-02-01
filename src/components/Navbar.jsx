import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Navbar() {
    const router = useRouter();
    const [searchStatus, setSearchStatus] = useState(false)
    const { pathname } = router;
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            setIsScrolled(window.scrollY === 0 ? false : true);
            return () => (window.onscroll = null);
        }
    }, );
  return (
    <nav className={isScrolled ? 'bg-black fixed w-full text-white h-20 px-12 z-10' : 'bg-gradient-to-t from-transparent to-[#00000080] fixed w-full text-white h-20 px-12 z-10'}>
        
        <div className='flex items-center justify-between h-full'>
            <div className='flex items-center'>
                <Link href='/'> 
                    <img className='h-14 mr-10' src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png" alt="logo"/>
                </Link>
                <Link href='/m/'>
                    <span className='mr-5'>Movies</span>
                </Link>
                <Link href='/discover'>
                    <span className='mr-5'>New and Popular</span>
                </Link>
                <span className='mr-5'>My List</span>
            </div>

            <div className='flex items-center'>
                <div onClick={() => (pathname !== '/discover' ? router.push('/discover') && setSearchStatus(false)  : setSearchStatus(true))}>
                <div className={`flex items-center  h-10 rounded-full transition bg-red-400 ease-in ${searchStatus ? 'w-48' : 'w-10'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-2 cursor-pointer">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>

                </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-4 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>

                <img
                    className='h-8 rounded object-cover cursor-pointer' 
                    src='https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png' 
                    alt='profile picture'
                />

                <div className='group/menu'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-4 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                
                <div className='hidden bg-black rounded group-hover/menu:flex flex-col absolute'>
                    <span className='p-2.5 cursor-pointer'>Settings</span>
                    <span className='p-2.5 cursor-pointer'>Logout</span>
                </div>
                </div>

            </div>
        </div>
    </nav>
  )
}

export  { Navbar };