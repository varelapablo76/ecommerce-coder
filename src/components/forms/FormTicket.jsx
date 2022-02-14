import { useForm } from "react-hook-form";
import { useState } from "react";
import { UseUserContext } from "../../context/userContext";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

import { 
    signInWithEmailAndPassword,
    onAuthStateChanged,
 } from "firebase/auth"

import {auth} from '../../firebase/dbConfig'


 const FormTicket =  () => {

 //Contexto de Usuario   
    const {userShop, updateLogin, createUser } = UseUserContext ()

 //Seteo de Usuario   
    const [userData, SetuserData] = useState ( )

//Manejador de Registros
    const {register, handleSubmit  } = useForm()

//Manejo de Login Firebase
    const [loginUser, setLoginUser] = useState ()
    const [loginPassword, setLoginPassword] = useState ()

//Estado de User Firebase   
    const [user, SetUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        // SetUser(currentUser)
        updateLogin(currentUser)
    })
//Envio de Información de Registro
    const onSubmit = (data) => {
        SetuserData(data)
        createUser (userData)
        console.log(data)

        }

//Login de Usuario
        const userLogin = async (e) => {
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



    return (
        <>        
        { userShop ?  
        <>
        <h1>Comprar como</h1>
        <h3>{userShop.email} userShop email</h3>
        <h3>{user.email} user email</h3>

        </>
           : 
            <>
           <Form className='col-5' onSubmit={userLogin}> 
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

           <Form onSubmit ={handleSubmit(onSubmit)}>
           <Form.Group>
               <Form.Control {...register('text')}   type='text' placeholder="Nombre" />
               <Form.Control {...register('number')}  type='number' placeholder="DNI" />
               <Form.Control {...register('mail')}   type='email' placeholder="Correo Electrónico" />
               <Form.Control type='password' placeholder='Contraseña' />
               <Button type='submit'>Confirmar Registro</Button>
           </Form.Group> 
       
       </Form>        

            </>
    }
    </>
        )

}
        


   
        

export default FormTicket
