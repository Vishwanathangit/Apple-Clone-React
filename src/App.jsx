import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar  from './components/Navbar'
import Navdesc from './components/Navdesc'
import Hero from './components/Hero'
import Iphone from './components/Iphone'
import Iwatch from './components/Iwatch'
import Macbook from './components/Macbook'
import Ipadair from './components/Ipadair'
import Airpods from './components/Airpods'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Navdesc />
    <Hero />
    <Iphone />
    <Iwatch />
    <Macbook />
    <Ipadair />
    <Airpods />
    <Footer />
    </>
  )
}

export default App
