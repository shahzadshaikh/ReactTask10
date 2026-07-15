import React from 'react'
import TrainerCard from './TrainerCard'
import image from '../assets/trainer.jpg'
import image1 from '../assets/trainer1.jpg'
import image2 from '../assets/trainer2.jpg'
import image3 from '../assets/trainer3.jpg'
import image4 from '../assets/trainer4.jpg'
import image5 from '../assets/trainer5.jpg'

const Trainers = () => {
  let input = ["Junaid Khan", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at incidunt in id quibusdam repellat cupiditate ipsam mollitia iure quia facilis beatae labore doloremque eveniet, delectus consectetur porro sapiente unde?"
    ,"Rahul Sharma","Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque quidem officia reprehenderit optio esse, eos aspernatur quo beatae harum illo modi et placeat magni totam aliquid natus obcaecati accusantium."
    ,"Priya Verma","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae tenetur soluta rem sit, libero quidem, voluptatibus eius incidunt facere reiciendis, blanditiis ullam maxime dolores. Assumenda debitis ducimus placeat amet nihil?"
    ,"Amit Patel","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nostrum. Maiores, mollitia. Id recusandae distinctio architecto numquam perspiciatis officiis unde quasi? Numquam dolore voluptas beatae explicabo exercitationem et commodi expedita."
    ,"Neha Singh","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas iste cumque qui praesentium expedita ea eos reiciendis laudantium quo facilis maxime, fugit saepe ipsa repellat molestiae similique, aliquid iusto. Nam?"
    ,"Mohit Kumar","Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi vitae adipisci cumque amet facilis blanditiis, minus qui earum ipsam quis vero quo pariatur, eveniet suscipit veritatis temporibus dolore doloremque?"
    ,"Sneha Joshi","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem qui deserunt natus sed suscipit quidem dolores! Quisquam, nihil cupiditate vitae necessitatibus quod quo fuga sint porro tempora suscipit incidunt velit."
  ];
  let input1 = input.map(input=>input);
  return (
    
    <>
        <section className="trainers">
  <h2>Expert Trainers</h2>
  <div className="trainer-container">
    <TrainerCard image={image} name={input1[0]} detail={input1[1]} />
    <TrainerCard image={image1} name={input1[2]} detail={input1[3]}/>
    <TrainerCard image={image2} name={input1[4]} detail={input1[5]}/>

    <TrainerCard image={image3} name={input1[6]} detail={input1[7]} />
    <TrainerCard image={image4} name={input1[8]} detail={input1[9]}/>
    <TrainerCard image={image5} name={input1[10]} detail={input1[11]}/>
  </div>
</section>
    </>
  )
}

export default Trainers