import React from 'react'

const ReviewCard = (props) => {
  return (
    <>
        <h4>{props.name}</h4>
        <p>{props.review}</p>
    </>
  )
}

export default ReviewCard