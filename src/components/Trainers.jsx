import React from 'react'
import TrainerCard from './TrainerCard'
import image from '../assets/trainer.jpg'

const Trainers = () => {
  return (
    <>
        <section className="trainers">
  <h2>Expert Trainers</h2>
  <div className="trainer-container">
    <TrainerCard image={image} name="Junaid Khan" detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel at incidunt in id quibusdam repellat cupiditate ipsam mollitia iure quia facilis beatae labore doloremque eveniet, delectus consectetur porro sapiente unde?"/>
    <TrainerCard image={image} name="Junaid Khan" detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel at incidunt in id quibusdam repellat cupiditate ipsam mollitia iure quia facilis beatae labore doloremque eveniet, delectus consectetur porro sapiente unde?"/>
    <TrainerCard image={image} name="Junaid Khan" detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel at incidunt in id quibusdam repellat cupiditate ipsam mollitia iure quia facilis beatae labore doloremque eveniet, delectus consectetur porro sapiente unde?"/>
  </div>
</section>
    </>
  )
}

export default Trainers