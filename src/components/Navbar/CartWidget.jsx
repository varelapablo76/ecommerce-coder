import { UsoCarritoContext } from '../../context/cartContext'
import '../../App.css';
import Button from 'react-bootstrap/Button'


const CartWidget = () => {

    const {listaCarrito, deleItemCart,emptyCart,valorTotal,itemsTotal}  = UsoCarritoContext()

    return (
        <>
            {listaCarrito.map((prod) => (
            <div key={prod.id} className='d-flex align-items-center justify-content-center'>
                
                <img className="product__content_imgCart col-12 col-md-5" src={prod.img} alt="" />
                <div className="product__content col-12 col-md-6">
                    <div className="product__content_info ms-2">
                        <h2 className="product__content_title">{prod.title}</h2>
                        <h3 className="product__content_price" > {prod.price}</h3>
                        <h2 className="product__content_title"> Cantidad: {prod.cantidad}</h2>
                        <button onClick={()=>deleItemCart(prod.id)}>Eliminar Producto</button>
                   </div>
                </div>
                <Button onClick ={emptyCart}>Vaciar Carrito</Button>
            </div>
            )
            
            )
        }
        
        <h2>Total: {valorTotal()}</h2>
        {console.log(valorTotal())}
        </>

    )
}

export default CartWidget