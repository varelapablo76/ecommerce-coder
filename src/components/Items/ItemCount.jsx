import { useState } from "react"
import {AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai'

const ItemCount = ({min, stock}) => {

    const [cantidad, setCantidad] = useState(min)


    const upCantidad =() =>{
        cantidad < stock ? setCantidad(cantidad+1) : alert('Stock Insuficiente')
    };

    const downCantidad = () =>{
        cantidad > min ? setCantidad(cantidad-1) : alert('Mínimo de Compra')
    }

    return (
        
        <button className="product__content_stock d-flex flex-wrap justify-content-around align-items-baseline border border-success rounded ">
        <AiFillCaretDown onClick={downCantidad} />
            <p>Cantidad:</p>
            <p className="product__content_price">{cantidad}</p>
            <AiFillCaretUp onClick={upCantidad} /> 
        </button>
    

    )
}

export default ItemCount