import React from 'react';
import workerImg1 from '../assets/pps-gallery-img1.jpg';
import workerImg2 from '../assets/pps-gallery-img2.jpg';
import workerImg3 from '../assets/pps-gallery-img3.jpg';
import workerImg4 from '../assets/pps-gallery-img4.jpg';

export default function GalleryHomepage() {
  return (
    <div className='gallery-homepage-content-wrapper'>
    

    <img src={workerImg1}></img>
    <img src={workerImg2}></img>
    {/* <img src={workerImg3}></img> */}
    <img src={workerImg4}></img>




    </div>
  )
}
