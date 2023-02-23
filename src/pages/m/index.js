import { Catalogue } from 'components/Catalogue';
import List from 'components/List'
import { Navbar } from 'components/Navbar'
import { Trends } from 'components/Trends'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useMovies } from 'services/useMovies';

function index() {

  const { state, stateUpdaters } = useMovies();
  const { favoriteStatus } = state;
  const { addMovie, deleteMovie, findMovies } = stateUpdaters;

  return (
    <div className='w-full h-full pb-10 bg-black'>
      <Navbar/>    
      <div className='flex flex-col px-10 pt-20 overflow-hidden text-white'>
    
        <Catalogue 
          favoriteStatus={favoriteStatus}
          addMovie={addMovie}
          deleteMovie={deleteMovie}
          findMovies={findMovies}
        />
      
      </div>
    </div>
  )
}

export default index