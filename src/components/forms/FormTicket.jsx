import { useState } from "react";
import { UseUserContext } from "../../context/userContext";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/dbConfig";
import { Link } from "react-router-dom";

const FormTicket = () => {
  const [modalError, setModalError] = useState(false);
  const handleClose = () => setModalError(false);

  const ModalErrorUser = (user) => {
    return (
      <>
        <Modal show={modalError} onHide={handleClose}>
          <div className="containerModal m-3 d-flex flex-column align-items-center">
            <Modal.Title className="text-center">Inicio Incorrecto</Modal.Title>
            <Modal.Body className="text-center">
              Su correo o clave no son correctas. <br /> Intente nuevamente
            </Modal.Body>

            <Button variant="info" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  };

  //Contexto de Usuario
  const { userShop, updateLogin } = UseUserContext();

  //Manejo de Login Firebase
  const [loginUser, setLoginUser] = useState();
  const [loginPassword, setLoginPassword] = useState();

  //Manejo LogOut Firebase
  const logOutUser = async () => {
    await signOut(auth);
  };

  //Estado de User Firebase
  // eslint-disable-next-line
  const [user, SetUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    // SetUser(currentUser)
    updateLogin(currentUser);
  });

  //Login de Usuario
  const userLogin = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      const user = await signInWithEmailAndPassword(
        auth,
        loginUser,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
      setModalError(true);
    }
  };

  return (
    <>
      {userShop ? (
        <div className="d-flex flex-column ">
          <h5>Comprar como</h5>
          <p>{userShop.displayName} </p> <p>{userShop.email} </p>
          <Button variant="primary" onClick={logOutUser}>
            Cerrar Sesión
          </Button>
        </div>
      ) : (
        <>
          <Form onSubmit={userLogin}>
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo Electrónico"
                onChange={(e) => {
                  setLoginUser(e.target.value);
                }}
              />
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
              <Button variant="outline-primary" type="submit">
                Iniciar
              </Button>
            </Form.Group>
          </Form>
          <Link to="/usuario">
            <p>Registrarte</p>
          </Link>
          <ModalErrorUser />
        </>
      )}
    </>
  );
};

export default FormTicket;
