import { useState, useContext, createContext } from "react";

const contextoCarrito = createContext([]);

export function UsoCarritoContext() {
  return useContext(contextoCarrito);
}

export const CartContextProvider = ({ children }) => {
  const [listaCarrito, SetListaCarrito] = useState([]);

  function addCart(items) {
    const index = listaCarrito.findIndex((i) => i.id === items.id);

    if (index > -1) {
      const oldListaCarrito = listaCarrito[index].cantidad;

      listaCarrito.splice(index, 1);

      SetListaCarrito([
        ...listaCarrito,
        { ...items, cantidad: items.cantidad + oldListaCarrito },
      ]);
    } else {
      SetListaCarrito([...listaCarrito, items]);
    }
  }

  function deleItemCart(id) {
    SetListaCarrito(listaCarrito.filter((prod) => prod.id !== id));
  }

  const valorTotal = () => {
    const totalCarrito = listaCarrito.reduce(
      (prev, acty) => prev + acty.price * acty.cantidad,
      0
    );
    return totalCarrito;
  };

  const itemsTotal = () => {
    const totalCarrito = listaCarrito.reduce(
      (prev, acty) => prev + acty.cantidad,
      0
    );
    return totalCarrito;
  };

  function emptyCart() {
    SetListaCarrito([]);
  }

  // const realizarCompra = () => {

  //   let order = {}

  //   order.buyer = {nombre: 'Pablo', email: 'mail@mail.com', tel: '12456'}
  //   order.total = valorTotal();

  //   order.items = listaCarrito.map(item => {

  //     const id = item.id
  //     const title = item.title
  //     const price = item.price*item.cantidad
  //     const cantidad = item.cantidad

  //     return (id, title, price,cantidad)
  //   }
  //   )
  //   console.log(order)


  // }

  return (
    <contextoCarrito.Provider
      value={{
        listaCarrito,
        addCart,
        deleItemCart,
        emptyCart,
        valorTotal,
        itemsTotal,
      }}
    >
      {children}
    </contextoCarrito.Provider>
  );
};
