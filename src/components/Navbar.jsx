import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
  <div className="logo">
    <img src={logo} alt="Tekisky Logo" />
    <h2>Tekisky Institute</h2>
  </div>

  <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Courses</a></li>
    <li><a href="#">Trainers</a></li>
    <li><a href="#">Reviews</a></li>
    <li><a href="#">Gallery</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

    
    </>
  )
}

export default Navbar