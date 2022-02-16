import { useForm } from "react-hook-form";
import { useState } from "react";
import { UseUserContext } from "../../context/userContext";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/dbConfig";
import { Link } from "react-router-dom";

const FormTicket = () => {
  //Contexto de Usuario
  const { userShop, updateLogin } = UseUserContext();

  //Seteo de Usuario
  // const [userData, SetuserData] = useState();

  //Manejador de Registros
  // const { register, handleSubmit } = useForm();

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
  //Envio de Información de Registro
  // const onSubmit = (data) => {
  //   SetuserData(data);
  //   createUser(userData);
  //   console.log(data);
  // };

  //Login de Usuario
  const userLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginUser,
        loginPassword
      );

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {userShop ? (
        <div className='d-flex flex-column border'>
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
              <Button variant='outline-primary' type="submit">Iniciar</Button>
            </Form.Group>
          </Form>
          <Link to='/usuario'>
          <p>Registrarte</p>
          
          </Link>
        </>
      )}
    </>
  );
};

export default FormTicket;
