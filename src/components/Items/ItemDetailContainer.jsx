import {useState, useEffect} from 'react';

import { descargaProductos } from "./mocks";
import Spinner from 'react-bootstrap/Spinner'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = (detail) => {

    const [unit, setUnit] = useState({})
    const [loading, setLoading] = useState(true)

    const {idProd} = useParams()

    useEffect( () => {
      console.log(idProd)
      descargaProductos
      .then (result => setUnit(result.find (item => item.idProd === idProd )))
      .catch(err => console.log(err))    
      .finally (()=> setLoading(false))
      }, [idProd] )


  return (
      <div>
   { loading ? <Spinner animation="grow" /> : 
   <ItemDetail
   id={unit.idProd}
   img={unit.img}
   opcion={unit.variante}
   category={unit.itCategoria}
   title={unit.producto}
   price={unit.precio}
   descripcion={unit.descripcion}
   />
   }   
    </div>
  );

};

export default ItemDetailContainer;
