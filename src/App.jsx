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
import Publication from './components/publication/Publication'
import Gallery from './components/gallery/Gallery'
import Agenda from './components/agenda/Agenda'
import TestConfjourney from './components/conferenceJourney/TestConfJour'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <NavBar/>


      <div className='container mx-auto '>
      <Hero/>
      </div>
      <hr className='text-white relative'/>

      <div className='container mx-auto '>
      <About/>

      <ResearchTrack/>
      <ConferenceJourney/>


      {/* publication here */}
      <Publication/>
      </div>
      
      <Submission/>
      <div className='container mx-auto '>
      <Committees />
      <Venue/>

      {/* agenda here */}
      <Agenda/>
      
      {/* sponsor here */}

      <Sponsor/>

      {/* Gallery here */}
      <Gallery/>
      </div>


      <div className='bg-color-light'>
        <div className='container mx-auto '>
          <FAQ/>
          <ContactUs/>
          <ExploreACET/>
        </div>  
      </div>

      
      {/* <TestConfjourney/> */}

      <div className='container mx-auto '>
        <Footer/>
      </div>

    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/committees" element={<Committees />} />
      </Routes>
    </Router>
      {/* <div className='h-50 w-full bg-white'></div> */}
      {/* <div class='h-screen '></div> */}
    </>
  )
}

export default App
