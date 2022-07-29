import React from 'react'
import NavBar from '../NavBar/NavBar'
import Rooms from '../Rooms/Rooms'
import Banner from '../Banner/Banner'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'

function RoomScreen() {
  return (
    <div>
      <NavBar />
      <Banner title="Our Rooms" url="/" btnText="Return Home" />
      <Search />
      <Rooms />
      <Footer />
    </div>
  )
}

export default RoomScreen