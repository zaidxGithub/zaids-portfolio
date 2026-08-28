import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from "./components/sections/Hero"
import Projects from './components/sections/Projects'
import TechnicalArsenal from './components/sections/TechnicalArsenal'
import HowIBuild from './components/sections/HowIBuild'
import WhereIHaveWorked from './components/sections/WhereIHaveWorked'
import WinsAndMilestones from './components/sections/WinsAndMilestones'
import CertificationCard from './components/cards/CertificationCard'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Foundation from "./components/sections/Foundation"

const App = () => {
  return (
   <>
   <Navbar/>
   <main>
    <Hero/>
   <TechnicalArsenal/>
   <HowIBuild/>
   <WhereIHaveWorked/>
   <Projects/>
   <WinsAndMilestones/>
   <Certifications/>
   <Foundation/>
   <Contact/> 
   
   </main>
 <Footer/>
    
   </>
  )
}

export default App
