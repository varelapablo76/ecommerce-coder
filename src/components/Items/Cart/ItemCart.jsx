import { UsoCarritoContext } from "../../../context/cartContext";

import Button from "react-bootstrap/Button";
import { FiTrash } from "react-icons/fi";

const ItemCart = (prod) => {
  const { deleItemCart } = UsoCarritoContext();

  return (
    <div
      key={prod.id}
      className="d-flex align-items-center justify-content-around py-3 "
    >
      <img
        className="product__content_imgCart "
        src={prod.image}
        alt={prod.title}
      />
      <div className="product__content col-md-7 d-flex justify-content-between ">
        <div className="product__content_info  ms-2">
          <div>
            <h2 className="product__content_title">{prod.title}</h2>
            <p className="product__content_title">
              {" "}
              Cantidad: {prod.cantidad}{" "}
            </p>
          </div>
          <div>
            <h3 className="product__content_price"> $ {prod.price}</h3>
          </div>
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
      </div>
    </div>
  );
};

export default ItemCart;
