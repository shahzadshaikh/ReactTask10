import React from 'react'
import CourseCard from './CourseCard'
import Course from '../assets/Course.png'
import Course1 from '../assets/Course1.png'
import Course2 from '../assets/image2.jpg'
import Course3 from '../assets/Course3.jpg'
import Course4 from '../assets/Course4.jpg'
import Course5 from '../assets/Course5.jpg'


const Courses = () => {

  let input = ["MERN Full Stack Development", "Learn the MERN stack: MongoDB, Express, React, and Node.js, to build powerful and modern web applications, Syllabus includes HTML, CSS, JavaScript, React.js, and Node.js. Ideal for aspiring full-stack developers looking to master the latest technologies in web development."
    ,"MERN Full Stack with Python and DSA","Combine the power of the MERN stack with Python and Data Structures & Algorithms (DSA). Learn to build full-stack applications while mastering Python for backend development and DSA for optimizing code performance. Ideal for developers aiming to enhance their skill set with versatile technologies."
    ,"React JS Development","JSX, Components, Hooks, Routing, Redux, Context API and project deployment"
    ,"HTML5","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nostrum. Maiores, mollitia. Id recusandae distinctio architecto numquam perspiciatis officiis unde quasi? Numquam dolore voluptas beatae explicabo exercitationem et commodi expedita."
    ,"CSS3","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas iste cumque qui praesentium expedita ea eos reiciendis laudantium quo facilis maxime, fugit saepe ipsa repellat molestiae similique, aliquid iusto. Nam?"
    ,"JavaScript","Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi vitae adipisci cumque amet facilis blanditiis, minus qui earum ipsam quis vero quo pariatur, eveniet suscipit veritatis temporibus dolore doloremque?"
    ,"React JS","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem qui deserunt natus sed suscipit quidem dolores! Quisquam, nihil cupiditate vitae necessitatibus quod quo fuga sint porro tempora suscipit incidunt velit."
  ];
  let input1 = input.map(input=>input);
  return (
    <>
        <section className="courses">
  <h2>Our Courses</h2>
  <div className="course-container">
        <CourseCard image={Course} name={input1[0]} details={input1[1]}/>
        <CourseCard image={Course1} name={input1[2]} details={input1[3]}/>
        <CourseCard image={Course2} name={input1[4]} details={input1[5]}/>

        <CourseCard image={Course3} name={input1[6]} details={input1[7]}/>
        <CourseCard image={Course4} name={input1[8]} details={input1[9]}/>
        <CourseCard image={Course5} name={input1[10]} details={input1[11]}/>
  </div>
</section>
    </>
  )
}

export default Courses