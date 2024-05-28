import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import examplePortriatPhoto1 from '../assets/pexels-italo-melo-2379004.jpg';
import examplePortriatPhoto2 from '../assets/andrew-power-y9L5-wmifaY-unsplash.jpg';
import examplePortriatPhoto3 from '../assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import examplePortriatPhoto4 from '../assets/jeremy-mcgilvrey-Mum-4dB0VsE-unsplash.jpg';

import mockEmployeeImg from '../assets/mock-image-testimonial-section.jpg';

export default function Reviews() {
  return (
    <>
      <Navbar></Navbar>

      <div className="reviews-content-wrapper">
        <div className="reviews-header-container">
          <h1>Hear From Our Customers!</h1>

          {/* <h1>Discover Why Prodigy Pest Solutions Is The Best!</h1> */}
        </div>

        <div className="reviews-text-photo-container">
          <img src={mockEmployeeImg}></img>

          <div className="reviews-text-container">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi ea, aliquid, quod fugit dolores
              repudiandae, cumque dolorum quo hic repellat deleniti laboriosam aspernatur sit quidem voluptas quia
              officiis dicta! Cupiditate minus perspiciatis nam eum molestiae vero iusto mollitia unde, enim quae quidem
              pariatur modi expedita, a nesciunt tenetur ullam maxime similique! Corporis nam perferendis odio delectus
              provident tempore consectetur. Iure vero nesciunt facilis corrupti ratione dolores quisquam autem, dolor
              inventore? Error eveniet soluta, cumque in ipsum dolorum voluptates, reprehenderit eligendi dolore quia
              obcaecati quibusdam. Repellendus modi laborum nostrum earum"
            </p>

            <p className='review-name-styles'>-Alec Nissen</p>
          </div>
        </div>

        <div className="reviews-text-photo-container">
          <img src={examplePortriatPhoto2}></img>

          <div className="reviews-text-container">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi ea, aliquid, quod fugit dolores
              repudiandae, cumque dolorum quo hic repellat deleniti laboriosam aspernatur sit quidem voluptas quia
              officiis dicta! Cupiditate minus perspiciatis nam eum molestiae vero iusto mollitia unde, enim quae quidem
              pariatur modi expedita, a nesciunt tenetur ullam maxime similique! Corporis nam perferendis odio delectus
              provident tempore consectetur. Iure vero nesciunt facilis corrupti ratione dolores quisquam autem, dolor
              inventore? Error eveniet soluta, cumque in ipsum dolorum voluptates, reprehenderit eligendi dolore quia
              obcaecati quibusdam. Repellendus modi laborum nostrum earum"
            </p>

            <p className='review-name-styles'>-Alec Nissen</p>
          </div>
        </div>




        <div className="reviews-text-photo-container">
          <img src={examplePortriatPhoto3}></img>

          <div className="reviews-text-container">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi ea, aliquid, quod fugit dolores
              repudiandae, cumque dolorum quo hic repellat deleniti laboriosam aspernatur sit quidem voluptas quia
              officiis dicta! Cupiditate minus perspiciatis nam eum molestiae vero iusto mollitia unde, enim quae quidem
              pariatur modi expedita, a nesciunt tenetur ullam maxime similique! Corporis nam perferendis odio delectus
              provident tempore consectetur. Iure vero nesciunt facilis corrupti ratione dolores quisquam autem, dolor
              inventore? Error eveniet soluta, cumque in ipsum dolorum voluptates, reprehenderit eligendi dolore quia
              obcaecati quibusdam. Repellendus modi laborum nostrum earum"
            </p>

            <p className='review-name-styles'>-Alec Nissen</p>
          </div>
        </div>


        <div className="reviews-text-photo-container">
          <img src={examplePortriatPhoto4}></img>

          <div className="reviews-text-container">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi ea, aliquid, quod fugit dolores
              repudiandae, cumque dolorum quo hic repellat deleniti laboriosam aspernatur sit quidem voluptas quia
              officiis dicta! Cupiditate minus perspiciatis nam eum molestiae vero iusto mollitia unde, enim quae quidem
              pariatur modi expedita, a nesciunt tenetur ullam maxime similique! Corporis nam perferendis odio delectus
              provident tempore consectetur. Iure vero nesciunt facilis corrupti ratione dolores quisquam autem, dolor
              inventore? Error eveniet soluta, cumque in ipsum dolorum voluptates, reprehenderit eligendi dolore quia
              obcaecati quibusdam. Repellendus modi laborum nostrum earum"
            </p>

            <p className='review-name-styles'>-Alec Nissen</p>
          </div>
        </div>



      </div>

      <Footer></Footer>
    </>
  );
}
