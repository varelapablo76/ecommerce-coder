import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from "react-bootstrap";
import { useState } from "react"

import { Link } from "react-router-dom";
import { UsoCarritoContext } from "../../context/cartContext";

import { ImCart,ImGift, ImCross } from "react-icons/im";
import Badge from "react-bootstrap/Badge";

import logo from "./logoFeikIT.svg";

const NavbarStore = () => {

  const { listaCarrito, itemsTotal,deleItemCart,emptyCart } = UsoCarritoContext();

  
  const SidebarCart = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
      <>
          <ImGift onClick={handleOpen}  />

       
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tu Compra</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

          {listaCarrito.map((prod) => (
            <div
              key={prod.id}
              className="d-flex align-items-center justify-content-around py-3 "
            >
              <img
                className="product__content_imgCart col-md-3"
                src={prod.image}
                alt=""
              />
              <div className=" ">
                <div className="  ms-2">
                  <div>
                    <h2 className="product__content_title">{prod.title}</h2>
                    <p className="product__content_title">
                      {" "}
                      Cantidad: {prod.cantidad}
                    </p>
                  </div>
                  <div>
                    <h3 className="product__content_price"> $ {prod.price}</h3>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <Button
                    onClick={() => deleItemCart(prod.id)}
                    variant="outline-secondary"
                    className="m-2"
                  > 
                    <ImCross />
                  </Button>
                  <Button onClick={emptyCart}>Vaciar Carrito</Button>

                  <Link to='/carrito'>
                    <Button>Terminar Compra</Button>
                  </Link>


                </div>
              </div>
            </div>
          ))}
          {/* <h2 className="product__content_title d-flex align-self-center">Total: {valorTotal()}</h2> */}

        

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  



  const valueItemCart = itemsTotal();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="90"
            className="d-inline-block align-top"
            alt="FeikIT Store - Marca"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="justify-content-between"
        >
          <Nav className="ms-auto align-items-center">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos/remeras">
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/stickers">
                Stickers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/carrito">
              <ImCart className="icon__navbar" />
              {valueItemCart === 0 ? (
                <></>
              ) : (
                <Badge bg="danger" className="m-1">
                  {itemsTotal()}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link>
              <SidebarCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarStore;
