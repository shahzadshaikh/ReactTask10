import React from 'react'

const TrainerCard = (props) => {
  return (
    <>
        <div className='trainer-card'>
            <img src={props.image} alt="image" />
            <h3>{props.name}</h3>
            <p>{props.detail}</p>
    </div>
    </>
  )
}

export default TrainerCard