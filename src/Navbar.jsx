import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar-content-wrapper'>

        <div className='dropdown'>
        <button>Services</button>

        <div className='content'> 
            <a href=''>Lorem</a>
            <a href=''>Lorem</a>
            <a href=''>Lorem</a>
        </div>

        </div>


        <button>Service Areas</button>
        <button>Pest ID</button>
        <button>About Us</button>
        <button>Contact</button>
    </div>
  )
}
