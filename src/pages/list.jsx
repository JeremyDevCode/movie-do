import { Navbar } from 'components/Navbar'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useMovies } from 'services/useMovies';

function discover() {
    const [movieData, setMovieData] = useState();
    const [movieId, setMovieId] = useState();
    const { state, stateUpdaters } = useMovies();
    const { movies, loading } = state;
    const { deleteMovie } = stateUpdaters;

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

   
    
    return (
        <div className='w-full h-full pb-10 bg-black'>
            <div className='fixed w-screen h-screen bg-black -z-50'></div>
            <Navbar/>
            <div className='flex justify-center pt-28'>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                {!loading && (movies[0] !== undefined ? (movies)?.map((movie) => 
                    <div 
                        onMouseEnter={() => setMovieId(movie.id)} onMouseLeave={() => setMovieId()} 
                        className={`group/movie mr-[5px] bg-black  hover:scale-125`}
                        key = {movie.id}
                    >
                    {movie.backdrop_path !== null && (
                        <Image 
                            src={`https://image.tmdb.org/t/p/w300${movie.image}`} 
                            className='w-full h-[120px]'
                            width={300} 
                            height={169} 
                            priority={true}
                            alt={`alt ${movie.title}`}
                        />
                    )}
                        { movie.id === movieId && (
                        <div className='absolute hidden ml-2 text-xs font-medium text-white group-hover/movie:block bottom-5'>
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
                            <svg onClick={() => deleteMovie(movie.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </div>
                        </div>
                        )}
                    </div>
                ) : <p className='text-white'>It looks like you haven't saved any movies to your list yet</p>)}   
            </div>
        </div>
                                
    )
}
export default discover;


