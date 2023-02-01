import Head from 'next/head'
import Image from 'next/image'
import { Trends } from '@components/Trends'
import { Header } from 'components/Header'
import List from 'components/List'


export default function Home() {
  return (
    <>
    <div className='bg-black overflow-hidden'>
      <Header/>
      <span className='text-white text-xl ml-[50px] font-medium mt-2.5'>Continue to watch</span>
      <div className='ml-[50px]'>
        <List>
        
          <Trends/>  
        </List>
      </div>
      
    </div>

    </>
  )
}
