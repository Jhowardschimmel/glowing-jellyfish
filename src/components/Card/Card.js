import Card from 'react-bootstrap/Card';
import GoldenGate from '../../images/golden-gate.png'
import Mountain from '../../images/mountain.png'

function ItemCard(props) {

    function checkBridge(boolean) {
    let itemSrc;
    const showBridge = props.bridge;
    showBridge ? (itemSrc = GoldenGate) : (itemSrc = Mountain);
    return itemSrc;
    }
    function formatPrice(price) {
        const formattedPrice = price.toLocaleString('en')
        return formattedPrice
    }
    return (
        <Card className="card mt-3">
            <Card.Img className="card-img" variant="top" src={checkBridge()} />
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