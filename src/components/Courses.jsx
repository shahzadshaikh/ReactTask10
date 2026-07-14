import React from 'react'
import CourseCard from './CourseCard'
import Course from '../assets/Course.png'
import Course1 from '../assets/Course1.png'
import Course2 from '../assets/image2.jpg'


const Courses = () => {
  return (
    <>
        <section className="courses">
  <h2>Our Courses</h2>
  <div className="course-container">
        <CourseCard image={Course} name="MERN Full Stack Development" details="Learn the MERN stack: MongoDB, Express, React, and Node.js, to build powerful and modern web applications, Syllabus includes HTML, CSS, JavaScript, React.js, and Node.js. Ideal for aspiring full-stack developers looking to master the latest technologies in web development."/>
        <CourseCard image={Course1} name="MERN Full Stack with Python and DSA" details="Combine the power of the MERN stack with Python and Data Structures & Algorithms (DSA). Learn to build full-stack applications while mastering Python for backend development and DSA for optimizing code performance. Ideal for developers aiming to enhance their skill set with versatile technologies."/>
        <CourseCard image={Course2} name="Data Science" details="Dive into the multidisciplinary field of data science, mastering techniques and tools to extract meaningful insights from data. Topics cover artificial intelligence and machine learning. Perfect for individuals interested in analyzing and interpreting data to drive business decisions."/>
  </div>
</section>
    </>
  )
}

export default Courses