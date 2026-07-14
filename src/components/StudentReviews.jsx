import React from 'react'
import ReviewCard from './ReviewCard'

const StudentReviews = () => {
  return (
    <>
        <section className="reviews">
  <h2>Student Reviews</h2>
  <div className="review-container">
    <ReviewCard name="Shaikh Shahzad Adil" review="I am glade to be here."/>
  </div>
</section>
    </>
  )
}

export default StudentReviews