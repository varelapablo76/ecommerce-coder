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

    // const createProfile = async(e) => {


  
    //     const db = getFirestore ()
    //     const orderCollection = collection(db, 'users')
    //     await addDoc(orderCollection, order)
    //     .then(res => console.log(res))
    //     .catch (err => console.log(err))
    //     .finally(() => console.log('terminado'))
    //   }

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

    const logOut = async () => {
        
        await signOut(auth)
    }

    // if (user !== null) {
    //     const nombreUser = user.displayName;
    //     const emailUser = user.email;
    //     const photoUser = user.photoURL;
    //     const emailVerf = user.emailVerified;

    //     const uid = user.uid;
    // }


    return (
        <div className='d-flex justify-content-around flex-wrap'>
            <Form className='col-5' onSubmit={register}>
                <Form.Group>
                    <Form.Label>Registro de Usuario</Form.Label>
                    <Form.Control type='name' placeholder="Nombre"
                    onChange={(e) => {
                        setRegisterUser(e.target.value)
                    }} />
                    <Form.Control type='number' placeholder="DNI"
                    onChange={(e) => {
                        setRegisterUser(e.target.value)
                    }} />

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

            {/* <Form className='col-5' onSubmit={login}> 
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
            </Form> */}

        <Card className='col-9 m-5'>
            <Card.Body>
            <Card.Title>{user ? user.email : 'No hay Usario'}</Card.Title>
  
            <Card.Text>
        {console.log(user.displayName)} <br/>
        {user.email} <br/>
        {user.photoURL} <br/>
        {user.emailVerified} <br/>
        {user.uid}
            </Card.Text>
       
        </Card.Body>
            <Button onClick={logOut} disabled={!user} > Cerrar Sesión </Button>
        </Card>

        </div>
    )
}

export default RegisterUser