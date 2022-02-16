import ItemList from './ItemList'

import { useState,useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom";
import { collection, getFirestore, query, getDocs, where } from "firebase/firestore";



const ItemListContainer = ({listProduct}) => {

    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryID} = useParams()
    console.log(categoryID)

    useEffect(()=>{

         if (categoryID) {
        const db = getFirestore ()

        const queryCollection= query(collection(db,'productos'), where ('categoryId', '==',categoryID  ) )
        getDocs(queryCollection)
        .then(res => setProd(res.docs.map(prod => ({id: prod.id,...prod.data() }))))
        .catch(err => console.log(err))    
        .finally(() => setLoading(false))
    
         } else {

            const db = getFirestore ()
            const queryCollection = query(collection(db,'productos'),)
            getDocs(queryCollection)
            .then(res => setProd(res.docs.map(prod => ({id: prod.id,...prod.data() }))))

         }
        
        
    }, [categoryID])      
    

    return (
        <div className="d-flex flex-column flex-wrap flex-md-row justify-content-around">
        { loading ? <Spinner animation="grow" /> 
                    : 
                   <ItemList itemsProd={prod}
                    />
            
            }
        </div>
    )
}

export default ItemListContainer