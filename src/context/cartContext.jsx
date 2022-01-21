import { useState, useContext, createContext } from "react";

 const contextoCarrito = createContext([])

 export function UsoCarritoContext (){
     return useContext (contextoCarrito)
 }


 export const CartContextProvider = ({children}) =>{

    

    const [listaCarrito, SetListaCarrito] = useState([])

    function addCart  (items) {
        // SetListaCarrito ([ ...listaCarrito, items])

        const listaTotal = listaCarrito.findIndex(prod => prod.id === items.id)

        console.log(listaTotal)

        SetListaCarrito([...listaCarrito, items])


        // console.log(listaTotal + ' <this is listaTotal')
        // console.log(listaCarrito[listaTotal])

        // if (listaTotal > -1) {

        //     console.log('Repetido')

        //     const oldListaCarrito=listaCarrito[listaTotal].cantidad
        //     let newListaCarrito = oldListaCarrito + items.cantidad
        //     listaCarrito[listaTotal].cantidad = newListaCarrito

        //     let pushCarrito = [...listaCarrito]

        //     SetListaCarrito(pushCarrito)

        // } else {
        //     SetListaCarrito([...listaCarrito, items])
        // }

    }

    // function delCart () {   
    //     SetListaCarrito([])
    // }

    return (
        <contextoCarrito.Provider value={
            {
                listaCarrito,
                addCart
            }
        } >
            {children}
            {console.log('work done')}
        </contextoCarrito.Provider>
    )

 }