import { useState } from "react"

const ItemCount = ({min, stock}) => {

    const [cantidad, setCantidad] = useState(min)
    const onAdd =() =>{
        cantidad < stock ? setCantidad(cantidad+1) : alert('Stock Insuficiente')
    };

    const downCantidad = () =>{
        cantidad > min ? setCantidad(cantidad-1) : alert('Mínimo de Compra')
    }

    return (
        <>
        <h3>{stock[1]}</h3>
        <p>Cantidad de Productos</p>
        <h3>{cantidad}</h3>
        <div>
            <button onClick={onAdd}>Sumar</button>
            <button onClick={downCantidad}>Restar</button>
        </div>
        </>
    )
}

export default ItemCount