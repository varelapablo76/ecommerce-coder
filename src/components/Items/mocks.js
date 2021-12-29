import img from './img/remera01.png'
// import dos from './remera01.png'

const productos = [
    {
        id:1, 
        producto: 'Nombre_1',
        categoria: 'Categoria_1',
        precio: '$1000',
        descripcion: 'Lorem Ipsum ',
        img: img
    },
    {
        id:2,
        producto: 'Nombre_2',
        categoria: 'Categoria_2',
        precio: '$2000',
        descripcion: 'Lorem Ipsum ',
        img: img
    },        
    {
        id:3, 
        producto: 'Nombre_3',
        categoria: 'Categoria_3',
        precio: '$3000',
        descripcion: 'Lorem Ipsum ',
        img: img
    },
]

export const descargaProductos = new Promise ((siDescarga, noDescarga) => {
    let status = true
    if (status) {
        setTimeout(() => {
            siDescarga(productos);
        }, 2000);
    }else {
        noDescarga('Error en proceso')
    }
})



