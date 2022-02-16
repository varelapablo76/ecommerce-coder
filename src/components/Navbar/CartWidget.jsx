import { UsoCarritoContext } from "../../context/cartContext";
import "../../App.css";
import { addDoc, collection, getFirestore , query, where, documentId, writeBatch,getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import FormTicket from "../forms/FormTicket";
import Modal from "react-bootstrap/Modal";

import { Link } from "react-router-dom";
import { UseUserContext } from "../../context/userContext";
import { useState } from "react";
import ItemCart from "../Items/ItemCart";

const CartWidget = () => {
  const { listaCarrito, emptyCart, valorTotal } =
    UsoCarritoContext();

  const { userShop } = UseUserContext();
  const [orderID, SetOrderId] = useState("");

  const [show, SetShow] = useState(false);
  const handleClose = () => {
    emptyCart();
    SetShow(false);
  };

  const ModalFinishedOrder = () => {
    return (
      <>
        <Modal show={show} onHide={handleClose} centered  >
          <div className="containerModal m-3 d-flex flex-column align-items-center">

            <Modal.Title className='text-center'>Compra Finalizada</Modal.Title>
          <Modal.Body className='text-center'>Su comprobante es el {orderID}</Modal.Body>

          <Link to="/">
            <Button variant="info" onClick={handleClose}>
              Close
            </Button>
          </Link>
          </div>
        </Modal>

      </>
    );
  };

  const realizarCompra = async (e) => {
    e.preventDefault();

    //make order
    let order = {};

    order.buyer = { nombre: userShop.displayName, email: userShop.email };
    order.total = valorTotal();

    order.items = listaCarrito.map((itemCarrito) => {
      const cantidad = itemCarrito.cantidad;
      const id = itemCarrito.id;
      const price = itemCarrito.price * itemCarrito.cantidad;
      const title = itemCarrito.title;

      return { id, title, price, cantidad };
    });

    //make order in firestore
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    await addDoc(orderCollection, order)
      .then((res) => SetOrderId(res.id))
      .catch((err) => console.log(err))
      .finally(() => console.log("terminado"))
      .finally(() => SetShow(true));

    //update Stock
    const collectionFirebase = collection(db, 'productos')

    const stockCollectionFirebase = query(
        collectionFirebase, 
        where( documentId() , 'in', listaCarrito.map(producto => producto.id))          
    ) 

    const batch = writeBatch(db)       
        
        await getDocs(stockCollectionFirebase)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - listaCarrito.find(item => item.id === res.id).cantidad
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()


  };

  return (
    <div className='d-flex justify-content-center '>
      {listaCarrito.length === 0 ? (
        <div className="d-flex flex-column align-items-center ">
          <h2>No Tienes Productos</h2>
          <Link to="/">
            <Button variant="outline-success"> Comprá Ahora </Button>
          </Link>
        </div>
      ) : (
        <div className="container row d-flex justify-content-between align-items-center">
          <div className=' col-7'>
          <h3>Tu Lista de Compra</h3>
          {listaCarrito.map((prod) => (
            <ItemCart
              key={prod.id}
              image={prod.image}
              title={prod.title}
              cantidad={prod.cantidad}
              price={prod.price}
              id={prod.id}
            />
          ))}

          </div>

          <div className="d-flex col-3 flex-column align-items-end container">
            <h2 className="product__content_title">Total: $ {valorTotal()}</h2>
            <FormTicket />

            <div className='d-flex align-items-center'>

              <Button variant='outline-secondary' className='m-2' onClick={emptyCart}>Vaciar Carrito</Button>
              <Button variant='success' onClick={realizarCompra} disabled={!userShop}>
                Terminar Compra
              </Button>
            </div>
          </div>

          <ModalFinishedOrder />
        </div>
      )}
    </div>
  );
};

export default CartWidget;
