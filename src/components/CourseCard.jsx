import React from 'react'


const CourseCard = (props) => {
  return (
    <>
    <div className='course-card'>
        <img src={props.image} alt="Course" />
        <div className='course-content'>
            <h3>{props.name}</h3>
            <p>{props.details}</p>
        </div>
    </div>
    </>
  )
}

export default CourseCard