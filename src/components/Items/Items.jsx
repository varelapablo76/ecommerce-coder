import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


function Items ({card}) {

    return (
        <>
    <Card 
    className="card__product"
    key ={card.id}
    >
        <Card.Img variant="top" src={card.image} className="card__img" />
            <Card.Body>
                <Card.Subtitle className="mb-2 card__product--category text-start">
                    {card.categoryId}
                </Card.Subtitle>
                <Card.Title className="card__product--title text-start  ">
                    {card.title}
                </Card.Title>
                <small className="text-muted">Disponibles: {card.stock}</small>
                <Card.Title  className="card__product--price text-start text-danger ">
                    $ {card.price}
                </Card.Title>
                <Card.Text className="card__product--text text-start ">
                    {card.description}
                </Card.Text>
                <Link to={`/productos/descripcion/${card.id}`}>
                    <Button
                        className="m-2"
                        variant="success">
                            Detalle
                    </Button>
                </Link>
            </Card.Body>
    </Card>
        </> 
    )

    

}
export default Items