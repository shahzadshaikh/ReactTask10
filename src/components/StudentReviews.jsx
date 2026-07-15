import React from 'react'
import ReviewCard from './ReviewCard'

const StudentReviews = () => {
  return (
    <>
        <section className="reviews">
  <h2>Student Reviews</h2>
  <div className="review-container">
    <ReviewCard name="Shaikh Shahzad Adil" review="I am glade to be here."/>
    <ReviewCard name="Aman Verma" review="The teaching style is excellent. I learned React from scratch and built multiple projects."/>
    <ReviewCard name="Sneha Patil" review="Assignments and practical sessions helped me understand JavaScript very easily."/>

    <ReviewCard name="Rahul Sharma" review="The trainers explained every topic with real-world examples. Highly recommended."/>
    <ReviewCard name="Priya Deshmukh" review="Best institute for beginners. Practical sessions made learning enjoyable."/>
    <ReviewCard name="Uday" review="Glade to be here."/>
  </div>
</section>
    </>
  )
}

export default StudentReviews