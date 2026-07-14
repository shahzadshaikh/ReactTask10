import React from 'react'
import image from '../assets/image.jpg'
import image1 from '../assets/image1.jpg'

const Gallery = () => {
  return (
    <>
    <section className="gallery">
  <h2>Gallery</h2>
  <div className="gallery-grid">
    <img src={image} alt="" />
    <img src={image1} alt="" />
    <img src={image1} alt="" />
    <img src={image1} alt="" />
  </div>
</section>
    </>
  )
}

export default Gallery