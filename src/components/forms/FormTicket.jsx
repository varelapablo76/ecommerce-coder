import { useForm } from "react-hook-form";
import { useState } from "react";
import { UseUserContext } from "../../context/userContext";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

export const FormTicket =  () => {

    const [userData, SetuserData] = useState ( )

    // const handleDataFormName = (event) => {
    //     SetuserData({...userData.name, name: event.target.value})
    // }
    // const handleDataFormEmail = (event) => {
    //     SetuserData({...userData.email, email: event.target.value})
    // }
    // const handleDataFormDni = (event) => {
    //     SetuserData({...userData.dni, dni: event.target.value})
    // }

    const {createUser } = UseUserContext ()

    // const handleSubmit = () => {   
    //     createUser(userData)
    //     console.log(userData)
    // }
    
    const {register, handleSubmit  } = useForm()

    const onSubmit = (data) => {
        SetuserData(data)
        createUser (userData)
        console.log(data)


        }

    // console.log( userData)  
    // console.log(' <on FormTicket')  
    return (
        
        
            <Form onSubmit ={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control {...register('text')}   type='text' placeholder="Nombre" />
                    <Form.Control {...register('mail')}   type='email' placeholder="Correo Electrónico" />
                    <Form.Control {...register('number')}  type='number' placeholder="DNI" />
                    <Button type='submit'>Confirmar Registro</Button>
                </Form.Group> 

            </Form>

   
        
    )
}
// export default FormTicket
/*
     

            

*/