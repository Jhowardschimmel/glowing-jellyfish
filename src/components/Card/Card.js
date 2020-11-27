import Card from 'react-bootstrap/Card';
import GoldenGate from '../../images/golden-gate.png'
import Mountain from '../../images/mountain.png'

function ItemCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Mountain}/>
            <Card.Body className="card-body">
                <Card.Text className="card-heading text-left h4">Lorem ipsum dolor sit amet</Card.Text>
                <Card.Text className=" card-subheading text-left"> 
                Lorem ipsum dolor sit amet
                </Card.Text>
                <hr/>
                <Card.Text className=" card-price text-right h5">$25,000</Card.Text>
            </Card.Body>
        </Card>
    )

}

export default ItemCard;