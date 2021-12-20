import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import logo from './logoFeikIT.svg'

const NavbarStore = () => {
    return (
<Navbar bg="light" expand="lg">
  <Container >
  <img  src={logo}  width="90"  className="d-inline-block align-top"  alt="FeikIT Store - Marca"  />
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav " className="justify-content-between">
      <Nav className="ms-auto" >
        <Nav.Link href="#home">Link 1</Nav.Link>
        <Nav.Link href="#link">Link 2</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Menu</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Menu 1.1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Menu 1.2</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
} 

export default NavbarStore