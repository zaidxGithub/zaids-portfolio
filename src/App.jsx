import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/cards/sections/Hero'
import Projects from './components/cards/sections/Projects'
import TechnicalArsenal from './components/sections/TechnicalArsenal'

const App = () => {
  return (
   <>
   <Navbar/>
   <main>
   <Hero/>
   <TechnicalArsenal/>
   <Projects/>
   </main>
 <Footer/>
    
   </>
  )
}

export default App
