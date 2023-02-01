import List from 'components/List'
import { Navbar } from 'components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Movie = () => {
    const router = useRouter()
    const { movie } = router?.query
    const [movieData, setMovieData] = useState();
    const [recommendationsData, setRecommendationsData] = useState();
    const [movieId, setMovieId] = useState();
    useEffect(() => {
        async function getMovie() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=` + process.env.NEXT_PUBLIC_API_KEY);
            const data = await res.json();
            setMovieData(data);
        }
        getMovie();

        async function getRecommendations() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}/recommendations?api_key=` + process.env.NEXT_PUBLIC_API_KEY);
            const data = await res.json();
            setRecommendationsData(data.results);
        }
        getRecommendations();
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
                            <p className='border-b-8 border-[#dc1112] pb-5'>OVERVIEW</p>
                        </Link>
                        <Link href={`/m/${movie}/trailer`}>
                            <p className='text-[#666666] border-b-8 border-transparent pb-5'>TRAILERS & MORE</p>
                        </Link>
                        <Link href={`/m/${movie}/more`}>
                            <p className='text-[#666666] border-b-8 border-transparent pb-5'>MORE LIKE THIS</p>
                        </Link>
                        <Link href={`/m/${movie}/details`}>
                            <p className='text-[#666666] border-b-8 border-transparent pb-5'>DETAILS</p>
                        </Link>
                    </div>
                    <div className='w-11/12'>
                        <p className='text-sm py-5'>{movieData?.overview}</p>
                        <div className='text-[#666666] text-sm flex flex-col gap-5 mb-10'>
                            <div className='flex items-center justify-between'>
                                <p>Tagline</p>
                                <p className='w-4/5 text-white'>{movieData?.tagline || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Created by</p>
                                <div className='flex flex-wrap items-center justify-start gap-5 w-4/5 text-white'>
                                    {movieData?.production_companies?.map(({id, name, logo_path}) => (
                                            <img key={id} className='h-[25px] saturate-0 invert' src={`https://image.tmdb.org/t/p/w500${logo_path}`} alt={`Company ${name}`}/>
                                    ))}
                                </div>    
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Genre</p>
                                <p className='w-4/5 text-white flex flex-wrap flex-row gap-2'>
                                    {movieData?.genres?.map(({ id, name }) => (
                                    <span className={`${name === 'Animation' && 'bg-amber-400'} ${name === 'Action' && 'bg-red-600'} ${name === 'Adventure' && 'bg-lime-400'} ${name === 'Comedy' && 'bg-orange-400'} ${name === 'Family' && 'bg-blue-500'} ${name === 'Fantasy' && 'bg-violet-600'} ${name === 'Drama' && 'bg-zinc-700'} ${name === 'Music' && 'bg-green-500'} ${name === 'Horror' && 'bg-red-800'} ${name === 'Science Fiction' && 'bg-emerald-400'} ${name === 'Romance' && 'bg-rose-600'} ${name === 'Crime' && 'bg-gray-700'} ${name === 'Thriller' && 'bg-neutral-800'} ${name === 'Documentary' && 'bg-amber-500'} ${name === 'History' && 'bg-stone-500'} ${name === 'Western' && 'bg-amber-700'} rounded p-1`} key={id}>{name}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                        <h2 className='text-lg'>Related Movies</h2>
                    <div className='pb-5 overflow-x-scroll scrollbar-thumb-stone-900 scrollbar-h-2 scrollbar-thin'>
                        <List>
                            {recommendationsData?.map(({id, title, poster_path}) => (
                                <div onMouseEnter={() => setMovieId(id)} onMouseLeave={() => setMovieId()}   className='w-[125px] mx-1 z-50 hover:scale-110'>
                                    <img key={id} className='w-full' src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                                    {id === movieId && (
                                        <div className='bg-black absolute bottom-0 text-white text-xs w-full z-50 p-3 font-medium'>
                                            <div>
                                            {title}
                                            </div>
                                        <div className='flex'>
                                        <Link href={`/m/${id}`}>
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
                            ))}
                        </List>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;