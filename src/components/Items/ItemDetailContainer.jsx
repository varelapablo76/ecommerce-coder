import {useState, useEffect} from 'react';

import { descargaProductos } from "./mocks";
import Spinner from 'react-bootstrap/Spinner'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = (detail) => {

    const [unit, setUnit] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        descargaProductos
        .then (result => setUnit(result.find (prod => prod.id === 1)))
        .finally (()=> setLoading(false))
        }, [] )


  return (
      <div>
   { loading ? <Spinner animation="grow" /> : 
   <ItemDetail
   img={unit.img}
   category={unit.categoria}
   title={unit.producto}
   price={unit.precio}
   descripcion={unit.descripcion}
   />
   }   
    </div>
  );

};

export default ItemDetailContainer;
