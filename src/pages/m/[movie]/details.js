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
    useEffect(() => {
        async function getMovie() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=` + process.env.NEXT_PUBLIC_API_KEY);
            const data = await res.json();
            setMovieData(data);
            console.log(data)
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
                            <p className='text-[#666666] border-b-8 border-transparent pb-5'>TRAILERS & MORE</p>
                        </Link>
                        <Link href={`/m/${movie}/more`}>
                            <p className='text-[#666666] border-b-8 border-transparent pb-5'>MORE LIKE THIS</p>
                        </Link>
                        <Link href={`/m/${movie}/details`}>
                            <p className='border-b-8 border-[#dc1112] pb-5'>DETAILS</p>
                        </Link>
                    </div>
                    <div className='w-11/12 mt-5'>
                        <div className='text-[#666666] text-sm flex flex-col gap-5 mb-10'>
                            <div className='flex items-center justify-between'>
                                <p>Original Title</p>
                                <p className='w-4/5 text-white'>{movieData?.original_title || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Homepage</p>
                                <a href={movieData?.homepage} target='_blank' className='w-4/5 text-blue-500'>{movieData?.title || '-'}</a>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Tagline</p>
                                <p className='w-4/5 text-white'>{movieData?.tagline || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Status</p>
                                <p className={`${movieData?.status === 'Released' ? 'text-green-500' : 'text-red-500'} w-4/5 text-white`}>{movieData?.status || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Popularity</p>
                                <p className='w-4/5 text-white'>{movieData?.popularity || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Produced in</p>
                                <p className='w-4/5 text-white'>{movieData?.production_countries?.map(({name}) => (
                                    <span key={name} className='mr-5'>{name}</span>
                                )) || '-'}</p>
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
                                <p>Languages</p>
                                <p className='w-4/5 text-white'>{movieData?.spoken_languages?.map(({english_name}) => (
                                    <span key={english_name} className='mr-5'>{english_name}</span>
                                )) || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Genre</p>
                                <p className='w-4/5 text-white flex flex-wrap flex-row gap-2'>
                                    {movieData?.genres?.map(({ id, name }) => (
                                    <span className={`${name === 'Animation' && 'bg-amber-400'} ${name === 'Action' && 'bg-red-600'} ${name === 'Adventure' && 'bg-lime-400'} ${name === 'Comedy' && 'bg-orange-400'} ${name === 'Family' && 'bg-blue-500'} ${name === 'Fantasy' && 'bg-violet-600'} ${name === 'Drama' && 'bg-zinc-700'} ${name === 'Music' && 'bg-green-500'} ${name === 'Horror' && 'bg-red-800'} ${name === 'Science Fiction' && 'bg-emerald-400'} ${name === 'Romance' && 'bg-rose-600'} ${name === 'Crime' && 'bg-gray-700'} ${name === 'Thriller' && 'bg-neutral-800'} ${name === 'Documentary' && 'bg-amber-500'} ${name === 'History' && 'bg-stone-500'} ${name === 'Western' && 'bg-amber-700'} rounded p-1`} key={id}>{name}</span>
                                    ))}
                                </p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Budget</p>
                                <p className='w-4/5 text-white'>{'$' + movieData?.budget || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Revenue</p>
                                <p className='w-4/5 text-white'>{'$' + movieData?.revenue || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Release Date</p>
                                <p className='w-4/5 text-white'>{movieData?.release_date || '-'}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p>Vote Count</p>
                                <p className='w-4/5 text-white'>{movieData?.vote_count || '-'}</p>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Movie;