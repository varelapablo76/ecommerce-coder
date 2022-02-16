import {BsFillCloudHailFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const The404Site = () => {
    return (
        <div className='contenedor404 d-flex justify-content-center mt-5'>
            <div className=" d-flex col-7 justify-content-around align-items-center">

            <BsFillCloudHailFill className='icon404'/>
                <div>
                    <h1>Sección <br/>No encontrada</h1> <br />
                    <p>Continúa tu navegación aquí</p>
                    <Link to='/'>
                        <Button variant='outline-sucess'>Volver al Inicio</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default The404Site


