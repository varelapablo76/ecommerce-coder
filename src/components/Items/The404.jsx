import {BsEmojiExpressionless} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const The404 = () => {
    return (
        <div className='contenedor404 d-flex justify-content-center mt-5'>
            <div className=" d-flex col-7 justify-content-around align-items-center">

            <BsEmojiExpressionless className='icon404'/>
                <div>
                    <h1>Producto <br/>No disponible</h1> <br />
                    <p>Puedes seguir comprando aquí</p>
                    <Link to='/'>
                        <Button variant='outline-sucess'>Continuar Compra</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default The404