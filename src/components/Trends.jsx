import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Trends() {
    const [movieId, setMovieId] = useState();

    const [trending, setTrending] = useState();
      useEffect(() => {
        async function getTrendingMoviesPreview() {
          const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + process.env.NEXT_PUBLIC_API_KEY);
          const data = await res.json();

          const movies = data.results;
          setTrending(movies);
      }
      getTrendingMoviesPreview();
    }, [])    

  return (
    <>
        {trending?.map((trend) => 
            <div onMouseEnter={() => setMovieId(trend.id)} onMouseLeave={() => setMovieId()}
            className={`mr-[5px] bg-black  hover:scale-125`}
            key = {trend.id}
            >
              <Image 
                src={`https://image.tmdb.org/t/p/w300${trend.backdrop_path}`} 
                className='w-full h-[120px]'
                width={300} 
                height={169} 
                priority={true}
                alt={`alt ${trend.title}`}
              />
            { trend.id === movieId && (
              <div className='absolute bottom-5 text-white text-xs ml-2 font-medium'>
                <div>
                  {trend.title}
                </div>
                <div className='flex'>
                <Link href={`/m/${trend.id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                </div>
              </div>

            )}
            </div>
        )}
    </>
  )
}

export { Trends }