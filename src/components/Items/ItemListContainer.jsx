import ItemCount from './ItemCount'
import ItemList from './ItemList'


const ItemListContainer = ({logo, grettings}) => {


    return (
        <>
        <ItemList />
        <ItemCount min={1} stock={5} />
        </>
    )
}

export default ItemListContainer