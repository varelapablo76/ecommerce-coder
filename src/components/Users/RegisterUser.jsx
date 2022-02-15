import { useState } from "react"
import { Button, Form, Card } from "react-bootstrap"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signInWithPopup, 
    GoogleAuthProvider,
    signOut,
 } from "firebase/auth"
import {auth} from '../../firebase/dbConfig'

const provider = new GoogleAuthProvider();


const RegisterUser = () => {

    const [registerUser, setRegisterUser] = useState ()
    const [registerPassword, setRegisterPassword] = useState ()

    const [loginUser, setLoginUser] = useState ()
    const [loginPassword, setLoginPassword] = useState ()

    const [updNameUser,setUpdNameUser] = useState('')
    const [updPhoneNumber, setUpdPhoneNumber] = useState()

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

    const loginWithGoogle = () =>{
    
        signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
    

    const logOut = async () => {
        
        await signOut(auth)
    }

    const updateUserName =  (e) => {
        e.preventDefault()
        console.log(updNameUser)
        updateProfile(user, {
            displayName:updNameUser,
        })
        .then(() => {
            console.log('finished')
          }).catch((error) => {
            console.log(error)
          });
    };

    // if (user !== null) {
    //     const nombreUser = user.displayName;
    //     const emailUser = user.email;
    //     const photoUser = user.photoURL;
    //     const emailVerf = user.emailVerified;

    //     const uid = user.uid;
    // }


    return (
        <div className='d-flex justify-content-around flex-wrap'>
            <Button variant='danger' onClick={loginWithGoogle}>Login With Google</Button>
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

            {/* <Form className='col-5' onSubmit={updateUserName}>
                <Form.Group>
                    <h3>User Profile</h3>
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" placeholder={user.displayName} 
                     onChange={(e) => {
                        setUpdNameUser(e.target.value)
                    }} />

                    <Form.Label>Numero Telefónico</Form.Label>
                    <Form.Control type="number" placeholder={user.phoneNumber} 
                     onChange={(e) => {
                        setUpdPhoneNumber(e.target.value)
                    }} />

                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder={user.email} disabled/>

                    <Form.Label>ID Unico de Usuario</Form.Label>
                    <Form.Control type="text" placeholder={user.uid} disabled/>

                    <Button variant="secondary" type='submit'> Actualizar</Button>
                </Form.Group>
            </Form> */}

            <Form className='col-5' onSubmit={login}> 
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
            </Form>

        <Card className='col-9 m-5'>
            <Card.Body>
            <Card.Title>{user ? user.email : 'No hay Usario'}</Card.Title>
  
            <Card.Text>
        {/* {console.log(user.displayName)} <br/> */}
        {user ? user.displayName : 'No hay Nombre'} <br/>
        {user ? user.uid : 'No hay Usario'}
            </Card.Text>
       
        </Card.Body>
            <Button onClick={logOut} disabled={!user} > Cerrar Sesión </Button>
        </Card>

        </div>
    )
}

export default RegisterUser