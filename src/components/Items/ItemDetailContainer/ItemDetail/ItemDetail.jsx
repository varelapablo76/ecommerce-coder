import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import ItemCount from "../../Cart/ItemCount";
import { UsoCarritoContext } from "../../../../context/cartContext";

const ItemDetail = (item) => {
  const { addCart } = UsoCarritoContext();

  const [comprando, setComprando] = useState(true);

  const onAdd = (cant) => {
    setComprando(false);
    addCart({ ...item, cantidad: cant });
  };

  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-md-around container"
      key={item.id}
    >
      <img
        className="product__content_img col-12 col-md-5"
        src={item.image}
        alt={item.image}
      />
      <div className="product__content col-12 col-md-6">
        <div className="product__content_info ms-2">
          <h2 className="product__content_title">{item.title}</h2>
          <h3 className="product__content_price"> $ {item.price}</h3>
          <p>Stock ({item.stock}) unidades</p>
          <p className="product__content_detail fst-italic">
            {item.descripcion}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            {comprando ? (
              <ItemCount
                className="m-2"
                min={1}
                stock={item.stock}
                id="stockProduct"
                onAdd={onAdd}
              />
            ) : (
              <Link to="/carrito">
                <Button className="m-2 " variant="success">
                  Terminar Compra
                </Button>
              </Link>
            )}
            <Link to="/">
              <Button className="m-2" variant="outline-secondary">
                Continuar Comprando
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
