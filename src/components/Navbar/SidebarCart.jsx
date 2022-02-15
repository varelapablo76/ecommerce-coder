import { Button } from "react-bootstrap"
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from "react"
import { ImCart,ImGift } from "react-icons/im";



const SidebarCart = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
      <>
          <ImCart onClick={handleOpen}  />

       
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default SidebarCart