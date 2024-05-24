import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import philadelphiaImg from '../assets/pexels-trev-takes-photos-11531610.jpg';
import delcoImg from '../assets/chris-henry-rUMzI6Vn7hU-unsplash.jpg';
import chesterImg from '../assets/dan-mall-HL4LuaElk2I-unsplash (1).jpg';
import montgomeryCountyImg from '../assets/jason-pischke-TYrQCzejRxE-unsplash.jpg';
import bucksCountyImg from '../assets/luke-hodde-9MY4Ji2w6Zg-unsplash.jpg';

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
            <img src={delcoImg}></img>

            <div className='service-area-content-container'> 

            <h1>Delaware County</h1> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est ratione perferendis voluptas, obcaecati dolorum facere, repellendus quaerat, nam maxime consectetur suscipit consequuntur nemo repudiandae! Magnam perspiciatis esse optio illum!</p>
            


            <ul>
              <li>Ridley</li>
              <li>Morton</li>
              <li>Springfield</li>
              <li>Darby</li>
              <li>Media</li>
              <li>Brookhaven</li>
              <li>Clifton Heights</li>
              <li>Prospect Park</li>
            </ul>


            <h1>And More! </h1>

            </div> 


          </div>




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




          <div className='service-area-container'>
            <img src={chesterImg}></img>

            <div className='service-area-content-container'> 

            <h1>Chester County</h1> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est ratione perferendis voluptas, obcaecati dolorum facere, repellendus quaerat, nam maxime consectetur suscipit consequuntur nemo repudiandae! Magnam perspiciatis esse optio illum!</p>
            


            <ul>
              <li>West Chester</li>
              <li>Dowingtown</li>
              <li>Malvern</li>
              <li>Coatesville</li>
              <li>West Grove</li>
              <li>Spring City</li>
              <li>Parkesburg</li>
              <li>Atglen</li>
            </ul>


            <h1>And More! </h1>

            </div> 


          </div>






          <div className='service-area-container'>
            <img src={montgomeryCountyImg}></img>

            <div className='service-area-content-container'> 

            <h1>Montgomery County</h1> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est ratione perferendis voluptas, obcaecati dolorum facere, repellendus quaerat, nam maxime consectetur suscipit consequuntur nemo repudiandae! Magnam perspiciatis esse optio illum!</p>
            


            <ul>
              <li>East Norriton</li>
              <li>Abington</li>
              <li>Horsham</li>
              <li>Limerick</li>
              <li>Cheltenham</li>
              <li>Lansdale</li>
              <li>Conshohocken</li>
              <li>King Of Prussia</li>
            </ul>


            <h1>And More! </h1>

            </div> 


          </div>




          <div className='service-area-container'>
            <img src={bucksCountyImg}></img>

            <div className='service-area-content-container'> 

            <h1>Bucks County</h1> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est ratione perferendis voluptas, obcaecati dolorum facere, repellendus quaerat, nam maxime consectetur suscipit consequuntur nemo repudiandae! Magnam perspiciatis esse optio illum!</p>
            


            <ul>
              <li>Doylestown</li>
              <li>Bensalem</li>
              <li>Richboro</li>
              <li>Quakertown</li>
              <li>Levittown</li>
              <li>Perkasie</li>
              <li>New Hope</li>
              <li>Buckingham</li>
            </ul>


            <h1>And More! </h1>

            </div> 


          </div>

















        </div>




      </div>



      <Footer></Footer>
    


      </>
    
  )
}
