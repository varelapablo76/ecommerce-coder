import { useState,useEffect } from "react";
import Items from "./Items";
import { descargaProductos } from "./mocks";
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom";

const ItemList = () => {



    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(true)

    const {itCategoria} = useParams()

    useEffect(()=>{

        if (itCategoria) {
            descargaProductos
            .then(res => setProd(res.filter(prod => prod.itCategoria === itCategoria)))
            .catch(err => console.log(err))    
            .finally(() => setLoading(false))
    
        } else {
            
            descargaProductos
            .then(res => setProd(res),
                err => console.log(err))
            .finally(() => setLoading(false))
        }
        
        
    }, [itCategoria])      
    
    console.log(itCategoria)

        return (
            <div className="d-flex flex-column flex-wrap flex-md-row justify-content-around">
            { loading ? <Spinner animation="grow" /> : 
            prod.map( item => 
                <div key={item.idProd} 
                    className="m-2">
                        <Items 
                        idProd={item.idProd}
                        img={item.img}
                        category={item.itCategoria}
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
