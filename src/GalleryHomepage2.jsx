import React from 'react';

import img1 from '../assets/2148926597.jpg';

import img2 from '../assets/2148926651.jpg';
import img3 from '../assets/930.jpg';
import img4 from '../assets/915.jpg';

export default function GalleryHomepage2() {
  return (
    <div className="gallery-homepage-2-container">
      <div className="gallery-2-card-container">
        <img src={img4}></img>
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
      </div>
    </div>
  );
}

