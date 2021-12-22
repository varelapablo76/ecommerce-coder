import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
// import Nav.Link from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Navbar'


import CartWidget from './CartWidget.jsx'
import logo from './logoFeikIT.svg'

const NavbarStore = () => {
    return (
<Navbar bg="light" expand="lg">
  <Container >
  <img  src={logo}  width="90"  className="d-inline-block align-top"  alt="FeikIT Store - Marca"  />
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav " className="justify-content-between">
      <Nav className="ms-auto align-items-center" >
        <Nav.Link href="#home">Ofertas</Nav.Link>
        <Nav.Link href="#link">Mis Compras</Nav.Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Tecnologías</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Electrodomésticos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Construcción</NavDropdown.Item>
        </NavDropdown>
        <CartWidget />
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
} 

export default NavbarStore


