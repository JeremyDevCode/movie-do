import React, { useEffect, useState } from 'react';

function Featured({type}) {

    const [category, setCategory] = useState();
    useEffect(() => {
    async function getCategory() {
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + process.env.NEXT_PUBLIC_API_KEY);
        const data = await res.json();

        const categories = data.genres;
        setCategory(categories);
    }
    getCategory();
    }, [])    

  return (
    <div className='text-white h-4/5 relative'>
            {type && (
                <div className='flex items-center absolute top-20 left-[50px] text-white'>
                    <span className='text-3xl font-medium'>{type === "movie" ? "Movies" : "Series"}</span>
                    <select className='cursor-pointer bg-black border ml-5 p-1' name='genre' defaultValue={"genre"}>
                        <option value="genre" hidden>Genre</option>
                        {category?.map((genre) => 
                            <option key={genre.id} value={genre.name}>{genre.name}</option>
                        )}
                    </select>
                </div>
            )}
        <img className='w-screen h-full object-cover' src='https://wallpapercave.com/wp/iptrxid.jpg' alt='movie'/>
        <div className='flex flex-col w-[35%] absolute left-12 bottom-24'>
            <img src='https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUn_IBh6aDMLjcuyEIOgsXFGdLIkF0VtkGlkHZXTQISEIhtXAmXnNTZ11D4PQbUuqNwWQS6CtXLSwkys1EDXQtl0Gz8cLQhZeHUO.png'/>
            <span className='my-5'>El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.</span>
            <div className='flex'>
                
                <button className='flex justify-center items-center text-lg font-medium mr-2.5 px-5 py-2.5 border-none rounded bg-white text-black h-[40px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    <span className='ml-1'>Play</span>
                </button>

                
                <button className='flex justify-center items-center text-lg font-medium h-[40px] w-[150px] mr-2.5 px-2.5 py-5 border-none rounded bg-[#808080B3] text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className='ml-1'>My list</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export { Featured }