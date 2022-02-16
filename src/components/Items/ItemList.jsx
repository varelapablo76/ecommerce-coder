import {memo} from 'react'
import Items from './Items'
// const ItemList = memo (productos) => {


//         return (
//             <>
//             {productos.map(prod => <Items prod={card}/>)}
//             </>
          
//             )
        
// };

// (oldProps, newProps) => oldProps.productos.length===newProps.productos.length
    

// export default ItemList

const ItemList = memo (
    
    ( {itemsProd} ) => {
    
        return (
            <>
                { itemsProd.map (prod => <Items card={prod} key={prod.id} /> ) }
            </>
        )
    }
    )
    // ,(oldProd, newProd) => console.log(oldProd)

export default ItemList
