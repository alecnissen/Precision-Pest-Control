import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar-content-wrapper'>

        <div className='dropdown'>
        <button>Services</button>

        <div className='content'> 
            <a href=''>Ants</a>
            <a href=''>Bed Bugs</a>
            <a href=''>Cockroaches</a>
            <a href=''>Fleas</a>
            <a href=''>Mosquito</a>
            <a href=''>Spiders</a>
            <a href=''>Stinging Insects</a>
            <a href=''>Termites</a>
            <a href=''>Ticks</a>
        </div>

        </div>

        <div className='dropdown'>
        <button>Service Areas</button>

        <div className='content'> 
            <a href=''>Delaware County</a>
            <a href=''>Philadelphia</a>
            <a href=''>Chester County</a>
            <a href=''>Montgomery County</a>
            <a href=''>Bucks County</a>
         
        </div>

        </div>
        

        <div className='dropdown'>
        <button>Pest ID</button>

        <div className='content'> 
            <a href=''>Ants</a>
            <a href=''>Bed Bugs</a>
            <a href=''>Boxelder Bugs</a>
            <a href=''>Carpenter Bees</a>
            <a href=''>Cockroaches</a>
            <a href=''>Fleas</a>
            <a href=''>Mice</a>
            <a href=''>Mosquitos</a>
            <a href=''>Rats</a>
            <a href=''>Spiders</a>
            <a href=''>Stinging Pests</a>
            <a href=''>Termites</a>
            <a href=''>Other</a>
        </div>

        </div>



       
        <button>About Us</button>
        <button>Contact</button>



    </div>
  )
}
