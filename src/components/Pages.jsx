import React from 'react'
import Navbar from './Navbar'
import Courses from './Courses'
import Trainers from './Trainers'
import StudentReviews from './StudentReviews'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import About from './About'

const Pages = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Courses />
    <Trainers />
    <StudentReviews />
    <Gallery />
    <Contact />
    <Footer />
    </>
  )
}

export default Pages