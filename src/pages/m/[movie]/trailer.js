import { Navbar } from 'components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Trailer = () => {
    const router = useRouter()
    const { movie } = router?.query
    const [movieData, setMovieData] = useState();
    useEffect(() => {
        async function getMovie() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=` + process.env.NEXT_PUBLIC_API_KEY);
            const data = await res.json();
            setMovieData(data);
        }
        getMovie();
    }, [movie])


    return (
        <div className='h-screen bg-black'>
            <Navbar />
            <div className='flex justify-evenly items-center h-full text-white'>
                <Image className='rounded-3xl w-2/5 h-4/5' src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} priority={true} width={500} height={750} alt={`movie ${movieData?.original_title}`} />
                <div className='flex flex-col w-3/6 h-4/5 relative mt-32'>
                    <div className='flex items-end justify-between'>
                        <p className='text-4xl font-bold'>{movieData?.original_title}</p>
                        <div className='flex gap-3 items-center'>
                            <p className='font-semibold text-2xl pl-1'>{Number(`${movieData?.vote_average}`).toFixed(1)}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-300">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center justify-start mb-10'>
                        <p className='text-[#666666] font-medium text-sm pl-1'>{movieData?.release_date?.replace(/-/g, ' ').substr(0, 4)}</p>
                        <p className='text-[#666666] font-medium text-sm'>{`${movieData?.runtime}` > 60 ? Math.floor(`${movieData?.runtime}` / 60) + 'h ' + (`${movieData?.runtime}` % 60) + 'min' : `${movieData?.runtime}` + 'min'}</p>
                    </div>
                    
                    <div className='flex justify-between items-center text-lg font-bold border-b-2 border-[#111318]'>
                        <Link href={`/m/${movie}/`}>
                            <p className='text-[#666666] border-b-8 border-transparent pb-5'>OVERVIEW</p>
                        </Link>
                        <Link href={`/m/${movie}/trailer`}>
                            <p className='border-b-8 border-[#dc1112] pb-5'>TRAILERS & MORE</p>
                        </Link>
                        <Link href={`/m/${movie}/more`}>
                            <p className='text-[#666666] border-b-8 border-transparent pb-5'>MORE LIKE THIS</p>
                        </Link>
                        <Link href={`/m/${movie}/details`}>
                            <p className='text-[#666666] border-b-8 border-transparent pb-5'>DETAILS</p>
                        </Link>
                    </div>
                    <div className='flex justify-center mt-5'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hxJyt1oDyOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Trailer;