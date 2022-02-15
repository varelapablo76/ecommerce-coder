import { UsoCarritoContext } from "../../context/cartContext";
import "../../App.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import FormTicket from "../forms/FormTicket";
import Modal from 'react-bootstrap/Modal'

import { Link } from "react-router-dom";
import { UseUserContext } from "../../context/userContext";
import { useState } from "react";
import ItemCart from "../Items/ItemCart";

const CartWidget = () => {
  
  const { listaCarrito, deleItemCart, emptyCart, valorTotal } =
    UsoCarritoContext();

  const { userShop } = UseUserContext ()
  const [orderID,SetOrderId] = useState ('')

  const [show, SetShow] = useState(false)
  const handleClose = () => {
    emptyCart()
    SetShow(false)
  };


  const ModalFinishedOrder = () => {
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

      //make order
      let order = {}
  
      order.buyer = 
      {nombre: userShop.displayName,
      email:userShop.email,
      }
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
      
      //make order in firestore
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
        <div className="container">

          <FormTicket   />

          {listaCarrito.map((prod) => (
            <ItemCart 
            prod={prod}
            key={prod.id}
            image={prod.image}
            title={prod.title}
            cantidad={prod.cantidad}
            price={prod.price}
            id={prod.id}/>
          ))}
            
          <div className='d-flex justify-content-between'>
          
          <Button onClick={emptyCart}>Vaciar Carrito</Button>
          <Button onClick={realizarCompra} disabled={!userShop}>Terminar Compra</Button>

            </div> 

          <ModalFinishedOrder />
          <h2 className="product__content_title">Total: { valorTotal() }</h2>
          
            </div>
          )

          }  
    
    
      

    </div>
  );
};

export default CartWidget;
