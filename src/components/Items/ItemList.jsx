import { useState,useEffect } from "react";
import Items from "./Items";
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom";
import { collection, getFirestore, query, getDocs, where } from "firebase/firestore";

const ItemList = () => {

    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryID} = useParams()

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
            { loading ? <Spinner animation="grow" /> : 
            prod.map( item => 
                <div key={item.id} 
                    className="m-2">
                        <Items 
                        id={item.id}
                        image={item.image}
                        categoryId={item.categoryId}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        />
                </div>)
                }
            </div>
            )
        
}
    export default ItemList
