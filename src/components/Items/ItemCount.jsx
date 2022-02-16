import { useState } from "react";
import Button from "react-bootstrap/Button";

import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const ItemCount = ({ min, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(min);

  const upCantidad = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : alert("Stock Insuficiente");
  };

  const downCantidad = () => {
    cantidad > min ? setCantidad(cantidad - 1) : alert("Mínimo de Compra");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="product__content_stock d-flex flex-wrap justify-content-around align-items-baseline border border-success rounded "
          value={cantidad}
        >
          <AiFillCaretDown onClick={downCantidad} />
          <p className="product__content_price">{cantidad}</p>
          <AiFillCaretUp onClick={upCantidad} />
        </button>

        <Button
          className="m-2"
          variant="outline-success"
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          {stock ? 'Agregar al Carrito' : 'Sin Stock' }
          
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
