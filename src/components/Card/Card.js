import Card from 'react-bootstrap/Card';
import GoldenGate from '../../images/golden-gate.png'
import Mountain from '../../images/mountain.png'
import React, { useEffect } from 'react'

function ItemCard(props) {

    useEffect(() => {
        
        console.log(props)
    })

    let itemSrc;
    const showBridge = props.bridge;
    showBridge ? (itemSrc = GoldenGate) : (itemSrc = Mountain)


    function formatPrice(price) {
        const formattedPrice = price.toLocaleString('en')
        return formattedPrice
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={itemSrc} />
            <Card.Body className="card-body">
                <Card.Text className="card-heading text-left h4">{props.heading}</Card.Text>
                <Card.Text className="card-subheading text-left">{
                    props.subheading
                }
                </Card.Text>
                <hr />
                <Card.Text className="card-price text-right h5">${formatPrice(props.price)}</Card.Text>
            </Card.Body>
        </Card>
    )

}

export default ItemCard;