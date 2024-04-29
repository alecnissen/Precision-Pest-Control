import React from 'react';
import employeeImg from '../assets/edited-profile-pic.png'

export default function MeetYourTeam() {
  return (
    <div className="meet-team-content-wrapper">
      <div className="team-title-subtitle-container">
        <h1>
          Meet Our Expert <span className='pest-control-team-text-styles'>Pest Control Team</span>
        </h1>

        <p>
          Our dedicated team of skilled professionals brings years of expertise in effective pest control solutions.
          Meet our experienced team members below.
        </p>
      </div>


    <div className='team-profile-container'> 

        <div className='team-member-profile-container'> 
            
            <h3>John Smith</h3>
            <img src={employeeImg}></img>
            <p>Termite Technician</p>

            <p>"My Goal is to go above and beyond to help you!"</p>

        </div>

        <div className='team-member-profile-container'> 
            
            <h3>David Williams</h3>
            <img src={employeeImg}></img>
            <p>Wildlife Technician</p>

            <p>"My Goal is to do an excellent job everyday and to get the job done!"</p>

        </div>

        <div className='team-member-profile-container'> 
            
            <h3>Andy Frisella</h3>
            <img src={employeeImg}></img>
            <p>Termite Inspector</p>

            <p>"My Goal is to provide the very best customer service!"</p>

        </div>

        <div className='team-member-profile-container'> 
            
            <h3>Ed Mylett</h3>
            <img src={employeeImg}></img>
            <p>Rodent Expert</p>

            <p>"My Goal is to ensure your home and family are safe!"</p>

        </div>

    </div>



    </div>
  );
}
