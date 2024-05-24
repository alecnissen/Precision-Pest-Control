import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import philadelphiaImg from '../assets/pexels-trev-takes-photos-11531610.jpg';

export default function ServiceAreas() {
  return (
      <> 
      <Navbar></Navbar>
      
      <div className='service-areas-tab-content-wrapper'> 

        <div className='service-areas-header-wrapper'> 
            
            <div className='service-areas-header-text-container'> 
              <h1>Service Areas</h1>
            </div>

        </div>


        <div className='service-header-text-container'> 

          <h1 className='serve-you-header-text'>We Are Here To Serve You</h1>

          <h1>Proudly Serving The Following Areas </h1>

        </div>


        <div className='service-areas-wrapper'> 

          <div className='service-area-container'>
            <img src={philadelphiaImg}></img>

            <div className='service-area-content-container'> 

            <h1>Philadelphia</h1> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est ratione perferendis voluptas, obcaecati dolorum facere, repellendus quaerat, nam maxime consectetur suscipit consequuntur nemo repudiandae! Magnam perspiciatis esse optio illum!</p>
            


            <ul>
              <li>Fishtown</li>
              <li>Center City</li>
              <li>Northern Liberties</li>
              <li>Chinatown</li>
              <li>Fairmont</li>
              <li>Callowhill</li>
              <li>South Philadelphia</li>
              <li>Rittenhouse</li>
            </ul>


            <h1>And More! </h1>

            </div> 


          </div>






          

        </div>




      </div>
    


      </>
    
  )
}
