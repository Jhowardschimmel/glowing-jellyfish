import ItemCard from './components/Card/Card'
import Inventory from './UIE-InterviewProject.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="main-container">
        <Row xs={12} className="m-5">
          {Inventory.map((item, index) =>
            <Col key={index} className="item">
              <ItemCard heading={item.Heading} subheading={item.Subheading} price={item.Price} bridge={item.showBridge} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
