const ItemListContainer = ({logo, grettings}) => {


    return (
        <>
        <img src={logo} alt="Logo" className="App-logo"/>
        <h2>
            {grettings}
        </h2>
        </>
    )
}

export default ItemListContainer