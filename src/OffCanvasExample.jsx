import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from 'react';

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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life, you can have the elements you
          have chosen, like text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


