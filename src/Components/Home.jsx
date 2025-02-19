import React from 'react'
import Navbar from './LandingPage/Navbar/Navbar'
import Mainsection from './LandingPage/Mainsection/Mainsection'
import Feature from './LandingPage/Features/Feature'
import Plan from './LandingPage/Plan/Plan'
import About from './LandingPage/Aboutus/About'
import Footer from './LandingPage/Footer/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Mainsection/>
        <Feature/>
        <Plan/>
        <About/>
        <Footer/>
    </div>
  )
}
