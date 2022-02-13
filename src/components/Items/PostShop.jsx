import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import Spinner from 'react-bootstrap/Spinner'

const PostShop = (idShop) => {

    const [order, SetOrder] = useState({})

    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    console.log(id + 'id Order maybe')


    useEffect( () => {

        const db = getFirestore()
  
        const queryIDShop = doc (db, 'orders', id)
        getDoc(queryIDShop)
        .then (res => SetOrder ({id: res.id, ...res.data()}))
        .catch(err => err)
        .finally( () => setLoading(false))
        }, [id] )

return (
<>
{loading ? 

<Spinner animation="grow" /> 
:
<div>
    <h1>Compra Finalizada</h1>
    <p>Su comprobante es el {order.id} </p>
</div>

}

</>

)

}

export default PostShop