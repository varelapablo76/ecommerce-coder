import Card from 'react-bootstrap/Card'


const Items = (card) => {

    return (
        <>
    <Card className="card__product">
        <Card.Img variant="top" src={card.img} className="card__img" />
            <Card.Body>
                <Card.Subtitle className="mb-2 card__product--category text-start">
                    {card.category}
                </Card.Subtitle>
                <Card.Title className="card__product--title text-start  ">
                    {card.title}
                </Card.Title>
                <Card.Title  className="card__product--price text-start text-danger ">
                    {card.price}
                </Card.Title>
                <Card.Text className="card__product--text text-start ">
                    {card.descripcion}
                </Card.Text>
            </Card.Body>
    </Card>
        </> 
    )

    

}
export default Items