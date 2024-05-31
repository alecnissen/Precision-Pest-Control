import React from 'react';
import employeeImg from '../assets/edited-profile-pic.png';
import mockEmployeeImg from '../assets/mock-image-testimonial-section.jpg';
import pestControlSvgImg from '../assets/10780550_19198459.svg';

import pestControlWorkerImg from '../assets/5972364_21696.jpg';

import pestControlTeamImg from '../assets/5972364_21696.jpg';


import examplePortriatPhoto2 from '../assets/andrew-power-y9L5-wmifaY-unsplash.jpg';
import examplePortriatPhoto3 from '../assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import examplePortriatPhoto4 from '../assets/jeremy-mcgilvrey-Mum-4dB0VsE-unsplash.jpg';

import worker2 from '../assets/pexels-olly-3777557.jpg';
import worker3 from '../assets/pexels-divinetechygirl-1181391.jpg';
import worker4 from '../assets/pexels-teddyjmodel-2955375.jpg';

export default function MeetYourTeam() {
  return (
    <div className="meet-team-content-wrapper">



      <div className='team-title-subtitle-wrapper'>

      <div className="team-title-subtitle-container">
        <h1>
          Meet Our Expert 

          <br></br>
          
          <span className='pest-control-team-text-styles'>Pest Control Team</span>
        </h1>

        <p>
          Our dedicated team of skilled professionals brings years of expertise in effective pest control solutions.
          Meet our experienced team members below.
        </p>
      </div>


      {/* <img src={pestControlWorkerImg} className='pest-control-worker-img'></img> */}

      <img src={pestControlTeamImg} className='pest-control-team-img'></img>



      </div>




    <div className='team-profile-container'> 

        <div className='team-member-profile-container'> 

        <div className='team-member-profile-inner-container'> 
            
            <h3>John Smith</h3>

            <div className='team-member-img-container'> 
            <img src={mockEmployeeImg}></img>
            </div>


            <div className='team-member-description-text-container'> 
            
            <p>Termite Technician</p>



            <p>"My Goal is to go above and beyond to help you!"</p>


            </div>

            </div>



        </div>

        <div className='team-member-profile-container'> 



        <div className='team-member-profile-inner-container'> 
            
            <h3>David Williams</h3>

            <div className='team-member-img-container'> 
            <img src={worker2}></img>
            </div>
            
            
            
            <div className='team-member-description-text-container'>
            
            <p>Wildlife Technician</p>



            <p>"My Goal is to do an excellent job everyday and to get the job done!"</p>
            </div>


            </div> 



        </div>

        <div className='team-member-profile-container'> 

          <div className='team-member-profile-inner-container'> 
            
            <h3>Andy Frisella</h3>

            <div className='team-member-img-container'> 
            <img src={worker3}></img>
            </div>



            <p>Termite Inspector</p>

            <p>"My Goal is to provide the very best customer service!"</p>



            </div>





        </div>

        <div className='team-member-profile-container'> 

            <div className='team-member-profile-inner-container'> 
            
            <h3>Ed Mylett</h3>



            <div className='team-member-img-container'> 
            <img src={worker4}></img>
            </div>
            
            
            
            
            
            <p>Rodent Expert</p>





            <p>"My Goal is to ensure your home and family are safe!"</p>

            </div>


        </div>

    </div>



    </div>
  );
}
