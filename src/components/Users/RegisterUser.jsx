import { useState } from "react"
import { Button, Form } from "react-bootstrap"
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

    const [user, SetUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        SetUser(currentUser)
    })


//registro de usuario
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

//Inicio de Sesión de usuario
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

//Inicio de Sesion con Google
    const loginWithGoogle = () =>{
    
        signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // eslint-disable-next-line
        const token = credential.accessToken;
        // The signed-in user info.
        // eslint-disable-next-line
        const user = result.user;
        // ...
      }).catch((error) => {
        // eslint-disable-next-line
        const errorCode = error.code;
        // eslint-disable-next-line
        const errorMessage = error.message;
        // eslint-disable-next-line
        const email = error.email;
        // The AuthCredential type that was used.
        // eslint-disable-next-line
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
    
//Cierre de Sesión
    const logOut = async () => {        
        await signOut(auth)
    }

//Actualización de Usuario
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

//Formularios para Condicional
    // function FormForUsers () {
    //     <div className='d-flex justify-content-around flex-wrap'>
    //     <Form className='col-5' onSubmit={register}>
    //         <Form.Group>
    //             <Form.Label>Registro de Usuario</Form.Label>
    //             {/* <Form.Control type='name' placeholder="Nombre"
    //             onChange={(e) => {
    //                 setRegisterUser(e.target.value)
    //             }} />
    //             <Form.Control type='number' placeholder="DNI"
    //             onChange={(e) => {
    //                 setRegisterUser(e.target.value)
    //             }} /> */}

    //             <Form.Control type='email' placeholder="correo Electrónico"
    //             onChange={(e) => {
    //                 setRegisterUser(e.target.value)
    //             }} />
    //             <Form.Control type='password' placeholder="Contraseña" 
    //             onChange={(e) => {
    //                 setRegisterPassword(e.target.value)
    //             }} /> 
    //             <Button type='submit'>Registrarse</Button> <br />
    //         </Form.Group> 
    //     </Form>

     
    //     <Form className='col-5' onSubmit={login}> 
    //         <Form.Group >
    //             <Form.Label>Login</Form.Label>
    //             <Form.Control type='email' placeholder="correo Electrónico" 
    //             onChange={(e) => {
    //                 setLoginUser(e.target.value)
    //             }} />
    //             <Form.Control type='password' placeholder="Contraseña"  
    //             onChange={(e) => {
    //                 setLoginPassword(e.target.value)
    //             }} />
    //             <Button type='submit'>Iniciar Sesión</Button>
    //             <Button variant='danger' onClick={loginWithGoogle}>Login With Google</Button>

    //         </Form.Group> 
    //     </Form>
    // </div>
    // }

    // const ProfileUser = () => {
    //         <Form className='col-5' onSubmit={updateUserName}>
    //         <Form.Group>
    //             <h3>User Profile</h3>
    //             <Form.Label>Nombre y Apellido</Form.Label>
    //             <Form.Control type="text" placeholder={user.displayName} 
    //              onChange={(e) => {
    //                 setUpdNameUser(e.target.value)
    //             }} />

    //             <Form.Label>Numero Telefónico</Form.Label>
    //             <Form.Control type="number" placeholder={user.phoneNumber} 
    //              onChange={(e) => {
    //                 setUpdPhoneNumber(e.target.value)
    //             }} />

    //             <Form.Label>Email</Form.Label>
    //             <Form.Control type="email" placeholder={user.email} disabled/>

    //             <Form.Label>ID Unico de Usuario</Form.Label>
    //             <Form.Control type="text" placeholder={user.uid} disabled/>

    //             <Button variant="secondary" type='submit'> Actualizar</Button>
    //         </Form.Group>
    //     </Form> 

    // }
    
    return (

        <div>
        { !user ? 
            <div className='d-flex justify-content-around flex-wrap'>
            <Form className='col-5' onSubmit={register}>
                <Form.Group>
                    <Form.Label>Registro de Usuario</Form.Label>
                    {/* <Form.Control type='name' placeholder="Nombre"
                    onChange={(e) => {
                        setRegisterUser(e.target.value)
                    }} />
                    <Form.Control type='number' placeholder="DNI"
                    onChange={(e) => {
                        setRegisterUser(e.target.value)
                    }} /> */}
    
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
                    <Button type='submit'>Iniciar Sesión</Button>
                    <Button variant='danger' onClick={loginWithGoogle}>Login With Google</Button>
    
                </Form.Group> 
            </Form>
        </div>
         : 
     
            <Form className='col-5' onSubmit={updateUserName}>
            <Form.Group>
                <h3>User Profile</h3>
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder={user.displayName} 
                 onChange={(e) => {
                    setUpdNameUser(e.target.value)
                }} />

                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder={user.email} disabled/>

                <Form.Label>ID Unico de Usuario</Form.Label>
                <Form.Control type="text" placeholder={user.uid} disabled/>
                <Button variant="secondary" type='submit'> Actualizar</Button>
                <Button variant='danger' onClick={logOut}>Cerrar Sesión</Button>
            </Form.Group>
        </Form> 

    
        }
        </div>
    )
    
    
}

export default RegisterUser