import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function OffCanvasExample({ onClose }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//     onClose(); // Call onClose to update the isOffCanvasOpen state in the Navbar component
//   };

//   const toggleShow = () => setShow((s) => !s);



const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Ensure the Offcanvas is initially closed
  }, []);

  const handleClose = () => {
    setShow(false);
    onClose(); // Call onClose to update the isOffCanvasOpen state in the Navbar component
  };

  const toggleShow = () => setShow(!show);





  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        Toggle Offcanvas
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life, you can have the elements you
          have chosen, like text, images, lists, etc. */}
{/* 
          <h1>Services</h1> */}



  <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Services</Accordion.Header>
        <Accordion.Body>

          <a href='#'>
            <h3>Ants</h3>
          </a>

          <a href='#'>
            <h3>Bed Bugs</h3>
          </a>

          <a href='#'>
            <h3>Cockroaches</h3>
          </a>

          <a href='#'>
            <h3>Fleas</h3>
          </a>

          <a href='#'>
            <h3>Mosquito</h3>
          </a>

          <a href='#'>
            <h3>Spiders</h3>
          </a>

          <a href='#'>
            <h3>Stinging Insects</h3>
          </a>

          <a href='#'>
            <h3>Termites</h3>
          </a>

          <a href='#'>
            <h3>Ticks</h3>
          </a>



        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Service Areas</Accordion.Header>
        <Accordion.Body>

        <a href="#"> 
          <h3>Delaware County</h3>
        </a>

        <a href="#"> 
          <h3>Philadelphia</h3>
        </a>

        <a href="#"> 
          <h3>Chester County</h3>
        </a>

        <a href="#"> 
          <h3>Montgomery County</h3>
        </a>

        <a href="#"> 
          <h3>Bucks County</h3>
        </a>


        </Accordion.Body>
      </Accordion.Item>





      <Accordion.Item eventKey="2">
        <Accordion.Header>Pest ID</Accordion.Header>
        <Accordion.Body>

        <a href="#"> 
          <h3>Ants</h3>
        </a>

        <a href="#"> 
          <h3>Bed Bugs</h3>
        </a>

        <a href="#"> 
          <h3>Boxelder Bugs</h3>
        </a>

        <a href="#"> 
          <h3>Carpenter Bees</h3>
        </a>

        <a href="#"> 
          <h3>Cockroaches</h3>
        </a>

        <a href="#"> 
          <h3>Fleas</h3>
        </a>

        <a href="#"> 
          <h3>Mice</h3>
        </a>

        <a href="#"> 
          <h3>Mosquitos</h3>
        </a>

        <a href="#"> 
          <h3>Rats</h3>
        </a>

        <a href="#"> 
          <h3>Spiders</h3>
        </a>


        </Accordion.Body>
      </Accordion.Item>









    </Accordion>


















        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


