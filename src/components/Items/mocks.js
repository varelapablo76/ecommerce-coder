
// import dos from './remera01.png'

const productos = [
    {
        idProd:'1', 
        producto: 'Remera 01',
        itCategoria: 'remera',
        precio: '$1000',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vitae beatae ducimus dolor consectetur blanditiis ipsam rerum maxime voluptatibus suscipit, iusto totam? Suscipit deleniti quod, at sed architecto odit iure. ',
        img: '/img/remera01.png'
    },
    {
        idProd:'2',
        producto: 'Remera 02',
        itCategoria: 'remera',
        precio: '$2000',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vitae beatae ducimus dolor consectetur blanditiis ipsam rerum maxime voluptatibus suscipit, iusto totam? Suscipit deleniti quod, at sed architecto odit iure. ',
        img: '/img/remera01.png'
    },        
    {
        idProd:'3', 
        producto: 'Nombre_3',
        itCategoria: 'sticker',
        precio: '$200',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vitae beatae ducimus dolor consectetur blanditiis ipsam rerum maxime voluptatibus suscipit, iusto totam? Suscipit deleniti quod, at sed architecto odit iure. ',
        img: '/img/sticker01.png'
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



