import { UsoCarritoContext } from "../../context/cartContext";
import "../../App.css";
import Button from "react-bootstrap/Button";

import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { listaCarrito, deleItemCart, emptyCart, valorTotal } =
    UsoCarritoContext();

  return (
    <>
      {listaCarrito.length === 0 ? (
        <div className="d-flex flex-column align-items-center ">
          <h2>No Tienes Productos</h2>
          <Link to="/">
            <Button variant="success"> Comprá Ahora </Button>
          </Link>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-end container">
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
                </div>
              </div>
            </div>
          ))}

          <h2 className="product__content_title">Total: {valorTotal()}</h2>
        </div>
      )}
    </>
  );
};

export default CartWidget;
