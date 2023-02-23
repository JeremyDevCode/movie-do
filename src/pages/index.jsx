import Head from 'next/head'
import Image from 'next/image'
import { Trends } from '@components/Trends'
import { Header } from 'components/Header'
import List from 'components/List'
import { Catalogue } from 'components/Catalogue'
import { useMovies } from 'services/useMovies'
import { Footer } from 'components/Footer'


export default function Home() {

  const { state, stateUpdaters } = useMovies();
  const { favoriteStatus } = state;
  const { addMovie, deleteMovie, findMovies } = stateUpdaters;

  return (
    <>
    <div className='overflow-hidden bg-black'>
      <Header/>
      <span className='text-white text-xl ml-[50px] font-medium'>Continue to watch</span>
      <div className='ml-[50px]'>
        <List>
        
          <Trends 
            favoriteStatus={favoriteStatus}
            addMovie={addMovie}
            deleteMovie={deleteMovie}
            findMovies={findMovies}
          />  
        </List>
        <Catalogue
          favoriteStatus={favoriteStatus}
          addMovie={addMovie}
          deleteMovie={deleteMovie}
          findMovies={findMovies}
        />
      </div>
      <Footer/>    
    </div>

    </>
  )
}
