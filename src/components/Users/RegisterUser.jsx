import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/dbConfig";

const provider = new GoogleAuthProvider();

const RegisterUser = () => {
  const [registerUser, setRegisterUser] = useState();
  const [registerPassword, setRegisterPassword] = useState();

  const [loginUser, setLoginUser] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const [updNameUser, setUpdNameUser] = useState("");

  const [user, SetUser] = useState({});

  const [modalError, setModalError] = useState(false);
  const handleClose = () => setModalError(false);

  onAuthStateChanged(auth, (currentUser) => {
    SetUser(currentUser);
  });

  //registro de usuario
  const register = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line
      const user = await createUserWithEmailAndPassword(
        auth,
        registerUser,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  //modal error de Inicio Sesion
  const ModalErrorUser = (user) => {
    return (
      <>
        <Modal show={modalError} onHide={handleClose}>
          <div className="containerModal m-3 d-flex flex-column align-items-center">
            <Modal.Title className="text-center">Inicio Incorrecto</Modal.Title>
            <Modal.Body className="text-center">
              Su correo o clave no son correctas. <br /> Intente nuevamente
            </Modal.Body>
            <Link to="/">
              <Button variant="info" onClick={handleClose}>
                Close
              </Button>
            </Link>
          </div>
        </Modal>
      </>
    );
  };

  //Inicio de Sesión de usuario
  const login = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      const user = await signInWithEmailAndPassword(
        auth,
        loginUser,
        loginPassword
      );
    } catch (error) {
      setModalError(true);
    }
  };

  //Inicio de Sesion con Google
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // eslint-disable-next-line
        const token = credential.accessToken;
        // The signed-in user info.
        // eslint-disable-next-line
        const user = result.user;
      })
      .catch((error) => {
        // eslint-disable-next-line
        const errorCode = error.code;
        // eslint-disable-next-line
        const errorMessage = error.message;
        // eslint-disable-next-line
        const email = error.email;
        // eslint-disable-next-line
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  //Cierre de Sesión
  const logOut = async () => {
    await signOut(auth);
  };

  //Actualización de Usuario
  const updateUserName = (e) => {
    e.preventDefault();
    updateProfile(user, {
      displayName: updNameUser,
    })
      .then(() => {
        console.log("finished");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {!user ? (
        <div className="d-flex justify-content-around flex-wrap">
          <Form className="col-5" onSubmit={register}>
            <Form.Group>
              <h3>Registro de Usuario</h3>
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo Electrónico"
                onChange={(e) => {
                  setRegisterUser(e.target.value);
                }}
              />
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
              <Button className="mt-2" variant="dark" type="submit">
                Registrarse
              </Button>
              <br />
            </Form.Group>
          </Form>

          <Form className="col-5" onSubmit={login}>
            <Form.Group>
              <h3>Inicio de Sesión</h3>
              <Form.Label>Usuario</Form.Label>

              <Form.Control
                type="email"
                placeholder="correo Electrónico"
                onChange={(e) => {
                  setLoginUser(e.target.value);
                }}
              />
              <Form.Label>Contraseña</Form.Label>

              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
              <Button className="m-1" type="submit">
                Iniciar Sesión
              </Button>
              <Button
                className="m-1"
                variant="outline-danger"
                onClick={loginWithGoogle}
              >
                Login With Google
              </Button>
            </Form.Group>
          </Form>
          <ModalErrorUser />
        </div>
      ) : (
        <Form
          className=" container d-flex align-items-center"
          onSubmit={updateUserName}
        >
          <Form.Group>
            <h3>Perfil de Usuario</h3>
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder={user.displayName}
              onChange={(e) => {
                setUpdNameUser(e.target.value);
              }}
            />

            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder={user.email} disabled />

            <Form.Label>ID Unico de Usuario</Form.Label>
            <Form.Control type="text" placeholder={user.uid} disabled />

            <Button className="m-1" variant="secondary" type="submit">
             Actualizar
            </Button>
            <Button className="m-1" variant="danger" onClick={logOut}>
              Cerrar Sesión
            </Button>
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default RegisterUser;
