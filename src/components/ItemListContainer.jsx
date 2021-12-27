import ItemCount from './ItemCount'

const ItemListContainer = ({logo, grettings}) => {


    return (
        <>
        <ItemCount min={1} stock={5} />
        {/* <img src={logo} alt="Logo" className="App-logo"/>
        <h2>
            {grettings}
        </h2> */}
        </>
    )
}

export default ItemListContainer