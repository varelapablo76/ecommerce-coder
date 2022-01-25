import { useState, useContext, createContext } from "react";

 const contextoCarrito = createContext([])

 export function UsoCarritoContext (){
     return useContext (contextoCarrito)
 }


 export const CartContextProvider = ({children}) =>{

    const [listaCarrito, SetListaCarrito] = useState([])

    function addCart  (items) {
 
        console.log(items)

        const index = listaCarrito.findIndex(i => i.id === items.id)

        console.log(index + ' <this is index')
        console.log(listaCarrito[index])

        if (index > -1) {

            console.log('Repetido')

            const oldListaCarrito=listaCarrito[index].cantidad

            listaCarrito.splice(index,1)
            
            SetListaCarrito([...listaCarrito, {...items, cantidad: items.cantidad + oldListaCarrito }])


        } else {
            SetListaCarrito([...listaCarrito, items])
        }

    }


    function deleItemCart (id) {   
        SetListaCarrito(listaCarrito.filter((prod) => prod.id !== id))
    }

    const valorTotal = () => {
        const totalCarrito = listaCarrito.reduce(
            (prev, acty) => prev + acty.price * acty.cantidad,
            0
        );
        return totalCarrito;
    }

    const itemsTotal = () => {
        const totalCarrito = listaCarrito.reduce(
            (prev, acty) => prev + acty.cantidad,
            0
        );
        return totalCarrito;
    }
    // function totalCantidad (item, cantidad) {

    //     const comparativo = [...listaCarrito]
    //     comparativo.forEach((prod) => {
    //         prod.id===item.id && (prod.cantidad += cantidad)
    //     })

    // }

    function emptyCart () {
        SetListaCarrito([])
    }
    return (
        <contextoCarrito.Provider value={
            {
                listaCarrito,
                addCart,
                deleItemCart,
                emptyCart,
                valorTotal,
                itemsTotal
            }
        } >
            {children}
            {console.log('work done')}
        </contextoCarrito.Provider>
    )

 }