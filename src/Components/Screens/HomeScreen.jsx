import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import FeaturedRoom from '../FeaturedRoom/FeaturedRoom'
import Footer from '../Footer/Footer'

function HomeScreen() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <FeaturedRoom />
      <Footer />
    </div>
  )
}

export default HomeScreen