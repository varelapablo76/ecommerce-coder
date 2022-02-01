import { useForm } from "react-hook-form";
import { useState } from "react";

const FormTicket =  dataForm => {

    const [userData, SetuserData] = useState ()
    
    const {register, handleSubmit, getValues} = useForm()
    const onSubmit = (data) => {
        SetuserData(data)
        }

    console.log(userData)    
    return (
        <>


            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Primer Nombre' {...register('Nombre')} />
                <input type='number' placeholder='DNI' {...register('DNI')} />
                <input type='mail' placeholder='Email' {...register('E-mail')} />

                <button type='button' onClick={()=>
                    dataForm(userData)
                }></button>
                <input type='submit' />
             </form> 

   
        </>
    )
}
export default FormTicket
/*
     

            

*/