
// import dos from './remera01.png'

const productos = [
    {
        idProd:'1', 
        producto: 'BurgerLift',
        itCategoria: 'remera',
        variant: 'comida',
        precio: '$1000',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/remera01.png'
    },
    {
        idProd:'2',
        producto: 'Groot DeadLift',
        itCategoria: 'remera',
        variant: 'pelicula',
        precio: '$2000',
        descripcion: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/remera02.png'
    },        
    {
        idProd:'3', 
        producto: 'Big Groot',
        itCategoria: 'remera',
        variant: 'pelicula',
        precio: '$1000',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/remera03.png'
    },
    {
        idProd:'4',
        producto: 'IronBell',
        itCategoria: 'remera',
        variant: 'pelicula',
        precio: '$2000',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/remera04.png'
    },        
    {
        idProd:'5', 
        producto: 'WonderWoman',
        itCategoria: 'remera',
        variant: 'pelicula',
        precio: '$200',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/remera05.png'
    },
    {
        idProd:'6', 
        producto: 'Ouch!',
        itCategoria: 'sticker',
        variant: 'crossfit',
        precio: '$1000',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/sticker01.png'
    },
    {
        idProd:'7',
        producto: 'Harry Potter',
        itCategoria: 'sticker',
        variant: 'pelicula',
        precio: '$1000',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/sticker02.png',
        opcion:'Harry Potter',
    },        
    
    
    {
        idProd:'10',
        producto: 'I love PullUps',
        itCategoria: 'sticker',
        variant: 'pelicula',
        precio: '$2000',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/sticker05.png'
    },        
    {
        idProd:'11', 
        producto: 'DevilPress',
        itCategoria: 'sticker',
        variant: 'crossfit',
        precio: '$200',
        descripcion: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        img: '/img/sticker06.png'
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



