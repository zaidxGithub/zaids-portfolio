import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'

const App = () => {
  return (
   <>
   <Navbar/>
   <main>
   <Hero/>
   <Projects/>
   </main>
 <Footer/>
    
   </>
  )
}

export default App
