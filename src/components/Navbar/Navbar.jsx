import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { useState } from "react";

import { Link } from "react-router-dom";
import { UsoCarritoContext } from "../../context/cartContext";

import { ImCart, ImCross, ImUser } from "react-icons/im";
import Badge from "react-bootstrap/Badge";

import logo from "./logoFeikIT.svg";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/dbConfig";

const NavbarStore = () => {
  const { listaCarrito, itemsTotal, deleItemCart, emptyCart } =
    UsoCarritoContext();

  const [user, SetUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    SetUser(currentUser);
  });

  const SidebarCart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
      <>
        <ImCart onClick={handleOpen} />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {listaCarrito.length === 0 ? (
              <div className="d-flex flex-column align-items-center ">
                <h1>Carrito Vacio</h1>
                <Link to="/productos/remeras">
                  <Button variant="warning"> Comprá Ahora </Button>
                </Link>
              </div>
            ) : (
              <>
                {listaCarrito.map((prod) => (
                  <div
                    key={prod.id}
                    className="d-flex flex-column align-items-center py-3 "
                  >
                    <div className="containerProduc d-flex flex-wrap mt-2">
                      <img
                        className="product__content_imgCart "
                        src={prod.image}
                        alt={prod.title}
                      />
                      <div>
                        <h4 className="product__content_title">
                          {prod.title}
                        </h4>
                        <h5 className="product__content_price">
                          $ {prod.price}
                        </h5>
                        <p className="product__content_title">
                          Cantidad: {prod.cantidad}
                        </p>
                        <Button
                          onClick={() => deleItemCart(prod.id)}
                          variant="outline-danger"
                          size="sm"
                        >
                          <ImCross />
                        </Button>
                      </div>
                    </div>

                    <div className="containerButtons d-flex justify-content-between align-items-center">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="m-2"
                        onClick={emptyCart}
                      >
                        Vaciar Carrito
                      </Button>

                      <Link to="/carrito">
                        <Button
                          size="sm"
                          variant="warning"
                          onClick={handleClose}
                        >
                          Terminar Compra
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };

  const SidebarUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const logOut = async () => {
      await signOut(auth);
      setShow(false);
    };
    return (
      <>
        <ImUser onClick={handleOpen} />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Offcanvas.Title className="product__content_title">
              Hola! {user.displayName}
            </Offcanvas.Title>
            <Link to="/usuario">
              <Button className="m-1" variant="outline-secondary">
                Actualizar Datos
              </Button>
            </Link>
            <br />
            <Link to="/">
              <Button className="m-1" variant="outline-danger" onClick={logOut}>
                Cerrar Sesión
              </Button>
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };

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
           <Nav>

        <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/productos/remeras">
              Remeras
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos/stickers">
              Stickers
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos/pines">
              Pines
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos/parches">
              Parches
            </NavDropdown.Item>
          </NavDropdown>
          </Nav>
          <Nav className="ms-auto align-items-center">
            {user ? (
              <SidebarUser />
            ) : (
              <Nav.Link as={Link} to="/usuario">
                Iniciar Sesión
              </Nav.Link>
            )}

            <Nav.Link>
              <SidebarCart className="" />
              {valueItemCart === 0 ? (
                <></>
              ) : (
                <Badge bg="danger" className="m-1">
                  {itemsTotal()}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarStore;
