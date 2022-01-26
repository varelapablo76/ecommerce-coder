import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import Spinner from 'react-bootstrap/Spinner'
import ItemDetail from './ItemDetail';



const ItemDetailContainer = (detail) => {

    const [unit, setUnit] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect( () => {

      const db = getFirestore()

      const queryProd = doc (db, 'productos', id)
      getDoc(queryProd)
      .then (res => setUnit ({id: res.id, ...res.data()}))
      .catch(err => err)
      .finally( () => setLoading(false))
      }, [id] )

  return (
      <div>
   { loading ? <Spinner animation="grow" /> : 
   <ItemDetail
   id={unit.id}
   image={unit.image}
   opcion={unit.variante}
   categoryId={unit.categoryId}
   title={unit.title}
   price={unit.price}
   descripcion={unit.description}
   />
   }   
    </div>
  );

};

export default ItemDetailContainer;
