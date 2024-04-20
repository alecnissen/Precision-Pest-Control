import React from 'react';
import spiderImg from "../assets/spider-4-svgrepo-com.svg";
import antImg from "../assets/ant-svgrepo-com.svg";
import rodentImg from "../assets/rat-svgrepo-com (1).svg";
import mosquitoImg from "../assets/mosquito-3-svgrepo-com.svg";
import bedbugImg from "../assets/bed-bug-buggy-svgrepo-com.svg";
import fleaImg from "../assets/flea-svgrepo-com.svg";

export default function InsectCards() {
  return (
    <div className='insect-cards-content-wrapper'>

        <div className='insect-cards-container'>
      
        <div className='insect-card'> 
            <img src={spiderImg}></img>
            <h3>Spiders</h3>
        </div>

        <div className='insect-card'> 
            <img src={antImg}></img>
            <h3>Ants</h3>
        </div>

        <div className='insect-card'> 
            <img src={rodentImg}></img>
            <h3>Rodents</h3>
        </div>

        <div className='insect-card'> 
            <img src={mosquitoImg}></img>
            <h3>Mosquitos</h3>
        </div>

        <div className='insect-card'> 
            <img src={bedbugImg}></img>
            <h3>Bed Bugs</h3>
        </div>

        <div className='insect-card'> 
            <img src={fleaImg}></img>
            <h3>Fleas</h3>
        </div>





        </div>


    </div>
  )
}


// make sure the card section is responsive and make sure 2nd header stays sticky 
