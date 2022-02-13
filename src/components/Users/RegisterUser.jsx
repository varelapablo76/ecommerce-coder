import { useState } from "react"
import { Button, Form, Card } from "react-bootstrap"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
 } from "firebase/auth"
import {auth} from '../../firebase/dbConfig'

const RegisterUser = () => {

    const [registerUser, setRegisterUser] = useState ()
    const [registerPassword, setRegisterPassword] = useState ()

    const [loginUser, setLoginUser] = useState ()
    const [loginPassword, setLoginPassword] = useState ()

    const [user, SetUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        SetUser(currentUser)
    })

<<<<<<< HEAD
    // const createProfile = async(e) => {


  
    //     const db = getFirestore ()
    //     const orderCollection = collection(db, 'users')
    //     await addDoc(orderCollection, order)
    //     .then(res => console.log(res))
    //     .catch (err => console.log(err))
    //     .finally(() => console.log('terminado'))
    //   }

=======
>>>>>>> e429b2c8ba5363f376cc889b001efb26cc6ae0d4
    const register = async (e) => {
        e.preventDefault();

        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerUser, 
                registerPassword)

            console.log(user)

        } catch (error) {
            console.log(error.message)
        }
    }

<<<<<<< HEAD
    // const login = async (e) => {
    //     e.preventDefault();
    //     try {
    //     const user = await signInWithEmailAndPassword(
    //         auth, 
    //         loginUser, 
    //         loginPassword)

    //     console.log(user)

    // } catch (error) {
    //     console.log(error.message)
    // }
    // }
=======
    const login = async (e) => {
        e.preventDefault();
        try {
        const user = await signInWithEmailAndPassword(
            auth, 
            loginUser, 
            loginPassword)

        console.log(user)

    } catch (error) {
        console.log(error.message)
    }
    }
>>>>>>> e429b2c8ba5363f376cc889b001efb26cc6ae0d4

    const logOut = async () => {
        
        await signOut(auth)
    }
<<<<<<< HEAD

    // if (user !== null) {
    //     const nombreUser = user.displayName;
    //     const emailUser = user.email;
    //     const photoUser = user.photoURL;
    //     const emailVerf = user.emailVerified;

    //     const uid = user.uid;
    // }


=======
>>>>>>> e429b2c8ba5363f376cc889b001efb26cc6ae0d4
    return (
        <div className='d-flex justify-content-around flex-wrap'>
            <Form className='col-5' onSubmit={register}>
                <Form.Group>
                    <Form.Label>Registro de Usuario</Form.Label>
<<<<<<< HEAD
                    <Form.Control type='name' placeholder="Nombre"
                    onChange={(e) => {
                        setRegisterUser(e.target.value)
                    }} />
                    <Form.Control type='number' placeholder="DNI"
                    onChange={(e) => {
                        setRegisterUser(e.target.value)
                    }} />

=======
>>>>>>> e429b2c8ba5363f376cc889b001efb26cc6ae0d4
                    <Form.Control type='email' placeholder="correo Electrónico"
                    onChange={(e) => {
                        setRegisterUser(e.target.value)
                    }} />
                    <Form.Control type='password' placeholder="Contraseña" 
                    onChange={(e) => {
                        setRegisterPassword(e.target.value)
                    }} /> 
                    <Button type='submit'>Registrarse</Button> <br />
                </Form.Group> 
            </Form>
<<<<<<< HEAD

            {/* <Form className='col-5' onSubmit={login}> 
=======
            <Form className='col-5' onSubmit={login}> 
>>>>>>> e429b2c8ba5363f376cc889b001efb26cc6ae0d4
                <Form.Group >
                    <Form.Label>Login</Form.Label>
                    <Form.Control type='email' placeholder="correo Electrónico" 
                    onChange={(e) => {
                        setLoginUser(e.target.value)
                    }} />
                    <Form.Control type='password' placeholder="Contraseña"  
                    onChange={(e) => {
                        setLoginPassword(e.target.value)
                    }} />
                    <Button type='submit'>Iniciar</Button>
                </Form.Group> 
<<<<<<< HEAD
            </Form> */}
=======
            </Form>
>>>>>>> e429b2c8ba5363f376cc889b001efb26cc6ae0d4

        <Card className='col-9 m-5'>
            <Card.Body>
            <Card.Title>{user ? user.email : 'No hay Usario'}</Card.Title>
<<<<<<< HEAD
  
            <Card.Text>
        {console.log(user.displayName)} <br/>
        {user.email} <br/>
        {user.photoURL} <br/>
        {user.emailVerified} <br/>
        {user.uid}
            </Card.Text>
       
        </Card.Body>
=======
            </Card.Body>
>>>>>>> e429b2c8ba5363f376cc889b001efb26cc6ae0d4
            <Button onClick={logOut} disabled={!user} > Cerrar Sesión </Button>
        </Card>

        </div>
    )
}

export default RegisterUser