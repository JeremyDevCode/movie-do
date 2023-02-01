import { Navbar } from 'components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Category = () => {
    const router = useRouter()
    const { category } = router?.query
    const [movieData, setMovieData] = useState();
    const [movieId, setMovieId] = useState();
    const [title, setTitle] = useState();
    useEffect(() => {
        async function getMovies() {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + `&with_genres=${category}` + '&page=1');
            const res2 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + `&with_genres=${category}` + '&page=2');
            const res3 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + `&with_genres=${category}` + '&page=3');
            const res4 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + `&with_genres=${category}` + '&page=4');
            const res5 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.NEXT_PUBLIC_API_KEY + `&with_genres=${category}` + '&page=5');
            const data = await res.json();
            const data2 = await res2.json();
            const data3 = await res3.json();
            const data4 = await res4.json();
            const data5 = await res5.json();
            const movies = data.results;
            const movies2 = data2.results;
            const movies3 = data3.results;
            const movies4 = data4.results;
            const movies5 = data5.results;
            
            setTitle(category === '28' ? 'Action' : category === '12' ? 'Adventure' : category === '16' ? 'Animation' : category === '35' ? 'Comedy' : category === '80' ? 'Crime' : category === '99' ? 'Documentary' : category === '18' ? 'Drama' : category === '10751' ? 'Family' : category === '14' ? 'Fantasy' : category === '36' ? 'History' : category === '27' ? 'Horror' : category === '10402' ? 'Music' : category === '878' ? "Science Fiction" : category === '10770' ? 'TV Movie' : category === '53' ? 'Thriller' : category === '10752' ? 'War' : category === '37' ? 'Western' : 'Unknow');

            const listOfMovies = movies.concat(movies2).concat(movies3).concat(movies4).concat(movies5)
            setMovieData(listOfMovies);
        }
        getMovies();
    }, [category])
    return (
        <div className='bg-black w-full h-full pb-10'>
            <Navbar/>
            <Link href={'/m/'} className='absolute top-24 left-20 bg-zinc-800 rounded-full p-2 text-white hover:bg-neutral-900'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </Link>

            <div className='flex justify-center pt-28'>
            { typeof(title === Number) && (
                <h2 className='text-white text-3xl font-semibold pb-10'>{title}</h2>
            )
            }
            </div>
            <div className='flex flex-wrap justify-center gap-5'>
                {movieData?.map((movie) => 
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
export default Category;