import { useState,useEffect } from "react";
import Items from "./Items";
import { descargaProductos } from "./mocks";
import Spinner from 'react-bootstrap/Spinner'

const ItemList = () => {

    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        
        descargaProductos
        .then(res => setProd(res),
            err => console.log(err))
        .finally(() => setLoading(false))
    }, [])      

        return (
            <div className="d-flex flex-column flex-md-row justify-content-around">
            { loading ? <Spinner animation="grow" /> : 
            prod.map( item => 
                <div key={item.id} className="m-2">
                    <Items 
                    img={item.img}
                    category={item.categoria}
                    title={item.producto}
                    price={item.precio}
                    descripcion={item.descripcion}
                    />
                </div>)
                }
            </div>
            )
        
}
    export default ItemList
