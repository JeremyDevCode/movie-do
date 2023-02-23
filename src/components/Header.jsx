import React from 'react'
import { Featured } from './Featured'
import { Navbar } from './Navbar'

function Header() {

  return (
    <>
      <Navbar/>
      <Featured/>
    </>
  )
}

export { Header }