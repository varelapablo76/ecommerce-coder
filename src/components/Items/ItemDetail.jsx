import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

// import ItemCount from './ItemCount'


const ItemDetail = (item) => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-md-around container"
        key={item.idProd}>
        <img className="product__content_img col-12 col-md-5" src={item.img} alt="" />
        <div className="product__content col-12 col-md-6">
          <div className="product__content_info ms-2">
            <h2 className="product__content_title">{item.title}</h2>
            <h3 className="product__content_price" > {item.price}</h3>
            <p className="product__content_detail fst-italic">
              {item.descripcion}
            </p>
          </div>
          <Form>
              <div className="d-flex justify-content-between">
                  <Form.Control  className="m-2"
                      type="number"
                      id="stockProduct"
                  />
                  <Form.Select className="m-2">
                      <option>Seleccione una Variante</option>
                  </Form.Select>
              </div>
              {/* <ItemCount min={1} stock={5} /> */}
              <div className="d-flex justify-content-center">

              <Button
              className="m-2"
              variant="success">
                Agregar al Carrito
              </Button>
              <Button
              className="m-2"
              variant="outline-secondary">
                Agregar a Favoritos
              </Button>
  
              </div>
          </Form>
        </div>
      </div>
    )
}

export default ItemDetail