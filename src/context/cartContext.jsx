import { useState, useContext, createContext } from "react";

 const contextoCarrito = createContext([])

 export function UsoCarritoContext (){
     return useContext (contextoCarrito)
 }


 export const CartContextProvider = ({children}) =>{

    

    const [listaCarrito, SetListaCarrito] = useState([])

    function addCart  (items) {
        // SetListaCarrito ([ ...listaCarrito, items])

    
        console.log(items)

        const index = listaCarrito.findIndex(i => i.id === items.id)

        // console.log(index + ' <lista Total desde cartContext')

        // SetListaCarrito([...listaCarrito, items])


        console.log(index + ' <this is index')
        console.log(listaCarrito[index])

        if (index > -1) {

            console.log('Repetido')

            const oldListaCarrito=listaCarrito[index].cantidad
            let newListaCarrito = oldListaCarrito + items.cantidad
            listaCarrito[index].cantidad = newListaCarrito

            let pushCarrito = [...listaCarrito]

            SetListaCarrito(pushCarrito)

        } else {
            SetListaCarrito([...listaCarrito, items])
        }

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