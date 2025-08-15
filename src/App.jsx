import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/header/Navbar'
import Hero from './components/hero/HeroBanner'
import About from './components/about/aboutAcet'
import Button from './components/button/button'
import ResearchTrack from './components/researchTrack/ResearchTrack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Hero/>
      <hr className='text-white relative'/>
      <About/>
      <Button/>
      <ResearchTrack/>
      <div class='h-screen '></div>
    </>
  )
}

export default App
