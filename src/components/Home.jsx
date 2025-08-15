import React from 'react'
import Navbar from './Navbar'
import Presentation from './Presentation' 
import Projects from './Projects'
import Stack from './Stack'
import Footer from './Footer'


function Home() {
  return (
    <div className='home-container'>
        <Navbar />
        <Presentation />
        <Stack />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home