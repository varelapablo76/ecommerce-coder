import { UsoCarritoContext } from "../../context/cartContext";
import "../../App.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import {FormTicket} from "../forms/FormTicket";

import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UseUserContext } from "../../context/userContext";

const CartWidget = () => {
  
  const { userShop } = UseUserContext ()
  const { listaCarrito, deleItemCart, emptyCart, valorTotal } =
    UsoCarritoContext();

  
    const realizarCompra = async() => {

      let order = {}
  
      order.buyer = userShop
      console.log(userShop)

      order.total = valorTotal();
  
      order.items = listaCarrito.map (itemCarrito => {
  
        console.log(itemCarrito)
        const cantidad = itemCarrito.cantidad;
        const id = itemCarrito.id;
        const price = itemCarrito.price*itemCarrito.cantidad;
        const title = itemCarrito.title;
  
        return {id, title, price,cantidad}
      }
      )

      console.log(order)
      console.log(userShop)

      const db = getFirestore ()
      const orderCollection = collection(db, 'orders')
      await addDoc(orderCollection, order)
      .then(res => console.log(res))
      .catch (err => console.log(err))
      .finally(() => console.log('terminado'))
    }

  return (
    <div >
      {listaCarrito.length === 0 ? (
        <div className="d-flex flex-column align-items-center ">
          <h2>No Tienes Productos</h2>
          <Link to="/">
            <Button variant="success"> Comprá Ahora </Button>
          </Link>
        </div>
      ) : (
        <div className="d-flex flex-column  align-items-end container">

          <FormTicket   />
          {listaCarrito.map((prod) => (
            <div
              key={prod.id}
              className="d-flex align-items-center justify-content-around py-3 "
            >
              <img
                className="product__content_imgCart col-md-3"
                src={prod.image}
                alt=""
              />
              <div className="product__content col-md-7 d-flex justify-content-between ">
                <div className="product__content_info  ms-2">
                  <div>
                    <h2 className="product__content_title">{prod.title}</h2>
                    <p className="product__content_title">
                      {" "}
                      Cantidad: {prod.cantidad}
                    </p>
                  </div>
                  <div>
                    <h3 className="product__content_price"> $ {prod.price}</h3>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <Button
                    onClick={() => deleItemCart(prod.id)}
                    variant="outline-secondary"
                    className="m-2"
                  > 
                    <FiTrash />
                  </Button>
                  <Button onClick={emptyCart}>Vaciar Carrito</Button>

                  
                  <Button onClick={realizarCompra}>Terminar Compra</Button>


                </div>
              </div>
            </div>
          ))}

          
        </div>
      )}
                        <h2 className="product__content_title d-flex align-self-center">Total: {valorTotal()}</h2>

    </div>
  );
};

export default CartWidget;
