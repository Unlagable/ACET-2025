import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/header/Navbar'
import Hero from './components/hero/HeroBanner'
import About from './components/about/aboutAcet'
import Button from './components/button/button'
import ResearchTrack from './components/researchTrack/ResearchTrack'
import ConferenceJourney from './components/conferenceJourney/ConferenceJourney'
import Submission from './components/submission/Submission'
import Committees from './components/commitees/committees'
import Venue from './components/venue/Venue'
import Sponsor from './components/sponsor/Sponsor'
import FAQ from './components/faq/FAQ'
import ContactUs from './components/contact us/Contact Us'
import ExploreACET from './components/explore acet/Explore ACET'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Hero/>
      <hr className='text-white relative'/>
      <About/>
      {/* <Button text="Testing"/> */}
      <ResearchTrack/>
      <ConferenceJourney/>
      <Submission/>
      <Committees />
      <Venue/>
      <Sponsor/>
      <FAQ/>
      <ContactUs/>
      <ExploreACET/>
      <Footer/>
      {/* <div className='h-50 w-full bg-white'></div> */}
      {/* <div class='h-screen '></div> */}
    </>
  )
}

export default App
