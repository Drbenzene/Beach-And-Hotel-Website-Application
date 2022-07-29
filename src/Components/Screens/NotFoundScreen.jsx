import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import NotFound from '../Assets/notFound.png'
import { Link } from 'react-router-dom'

function NotFoundScreen() {
  return (
    <div>
        <NavBar />
        <Link to="/">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={NotFound} alt="Page Not Found" width="900px"/>
        </div>
        </Link>

        <Footer />
        </div>
  )
}

export default NotFoundScreen