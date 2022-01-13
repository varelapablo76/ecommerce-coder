import { ImCart } from 'react-icons/im'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return (
        <Link to="#link">
            <ImCart className="icon__navbar"/>
        </Link>
    )
}

export default CartWidget