import React from 'react';
import ppsLogo from "../assets/PPS-logo.jpeg";
import searchLogo from "../assets/search-svgrepo-com (1).svg";
import hamburgerLogo from "../assets/hamburger-menu-svgrepo-com (1).svg";
import { useState } from 'react';

export default function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const toggleOffCanvas = () => {
    setShow(!show);
  };

  return (

        </div>
      </div>
    </>
  );
}