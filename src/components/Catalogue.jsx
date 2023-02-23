import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import List from './List';

function Catalogue({favoriteStatus,  addMovie, deleteMovie, findMovies}) {

    const [movieId, setMovieId] = useState();
    const [category, setCategory] = useState();
    const [Action, setActionMovies] = useState([]);
    const [Adventure, setAdventureMovies] = useState([]);
    const [Animation, setAnimationMovies] = useState([]);
    const [Comedy, setComedyMovies] = useState([]);
    const [Crime, setCrimeMovies] = useState([]);
    const [Documentary, setDocumentaryMovies] = useState([]);
    const [Drama, setDramaMovies] = useState([]);
    const [Family, setFamilyMovies] = useState([]);
    const [Fantasy, setFantasyMovies] = useState([]);
    const [History, setHistoryMovies] = useState([]);
    const [Horror, setHorrorMovies] = useState([]);
    const [Music, setMusicMovies] = useState([]);
    const [Mystery, setMysteryMovies] = useState([]);
    const [Romance, setRomanceMovies] = useState([]);
    const [ScienceFiction, setScienceFictionMovies] = useState([]);
    const [TVMovie, setTVMovieMovies] = useState([]);
    const [Thriller, setThrillerMovies] = useState([]);
    const [War, setWarMovies] = useState([]);
    const [Western, setWesternMovies] = useState([]);
    useEffect(() => {
    async function getCategory() {
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + process.env.NEXT_PUBLIC_API_KEY);
        const data = await res.json();
        const categories = data.genres;
        console.log(categories)
        setCategory(categories);
    }
    getCategory();
    async function getActionMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=28');
      const data = await res.json();
  
      const movies = data.results;
  
      setActionMovies(movies);
    }
    getActionMovies();
    async function getAdventureMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=12');
      const data = await res.json();
  
      const movies = data.results;
      setAdventureMovies(movies);
    }
    getAdventureMovies();
    async function getAnimationMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=16');
      const data = await res.json();
  
      const movies = data.results;
      setAnimationMovies(movies);
    }
    getAnimationMovies();
    async function getComedyMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=35');
      const data = await res.json();
  
      const movies = data.results;
      setComedyMovies(movies);
    }
    getComedyMovies();
    async function getCrimeMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=80');
      const data = await res.json();
  
      const movies = data.results;
      setCrimeMovies(movies);
    }
    getCrimeMovies();
    async function getDocumentaryMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=99');
      const data = await res.json();
  
      const movies = data.results;
      setDocumentaryMovies(movies);
    }
    getDocumentaryMovies();
    async function getDramaMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=18');
      const data = await res.json();
  
      const movies = data.results;
      setDramaMovies(movies);
    }
    getDramaMovies();
    async function getFamilyMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=10751');
      const data = await res.json();
  
      const movies = data.results;
      setFamilyMovies(movies);
    }
    getFamilyMovies();
    async function getFantasyMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=14');
      const data = await res.json();
  
      const movies = data.results;
      setFantasyMovies(movies);
    }
    getFantasyMovies();
    async function getHistoryMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=36');
      const data = await res.json();
  
      const movies = data.results;
      setHistoryMovies(movies);
    }
    getHistoryMovies();
    async function getHorrorMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=27');
      const data = await res.json();
  
      const movies = data.results;
      setHorrorMovies(movies);
    }
    getHorrorMovies();
    async function getMusicMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=10402');
      const data = await res.json();
  
      const movies = data.results;
      setMusicMovies(movies);
    }
    getMusicMovies();
    async function getMysteryMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=9648');
      const data = await res.json();
  
      const movies = data.results;
      setMysteryMovies(movies);
    }
    getMysteryMovies();
    async function getRomanceMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=10749');
      const data = await res.json();
  
      const movies = data.results;
      setRomanceMovies(movies);
    }
    getRomanceMovies();
    async function getScienceFictionMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=878');
      const data = await res.json();
  
      const movies = data.results;
      setScienceFictionMovies(movies);
    }
    getScienceFictionMovies();
    async function getTVMovieMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=10770');
      const data = await res.json();
  
      const movies = data.results;
      setTVMovieMovies(movies);
    }
    getTVMovieMovies();
    async function getThrillerMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=53');
      const data = await res.json();
  
      const movies = data.results;
      setThrillerMovies(movies);
    }
    getThrillerMovies();
    async function getWarMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=10752');
      const data = await res.json();
  
      const movies = data.results;
      setWarMovies(movies);
    }
    getWarMovies();
    async function getWesternMovies() {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&with_genres=37');
      const data = await res.json();
  
      const movies = data.results;
      setWesternMovies(movies);
    }
    getWesternMovies();
    }, [])    

  return (
    <>
        {category?.map((genre) => (
        <div key={genre.name} className='mt-5 group/link'>
      <Link href={`/c/${genre.id}`}>
          <div className='flex items-center gap-1 px-3 text-white cursor-pointer w-fit rounded-xl group/open hover:bg-zinc-800'>
            <h2 className='text-lg font-medium'>{genre.name}</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden w-5 h-5 delay-100 group-hover/link:flex group-hover/open:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          </div>
      </Link> 
        
          <List>
          {(genre.name === 'Action' ? Action : genre.name === 'Adventure' ? Adventure : genre.name === 'Animation' ? Animation : genre.name === 'Comedy' ? Comedy : genre.name === 'Crime' ? Crime : genre.name === 'Documentary' ? Documentary : genre.name === 'Drama' ? Drama : genre.name === 'Family' ? Family : genre.name === 'Fantasy' ? Fantasy : genre.name === 'History' ? History : genre.name === 'Horror' ? Horror : genre.name === 'Music' ? Music : genre.name === 'Mystery' ? Mystery : genre.name === 'Romance' ? Romance : genre.name === 'Science Fiction' ? ScienceFiction : genre.name === 'TV Movie' ? TVMovie : genre.name === 'Thriller' ? Thriller : genre.name === 'War' ? War : genre.name === 'Western' ? Western : [])?.map((trend) => 
            <div onMouseEnter={() => {setMovieId(trend.id); findMovies(trend.id);}} onMouseLeave={() => setMovieId()} 
            className={`group/movie mr-[5px] bg-black  hover:scale-125`}
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
              <div className='absolute hidden ml-2 text-xs font-medium text-white group-hover/movie:block bottom-5'>
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
                { favoriteStatus ? (
                  <svg onClick={() => deleteMovie(trend.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg onClick={() => addMovie(trend.id, trend.title, trend.backdrop_path)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                  </svg>
                )}
                </div>
              </div>

            )}
            </div>
        )}
          </List>
        </div>
      ))}
    </>
  )
}

export { Catalogue }