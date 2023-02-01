import { Navbar } from 'components/Navbar'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function discover() {
    const [movieData, setMovieData] = useState();
    const [searchedMovies, setSearchedMovies] = useState();
    const [movieId, setMovieId] = useState();
    useEffect(() => {
        async function getMovies() {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=1');
            const res2 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=2');
            const res3 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=3');
            const res4 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=4');
            const res5 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=5');
            const res6 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=6');
            const res7 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=7');
            const res8 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=8');
            const res9 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=9');
            const res10 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&page=10');
            const data = await res.json();
            const data2 = await res2.json();
            const data3 = await res3.json();
            const data4 = await res4.json();
            const data5 = await res5.json();
            const data6 = await res6.json();
            const data7 = await res7.json();
            const data8 = await res8.json();
            const data9 = await res9.json();
            const data10 = await res10.json();
            const movies = data.results;
            const movies2 = data2.results;
            const movies3 = data3.results;
            const movies4 = data4.results;
            const movies5 = data5.results;
            const movies6 = data6.results;
            const movies7 = data7.results;
            const movies8 = data8.results;
            const movies9 = data9.results;
            const movies10 = data10.results;
            
         

            const listOfMovies = movies.concat(movies2).concat(movies3).concat(movies4).concat(movies5).concat(movies6).concat(movies7).concat(movies8).concat(movies9).concat(movies10);
            setMovieData(listOfMovies);
        }
        getMovies();
    }, [])

    async function getMoviesBySearch(query) {
        const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + '&query=' + query);
        const data = await res.json();
        console.log(data);
        setSearchedMovies(data.results);
    }
   
    return (
        <div className='bg-black w-full h-full pb-10'>
            <Navbar/>
            <div className='flex justify-center pt-28'>
            
                <input className='absolute text-white top-7 right-52 w-32 z-50 bg-transparent placeholder:text-white' onChange={(e) => getMoviesBySearch(e?.target?.value)} type='text' placeholder='Search'/>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                {(!searchedMovies ? movieData : searchedMovies)?.map((movie) => 
                    <div 
                        onMouseEnter={() => setMovieId(movie.id)} onMouseLeave={() => setMovieId()} 
                        className={`group/movie mr-[5px] bg-black  hover:scale-125`}
                        key = {movie.id}
                    >
                    {movie.backdrop_path !== null && (
                        <Image 
                            src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} 
                            className='w-full h-[120px]'
                            width={300} 
                            height={169} 
                            priority={true}
                            alt={`alt ${movie.title}`}
                        />
                    )}
                        { movie.id === movieId && (
                        <div className='group-hover/movie:block absolute hidden bottom-5 text-white text-xs ml-2 font-medium'>
                            <div>
                            {movie.title}
                            </div>
                            <div className='flex'>
                            <Link href={`/m/${movie.id}`}>
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
            </div>
        </div>
                                
    )
}
export default discover;


