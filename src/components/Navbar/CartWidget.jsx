import { UsoCarritoContext } from "../../context/cartContext";
import "../../App.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import FormTicket from "../forms/FormTicket";
import Modal from 'react-bootstrap/Modal'

import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UseUserContext } from "../../context/userContext";
import { useState } from "react";

const CartWidget = () => {
  
  const { listaCarrito, deleItemCart, emptyCart, valorTotal } =
    UsoCarritoContext();

  const { userShop } = UseUserContext ()
  const [orderID,SetOrderId] = useState ('')

  const [show, SetShow] = useState(false)
  const handleClose = () => SetShow(false);


  const Example = () => {
    
    return (
      <>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Compra Finalizada</Modal.Title>
            </Modal.Header>
          <Modal.Body>Su comprobante es el {orderID}</Modal.Body>
          <Link to='/'>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Link>
        </Modal>
      </>
    );
  }
  
  
    const realizarCompra = async(e) => {
      e.preventDefault()

      let order = {}
  
      order.buyer = 
      {nombre: 'Nombre Testing UserShop',
      email:userShop.email,
      DNI:32139414}
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
      

      const db = getFirestore ()
      const orderCollection = collection(db, 'orders')
      await addDoc(orderCollection, order)
      .then(res => SetOrderId(res.id))
      .catch (err => console.log(err))
      .finally(() => console.log('terminado'))
      .finally(() => SetShow(true))


      console.log(JSON.stringify(orderID))

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

                  <Link to={`/orders/${orderID}`}>
                    <Button onClick={realizarCompra}>Terminar Compra</Button>
                  </Link>
                  <Example />


                </div>
              </div>
            </div>
          ))}

          
        <h2 className="product__content_title d-flex align-self-center">Total: {valorTotal()}</h2>
        </div>
      )}

    
      

    </div>
  );
};

export default CartWidget;
