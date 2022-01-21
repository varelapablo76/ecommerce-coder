import { useState } from "react";
import { FormSelect } from "react-bootstrap"


export default function Select ({opciones, opSeleccionado}) {

    const [sel, setsel] = useState(1)
    
    function optionSelect (value) {
        console.log(value);
        setsel(value)
        
    
    }
        <FormSelect onChange={(evt) => opSeleccionado(evt.target.value)} >
           
                <option value={opciones.id}> {opciones.opcion}</option>
            
           
        </FormSelect>
    }

    
