import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom'
import { UsoCarritoContext } from '../../context/cartContext'


import { ImCart } from 'react-icons/im'
import Badge from 'react-bootstrap/Badge'

import logo from './logoFeikIT.svg'

const NavbarStore = () => {

  const {itemsTotal}  = UsoCarritoContext()



    return (
<Navbar bg="light" expand="lg">
  <Container >
    <Navbar.Brand as={Link} to="/">
  <img  src={logo}  width="90"  className="d-inline-block align-top"  alt="FeikIT Store - Marca"  />

    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav " className="justify-content-between">
      <Nav className="ms-auto align-items-center" >
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/productos/remera">Remeras</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/productos/sticker">Stickers</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/carrito">  
          <ImCart className="icon__navbar"/>
          <Badge bg="danger" className="m-1">{itemsTotal()}</Badge>    
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
} 


export default NavbarStore


